import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiGit, SiNodedotjs, SiDocker, SiC, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Glow - Pulse Animation */}
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.05, 1] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">The magical tools I use to bring ideas to life</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-card border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-white/10 transition-all duration-300 hover:shadow-lg"
              style={{ 
                "--glow-color": skill.color,
                boxShadow: `0 0 0 0 transparent`
               } as React.CSSProperties}
            >
              {/* Dynamic shadow on hover via JS/CSS var */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: skill.color, filter: 'blur(20px)' }}
              />
              
              {/* Floating Icon Animation */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: Math.random() * 2 // Random delay so they don't sync up
                }}
                className="relative z-10 p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300"
              >
                <skill.icon size={40} style={{ color: skill.color }} className="filter drop-shadow-lg" />
              </motion.div>
              
              <span className="relative z-10 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats Cards Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Technologies", value: "12+", icon: "🛠️" },
            { label: "Projects", value: "15+", icon: "🚀" },
            { label: "Experience", value: "2+", icon: "⚡" },
            { label: "Coffee Cups", value: "∞", icon: "☕" },
          ].map((stat, i) => (
             <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="bg-card border border-white/5 p-6 rounded-2xl text-center transition-colors cursor-default"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-xl font-bold text-orange-500 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
