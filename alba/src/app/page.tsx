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
    <div className="snap-container h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <Stats />
      <ServiceCards />
      <SocialProof />
      <Reasons />
      <LatestNews />
      <footer className="snap-start snap-always bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm" style={{color: '#ffffff'}}>
              ALBA社会保険労務士事務所©
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
