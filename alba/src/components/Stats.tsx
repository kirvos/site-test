'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactElement;
  gradient: string;
  description: string;
}

export default function Stats() {
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView) {
      // アニメーションされた数値カウンター
      const targets = [1000, 99, 50000, 100];
      targets.forEach((target, index) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 20);
      });

      controls.start({
        rotate: 360,
        transition: { duration: 20, repeat: Infinity, ease: "linear" }
      });
    }
  }, [isInView, controls]);

  const stats: StatItem[] = [
    {
      value: '1,000+',
      label: '顧客企業数',
      description: '信頼いただいている企業様',
      gradient: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
    },
    {
      value: '99%',
      label: '継続率',
      description: 'お客様満足の証',
      gradient: 'from-emerald-500 to-teal-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      ),
    },
    {
      value: '50,000+',
      label: '年間手続き件数',
      description: '豊富な処理実績',
      gradient: 'from-purple-500 to-indigo-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
    },
    {
      value: '100+',
      label: '助成金採択実績',
      description: '成功事例の積み重ね',
      gradient: 'from-amber-500 to-orange-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
  ];

  if (!mounted) {
    return (
      <section className="snap-start min-h-[100svh] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] relative overflow-hidden pt-32 sm:pt-28 md:pt-24 pb-8" data-snap>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/10 animate-pulse delay-700"></div>
          <div className="absolute top-20 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-white/5 to-transparent animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex flex-col justify-center min-h-[100svh]">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="!text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">
              数字で見るALBA社会保険労務士の実績
            </h2>
            <p className="!text-white text-base sm:text-lg px-4" style={{color: '#ffffff !important'}}>
              お客様に選ばれ続ける理由がここにあります
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                <div className={`relative z-10 mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.gradient} text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {stat.icon}
                </div>
                <div className="relative z-10 mb-3">
                  <p className={`!text-white text-3xl sm:text-4xl md:text-5xl font-extrabold transform scale-0 transition-transform duration-700 delay-${(index + 1) * 200}`} style={{color: '#ffffff !important', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                    {stat.value}
                  </p>
                </div>
                <div className="relative z-10">
                  <p className="!text-white font-semibold text-lg mb-2" style={{color: '#ffffff !important'}}>
                    {stat.label}
                  </p>
                  <p className="!text-white text-sm" style={{color: '#ffffff !important'}}>
                    {stat.description}
                  </p>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center animate-fade-in-up delay-700">
            <div className="inline-flex items-center space-x-2 text-white/60">
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <span className="text-sm">2024年12月現在</span>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      ref={ref}
      className="snap-start min-h-[100svh] relative overflow-hidden pt-32 sm:pt-28 md:pt-24 pb-8" 
      data-snap
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Super dynamic gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, #003666 0%, #002A5E 50%, #001b3d 100%)',
            'linear-gradient(135deg, #002A5E 0%, #001b3d 50%, #003666 100%)',
            'linear-gradient(225deg, #001b3d 0%, #003666 50%, #002A5E 100%)',
            'linear-gradient(315deg, #003666 0%, #002A5E 50%, #001b3d 100%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Crazy floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5"
          animate={{
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
            x: [0, 50, -30, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/10"
          animate={{
            scale: [1, 0.7, 1.3, 1],
            rotate: [0, -90, -180, -360],
            x: [0, 30, -50, 0],
            y: [0, 60, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-white/5 to-transparent"
          animate={{
            scale: [1, 1.5, 0.5, 1],
            rotate: [0, 270, 360],
            x: [0, -80, 100, 0],
            y: [0, 40, -60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Extra floating shapes for more chaos */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 2, 0.3, 1],
            x: [0, 200, -100, 0],
            y: [0, -150, 80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full bg-gradient-to-l from-yellow-400/25 to-orange-500/25"
          animate={{
            rotate: [45, -180, 270, 45],
            scale: [1, 0.4, 1.8, 1],
            x: [0, -120, 90, 0],
            y: [0, 70, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex flex-col justify-center min-h-[100svh]">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h2 
            className="!text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(255,255,255,0.3)',
                '0 0 40px rgba(255,255,255,0.6)',
                '0 0 60px rgba(255,255,255,0.2)',
                '0 0 20px rgba(255,255,255,0.3)',
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            数字で見るALBA社会保険労務士の実績
          </motion.h2>
          <motion.p 
            className="!text-white text-base sm:text-lg px-4" 
            style={{color: '#ffffff !important'}}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            お客様に選ばれ続ける理由がここにあります
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 text-center"
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                rotateZ: [0, 1, -1, 0],
              }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                rotateZ: {
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                rotateY: 10,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(255,255,255,0.1)"
              }}
            >
              {/* Super glow effect */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} blur-xl`}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Icon with insane animations */}
              <motion.div 
                className={`relative z-10 mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.gradient} text-white`}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                  rotate: {
                    duration: 8 + index * 2,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 180,
                }}
              >
                {stat.icon}
              </motion.div>
              
              {/* Animated counter value */}
              <div className="relative z-10 mb-3">
                <motion.p 
                  className="!text-white text-3xl sm:text-4xl md:text-5xl font-extrabold" 
                  style={{color: '#ffffff !important', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}
                  animate={{
                    scale: [1, 1.05, 1],
                    textShadow: [
                      '2px 2px 4px rgba(0,0,0,0.5)',
                      '4px 4px 8px rgba(255,255,255,0.3)',
                      '2px 2px 4px rgba(0,0,0,0.5)',
                    ]
                  }}
                  transition={{
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {index === 0 && `${counters[0].toLocaleString()}+`}
                  {index === 1 && `${counters[1]}%`}
                  {index === 2 && `${counters[2].toLocaleString()}+`}
                  {index === 3 && `${counters[3]}+`}
                </motion.p>
              </div>
              
              {/* Label with subtle animations */}
              <motion.div 
                className="relative z-10"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <p className="!text-white font-semibold text-lg mb-2" style={{color: '#ffffff !important'}}>
                  {stat.label}
                </p>
                <p className="!text-white text-sm" style={{color: '#ffffff !important'}}>
                  {stat.description}
                </p>
              </motion.div>
              
              {/* Crazy hover indicator */}
              <motion.div 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{
                  width: [32, 48, 32],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Extra sparkles */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Bottom decoration with motion */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 text-white/60"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-white/40"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-sm">2024年12月現在</span>
            <motion.div 
              className="w-2 h-2 rounded-full bg-white/40"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}