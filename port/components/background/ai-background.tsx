"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AIBackground() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural Network Background - Always Show */}
      <svg className="absolute inset-0 w-full h-full opacity-20 md:opacity-25" style={{ pointerEvents: "none" }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Neural Network Lines */}
        <motion.g opacity={0.4} filter="url(#glow)">
          <motion.line x1="5%" y1="10%" x2="25%" y2="30%" stroke="url(#gradient1)" strokeWidth="2" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.line x1="20%" y1="20%" x2="40%" y2="40%" stroke="url(#gradient2)" strokeWidth="2" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} />
          <motion.line x1="75%" y1="15%" x2="95%" y2="35%" stroke="url(#gradient1)" strokeWidth="2" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }} />
          <motion.line x1="70%" y1="70%" x2="90%" y2="90%" stroke="url(#gradient2)" strokeWidth="2" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
          <motion.line x1="10%" y1="80%" x2="30%" y2="95%" stroke="url(#gradient1)" strokeWidth="2" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }} />
        </motion.g>

        {/* Data Points */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r="2"
            fill="url(#gradient1)"
            animate={{
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>

      {/* MOBILE - Hide desktop symbols */}

      {/* TABLET & DESKTOP - Left & Right Vertical Distribution */}
      {!isMobile && (
        <div className="absolute inset-0">
          {/* LEFT SIDE - Vertical Stack */}
          
          {/* Generative AI - Top Left */}
          <motion.div
            className="absolute top-[10%] left-[4%] lg:left-[6%] flex flex-col items-center"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width={isTablet ? "60" : "80"} height={isTablet ? "60" : "80"} viewBox="0 0 80 80" className="opacity-60 mb-2">
              <motion.path
                d="M 40 15 Q 55 28 50 45 Q 35 58 22 48 Q 12 35 28 20"
                stroke="#06b6d4"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                animate={{
                  strokeDasharray: [0, 200],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.path
                d="M 40 22 Q 52 33 47 46 Q 33 56 24 48"
                stroke="#0ea5e9"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                animate={{
                  strokeDasharray: [0, 150],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.circle cx="40" cy="40" r="3" fill="#06b6d4" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            </svg>
            <p className="text-cyan-400/70 text-xs lg:text-sm font-semibold tracking-wider">Generative AI</p>
          </motion.div>

          {/* LLM & NLP - Middle Left */}
          <motion.div
            className="absolute top-1/2 left-[4%] lg:left-[6%] -translate-y-1/2 flex flex-col items-center"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <svg width={isTablet ? "60" : "80"} height={isTablet ? "60" : "80"} viewBox="0 0 80 80" className="opacity-60 mb-2">
              <text x="8" y="15" fontSize={isTablet ? "8" : "10"} fill="#06b6d4" opacity="0.8">W1</text>
              <text x="35" y="13" fontSize={isTablet ? "8" : "10"} fill="#0ea5e9" opacity="0.8">W2</text>
              <text x="60" y="16" fontSize={isTablet ? "8" : "10"} fill="#3b82f6" opacity="0.8">W3</text>
              
              <motion.circle cx="15" cy="32" r="4" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.circle cx="40" cy="32" r="4" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
              <motion.circle cx="65" cy="32" r="4" stroke="#3b82f6" strokeWidth="1.5" fill="none" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
              
              <motion.line x1="18" y1="38" x2="37" y2="38" stroke="#06b6d4" strokeWidth="1" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }} />
              <motion.line x1="43" y1="38" x2="62" y2="38" stroke="#0ea5e9" strokeWidth="1" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} />
              
              <motion.line x1="15" y1="50" x2="30" y2="50" stroke="#3b82f6" strokeWidth="1.5" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.line x1="35" y1="50" x2="65" y2="50" stroke="#3b82f6" strokeWidth="1.5" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
            </svg>
            <p className="text-cyan-400/70 text-xs lg:text-sm font-semibold tracking-wider">LLM & NLP</p>
          </motion.div>

          {/* Deep Learning - Bottom Left */}
          <motion.div
            className="absolute bottom-[10%] left-[4%] lg:left-[6%] flex flex-col items-center"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <svg width={isTablet ? "50" : "70"} height={isTablet ? "70" : "90"} viewBox="0 0 70 90" className="opacity-60 mb-2">
              <motion.rect x="5" y="10" width="60" height="12" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.rect x="5" y="30" width="60" height="12" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
              <motion.rect x="5" y="50" width="60" height="12" stroke="#3b82f6" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
              <motion.rect x="5" y="70" width="60" height="12" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} />
              
              <motion.line x1="35" y1="22" x2="35" y2="28" stroke="#06b6d4" strokeWidth="1" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }} />
              <motion.line x1="35" y1="42" x2="35" y2="48" stroke="#0ea5e9" strokeWidth="1" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }} />
            </svg>
            <p className="text-cyan-400/70 text-xs lg:text-sm font-semibold tracking-wider">Deep Learning</p>
          </motion.div>

          {/* RIGHT SIDE - Vertical Stack */}

          {/* Transformers - Top Right */}
          <motion.div
            className="absolute top-[10%] right-[4%] lg:right-[6%] flex flex-col items-center"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <svg width={isTablet ? "60" : "80"} height={isTablet ? "60" : "80"} viewBox="0 0 80 80" className="opacity-60 mb-2">
              <text x="10" y="14" fontSize={isTablet ? "8" : "10"} fill="#06b6d4" opacity="0.8">Q</text>
              <text x="35" y="14" fontSize={isTablet ? "8" : "10"} fill="#0ea5e9" opacity="0.8">K</text>
              <text x="60" y="14" fontSize={isTablet ? "8" : "10"} fill="#3b82f6" opacity="0.8">V</text>
              
              <motion.circle cx="15" cy="28" r="5" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.circle cx="40" cy="28" r="5" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
              <motion.circle cx="65" cy="28" r="5" stroke="#3b82f6" strokeWidth="1.5" fill="none" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
              
              <motion.line x1="15" y1="35" x2="15" y2="48" stroke="#06b6d4" strokeWidth="1" animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }} />
              <motion.line x1="40" y1="35" x2="40" y2="48" stroke="#0ea5e9" strokeWidth="1" animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} />
              <motion.line x1="65" y1="35" x2="65" y2="48" stroke="#3b82f6" strokeWidth="1" animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }} />
              
              <motion.path d="M 15 55 Q 40 60 65 55" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
              <motion.circle cx="40" cy="68" r="4" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ r: [4, 6, 4] }} transition={{ duration: 2, repeat: Infinity }} />
            </svg>
            <p className="text-cyan-400/70 text-xs lg:text-sm font-semibold tracking-wider">Transformers</p>
          </motion.div>

          {/* Prompt Engineering - Middle Right */}
          <motion.div
            className="absolute top-1/2 right-[4%] lg:right-[6%] -translate-y-1/2 flex flex-col items-center"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <svg width={isTablet ? "60" : "80"} height={isTablet ? "65" : "85"} viewBox="0 0 80 85" className="opacity-60 mb-2">
              <motion.rect x="5" y="5" width="70" height="12" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
              <line x1="10" y1="11" x2="25" y2="11" stroke="#06b6d4" strokeWidth="1" opacity="0.6" />
              <line x1="28" y1="11" x2="35" y2="11" stroke="#06b6d4" strokeWidth="1" opacity="0.6" />
              
              <motion.circle cx="40" cy="38" r="7" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, linear: true }} />
              
              {/* Spark effect */}
              {[0, 90, 180, 270].map((angle) => (
                <motion.line
                  key={angle}
                  x1="40"
                  y1="31"
                  x2="40"
                  y2="23"
                  stroke="#3b82f6"
                  strokeWidth="1"
                  opacity="0.5"
                  style={{
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: "40px 38px",
                  }}
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              ))}
              
              <motion.line x1="5" y1="58" x2="30" y2="58" stroke="#3b82f6" strokeWidth="1.5" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }} />
              <motion.line x1="5" y1="67" x2="40" y2="67" stroke="#3b82f6" strokeWidth="1.5" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }} />
              <motion.line x1="5" y1="76" x2="25" y2="76" stroke="#3b82f6" strokeWidth="1.5" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }} />
            </svg>
            <p className="text-cyan-400/70 text-xs lg:text-sm font-semibold tracking-wider">Prompt Eng.</p>
          </motion.div>

          {/* Machine Learning - Bottom Right */}
          <motion.div
            className="absolute bottom-[10%] right-[4%] lg:right-[6%] flex flex-col items-center"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
          >
            <svg width={isTablet ? "60" : "80"} height={isTablet ? "75" : "95"} viewBox="0 0 80 95" className="opacity-60 mb-2">
              <motion.circle cx="40" cy="12" r="6" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ r: [6, 8, 6] }} transition={{ duration: 2, repeat: Infinity }} />
              <line x1="40" y1="19" x2="40" y2="32" stroke="#0ea5e9" strokeWidth="1" opacity="0.6" />
              
              <motion.circle cx="22" cy="40" r="5" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ r: [5, 7, 5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
              <motion.circle cx="58" cy="40" r="5" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ r: [5, 7, 5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
              
              <line x1="22" y1="46" x2="22" y2="58" stroke="#06b6d4" strokeWidth="1" opacity="0.6" />
              <line x1="58" y1="46" x2="58" y2="58" stroke="#06b6d4" strokeWidth="1" opacity="0.6" />
              
              <motion.circle cx="14" cy="68" r="3" stroke="#3b82f6" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
              <motion.circle cx="30" cy="68" r="3" stroke="#3b82f6" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
              <motion.circle cx="50" cy="68" r="3" stroke="#3b82f6" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }} />
              <motion.circle cx="66" cy="68" r="3" stroke="#3b82f6" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} />
            </svg>
            <p className="text-cyan-400/70 text-xs lg:text-sm font-semibold tracking-wider">Machine Learning</p>
          </motion.div>

          {/* Gradient Blobs - Desktop & Tablet */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-80 md:w-96 h-80 md:h-96 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-72 md:w-80 h-72 md:h-80 bg-gradient-to-r from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      )}
    </div>
  )
}
