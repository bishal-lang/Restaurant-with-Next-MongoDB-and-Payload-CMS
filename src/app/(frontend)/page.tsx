import { Container } from '@mantine/core'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Menu from '@/components/menu/menu'
import Hero from '@/components/layout/hero'
import { getBaseUrl } from '@/lib/getBaseURL'
import { menu } from '@/app/data/menu'

async function getMenu() {
  const baseUrl = await getBaseUrl()

  const res = await fetch(`${baseUrl}/api/menu`, {
    cache: 'no-store',
  })

  if (!res.ok) return []

  return res.json()
}

export default async function Page() {
  const entreeCategory = menu.find((category) => category.category.toLowerCase() === 'entrees')

  // Ensure safe fallback
  const data = entreeCategory ? [entreeCategory] : []

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
