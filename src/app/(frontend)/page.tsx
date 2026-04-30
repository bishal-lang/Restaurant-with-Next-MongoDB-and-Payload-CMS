import { Container } from '@mantine/core'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Menu from '@/components/menu/menu'
import Hero from '@/components/layout/hero'
import { formatMenuData } from '@/lib/formatMenu'
import { getPayload } from 'payload'
import config from '@payload-config'

export const revalidate = 0 // disable caching, always fetch fresh

export default async function Page() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'menu',
    where: {
      category: {
        equals: 'entrees',
      },
    },
    depth: 1,
  })

  const data = formatMenuData(result.docs)

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
