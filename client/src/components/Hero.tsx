import React, { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { FileText, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

// Typing effect hook
function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentText(words[0]);
      return;
    }

    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration, prefersReducedMotion]);

  return currentText;
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Roles for typing effect
  const roles = ["AI/ML Developer", "Researcher", "Problem Solver", "Innovator"];
  const typedRole = useTypewriter(roles, 80, 40, 1500);

  // Track scroll progress for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Floating particles - optimized for mobile performance
  const floatingParticles = [
    { id: 1, delay: 0, x: -60, y: -30, duration: 6 },
    { id: 2, delay: 1, x: 60, y: 40, duration: 7 },
    { id: 3, delay: 2, x: -50, y: 50, duration: 5 },
  ];

  // Tech icons for floating animation
  const techIcons = [
    { icon: "🐍", label: "Python" },
    { icon: "🤖", label: "AI" },
    { icon: "🧠", label: "ML" },
    { icon: "📊", label: "Data" },
  ];

  return (
    <section
      id="home"
      className="min-h-[100svh] flex flex-col justify-center items-center relative overflow-hidden pt-20 md:pt-20 px-4"
    >
      {/* Skip to content link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 z-[100] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      {/* Animated Waves Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <motion.path
            d="M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z"
            fill="url(#waveGradient)"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    d: [
                      "M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z",
                      "M0,320 Q300,270 600,320 T1200,320 L1200,600 L0,600 Z",
                      "M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z",
                    ],
                  }
            }
            transition={{ duration: 8, repeat: Infinity }}
            opacity={0.08}
          />

          <motion.path
            d="M0,350 Q300,300 600,350 T1200,350 L1200,600 L0,600 Z"
            fill="url(#waveGradient)"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    d: [
                      "M0,350 Q300,300 600,350 T1200,350 L1200,600 L0,600 Z",
                      "M0,330 Q300,280 600,330 T1200,330 L1200,600 L0,600 Z",
                      "M0,350 Q300,300 600,350 T1200,350 L1200,600 L0,600 Z",
                    ],
                  }
            }
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            opacity={0.06}
          />

          <motion.path
            d="M0,250 Q300,200 600,250 T1200,250 L1200,600 L0,600 Z"
            fill="url(#waveGradient)"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    d: [
                      "M0,250 Q300,200 600,250 T1200,250 L1200,600 L0,600 Z",
                      "M0,270 Q300,220 600,270 T1200,270 L1200,600 L0,600 Z",
                      "M0,250 Q300,200 600,250 T1200,250 L1200,600 L0,600 Z",
                    ],
                  }
            }
            transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
            opacity={0.07}
          />
        </svg>
      </div>

      {/* Floating Particle Orbs - Desktop only */}
      <div className="hidden md:block" aria-hidden="true">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-purple-400/40"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    x: [0, particle.x, 0],
                    y: [0, particle.y, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }
            }
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
            style={{
              left: `${25 + particle.id * 20}%`,
              top: `${30 + particle.id * 12}%`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons - Desktop only */}
      <div className="hidden lg:block" aria-hidden="true">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.label}
            className="absolute text-2xl opacity-20"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [-10, 10, -10],
                    opacity: [0.15, 0.25, 0.15],
                  }
            }
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            style={{
              right: `${10 + index * 8}%`,
              top: `${25 + index * 15}%`,
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      {/* Desktop Name Badge - with animated gradient border */}
      <motion.div
        className="hidden md:flex absolute top-6 left-6 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient-rotate">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-background/95 backdrop-blur-sm">
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md"
              whileHover={
                prefersReducedMotion ? undefined : { rotateY: 15, rotateX: 10 }
              }
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
        </div>
      </motion.div>

      {/* Mobile Name Badge - Compact with gradient border */}
      <motion.div
        className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative p-[1.5px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient-rotate">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/95 backdrop-blur-sm">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
              BM
            </div>
            <span className="text-xs text-gray-200 font-medium">Bhagyashree M.</span>
          </div>
        </div>
      </motion.div>

      {/* Animated Background Gradient Blobs */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 30, 0],
                y: [0, 20, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 md:top-20 md:left-20 w-[50vw] md:w-[35vw] max-w-[350px] h-[50vw] md:h-[35vw] max-h-[350px] bg-primary/30 rounded-full blur-[80px] md:blur-[96px] pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, -30, 0],
                y: [0, -25, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 md:bottom-20 md:right-20 w-[50vw] md:w-[35vw] max-w-[350px] h-[50vw] md:h-[35vw] max-h-[350px] bg-secondary/30 rounded-full blur-[80px] md:blur-[96px] pointer-events-none"
      />

      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] md:w-[60vw] max-w-[500px] h-[70vw] md:h-[60vw] max-h-[500px] bg-purple-900/20 rounded-full blur-[60px] md:blur-[80px] pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 z-10 flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-6">
        {/* Center badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
          className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm cursor-default max-w-[90vw]"
        >
          <motion.span
            animate={
              prefersReducedMotion
                ? undefined
                : { rotate: [0, 15, -15, 0] }
            }
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-lg md:text-xl"
          >
            ⭐
          </motion.span>
          <span className="text-xs sm:text-sm font-medium text-gray-300">
            Welcome to my universe
          </span>
        </motion.div>

        {/* Title with animated gradient border wrapper */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Animated gradient border/outerglow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-lg blur-sm opacity-30 animate-gradient-rotate" aria-hidden="true" />

          <h1 className="relative text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-2 flex flex-col items-center">
            <motion.span
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_auto] pb-1 md:pb-2 text-center leading-tight"
            >
              Bhagyashree Mohalkar
            </motion.span>
          </h1>
        </motion.div>

        {/* Role with Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="h-8 sm:h-9 md:h-10 flex items-center justify-center"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={typedRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.1 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              >
                {typedRole}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={
                prefersReducedMotion
                  ? undefined
                  : { opacity: [1, 0, 1] }
              }
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-[2px] h-5 sm:h-6 md:h-7 bg-current ml-0.5 text-purple-400 align-middle"
              aria-hidden="true"
            />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-[90vw] sm:max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed font-semibold text-center relative px-2"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
        >
          <span
            className="bg-clip-text text-transparent
               bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500
               italic font-bold text-sm sm:text-base md:text-lg"
          >
            {"\""}Somewhere, something incredible is waiting to be known{"\""}
          </span>

          <span className="not-italic text-primary block mt-1 md:mt-2 text-sm md:text-base">
            — Carl Sagan
          </span>

          <motion.div
            className="mx-auto mt-2 md:mt-3 w-28 sm:w-40 h-1 rounded-full
                  bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
                  shadow-[0_0_18px_rgba(200,100,255,0.45)]"
            animate={
              prefersReducedMotion
                ? undefined
                : { scaleX: [1, 1.1, 1] }
            }
            transition={{ duration: 3, repeat: Infinity }}
            aria-hidden="true"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-3 sm:mt-4 w-full px-4 sm:px-0 sm:w-auto max-w-md sm:max-w-none mx-auto"
        >
          <motion.button
            whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToProjects}
            className="btn-primary h-12 md:h-14 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8"
            data-testid="button-explore-projects"
          >
            <span>🚀</span>
            <span>Explore My Universe</span>
          </motion.button>

          <motion.button
            whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1natTmSV7BQY2Jl6qI1qoPZU12qWuh89g",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="btn-secondary h-12 md:h-14 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8"
            data-testid="button-download-cv"
          >
            <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Download CV</span>
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-6 md:mt-8 text-gray-400"
        >
          <motion.a
            href="https://github.com/BhagyashreeMohalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-0 rounded-lg sm:rounded-none hover:bg-white/5 sm:hover:bg-transparent transition-colors duration-200 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
            whileHover={
              prefersReducedMotion ? undefined : { scale: 1.15, rotateZ: 8 }
            }
            whileTap={{ scale: 0.95 }}
            data-testid="link-github"
            aria-label="GitHub Profile"
          >
            <Github size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bhagyashree-mohalkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-0 rounded-lg sm:rounded-none hover:bg-white/5 sm:hover:bg-transparent transition-colors duration-200 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
            whileHover={
              prefersReducedMotion ? undefined : { scale: 1.15, rotateZ: 8 }
            }
            whileTap={{ scale: 0.95 }}
            data-testid="link-linkedin"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            href="mailto:mohalkarbhagyashri961@gmail.com"
            className="p-2 sm:p-0 rounded-lg sm:rounded-none hover:bg-white/5 sm:hover:bg-transparent transition-colors duration-200 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
            whileHover={
              prefersReducedMotion ? undefined : { scale: 1.15, rotateZ: 8 }
            }
            whileTap={{ scale: 0.95 }}
            data-testid="link-email"
            aria-label="Send Email"
          >
            <Mail size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        </motion.div>
      </div>

      {/* Desktop Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 flex-col items-center gap-2 cursor-pointer group"
        onClick={scrollToProjects}
        role="button"
        tabIndex={0}
        aria-label="Scroll to projects section"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            scrollToProjects();
          }
        }}
      >
        <motion.div
          animate={
            prefersReducedMotion ? undefined : { y: [0, 10, 0] }
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 group-hover:text-gray-400 transition-colors"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Mobile Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 cursor-pointer"
        onClick={scrollToProjects}
        role="button"
        tabIndex={0}
        aria-label="Scroll to projects section"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            scrollToProjects();
          }
        }}
      >
        <motion.div
          animate={
            prefersReducedMotion ? undefined : { y: [0, 8, 0] }
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
