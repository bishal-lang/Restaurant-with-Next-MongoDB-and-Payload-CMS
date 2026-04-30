import crypto from 'crypto'

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return Response.json({ error: 'No file' }, { status: 400 })
  }

  const timestamp = Math.floor(Date.now() / 1000)

  const signature = crypto
    .createHash('sha1')
    .update(`timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`)
    .digest('hex')

  const data = new FormData()
  data.append('file', file)
  data.append('api_key', process.env.CLOUDINARY_API_KEY!)
  data.append('timestamp', timestamp.toString())
  data.append('signature', signature)

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: data,
    },
  )

  const json = await res.json()

  if (!res.ok) {
    return Response.json({ error: json }, { status: 500 })
  }

  return Response.json({
    url: json.secure_url,
  })
}
