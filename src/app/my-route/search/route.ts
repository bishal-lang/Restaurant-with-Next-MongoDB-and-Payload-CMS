import { menu } from '@/data/menu';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get('q')?.toLowerCase() || '';

  if (!query) return Response.json([]);

  const filtered = menu
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const text =
          `${item.name} ${item.description}`.toLowerCase();

        return text.includes(query);
      }),
    }))
    .filter((category) => category.items.length > 0);

  return Response.json(filtered);
}