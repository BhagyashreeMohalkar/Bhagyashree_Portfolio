import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      {/* Background Gradient Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <span className="text-xl">🌟</span>
          <span className="text-sm font-medium text-gray-300">Welcome to my universe</span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-600">
            Frontend Developer
          </span>
          <br />
          <span className="text-white">& Creative Coder</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          I craft <span className="text-primary font-semibold">beautiful</span>, <span className="text-secondary font-semibold">interactive</span> web experiences with modern technologies.
          Passionate about clean code, stunning designs, and seamless user experiences.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <Button 
            size="lg" 
            className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Explore My Universe
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-white px-8 h-14 text-lg"
          >
            <FileText className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-6 mt-12 text-gray-400"
        >
          <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="mailto:hello@example.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 flex flex-col items-center gap-2"
      >
        <span>Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
