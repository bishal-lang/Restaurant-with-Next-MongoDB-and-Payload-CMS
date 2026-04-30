'use client'

import { Container, Group, Title, Text } from '@mantine/core'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import SearchBar from '../ui/searchBar'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/users/me')
        if (!res.ok) return

        const data = await res.json()
        setUser(data.user)
      } catch {
        setUser(null)
      }
    }

    fetchUser()
  }, [])

  const handleLogout = async () => {
    await fetch('/api/users/logout', { method: 'POST' })
    setUser(null)
    router.refresh()
  }

  return (
    <header style={{ borderBottom: '1px solid #eee' }}>
      <Container size="xl" py="md">
        <Group justify="space-between">
          {/* Logo */}
          <Title order={3} fw={400} style={{ letterSpacing: '0.2em' }}>
            Restaurant
          </Title>

          {/* Navigation */}
          <Group gap="lg" visibleFrom="md">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text fw={pathname === '/' ? 500 : 400} c={pathname === '/' ? undefined : 'dimmed'}>
                Entrée
              </Text>
            </Link>

            <Link href="/mains" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text fw={pathname === '/mains' ? 500 : 400} c={pathname === '/mains' ? undefined : 'dimmed'}>
                Mains
              </Text>
            </Link>

            <Link href="/sides" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text fw={pathname === '/sides' ? 500 : 400} c={pathname === '/sides' ? undefined : 'dimmed'}>
                Sides
              </Text>
            </Link>

            <Link href="/sauces" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text fw={pathname === '/sauces' ? 500 : 400} c={pathname === '/sauces' ? undefined : 'dimmed'}>
                Sauces
              </Text>
            </Link>

            <Link href="/desserts" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text fw={pathname === '/desserts' ? 500 : 400} c={pathname === '/desserts' ? undefined : 'dimmed'}>
                Desserts
              </Text>
            </Link>

            <Link href="/ourStory" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text fw={pathname === '/ourStory' ? 500 : 400} c={pathname === '/ourStory' ? undefined : 'dimmed'}>
                Our Story
              </Text>
            </Link>
          </Group>

          {/* Right side */}
          <Group gap="md">
            <SearchBar />

            {user ? (
              <>
                <Text size="sm">{user.fullName}</Text>

                {user.role === 'admin' && (
                  <Link href="/admin" style={{ textDecoration: 'none' }}>
                    <Text size="sm" fw={500}>
                      Admin
                    </Text>
                  </Link>
                )}

                <Text
                  size="sm"
                  style={{ cursor: 'pointer' }}
                  onClick={handleLogout}
                >
                  Logout
                </Text>
              </>
            ) : (
              <Link href="/login" style={{ textDecoration: 'none' }}>
                <Text size="sm" fw={500}>
                  Login
                </Text>
              </Link>
            )}
          </Group>
        </Group>
      </Container>
    </header>
  )
}