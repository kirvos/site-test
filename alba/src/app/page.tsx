import Hero from '@/components/Hero';
import LatestNews from '@/components/LatestNews';
import Reasons from '@/components/Reasons';
import ServiceCards from '@/components/ServiceCards';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';
import PersonaChallenges from '@/components/PersonaChallenges';
import LeadGeneration from '@/components/LeadGeneration';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <>
      <div className="snap-container overflow-y-auto lg:snap-y lg:snap-mandatory">
        <Hero />
        <Stats />
        <PersonaChallenges />
        <ServiceCards />
        <SocialProof />
        <LeadGeneration />
        <Reasons />
        <LatestNews />
      </div>
      <Footer />
    </>
  );
}
