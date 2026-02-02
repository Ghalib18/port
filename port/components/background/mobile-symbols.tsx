"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MobileSymbols() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!isMobile) return null

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none h-screen w-full">
      {/* TOP ROW - 2 Symbols Above Card - Closer positioning */}
      <div className="absolute top-14 left-0 right-0 flex items-center justify-between px-4 gap-4 w-full">
        {/* Generative AI */}
        <motion.div
          className="flex flex-col items-center flex-1"
          animate={{
            y: [-2, 2, -2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="58" height="58" viewBox="0 0 60 60" className="opacity-60 mb-1">
            <motion.path
              d="M 30 12 Q 42 22 38 35 Q 25 45 18 38 Q 10 28 22 16"
              stroke="#06b6d4"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              animate={{
                strokeDasharray: [0, 150],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <motion.circle cx="30" cy="30" r="2.5" fill="#06b6d4" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          </svg>
          <p className="text-cyan-400/70 text-xs font-semibold tracking-wider">GenAI</p>
        </motion.div>

        {/* Transformers */}
        <motion.div
          className="flex flex-col items-center flex-1"
          animate={{
            y: [-2, 2, -2],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <svg width="58" height="58" viewBox="0 0 60 60" className="opacity-60 mb-1">
            <text x="8" y="14" fontSize="6" fill="#06b6d4" opacity="0.8">Q</text>
            <text x="28" y="14" fontSize="6" fill="#0ea5e9" opacity="0.8">K</text>
            <text x="48" y="14" fontSize="6" fill="#3b82f6" opacity="0.8">V</text>

            <motion.circle cx="12" cy="27" r="3" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.circle cx="30" cy="27" r="3" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
            <motion.circle cx="48" cy="27" r="3" stroke="#3b82f6" strokeWidth="1.5" fill="none" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />

            <motion.path d="M 12 31 L 12 40" stroke="#06b6d4" strokeWidth="1" animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }} />
            <motion.path d="M 30 31 L 30 40" stroke="#0ea5e9" strokeWidth="1" animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} />
            <motion.path d="M 48 31 L 48 40" stroke="#3b82f6" strokeWidth="1" animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }} />

            <motion.circle cx="30" cy="48" r="2.5" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ r: [2.5, 3.5, 2.5] }} transition={{ duration: 2, repeat: Infinity }} />
          </svg>
          <p className="text-cyan-400/70 text-xs font-semibold tracking-wider">Transformers</p>
        </motion.div>
      </div>

      {/* MIDDLE BOTTOM ROW - 2 Additional Symbols - Deep Learning & Prompt Engineering */}
      <div className="absolute bottom-56 left-0 right-0 flex items-center justify-between px-4 gap-4 w-full">
        {/* Deep Learning */}
        <motion.div
          className="flex flex-col items-center flex-1"
          animate={{
            y: [2, -2, 2],
          }}
          transition={{
            duration: 6.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <svg width="58" height="58" viewBox="0 0 60 60" className="opacity-60 mb-1">
            {/* Stacked layers */}
            <motion.rect x="8" y="8" width="44" height="9" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.rect x="8" y="20" width="44" height="9" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
            <motion.rect x="8" y="32" width="44" height="9" stroke="#3b82f6" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
            <motion.rect x="8" y="44" width="44" height="9" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
          </svg>
          <p className="text-cyan-400/70 text-xs font-semibold tracking-wider">Deep Learn</p>
        </motion.div>

        {/* Prompt Engineering */}
        <motion.div
          className="flex flex-col items-center flex-1"
          animate={{
            y: [2, -2, 2],
          }}
          transition={{
            duration: 6.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        >
          <svg width="58" height="58" viewBox="0 0 60 60" className="opacity-60 mb-1">
            {/* Input prompt box */}
            <motion.rect x="5" y="6" width="50" height="10" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
            <line x1="10" y1="11" x2="22" y2="11" stroke="#06b6d4" strokeWidth="0.8" opacity="0.6" />
            
            {/* Processing spinner */}
            <motion.circle cx="30" cy="32" r="5" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, linear: true }} />
            
            {/* Output lines */}
            <motion.line x1="5" y1="45" x2="28" y2="45" stroke="#3b82f6" strokeWidth="1" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }} />
            <motion.line x1="5" y1="52" x2="38" y2="52" stroke="#3b82f6" strokeWidth="1" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }} />
          </svg>
          <p className="text-cyan-400/70 text-xs font-semibold tracking-wider">Prompt Eng</p>
        </motion.div>
      </div>

      {/* BOTTOM ROW - 2 Symbols Below Card - ML & NLP */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4 gap-4 w-full">
        {/* Machine Learning */}
        <motion.div
          className="flex flex-col items-center flex-1"
          animate={{
            y: [2, -2, 2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <svg width="58" height="58" viewBox="0 0 60 60" className="opacity-60 mb-1">
            <motion.circle cx="30" cy="10" r="3.5" stroke="#06b6d4" strokeWidth="1.5" fill="none" animate={{ r: [3.5, 5, 3.5] }} transition={{ duration: 2, repeat: Infinity }} />
            <line x1="30" y1="14" x2="30" y2="20" stroke="#0ea5e9" strokeWidth="1" opacity="0.6" />

            <motion.circle cx="15" cy="28" r="3" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ r: [3, 4.2, 3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
            <motion.circle cx="45" cy="28" r="3" stroke="#0ea5e9" strokeWidth="1.5" fill="none" animate={{ r: [3, 4.2, 3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />

            <line x1="15" y1="31" x2="15" y2="38" stroke="#06b6d4" strokeWidth="1" opacity="0.6" />
            <line x1="45" y1="31" x2="45" y2="38" stroke="#06b6d4" strokeWidth="1" opacity="0.6" />

            <motion.circle cx="10" cy="47" r="2" stroke="#3b82f6" strokeWidth="1" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
            <motion.circle cx="22" cy="47" r="2" stroke="#3b82f6" strokeWidth="1" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
            <motion.circle cx="38" cy="47" r="2" stroke="#3b82f6" strokeWidth="1" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }} />
            <motion.circle cx="50" cy="47" r="2" stroke="#3b82f6" strokeWidth="1" fill="none" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} />
          </svg>
          <p className="text-cyan-400/70 text-xs font-semibold tracking-wider">ML</p>
        </motion.div>

        {/* LLM & NLP */}
        <motion.div
          className="flex flex-col items-center flex-1"
          animate={{
            y: [2, -2, 2],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <svg width="58" height="50" viewBox="0 0 60 50" className="opacity-60 mb-1">
            <motion.circle cx="8" cy="10" r="2" stroke="#06b6d4" strokeWidth="1" fill="none" animate={{ r: [2, 3.2, 2] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.circle cx="30" cy="8" r="2" stroke="#0ea5e9" strokeWidth="1" fill="none" animate={{ r: [2, 3.2, 2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
            <motion.circle cx="52" cy="12" r="2" stroke="#3b82f6" strokeWidth="1" fill="none" animate={{ r: [2, 3.2, 2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />

            <motion.line x1="11" y1="11" x2="27" y2="10" stroke="#06b6d4" strokeWidth="0.8" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }} />
            <motion.line x1="33" y1="10" x2="49" y2="14" stroke="#0ea5e9" strokeWidth="0.8" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} />

            <motion.line x1="8" y1="23" x2="23" y2="23" stroke="#06b6d4" strokeWidth="0.8" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.line x1="30" y1="23" x2="52" y2="23" stroke="#0ea5e9" strokeWidth="0.8" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
            <motion.line x1="8" y1="32" x2="35" y2="32" stroke="#3b82f6" strokeWidth="0.8" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
          </svg>
          <p className="text-cyan-400/70 text-xs font-semibold tracking-wider">NLP</p>
        </motion.div>
      </div>
    </div>
  )
}
