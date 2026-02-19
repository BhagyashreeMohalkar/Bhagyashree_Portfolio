import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiC,
  SiJavascript,
  SiPython,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiSpacy,
  SiOpencv,
  SiTensorflow,
  SiGithub,
  SiGit,
  SiLatex
} from "react-icons/si";

import { FaFileExcel } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";

type Skill = {
  name: string;
  icon: any;
  color: string;
  category: "Languages" | "AI-ML" | "Tools";
  note?: string;
};

const skills: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "#FF5F2E", category: "Languages", note: "Semantic markup" },
  { name: "CSS", icon: SiCss3, color: "#2EB1FF", category: "Languages", note: "Styling & responsive" },
  { name: "C", icon: SiC, color: "#9FB4C8", category: "Languages", note: "Systems fundamentals" },
  { name: "JavaScript", icon: SiJavascript, color: "#FFD54A", category: "Languages", note: "Frontend & scripting" },
  { name: "Python", icon: SiPython, color: "#3BB3D6", category: "Languages", note: "ML & scripting" },
  { name: "SQL", icon: SiMysql, color: "#21A3B0", category: "Languages", note: "Data queries" },

  { name: "NumPy", icon: SiNumpy, color: "#0077B6", category: "AI-ML", note: "Numerical computing" },
  { name: "Pandas", icon: SiPandas, color: "#16A34A", category: "AI-ML", note: "Data processing" },
  { name: "Scikit-Learn", icon: SiScikitlearn, color: "#FF9F1C", category: "AI-ML", note: "Classical ML" },
  { name: "spaCy", icon: SiSpacy, color: "#9B5DE5", category: "AI-ML", note: "NLP pipelines" },
  { name: "OpenCV", icon: SiOpencv, color: "#3BA0C9", category: "AI-ML", note: "Computer vision" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF7A00", category: "AI-ML", note: "Deep learning" },

  { name: "GitHub", icon: SiGithub, color: "#FFFFFF", category: "Tools", note: "Repo hosting & collaboration" },
  { name: "Git", icon: SiGit, color: "#FF5F3A", category: "Tools", note: "Version control" },
  { name: "LaTeX (Overleaf)", icon: SiLatex, color: "#00A89D", category: "Tools", note: "Scientific writing & docs (Overleaf)" },
  { name: "Power BI", icon: BsBarChartFill, color: "#F2C811", category: "Tools", note: "Business intelligence & dashboards" },
  { name: "Microsoft Excel", icon: FaFileExcel, color: "#217346", category: "Tools", note: "Data analysis & reporting" }
];

const categories = ["All", "Languages", "AI-ML", "Tools"] as const;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const visibleSkills = skills.filter((s) =>
    activeCategory === "All" ? true : s.category === activeCategory
  );

  function handleKeyTooltip(e: React.KeyboardEvent, name: string) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenTooltip((prev) => (prev === name ? null : name));
    } else if (e.key === "Escape") {
      setOpenTooltip(null);
    }
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">

      {/* Subtle Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] -z-20 opacity-40" />

      {/* Animated Glow Background */}
      <motion.div
        aria-hidden
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.04, 0.09, 0.04], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 flex justify-center"
      >
        <div className="w-[900px] h-[900px] bg-gradient-to-br from-purple-900/10 via-pink-600/5 to-emerald-600/5 rounded-full blur-[120px]" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">
            The magical tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenTooltip(null);
              }}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 font-medium ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {visibleSkills.map((skill, index) => {
            const Icon = skill.icon;
            const isTooltipOpen = openTooltip === skill.name;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenTooltip((p) => (p === skill.name ? null : skill.name))}
                  onKeyDown={(e) => handleKeyTooltip(e, skill.name)}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 cursor-pointer transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] focus:ring-2 focus:ring-primary/30"
                >
                  {/* Halo Glow */}
                  <div
                    className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${skill.color}33, transparent 60%)`,
                      filter: "blur(40px)"
                    }}
                  />

                  {/* Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon
                      size={42}
                      style={{
                        color: skill.color,
                        filter: `drop-shadow(0 10px 25px ${hexToRgba(skill.color, 0.3)})`
                      }}
                    />
                  </motion.div>

                  <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </div>
                </div>

                {/* Tooltip */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 mt-3 z-50 transition-all duration-200 ${
                    isTooltipOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  <div className="bg-card border border-white/10 p-3 rounded-lg text-sm shadow-lg max-w-[220px]">
                    <div className="text-white font-semibold">{skill.name}</div>
                    <div className="text-xs text-gray-400">{skill.category}</div>
                    {skill.note && <p className="text-xs text-gray-300 mt-2">{skill.note}</p>}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function hexToRgba(hex: string, alpha = 1) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
