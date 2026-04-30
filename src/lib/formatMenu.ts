import type { Menu } from '@/payload-types'

export function formatMenuData(items: Menu[]) {
  const grouped: Record<string, any[]> = {}

  items.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = []
    }

    grouped[item.category].push({
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description || '',
      image:
  typeof item.image === 'object' && item.image !== null
    ? item.image.url
    : item.image || '/images/hero.webp',
    })
  })

  return Object.entries(grouped).map(([category, items]) => ({
    category,
    items,
  }))
}
