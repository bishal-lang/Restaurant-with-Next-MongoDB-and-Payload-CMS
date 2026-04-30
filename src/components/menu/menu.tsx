'use client';

import { Stack } from '@mantine/core';
import CategorySection from './categorySection';
import { CategoryType } from '@/types/menu';

export default function Menu({ data }: { data: CategoryType[] }) {
  if (!data || data.length === 0) return null;

  return (
    <Stack gap="xl">
      {data.map((category, index) => (
        <CategorySection
          key={`${category.category}-${index}`}
          category={category}
        />
      ))}
    </Stack>
  );
}