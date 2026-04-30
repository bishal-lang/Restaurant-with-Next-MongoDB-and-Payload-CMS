import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

import Hero from '@/components/about/hero';
import IntroCards from '@/components/about/introCard';
import Heritage from '@/components/about/heritage';
import Columns from '@/components/about/columns';

export default function OurStoryPage() {
  return (
    <>
      <Header />

      <Hero />
      <IntroCards />
      <Heritage />
      <Columns />

      <Footer />
    </>
  );
}