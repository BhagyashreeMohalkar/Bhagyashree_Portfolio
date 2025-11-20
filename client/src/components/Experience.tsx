import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Front-End Developer Intern",
    company: "01Neo (On Site)",
    period: "Jun 2025",
    description: [
      "Developed reusable components with Next.js, TypeScript, and TailwindCSS.",
      "Translated mockups into responsive web interfaces.",
      "Integrated RESTful APIs and handled error states securely.",
      "Contributed to stand-ups, async GitHub reviews, and agile boards."
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "RESTful APIs", "GitHub", "Agile"]
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Independent Contractor",
    period: "2023 - 2025",
    description: [
      "Delivered custom web solutions for diverse clients across multiple industries.",
      "Collaborated directly with stakeholders to transform ideas into pixel-perfect reality."
    ],
    tech: ["React", "Node.js", "Figma", "WordPress"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">My professional journey in software development</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-[29px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                      <p className="text-lg font-medium text-blue-400">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 font-mono text-sm bg-white/5 px-3 py-1 rounded-full self-start md:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
