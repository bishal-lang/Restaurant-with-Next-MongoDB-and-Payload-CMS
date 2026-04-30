import { headers } from 'next/headers'

export async function getBaseUrl() {
  const host = (await headers()).get('host')

  const protocol = host?.includes('localhost') ? 'http' : 'https'

  return `${protocol}://${host}`
}
