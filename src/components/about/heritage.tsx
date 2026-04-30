'use client';

import { Container, Grid, Title, Text, Stack, Image, Box } from '@mantine/core';

export default function Heritage() {
  return (
    <Box bg="gray.0" py="xl">
      <Container size="lg">
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="/images/about/kathmandu.png"
              alt="Kathmandu"
              radius="md"
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack>
              <Text size="xs" tt="uppercase" c="dimmed">
                Est. 1984
              </Text>

              <Title order={2}>The Heritage</Title>

              <Text c="dimmed">
                Founded in Kathmandu, our mission has always been to preserve
                authentic Nepali & International cuisine.
              </Text>

              <Text c="dimmed">
                Generations of recipes continue to shape our identity today.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}