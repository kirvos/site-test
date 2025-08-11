import Hero from '@/components/Hero';
import LatestNews from '@/components/LatestNews';
import Reasons from '@/components/Reasons';
import ServiceCards from '@/components/ServiceCards';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <div className="snap-container overflow-y-auto snap-y snap-mandatory -mt-16">
      <Hero />
      <Stats />
      <ServiceCards />
      <SocialProof />
      <Reasons />
      <LatestNews />
    </div>
  );
}
