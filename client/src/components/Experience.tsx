import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 0,
    title: "Artificial Intelligence Intern",
    company: "Infosys Springboard · Internship",
    period: "Nov 2025 – Present",
    description: [
      "Working as an Artificial Intelligence Intern under Infosys Springboard.",
      "Building understanding of AI workflows through guided modules and practical tasks.",
      "Gaining hands-on exposure to industry-aligned tools, frameworks, and best practices."
    ],
    tech: ["Artificial Intelligence", "Machine Learning", "Remote Internship"]
  },
  {
    id: 1,
    title: "President — Student Alumni Relations Cell (SARC)",
    company: "Sanjivani College of Engineering",
    period: "Aug 2025 – Present",
    description: [
      "Leading alumni–student engagement initiatives and mentorship programs.",
      "Organizing networking sessions and alumni interaction events.",
      "Managing team operations and coordinating event workflows."
    ],
    tech: ["Leadership", "Communication", "Event Management"]
  },
  {
    id: 2,
    title: "Training & Placement Student Coordinator",
    company: "Central Training & Placement Cell, Sanjivani College of Engineering",
    period: "Aug 2024 – Present",
    description: [
      "Established connections with 50+ industry professionals and alumni for student mentorship.",
      "Coordinated placement training, workshops, and industry-led sessions.",
      "Supported students in placement preparation and career guidance."
    ],
    tech: ["Coordination", "Industry Networking", "Event Planning"]
  },
  {
    id: 3,
    title: "Tata Group Virtual Intern",
    company: "Tata Group (Forage)",
    period: "2024",
    description: [
      "Completed virtual internship tasks designed by Tata Group.",
      "Gained exposure to corporate workflows and professional frameworks.",
      "Worked through industry-focused case assignments and learning modules."
    ],
    tech: ["Professional Skills", "Problem Solving", "Corporate Readiness"]
  },
  {
    id: 4,
    title: "Deloitte Virtual Intern",
    company: "Deloitte (Forage)",
    period: "2024",
    description: [
      "Completed Deloitte virtual internship modules focused on consulting and technology workflows.",
      "Performed simulated tasks related to analysis and documentation.",
      "Learned methodologies used across Deloitte projects."
    ],
    tech: ["Analytical Thinking", "Documentation", "Corporate Skills"]
  },
  {
    id: 5,
    title: "Executive Member — Team Charlie (Space & Robotics Club)",
    company: "Sanjivani College of Engineering",
    period: "Sep 2023 – Dec 2024",
    description: [
      "Worked on robotics and embedded system activities as a part of Team Charlie.",
      "Helped organize technical events and hands-on workshops.",
      "Assisted junior members with project modules and technical tasks."
    ],
    tech: ["Robotics", "Embedded Systems", "Teamwork"]
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
          <p className="text-gray-400 mt-4">My journey</p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.18, duration: 0.6, ease: "easeOut" }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-[29px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                <div className="relative group">
                  {/* Glow halo */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl -z-10 pointer-events-none
                               bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700
                               opacity-0 blur-[40px] transform scale-95
                               transition-all duration-400 group-hover:opacity-60 group-hover:blur-[90px] group-hover:scale-100"
                  />

                  {/* Card */}
                  <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8
                                  hover:border-primary/30 transition-all duration-300
                                  group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_rgba(160,80,255,0.22)]
                                  ">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                      <div className="pr-2 md:pr-6 lg:pr-8">
                        <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                        <p className="text-lg font-medium text-blue-400">{exp.company}</p>
                      </div>

                      {/* Inline pill (mobile) */}
                      <span className="md:hidden text-gray-500 font-mono text-sm bg-white/5 px-3 py-1 rounded-full self-start">
                        {exp.period}
                      </span>

                      {/* Absolute pill (desktop) */}
                      <span
                        className="hidden md:inline-block absolute right-6 top-6 text-gray-500 font-mono text-sm bg-white/5 px-3 py-1 rounded-full"
                        aria-hidden
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Bullet List */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Chips */}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
