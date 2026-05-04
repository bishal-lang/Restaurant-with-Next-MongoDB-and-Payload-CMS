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
  Textarea,
  Button,
  Stack,
  Grid,
  Radio,
  Group,
  Checkbox,
} from '@mantine/core'

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
          role: 'user',
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.errors?.[0]?.message || 'Registration failed')
        setLoading(false)
        return
      }

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
    <Container size="sm" py="xl" style={{ minHeight: '100vh' }}>
      <Paper shadow="md" p="xl" radius="sm" withBorder>
        {/* Header */}
        <Stack align="center" mb="xl">
          <Title order={2}>Create Account</Title>
          <Text c="dimmed">Join our community of culinary enthusiasts.</Text>
        </Stack>

        {/* Form */}
        <Stack gap="lg">
          {/* Full Name */}
          <TextInput
            label="Full Name"
            placeholder="Evelyn Thorne"
            value={form.fullName}
            onChange={(e) => handleChange('fullName', e.currentTarget.value)}
            required
          />

          {/* Email */}
          <TextInput
            label="Email Address"
            placeholder="e.thorne@example.com"
            value={form.email}
            onChange={(e) => handleChange('email', e.currentTarget.value)}
            required
          />

          {/* Password + Phone */}
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <PasswordInput
                label="Password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => handleChange('password', e.currentTarget.value)}
                required
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.currentTarget.value)}
                required
              />
            </Grid.Col>
          </Grid>

          {/* Gender */}
          <Radio.Group
            label="Gender"
            value={form.gender}
            onChange={(value) => handleChange('gender', value)}
            required
          >
            <Group mt="xs">
              <Radio value="female" label="Female" />
              <Radio value="male" label="Male" />
              <Radio value="other" label="Other" />
            </Group>
          </Radio.Group>

          {/* Address */}
          <Textarea
            label="Delivery Address"
            placeholder="Enter your street address, city, and zip code..."
            minRows={3}
            value={form.address}
            onChange={(e) => handleChange('address', e.currentTarget.value)}
          />

          {/* Terms (UI only, no logic added) */}
          <Checkbox label="I agree to the Terms of Service and Privacy Policy" />

          {/* Error */}
          {error && (
            <Text c="red" size="sm">
              {error}
            </Text>
          )}

          {/* Submit */}
          <Button fullWidth mt="md" onClick={handleRegister} loading={loading}>
            Create Account
          </Button>

          {/* Login Link */}
          <Text ta="center" size="sm">
            Already have an account?{' '}
            <a href="/login" style={{ textDecoration: 'underline' }}>
              Sign In
            </a>
          </Text>
        </Stack>
      </Paper>
    </Container>
  )
}
