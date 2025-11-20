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
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

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
              className="group relative bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-white/20 transition-all duration-300 card-hover overflow-hidden"
              style={{ "--glow-color": skill.color } as React.CSSProperties}
            >
              <div className="skill-card-glow" />
              
              <skill.icon size={48} className="text-gray-300 group-hover:text-white transition-colors z-10" />
              
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors z-10">
                {skill.name}
              </span>
              
              {/* Progress bar style decoration */}
              <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500 w-0 group-hover:w-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
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
              className="bg-card/50 border border-white/5 p-6 rounded-2xl text-center hover:bg-white/5 transition-colors"
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
