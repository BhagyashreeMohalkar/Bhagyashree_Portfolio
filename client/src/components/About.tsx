import { motion } from "framer-motion";
import profileImg from "@assets/generated_images/Shreya.jpeg";

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">Get to know the person behind the code</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed text-justify"
          >
            <p>
              I am <strong>Bhagyashree Mohalkar</strong>, an AI/ML-driven undergraduate
              focused on designing intelligent, data-powered systems. My projects span applied
              machine learning, full-stack AI development, and smart prototype engineering
              guided by curiosity and a commitment to purposeful innovation.
            </p>

            <p>
              Although I work with hardware when required, my primary direction lies in
              research-oriented AI. I enjoy building systems that learn from data, adapt
              intelligently, and offer meaningful solutions to real-world problems.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-10 pt-10">
              <div>
                <h3 className="text-4xl font-bold text-white mb-1">100+</h3>
                <p className="text-sm text-gray-400">Code Contributions</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-1">06+</h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-secondary mb-1">07+</h3>
                <p className="text-sm text-gray-400">Hackathons</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-end items-start"
          >
            {/* Glow halo */}
            <div
              className="absolute -translate-y-8 md:-translate-y-12
                         w-[460px] h-[460px] md:w-[500px] md:h-[500px]
                         rounded-full
                         bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700
                         blur-[120px] opacity-50 -z-10 pointer-events-none"
            />

            {/* Circular image */}
            <div
              className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px]
                         rounded-full overflow-hidden
                         border-[6px] border-purple-400/70
                         shadow-[0_0_40px_rgba(160,80,255,0.32)]
                         transition-transform duration-500 hover:scale-105"
            >
              <img
                src={profileImg}
                alt="Bhagyashree Mohalkar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
