'use client';

import { Container, Group, Text } from '@mantine/core';
import { IconWorld, IconMail } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--mantine-color-gray-3)',
        marginTop: '2rem',
      }}
    >
      <Container size="xl" py="xl">
        <Group justify="space-between" align="center" wrap="wrap">
          {/* Left */}
          <Text size="sm">
            © 2026 RESTAURANT. ALL RIGHTS RESERVED.
          </Text>

          {/* Middle Links */}
          <Group gap="lg">
            <Text size="sm" c="dimmed">
              Privacy Policy
            </Text>
            <Text size="sm" c="dimmed">
              Contact Us
            </Text>
            <Text size="sm" c="dimmed">
              Careers
            </Text>
          </Group>

          {/* Right Icons */}
          <Group gap="sm">
            <IconWorld size={18} />
            <IconMail size={18} />
          </Group>
        </Group>
      </Container>
    </footer>
  );
}