import { Container } from '@mantine/core'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Menu from '@/components/menu/menu'
import Hero from '@/components/layout/hero'
import { menu } from '@/app/data/menu'
import { formatMenuData } from '@/lib/formatMenu'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Page() {
  const payload = await getPayload({ config })

  const dessertsCategory = menu.find((category) => category.category.toLowerCase() === 'desserts')

  const result = await payload.find({
    collection: 'menu',
    where: {
      category: {
        equals: 'desserts',
      },
    },
    depth: 1,
    limit: 0,
  })

  const data = formatMenuData(result.docs)

  return (
    <>
      <Header />
      <Hero />

      <Container size="lg" py="xl">
        <Menu data={data} />
      </Container>

      <Footer />
    </>
  )
}
