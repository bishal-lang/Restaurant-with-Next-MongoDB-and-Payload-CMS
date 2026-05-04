'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Paper, Title, TextInput, PasswordInput, Button, Stack, Text } from '@mantine/core'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.errors?.[0]?.message || 'Invalid credentials')
        setLoading(false)
        return
      }

      router.push('/')
      router.refresh()
    } catch (err) {
      setError('Something went wrong')
      setLoading(false)
    }
  }

  return (
    <Paper shadow="md" p="xl" radius="md" style={{ maxWidth: 400, margin: '80px auto' }}>
      <Title order={2} mb="lg">
        Login
      </Title>

      <Stack>
        <TextInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />

        {error && (
          <Text c="red" size="sm">
            {error}
          </Text>
        )}

        <Button onClick={handleLogin} loading={loading}>
          Login
        </Button>
      </Stack>
      <Text size="sm">
        Don’t have an account? <a href="/register">Register</a>
      </Text>
    </Paper>
  )
}
