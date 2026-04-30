import { getPayload } from 'payload'
import config from '@payload-config'
import { formatMenuData } from '@/lib/formatMenu'
import { Container, Title, Divider } from '@mantine/core'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Menu from '@/components/menu/menu'
import NoResults from '@/components/ui/noResults'

async function getSearchResults(query: string) {
  const payload = await getPayload({ config })
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const result = await payload.find({
    collection: 'menu',
    where: {
      or: [
        {
          name: {
            like: query,
          },
        },
        {
          description: {
            like: query,
          },
        },
      ],
    },
    depth: 1,
  })

  const normalizedDocs = result.docs.map((item) => ({
    ...item,
    image:
      typeof item.image === 'object' && item.image !== null
        ? `${baseUrl}${item.image.url}`
        : item.image || '/images/hero.webp',
    description: item.description || '',
  }))

  return formatMenuData(normalizedDocs)
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const params = await searchParams
  const query = params.q?.trim() || ''

  if (!query) {
    return (
      <>
        <Header />
        <Container size="lg" py="xl">
          <Title order={2}>Search</Title>
          <NoResults />
        </Container>
        <Footer />
      </>
    )
  }

  const data = await getSearchResults(query)
  return (
    <>
      <Header />
      <Container size="lg" py="xl">
        <Title order={2} mb="xs">
          Results for "{query}"
        </Title>

        <Divider mb="lg" />
        {data.length > 0 ? <Menu data={data} /> : <NoResults query={query} />}
      </Container>

      <Footer />
    </>
  )
}
