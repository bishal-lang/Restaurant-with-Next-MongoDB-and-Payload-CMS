'use client'

import { Title, Stack } from '@mantine/core'
import { CategoryType } from '@/types/menu'
import MenuItem from '@/components/menu/menuItem'
import { SimpleGrid } from '@mantine/core'

export default function CategorySection({
  category,
}: {
  category: CategoryType
}) {
  if (!category.items || category.items.length === 0) return null

  return (
    <div>
      <Title order={3} mb="sm">
        {category.category}
      </Title>

      <SimpleGrid cols={3} spacing="lg">
  {category.items.map((item) => (
    <MenuItem key={item.id} item={item} />
  ))}
</SimpleGrid>
    </div>
  )
}