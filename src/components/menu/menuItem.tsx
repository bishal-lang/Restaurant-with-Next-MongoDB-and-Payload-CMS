'use client'

import { Card, Text, Group, Stack, Badge } from '@mantine/core'
import Image from 'next/image'
import { MenuItemType } from '@/types/menu'

export default function MenuItem({ item }: { item: MenuItemType }) {
  const imageSrc = item.image && item.image.startsWith('http') ? item.image : '/images/hero.webp'

  return (
    <Card
      padding="lg"
      radius="md"
      style={{
        background: 'transparent',
        border: 'none',
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          height: 220,
          overflow: 'hidden',
          borderRadius: 12,
          marginBottom: 12,
        }}
      >
        <Image
          src={imageSrc}
          alt={item.name || 'menu item'}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
          }}
        />
      </div>

      {/* Content */}
      <Stack gap={6}>
        <Group justify="space-between" align="flex-start">
          <Text fw={600} size="lg">
            {item.name}
          </Text>

          <Text fw={500} size="sm">
            $ {item.price}
          </Text>
        </Group>

        <Text size="sm" c="dimmed">
          {item.description}
        </Text>

        {item.tags && (
          <Group gap={6} mt={4}>
            {item.tags.map((tag) => (
              <Badge key={tag} variant="outline" size="xs">
                {tag}
              </Badge>
            ))}
          </Group>
        )}
      </Stack>
    </Card>
  )
}
