'use client';

import { Card, Text, Group, Stack, Badge } from '@mantine/core';
import Image from 'next/image';
import { MenuItemType } from '@/types/menu';

export default function MenuItem({ item }: { item: MenuItemType }) {
  console.log(item.image)
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
      {item.image && (
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
            src={item.image}
            alt={item.name}
            fill
            style={{
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
            }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Content */}
      <Stack gap={6}>
        {/* Title + Price */}
        <Group justify="space-between" align="flex-start">
          <Text fw={600} size="lg" style={{ letterSpacing: '-0.01em' }}>
            {item.name}
          </Text>

          <Text fw={500} size="sm">
            $ {item.price}
          </Text>
        </Group>

        {/* Description */}
        <Text size="sm" c="dimmed" style={{ lineHeight: 1.5 }}>
          {item.description}
        </Text>

        {/* Tags */}
        {item.tags && (
          <Group gap={6} mt={4}>
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                size="xs"
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {tag}
              </Badge>
            ))}
          </Group>
        )}
      </Stack>
    </Card>
  );
}