'use client';

import { Box, Title, Text, Stack, Image } from '@mantine/core';

export default function Hero() {
  return (
    <Box style={{ position: 'relative', height: 500 }}>
      <Image
        src="/images/about/hero.png"
        alt="Himalayas"
        h="100%"
        w="100%"
        fit="cover"
        // style={{ objectPosition: 'top' }}
      />

      {/* Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
        }}
      />

      {/* Content */}
      <Stack
        align="center"
        justify="center"
        style={{
          position: 'absolute',
          inset: 0,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Title order={1}>
          The Journey of the Himalayas
        </Title>

        <Text size="lg" maw={600}>
          Tracing the ancient spice routes and culinary traditions from the
          Himalayas to your table.
        </Text>
      </Stack>
    </Box>
  );
}