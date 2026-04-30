import type { Menu, Media } from '@/payload-types'

export function formatMenuData(items: Menu[]) {
  const grouped: Record<string, any[]> = {}

  items.forEach((item) => {
    console.log('ITEM:', item.name, '| image:', JSON.stringify(item.image))

    if (!grouped[item.category]) {
      grouped[item.category] = []
    }

    const imageObj = item.image
    let imageSrc = '/images/hero.webp'
    let altText = item.name

    if (imageObj && typeof imageObj === 'object') {
      const media = imageObj as Media
      if (media.url) {
        imageSrc = media.url.startsWith('http')
          ? media.url
          : `https://restaurant-with-next-mongo-db-and-p.vercel.app${media.url}`
      }
      if (media.alt) {
        altText = media.alt
      }
    }

    grouped[item.category].push({
      id: String(item.id),
      name: item.name,
      price: item.price,
      description: item.description || '',
      image: imageSrc,
      alt: altText,
    })
  })

  return Object.entries(grouped).map(([category, items]) => ({
    category,
    items,
  }))
}
