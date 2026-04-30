'use client';

import { Container, Group, Title, Text} from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from '../ui/searchBar';

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{ borderBottom: '1px solid #eee' }}>
      <Container size="xl" py="md">
        <Group justify="space-between">
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
          <SearchBar />
        </Group>
      </Container>
    </header>
  );
}