import { Container } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import Hero from '@/components/layout/hero';
import { menu } from '@/app/data/menu'

export default async function Page() {
  const saucesCategory = menu.find(
    (category) => category.category.toLowerCase() === 'sauces'
  );

  const data = saucesCategory ? [saucesCategory] : [];
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