import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import profileImg from "@assets/images/Shreya.jpeg";

/* Counter */
function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = Math.floor(latest).toString();
        }
      }
    });

    return controls.stop;
  }, [isInView, value, count]);

  return <span ref={ref}>0</span>;
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-secondary">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-3">Get to know the person behind the code</p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed"
          >
            <p className="max-w-xl">
              I am Bhagyashree Mohalkar, an Electronics and Computer Engineering undergraduate 
              specializing in Artificial Intelligence and Machine Learning. I leverage data analysis, Python, and 
              algorithmic thinking to build intelligent, real-world solutions. Detail-oriented and driven by 
              curiosity, I strive to create impactful systems grounded in strong technical fundamentals.
            </p>

            {/* STATS */}
            <div className="flex gap-12 pt-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <Counter value={100} />+
                </h3>
                <p className="text-sm text-gray-400">Code Contributions</p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  <Counter value={15} />+
                </h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                  <Counter value={10} />+
                </h3>
                <p className="text-sm text-gray-400">Hackathons</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div
              className="absolute w-[380px] md:w-[440px] aspect-square rounded-full
                         bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700
                         blur-[90px] opacity-40 -z-10"
            />

            {/* Image */}
            <div
              className="relative w-[280px] md:w-[360px] aspect-square
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
