'use client';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const services = [
  { 
    title: '社会保険アウトソーシング', 
    href: '/services/social-insurance', 
    description: '社会保険手続きの煩雑さを解消し、業務効率化を支援します。',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    gradient: 'from-blue-500 to-purple-600'
  },
  { 
    title: 'スポット手続き代行', 
    href: '/services/spot-procedure', 
    description: '必要な時に必要な手続きを迅速に代行。',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    gradient: 'from-green-500 to-teal-600'
  },
  { 
    title: '助成金・補助金申請代行', 
    href: '/services/subsidy', 
    description: '複雑な助成金・補助金申請をサポートし、受給を最大化します。',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    gradient: 'from-yellow-500 to-orange-600'
  },
  { 
    title: '自治体向けBPOサービス', 
    href: '/services/bpo', 
    description: '自治体特有のニーズに合わせたBPOサービスを提供します。',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-600'
  },
];

export default function ServiceCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section 
      ref={ref}
      className="snap-start min-h-[100svh] relative overflow-hidden pt-32 sm:pt-28 md:pt-24 pb-8" 
      data-snap
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Super dynamic background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%)',
            'linear-gradient(135deg, #ffffff 0%, #f3f4f6 50%, #f9fafb 100%)',
            'linear-gradient(225deg, #f3f4f6 0%, #f9fafb 50%, #ffffff 100%)',
            'linear-gradient(315deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%)',
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Insane floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20"
          animate={{
            scale: [1, 1.5, 0.5, 1],
            rotate: [0, 360],
            x: [0, 100, -50, 0],
            y: [0, -30, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-10 w-24 h-24 rounded-lg bg-gradient-to-l from-green-500/20 to-teal-600/20"
          animate={{
            scale: [1, 0.3, 1.8, 1],
            rotate: [45, -180, 270, 45],
            x: [0, -80, 120, 0],
            y: [0, 40, -70, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-1/4 w-28 h-28 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-600/20"
          animate={{
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, -270, -360],
            x: [0, 60, -90, 0],
            y: [0, -50, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 w-20 h-20 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-600/20"
          animate={{
            scale: [1, 2.5, 0.2, 1],
            rotate: [90, -90, 180, 90],
            x: [0, -200, 150, 0],
            y: [0, 100, -120, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Extra chaotic elements */}
        <motion.div 
          className="absolute top-10 right-1/3 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400/15 to-blue-500/15"
          animate={{
            scale: [1, 0.1, 2.2, 1],
            rotate: [0, 540],
            x: [0, 180, -120, 0],
            y: [0, -80, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-10 right-10 w-12 h-12 rounded-lg bg-gradient-to-l from-pink-400/15 to-red-500/15"
          animate={{
            scale: [1, 3, 0.4, 1],
            rotate: [135, -270, 450, 135],
            x: [0, -150, 200, 0],
            y: [0, 90, -60, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex flex-col justify-center min-h-[100svh]">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
            animate={{
              scale: [1, 1.02, 1],
              textShadow: [
                '0 0 10px rgba(0,0,0,0.1)',
                '0 0 20px rgba(0,0,0,0.2)',
                '0 0 10px rgba(0,0,0,0.1)',
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            サービス
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto px-4"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            お客様のニーズに合わせた専門的なサービスをご提供します
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ 
                opacity: 0, 
                y: 100, 
                rotateX: -90,
                scale: 0.5
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                scale: 1,
                rotateZ: [0, 0.5, -0.5, 0],
              }}
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                rotateZ: {
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <Link 
                href={service.href} 
                className="group block modern-card p-4 sm:p-6 lg:p-8 relative overflow-hidden h-full"
              >
                {/* Super glow effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} blur-xl`}
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Icon container with insane animations */}
                <motion.div 
                  className={`relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white`}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 0.9, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 10 + index * 3,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 180,
                  }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Content with subtle animation */}
                <motion.div 
                  className="relative z-10"
                  animate={{
                    y: [0, -1, 0],
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold mb-4 text-[var(--primary-color)] text-center group-hover:text-[var(--accent-color)] transition-colors duration-300"
                    animate={{
                      scale: [1, 1.01, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-sm sm:text-base text-[var(--text-muted)] text-center leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
                
                {/* Arrow indicator with crazy animation */}
                <motion.div 
                  className="relative z-10 flex justify-center mt-6"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 180,
                    }}
                  >
                    <motion.svg 
                      className="w-4 h-4 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{
                        x: [0, 2, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </motion.svg>
                  </motion.div>
                </motion.div>
                
                {/* Extra sparkle effects */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                
                <motion.div
                  className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}