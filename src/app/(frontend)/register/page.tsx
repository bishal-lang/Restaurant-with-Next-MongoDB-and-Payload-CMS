'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Paper, Title, TextInput, PasswordInput, Button, Stack, Text, Select } from '@mantine/core'

export default function RegisterPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
    gender: '',
    phone: '',
    address: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleRegister = async () => {
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          fullName: form.fullName,
          gender: form.gender,
          phone: form.phone,
          address: form.address,
          role: 'user', // makes the default choice user for security
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.errors?.[0]?.message || 'Registration failed')
        setLoading(false)
        return
      }

      // ✅ Optional: auto login after register
      await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      })

      router.push('/')
      router.refresh()
    } catch {
      setError('Something went wrong')
      setLoading(false)
    }
  }

  return (
    <Paper shadow="md" p="xl" radius="md" style={{ maxWidth: 450, margin: '60px auto' }}>
      <Title order={2} mb="lg">
        Register
      </Title>

      <Stack>
        <TextInput
          label="Full Name"
          value={form.fullName}
          onChange={(e) => handleChange('fullName', e.currentTarget.value)}
          required
        />

        <TextInput
          label="Email"
          value={form.email}
          onChange={(e) => handleChange('email', e.currentTarget.value)}
          required
        />

        <PasswordInput
          label="Password"
          value={form.password}
          onChange={(e) => handleChange('password', e.currentTarget.value)}
          required
        />

        <Select
          label="Gender"
          data={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Others', value: 'others' },
          ]}
          value={form.gender}
          onChange={(value) => handleChange('gender', value || '')}
          required
        />

        <TextInput
          label="Phone"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.currentTarget.value)}
          required
        />

        <TextInput
          label="Address"
          value={form.address}
          onChange={(e) => handleChange('address', e.currentTarget.value)}
        />

        {error && (
          <Text c="red" size="sm">
            {error}
          </Text>
        )}

        <Button onClick={handleRegister} loading={loading}>
          Register
        </Button>
      </Stack>
    </Paper>
  )
}
