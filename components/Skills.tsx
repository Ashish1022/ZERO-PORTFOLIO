"use client"
import { motion } from "framer-motion"
import { Code, Award, Star, Zap } from "lucide-react"

interface SkillsProps {
  skill: string
  sub?: string
  level?: number
  index?: number
}

const Skills = ({ skill, sub, level = 80, index = 0 }: SkillsProps) => {
  // Convert percentage to skill level
  const getSkillLevel = (level: number) => {
    if (level >= 90) return { label: "Expert", color: "from-green-400 to-green-600", icon: Award, dots: 5 }
    if (level >= 80) return { label: "Advanced", color: "from-blue-400 to-blue-600", icon: Star, dots: 4 }
    if (level >= 70) return { label: "Proficient", color: "from-purple-400 to-purple-600", icon: Zap, dots: 3 }
    if (level >= 60) return { label: "Intermediate", color: "from-yellow-400 to-yellow-600", icon: Code, dots: 2 }
    return { label: "Learning", color: "from-orange-400 to-orange-600", icon: Code, dots: 1 }
  }

  const skillLevel = getSkillLevel(level)
  const SkillIcon = skillLevel.icon

  return (
    <motion.div
      className="bg-gradient-to-r from-black-1 to-black-6 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-white-3/10 hover:border-white-3/20"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`bg-gradient-to-r ${skillLevel.color}/20 p-2 rounded-lg group-hover:scale-110 transition-transform`}
        >
          <SkillIcon className={`w-5 h-5 bg-gradient-to-r ${skillLevel.color} bg-clip-text text-transparent`} />
        </div>
        <h3 className="text-lg font-bold text-white-1 group-hover:text-white-3 transition-colors">{skill}</h3>
      </div>

      {sub && (
        <p className="text-white-3 text-sm leading-relaxed mb-4 group-hover:text-white-2 transition-colors">{sub}</p>
      )}

      {/* Skill Level Indicator */}
      <div className="mb-2">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white-3 text-xs font-semibold uppercase tracking-wider">Proficiency Level</span>
          <div className={`bg-gradient-to-r ${skillLevel.color} px-3 py-1 rounded-full`}>
            <span className="text-white text-xs font-bold">{skillLevel.label}</span>
          </div>
        </div>

        {/* Skill Dots Indicator */}
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i < skillLevel.dots
                  ? `bg-gradient-to-r ${skillLevel.color} shadow-lg`
                  : "bg-black-2 border border-white-3/20"
              }`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
          <span className="text-white-3 text-xs ml-2 font-medium">{skillLevel.dots}/5</span>
        </div>

        {/* Experience Indicator */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-white-3 text-xs">Experience Level</span>
          <div className="flex items-center gap-1">
            {[...Array(skillLevel.dots)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 bg-gradient-to-r ${skillLevel.color} bg-clip-text text-transparent fill-current`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${skillLevel.color}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      ></div>
    </motion.div>
  )
}

export default Skills
