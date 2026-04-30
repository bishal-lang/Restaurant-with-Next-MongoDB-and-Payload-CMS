'use client';

import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Image,
  Stack,
  Text,
} from '@mantine/core';

export default function Columns() {
  return (
    <Container size="lg" py="xl">
      <Stack align="center" mb="xl">
        <Title order={2}>The Art of Himalayan Cuisine</Title>
      </Stack>

      <SimpleGrid cols={{ base: 1, md: 3 }}>
        <Card withBorder>
          <Card.Section>
            <Image src="/images/about/spice.png" h={200} alt='' />
          </Card.Section>
          <Stack p="md">
            <Title order={4}>The Spice</Title>
            <Text c="dimmed">
              Define the essence of Nepali and International flavors.
            </Text>
          </Stack>
        </Card>

        <Card withBorder>
          <Card.Section>
            <Image src="/images/about/harvest.png" h={200} alt=''/>
          </Card.Section>
          <Stack p="md">
            <Title order={4}>The Harvest</Title>
            <Text c="dimmed">
              Hand-harvested grains from Himalayan terraces. Food made from organic ingredients. 
            </Text>
          </Stack>
        </Card>

        <Card withBorder>
          <Card.Section>
            <Image src="/images/about/tradition.png" h={200} alt=''/>
          </Card.Section>
          <Stack p="md">
            <Title order={4}>The Tradition</Title>
            <Text c="dimmed">
              Hospitality rooted in “Atithi Devo Bhava” - the Guest is God.
            </Text>
          </Stack>
        </Card>
      </SimpleGrid>
    </Container>
  );
}