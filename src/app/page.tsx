import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import ServicesSection from '@/components/sections/Services';
import AreasSection from '@/components/sections/Areas';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProperties />
      <ServicesSection />
      <AreasSection />
      <Testimonials />
      <CTA />
    </>
  );
}
