'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Star, Rocket, Target } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  useEffect(() => {
    setMounted(true);
    setShowParticles(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    controls.start({
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

  if (!mounted) {
    return (
      <section className="hero-section snap-start relative overflow-hidden h-[100svh] flex items-center justify-center text-white pt-28 sm:pt-24 md:pt-20" data-snap>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] via-[#002A5E] to-[var(--secondary-color)]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[var(--accent-color)]/20 to-white/10 animate-pulse transform -translate-x-4 translate-y-4"></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-lg bg-gradient-to-l from-[var(--secondary-color)]/30 to-white/10 animate-bounce delay-300 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 rounded-full bg-gradient-to-r from-white/10 to-[var(--accent-color)]/20 animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-lg bg-gradient-to-l from-[var(--primary-color)]/40 to-white/20 animate-bounce delay-500 transform -rotate-12"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                労務の不安を
              </span>
              <span className="bg-gradient-to-r from-[#febf00] to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl">
                &ldquo;見える化&rdquo;
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                し、
              </span>
              <br/>
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                事業の推進力に。
              </span>
            </h1>
          </div>
          <div className="animate-fade-in-up delay-300">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4" style={{color: '#ffffff'}}>
              就業規則からクラウド運用、IPO労務まで。<br/>
              <span className="text-[#febf00] font-semibold">専門家チームが一社一社に最適解を。</span>
            </p>
          </div>
          <div className="animate-fade-in-up delay-500">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
              <a
                href="/contact"
                className="group bg-gradient-to-r from-[#febf00] to-yellow-400 text-[var(--primary-color)] text-lg sm:text-xl font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-[#febf00]/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 relative overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10">無料相談を予約</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#febf00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              <a
                href="/risk-assessment"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-lg sm:text-xl font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl hover:bg-white hover:text-[var(--primary-color)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="relative z-10">労務リスクを30秒で診断</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 500,80 C650,160 850,60 1200,20 L1200,120 L0,120 Z" className="fill-white animate-pulse"></path>
          </svg>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      className="hero-section snap-start relative overflow-hidden h-[100svh] flex items-center justify-center text-white pt-28 sm:pt-24 md:pt-20" 
      data-snap
      style={{ y, opacity }}
    >
      {/* Dynamic gradient background with multiple layers */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, #003666 0%, #002A5E 25%, #001b3d 50%, #002A5E 75%, #003666 100%)',
            'linear-gradient(225deg, #002A5E 0%, #003666 25%, #001b3d 50%, #003666 75%, #002A5E 100%)',
            'linear-gradient(135deg, #001b3d 0%, #003666 25%, #002A5E 50%, #001b3d 75%, #003666 100%)',
            'linear-gradient(315deg, #003666 0%, #001b3d 25%, #002A5E 50%, #003666 75%, #001b3d 100%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, transparent 100%)',
              'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, transparent 100%)',
              'linear-gradient(90deg, rgba(0,0,0,0.3) 0%, transparent 100%)',
              'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 100%)',
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Mouse follower cursor effect */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-70 pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
      
      {/* Massive floating elements with crazy animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating geometric shapes */}
        <motion.div
          className="absolute top-10 left-5 w-40 h-40 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/20 backdrop-blur-sm"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 0.8, 1],
            x: [0, 50, -30, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/4 right-10 w-32 h-32 rounded-lg bg-gradient-to-l from-cyan-400/25 to-blue-500/25 backdrop-blur-sm"
          animate={{
            rotate: [45, -45, 180, 45],
            scale: [1, 0.7, 1.3, 1],
            x: [0, -40, 60, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/6 w-36 h-36 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 backdrop-blur-sm"
          animate={{
            rotate: [0, -180, 90, 0],
            scale: [1, 1.4, 0.6, 1],
            x: [0, 70, -40, 0],
            y: [0, -60, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/4 w-28 h-28 rounded-lg bg-gradient-to-l from-red-400/25 to-pink-500/25 backdrop-blur-sm"
          animate={{
            rotate: [90, -90, 270, 90],
            scale: [1, 0.8, 1.5, 1],
            x: [0, -50, 80, 0],
            y: [0, 40, -70, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating icons with crazy movements */}
        <motion.div
          className="absolute top-20 right-1/3"
          animate={{
            rotate: [0, 360],
            x: [0, 100, -50, 0],
            y: [0, -30, 80, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-8 h-8 text-yellow-400 drop-shadow-2xl" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-1/6"
          animate={{
            rotate: [45, -45, 180, 45],
            x: [0, -80, 40, 0],
            y: [0, 50, -90, 0],
            scale: [1, 1.5, 0.5, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap className="w-10 h-10 text-cyan-400 drop-shadow-2xl" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 left-1/5"
          animate={{
            rotate: [0, -270, 90, 0],
            x: [0, 120, -60, 0],
            y: [0, -80, 40, 0],
            scale: [1, 0.7, 1.8, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Star className="w-7 h-7 text-purple-400 drop-shadow-2xl" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/5 left-1/3"
          animate={{
            rotate: [90, -180, 270, 90],
            x: [0, 90, -70, 0],
            y: [0, -60, 100, 0],
            scale: [1, 1.3, 0.6, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Rocket className="w-9 h-9 text-orange-400 drop-shadow-2xl" />
        </motion.div>
        
        <motion.div
          className="absolute top-2/3 right-1/5"
          animate={{
            rotate: [135, -135, 315, 135],
            x: [0, -100, 80, 0],
            y: [0, 70, -40, 0],
            scale: [1, 2, 0.4, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Target className="w-8 h-8 text-green-400 drop-shadow-2xl" />
        </motion.div>
      </div>

      {/* Particle system */}
      <AnimatePresence>
        {showParticles && [...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10,
              opacity: 0,
            }}
            animate={{
              y: -50,
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main content with insane animations */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight"
            animate={{
              textShadow: [
                '0 0 20px rgba(254,191,0,0.5)',
                '0 0 40px rgba(254,191,0,0.8)',
                '0 0 60px rgba(254,191,0,0.3)',
                '0 0 20px rgba(254,191,0,0.5)',
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.span 
              className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl inline-block"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              労務の不安を
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-[#febf00] to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl inline-block"
              animate={{
                scale: [1, 1.1, 0.95, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              &ldquo;見える化&rdquo;
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl inline-block"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              し、
            </motion.span>
            <br/>
            <motion.span 
              className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl inline-block"
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              事業の推進力に。
            </motion.span>
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{color: '#ffffff'}}
          >
            就業規則からクラウド運用、IPO労務まで。<br/>
            <motion.span 
              className="text-[#febf00] font-semibold"
              animate={{
                textShadow: [
                  '0 0 10px rgba(254,191,0,0.3)',
                  '0 0 20px rgba(254,191,0,0.6)',
                  '0 0 10px rgba(254,191,0,0.3)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              専門家チームが一社一社に最適解を。
            </motion.span>
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <motion.a
              href="/contact"
              className="group bg-gradient-to-r from-[#febf00] to-yellow-400 text-[var(--primary-color)] text-lg sm:text-xl font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl relative overflow-hidden w-full sm:w-auto"
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: "0 20px 40px rgba(254,191,0,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 10px 30px rgba(254,191,0,0.2)',
                  '0 15px 40px rgba(254,191,0,0.4)',
                  '0 10px 30px rgba(254,191,0,0.2)',
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                無料相談はこちら
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#febf00]"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="/downloads"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-lg sm:text-xl font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl w-full sm:w-auto"
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                backgroundColor: "rgba(255,255,255,1)",
                color: "#003666",
                borderColor: "rgba(255,255,255,1)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                borderColor: [
                  'rgba(255,255,255,0.3)',
                  'rgba(255,255,255,0.6)',
                  'rgba(255,255,255,0.3)',
                ]
              }}
              transition={{
                borderColor: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="relative z-10">資料ダウンロード</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Crazy animated waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.svg 
          className="relative block w-full h-20" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          animate={{
            scaleX: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path 
            d="M0,0 C150,100 350,0 500,80 C650,160 850,60 1200,20 L1200,120 L0,120 Z" 
            className="fill-white"
            animate={{
              d: [
                "M0,0 C150,100 350,0 500,80 C650,160 850,60 1200,20 L1200,120 L0,120 Z",
                "M0,0 C150,80 350,20 500,100 C650,140 850,80 1200,40 L1200,120 L0,120 Z",
                "M0,0 C150,120 350,-20 500,60 C650,180 850,40 1200,0 L1200,120 L0,120 Z",
                "M0,0 C150,100 350,0 500,80 C650,160 850,60 1200,20 L1200,120 L0,120 Z",
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </div>
    </motion.section>
  );
}