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
    <>
      <Hero />
      <Stats />
      <ServiceCards />
      <SocialProof />
      <Reasons />
      <LatestNews />
      <section className="h-screen bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center" data-snap>
        <div className="text-center">
          <p className="text-lg" style={{color: '#ffffff'}}>
            ALBA社会保険労務士事務所©
          </p>
        </div>
      </section>
    </>
  );
}
