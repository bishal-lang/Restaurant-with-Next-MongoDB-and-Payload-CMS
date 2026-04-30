import { Container } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import { menu } from '@/app/data/menu'
import Hero from '@/components/layout/hero';

export default function MainsPage() {
  // Get only the "Mains" category
  const mainsCategory = menu.find(
    (category) => category.category.toLowerCase() === 'mains'
  );

  // Ensure safe fallback
  const data = mainsCategory ? [mainsCategory] : [];

  return (
    <>
      <Header />
      <Hero />
      <Container size="lg" py="xl">

        {data.length > 0 ? (
          <Menu data={data} />
        ) : (
          <div>No items found</div>
        )}
      </Container>

      <Footer />
    </>
  );
}