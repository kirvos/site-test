'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Zap, Star, Rocket, Target } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete: () => void;
}

export default function LoadingScreen({ isLoading, onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(onComplete, 500);
            return 100;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Crazy animated background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(45deg, #003666 0%, #002A5E 25%, #001b3d 50%, #002A5E 75%, #003666 100%)',
                'linear-gradient(135deg, #002A5E 0%, #001b3d 25%, #003666 50%, #001b3d 75%, #002A5E 100%)',
                'linear-gradient(225deg, #001b3d 0%, #003666 25%, #002A5E 50%, #003666 75%, #001b3d 100%)',
                'linear-gradient(315deg, #003666 0%, #001b3d 25%, #002A5E 50%, #003666 75%, #001b3d 100%)',
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Insane floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20"
                style={{
                  width: 40,
                  height: 40,
                  left: (i * 7) % 100 + '%',
                  top: (i * 11) % 100 + '%',
                }}
                animate={{
                  x: [0, 100, -50, 0],
                  y: [0, -100, 80, 0],
                  rotate: [0, 360],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
              />
            ))}
          </div>

          {/* Crazy spinning icons */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4"
              animate={{
                rotate: [0, 360],
                scale: [1, 2, 0.5, 1],
                x: [0, 100, -50, 0],
                y: [0, -80, 40, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-12 h-12 text-yellow-400 drop-shadow-2xl" />
            </motion.div>

            <motion.div
              className="absolute top-1/3 right-1/4"
              animate={{
                rotate: [45, -180, 270, 45],
                scale: [1, 0.3, 1.8, 1],
                x: [0, -120, 80, 0],
                y: [0, 60, -40, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap className="w-16 h-16 text-cyan-400 drop-shadow-2xl" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/3 left-1/3"
              animate={{
                rotate: [90, -270, 180, 90],
                scale: [1, 1.5, 0.7, 1],
                x: [0, 70, -90, 0],
                y: [0, -50, 80, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Star className="w-10 h-10 text-purple-400 drop-shadow-2xl" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 right-1/3"
              animate={{
                rotate: [135, -90, 360, 135],
                scale: [1, 2.2, 0.4, 1],
                x: [0, -80, 100, 0],
                y: [0, 70, -60, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Rocket className="w-14 h-14 text-orange-400 drop-shadow-2xl" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/2"
              animate={{
                rotate: [0, -360],
                scale: [1, 0.2, 2.5, 1],
                x: [0, 150, -100, 0],
                y: [0, -100, 120, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Target className="w-12 h-12 text-green-400 drop-shadow-2xl" />
            </motion.div>
          </div>

          {/* Main loading content */}
          <div className="relative z-10 text-center">
            {/* Crazy spinning logo/title */}
            <motion.div
              className="mb-8"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(254,191,0,0.5)',
                    '0 0 40px rgba(254,191,0,0.8)',
                    '0 0 60px rgba(254,191,0,0.3)',
                    '0 0 20px rgba(254,191,0,0.5)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ALBA
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-white/80"
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                社会保険労務士法人
              </motion.p>
            </motion.div>

            {/* Insane progress bar */}
            <div className="w-80 h-4 bg-white/20 rounded-full mx-auto mb-6 overflow-hidden relative">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    'linear-gradient(90deg, #febf00 0%, #ff6b35 100%)',
                    'linear-gradient(90deg, #ff6b35 0%, #0099cc 100%)',
                    'linear-gradient(90deg, #0099cc 0%, #febf00 100%)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  width: `${progress}%`,
                  transition: 'width 0.1s ease-out'
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: [-200, 400],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Animated progress text */}
            <motion.p 
              className="text-white text-lg font-semibold"
              animate={{
                scale: [1, 1.05, 1],
                color: [
                  'rgb(255, 255, 255)',
                  'rgb(254, 191, 0)',
                  'rgb(255, 255, 255)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {progress}% 読み込み中...
            </motion.p>

            {/* Crazy floating dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Particle explosion effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: '50%',
                  y: '50%',
                  opacity: 0,
                }}
                animate={{
                  x: (i * 13) % 100 + '%',
                  y: (i * 17) % 100 + '%',
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.02,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}