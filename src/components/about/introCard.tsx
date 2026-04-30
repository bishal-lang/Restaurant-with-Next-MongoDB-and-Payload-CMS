'use client';

import { Container, Grid, Card, Title, Text } from '@mantine/core';

export default function IntroCards() {
  return (
    <Container size="lg" py="xl">
      <Grid align="stretch">
  <Grid.Col span={{ base: 12, md: 6 }}>
    <Card
      padding="xl"
      withBorder
      style={{ height: '100%' }}
    >
      <Title order={3} mb="sm">
        Himalayan Integrity
      </Title>
      <Text c="dimmed">
        Ingredients sourced from high-altitude farms for unmatched purity.
      </Text>
    </Card>
  </Grid.Col>

  <Grid.Col span={{ base: 12, md: 6 }}>
    <Card
      padding="xl"
      withBorder
      style={{ height: '100%' }}
    >
      <Title order={3} mb="sm">
        Ancient Techniques
      </Title>
      <Text c="dimmed">
        Traditional cooking methods that preserve authentic Nepali flavor.
      </Text>
    </Card>
  </Grid.Col>
</Grid>
    </Container>
  );
}