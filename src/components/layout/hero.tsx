'use client';

import { Title, Text, Stack } from '@mantine/core';
import Image from 'next/image';

export default function Hero() {
  return (
    <div style={{ position: 'relative', height: 400 }}>
      {/* Background Image */}
      <Image
        src="/images/hero.webp"
        alt="Hero"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* Overlay */}
      <Stack
        align="center"
        justify="center"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.3)',
          color: 'white',
        }}
      >
        <Title order={1}>The Summer Collection</Title>
        <Text tt="uppercase">
          A sensory journey through seasonal ingredients
        </Text>
      </Stack>
    </div>
  );
}