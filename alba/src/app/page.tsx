'use client';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import LatestNews from '@/components/LatestNews';
import Reasons from '@/components/Reasons';
import ServiceCards from '@/components/ServiceCards';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';
import PersonaChallenges from '@/components/PersonaChallenges';
import LeadGeneration from '@/components/LeadGeneration';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export const dynamic = 'force-dynamic';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // シミュレートされたローディング時間
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />
      {!isLoading && (
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
      )}
    </>
  );
}
