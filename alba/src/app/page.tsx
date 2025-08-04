import Hero from '@/components/Hero';
import LatestNews from '@/components/LatestNews';
import Reasons from '@/components/Reasons';
import ServiceCards from '@/components/ServiceCards';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServiceCards />
      <SocialProof />
      <Reasons />
      <LatestNews />
    </>
  );
}
