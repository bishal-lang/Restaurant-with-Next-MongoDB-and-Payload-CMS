import { Container } from '@mantine/core'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Menu from '@/components/menu/menu'
import Hero from '@/components/layout/hero'
import { formatMenuData } from '@/lib/formatMenu'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Page() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'menu',
    where: {
      category: {
        equals: 'sauces',
      },
    },
    depth: 1,
  })

  const normalizedDocs = result.docs.map((item) => ({
    ...item,
    image: item.image || '/images/hero.webp',
  }))

  const data = formatMenuData(normalizedDocs)

  return (
    <>
      <Header />
      <Hero />

      <Container size="lg" py="xl">
        {data.length > 0 ? <Menu data={data} /> : <div>No items found</div>}
      </Container>

      <Footer />
    </>
  )
}
