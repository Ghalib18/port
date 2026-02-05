"use client"

import { motion } from "framer-motion"
import { Trophy, Users, Briefcase, Code, GraduationCap,Brain, Layout } from "lucide-react"
import { SkillsGrid } from "@/components/about/skills-grid"
import { AchievementCard } from "@/components/about/achievement-card"
import { Navigation } from "@/components/ui/navigation"

const achievements = [
  
  {
    id: "sih",
    title: "Winner SIH (2023)",
    subtitle: "Smart India Hackathon",
    period: "Nov 2023 - Dec 2023",
    description: [
      "Led a team of 6 members to participate in the hackathon",
      "Coordinated project planning, task delegation, and progress tracking",
      "Demonstrated strong analytical skills and innovative thinking",
      "Won among 26 competing teams at the prestigious national hackathon",
    ],
    icon: Trophy,
    color: "from-amber-500 to-orange-500",
    accentColor: "#f59e0b",
  },
  {
    id: "hncc",
    title: "Treasurer at HNCC",
    subtitle: "Coding Club of BIT Sindri",
    period: "2025 - Present",
    description: [
      "Managing finances and budget allocation for club activities",
      "Organizing coding competitions and workshops",
      "Mentoring junior students in programming fundamentals",
      "Coordinating with administration for club operations",
    ],
    icon: Users,
    color: "from-emerald-500 to-teal-500",
    accentColor: "#10b981",
  },
  {
  id: "innobyte",
  title: "Frontend Intern at InnoByte",
  subtitle: "Web Development",
  period: "Jan 2025 - Feb 2025",
  description: [
    "Developed a responsive SPA using Next.js & TypeScript, boosting user retention by 30%",
    "Integrated Google Maps and WhatsApp API to reduce booking time by 50%",
    "Achieved a 4.8/5 UX rating through optimized Tailwind CSS interfaces",
    "Implemented REST API consumption for seamless data flow across the application",
  ],
  icon: Layout, // Make sure to import { Layout } from 'lucide-react'
  color: "from-orange-500 to-amber-500",
  accentColor: "#f59e0b",
},
 {
  id: "iit-patna",
  title: "ML Intern at IIT Patna",
  subtitle: "Data Science & Research",
  period: "April 2025 - June 2026",
  description: [
    "Conducted predictive analysis on Bihar road accident datasets to identify causality patterns",
    "Engineered classification models using Random Forest, Logistic Regression, KNN, and KDBC",
    "Optimized algorithms to achieve 89% accuracy and an F1-score of 0.84",
    "Processed complex real-world datasets for actionable safety insights",
  ],
  icon: Brain, // Make sure to import { Brain } from 'lucide-react'
  color: "from-blue-500 to-cyan-500",
  accentColor: "#3b82f6",
},
  {
    id: "technix",
    title: "SDE Intern at Technix India",
    subtitle: "Machine Learning Intern",
    period: "Sept 2025 - Nov 2025",
    description: [
     "Built sentiment analysis model on 1,000+ product reviews with 88% accuracy",
     " Preprocessed text using TF-IDF, tokenization, and stopword removal",
     " Trained Naive Bayes and Logistic Regression classifiers",
     "Analyzed sentiment trends to support product improvement decisions",
    ],
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    accentColor: "#8b5cf6",
  },
 
  {
    id: "leetcode",
    title: "Active LeetCoder",
    subtitle: "Competitive Programming",
    period: "Ongoing",
    description: [
      "1000+ problems solved across multiple platforms",
      "LeetCode maximum rating: 1781",
      "Global Rank 942 out of 30,000+ in Biweekly Contest 148",
      "CodeChef maximum rating: 1551, Global Rank 633",
    ],
    icon: Code,
    color: "from-orange-500 to-red-500",
    accentColor: "#f97316",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 overflow-y-auto">
      <Navigation />

      {/* Content */}
      <div className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Me</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore my journey—a fusion of academic excellence and professional prowess. From honing my skills in CSE
              to contributing value at esteemed organizations.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">My Skills</h2>
            <SkillsGrid />
          </motion.section>

          {/* Career Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Career Summary</h2>
            <p className="text-slate-600 leading-relaxed max-w-4xl">
              {
                "Innovative AI/ML and Generative AI Developer with a strong academic foundation (8.9 CGPA) and hands-on experience in building intelligent systems powered by machine learning and large language models. Focused on developing scalable, AI-driven solutions that automate processes, extract insights, and solve real-world problems."
              }
            </p>
          </motion.section>

          {/* Achievements Timeline */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Achievements & Experience</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 hidden lg:block" />

              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <AchievementCard
                    key={achievement.id}
                    achievement={achievement}
                    index={index}
                    isEven={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}
