'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Container,
  Paper,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Checkbox,
  Group,
} from '@mantine/core'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [remember, setRemember] = useState(false) // UI only

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
    } catch {
      setError('Something went wrong')
      setLoading(false)
    }
  }

  return (
    <Container size="xs" py="xl" style={{ minHeight: '100vh' }}>
      <Stack justify="center" style={{ minHeight: '80vh' }}>
        <Paper shadow="md" p="xl" radius="md" withBorder>
          {/* Header */}
          <Stack align="center" mb="xl">
            <Title order={2}>Sign In</Title>
            <Text c="dimmed" size="sm">
              Return to your culinary journey
            </Text>
          </Stack>

          {/* Form */}
          <Stack gap="lg">
            {/* Email */}
            <TextInput
              label="Email Address"
              placeholder="gourmet@epicurean.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />

            {/* Password */}
            <Stack gap={4}>
              <Group justify="space-between">
                <Text size="sm" fw={500}>
                  Password
                </Text>
                <a href="#" style={{ fontSize: 12 }}>
                  Forgot Password?
                </a>
              </Group>

              <PasswordInput
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
              />
            </Stack>

            {/* Remember */}
            <Checkbox
              label="Remember me for 30 days"
              checked={remember}
              onChange={(e) => setRemember(e.currentTarget.checked)}
            />

            {/* Error */}
            {error && (
              <Text c="red" size="sm">
                {error}
              </Text>
            )}

            {/* Submit */}
            <Button fullWidth onClick={handleLogin} loading={loading}>
              Access Account
            </Button>
          </Stack>

          {/* Bottom */}
          <Stack align="center" mt="xl" pt="md">
            <Text size="sm" c="dimmed">
              New to the experience?{' '}
              <a href="/register" style={{ fontWeight: 600 }}>
                Create an Account
              </a>
            </Text>
          </Stack>
        </Paper>

        {/* Quote */}
        <Text ta="center" size="xs" c="dimmed" fs="italic">
          "The secret to a great dish is the quality of the ingredients."
        </Text>
      </Stack>
    </Container>
  )
}
