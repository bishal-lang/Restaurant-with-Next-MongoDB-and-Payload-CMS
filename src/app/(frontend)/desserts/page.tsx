import { Container } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import Hero from '@/components/layout/hero';
import { menu } from '@/app/data/menu'

export default async function Page() {
  const dessertsCategory = menu.find(
    (category) => category.category.toLowerCase() === 'desserts'
  );

  // Ensure safe fallback
  const data = dessertsCategory ? [dessertsCategory] : [];
  return (
    <>
      <Header />
      <Hero />

      <Container size="lg" py="xl">
        <Menu data={data} />
      </Container>  

      <Footer />
    </>
  );
}