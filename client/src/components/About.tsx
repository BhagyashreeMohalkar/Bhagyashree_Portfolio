import { motion } from "framer-motion";
import profileImg from "@assets/images/Shreya.jpeg";

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-secondary">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">Get to know the person behind the code</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center md:items-start">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed text-justify"
          >
            <p>
              I am <strong>Bhagyashree Mohalkar</strong>, an Electronics and Computer Engineering 
              undergraduate passionate about learning and building in the field of AI and machine learning. 
              I enjoy applying ML concepts, developing full-stack AI projects, and exploring how intelligent 
              systems can solve everyday problems. Although I work with hardware when needed, my main
              focus is on creating practical, data-driven solutions that have real impact.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-8 md:pt-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">100+</h3>
                <p className="text-sm text-gray-400">Code Contributions</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">06+</h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-1">07+</h3>
                <p className="text-sm text-gray-400">Hackathons</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-center items-center"
          >
            {/* Glow halo */}
            <div
              className="absolute -translate-y-4 md:-translate-y-6
                         w-[56vw] max-w-[460px] h-[56vw] max-h-[460px]
                         rounded-full
                         bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700
                         blur-[80px] md:blur-[110px] opacity-50 -z-10 pointer-events-none"
            />

            {/* Circular image */}
            <div
              className="relative w-[48vw] max-w-[400px] aspect-square
                         rounded-full overflow-hidden
                         border-[6px] border-purple-400/70
                         shadow-[0_0_40px_rgba(160,80,255,0.32)]
                         transition-transform duration-500 hover:scale-105"
            >
              <img
                src={profileImg}
                alt="Bhagyashree Mohalkar"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
