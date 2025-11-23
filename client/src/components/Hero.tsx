import React from "react";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToProjects = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      try {
        history.replaceState(null, "", "#projects");
      } catch {}
      setTimeout(
        () =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        300
      );
    }
  };

  // Floating particles data
  const floatingParticles = [
    { id: 1, delay: 0, x: -100, y: -50, duration: 6 },
    { id: 2, delay: 1, x: 100, y: 60, duration: 7 },
    { id: 3, delay: 2, x: -80, y: 80, duration: 5 },
    { id: 4, delay: 0.5, x: 120, y: -80, duration: 8 },
    { id: 5, delay: 1.5, x: -120, y: 40, duration: 6.5 },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Waves Background - Futuristic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Wave 1 - Slow */}
          <motion.path
            d="M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z"
            fill="url(#waveGradient)"
            animate={{ d: ["M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z", "M0,320 Q300,270 600,320 T1200,320 L1200,600 L0,600 Z", "M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z"] }}
            transition={{ duration: 8, repeat: Infinity }}
            opacity={0.08}
          />

          {/* Wave 2 - Medium */}
          <motion.path
            d="M0,350 Q300,300 600,350 T1200,350 L1200,600 L0,600 Z"
            fill="url(#waveGradient)"
            animate={{ d: ["M0,350 Q300,300 600,350 T1200,350 L1200,600 L0,600 Z", "M0,330 Q300,280 600,330 T1200,330 L1200,600 L0,600 Z", "M0,350 Q300,300 600,350 T1200,350 L1200,600 L0,600 Z"] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            opacity={0.06}
          />

          {/* Wave 3 - Fast */}
          <motion.path
            d="M0,250 Q300,200 600,250 T1200,250 L1200,600 L0,600 Z"
            fill="url(#waveGradient)"
            animate={{ d: ["M0,250 Q300,200 600,250 T1200,250 L1200,600 L0,600 Z", "M0,270 Q300,220 600,270 T1200,270 L1200,600 L0,600 Z", "M0,250 Q300,200 600,250 T1200,250 L1200,600 L0,600 Z"] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
            opacity={0.07}
          />
        </svg>
      </div>

      {/* Floating Particle Orbs - 3D Depth */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-purple-400/40"
          animate={{
            x: [0, particle.x, 0],
            y: [0, particle.y, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
          style={{
            left: `${20 + particle.id * 15}%`,
            top: `${30 + particle.id * 8}%`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* TOP-LEFT: Name with 3D Effect */}
      <motion.div
        className="absolute top-6 left-6 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md"
            whileHover={{ rotateY: 15, rotateX: 10 }}
            transition={{ duration: 0.3 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            B
          </motion.div>
          <div className="text-sm text-gray-200 font-semibold">
            Bhagyashree Mohalkar
          </div>
        </div>
      </motion.div>

      {/* Animated Background Gradient Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-[128px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-[128px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center gap-8">
        {/* Center badge with 3D hover effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1, rotateZ: 5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm cursor-default"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-xl"
          >
            🌟
          </motion.span>
          <span className="text-sm font-medium text-gray-300">
            Welcome to my universe
          </span>
        </motion.div>

        {/* Title with 3D lift effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -10 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2 flex flex-col items-center">
            {/* Animated Gradient Text */}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_auto] pb-2 text-center"
            >
              AI/ML Developer
            </motion.span>

            <div className="flex flex-wrap justify-center gap-x-4">
              <span className="text-white">&</span>
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%_auto] pb-2"
              >
                Researcher
              </motion.span>
            </div>
          </h1>
        </motion.div>

        {/* Quote with depth */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl leading-relaxed font-semibold text-center relative"
          style={{
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <span
            className="bg-clip-text text-transparent
               bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500
               drop-shadow-[0_0_12px_rgba(200,100,255,0.28)]
               italic font-bold"
          >
            "Somewhere, something incredible is waiting to be known"
          </span>

          <span className="not-italic text-primary block mt-2">— Carl Sagan</span>

          {/* Gradient glow underline */}
          <motion.div
            className="mx-auto mt-3 w-40 h-1 rounded-full
                  bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
                  shadow-[0_0_18px_rgba(200,100,255,0.45)]"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* CTA Buttons with 3D lift */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToProjects}
            className="btn-primary h-14 text-lg flex items-center justify-center gap-2"
            data-testid="button-explore-projects"
          >
            🚀 Explore My Universe
          </motion.button>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1natTmSV7BQY2Jl6qI1qoPZU12qWuh89g",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="btn-secondary h-14 text-lg flex items-center justify-center gap-2"
            data-testid="button-download-cv"
          >
            <FileText className="h-5 w-5" />
            Download CV
          </motion.button>
        </motion.div>

        {/* Social Icons with 3D effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-6 mt-12 text-gray-400"
        >
          <motion.a
            href="https://github.com/BhagyashreeMohalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.2, rotateZ: 10 }}
            whileTap={{ scale: 0.95 }}
            data-testid="link-github"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bhagyashree-mohalkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.2, rotateZ: 10 }}
            whileTap={{ scale: 0.95 }}
            data-testid="link-linkedin"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:mohalkarbhagyashri961@gmail.com"
            className="hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.2, rotateZ: 10 }}
            whileTap={{ scale: 0.95 }}
            data-testid="link-email"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom scroll hint with 3D effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll to explore</span>
        </motion.div>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
