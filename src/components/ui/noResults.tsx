'use client';

import { Stack, Text, Button } from '@mantine/core';
import { IconSearchOff } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function NoResults({ query }: { query?: string }) {
  const router = useRouter();

  return (
    <Stack
      align="center"
      justify="center"
      py={80}
      gap="md"
      style={{ textAlign: 'center' }}
    >
      {/* Icon */}
      <IconSearchOff size={48} stroke={1.5} style={{ opacity: 0.6 }} />

      {/* Title */}
      <Text fw={600} size="lg">
        No results found
      </Text>

      {/* Subtitle */}
      <Text size="sm" c="dimmed" maw={320}>
        {query
          ? `We couldn’t find anything matching "${query}". Try a different keyword.`
          : 'Try searching for something else.'}
      </Text>

      {/* Action */}
      <Button
        variant="subtle"
        onClick={() => router.push('/')}
        style={{ marginTop: 8 }}
      >
        Back to Home Page
      </Button>
    </Stack>
  );
}