import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profileImg from "@assets/generated_images/professional_developer_portrait_dark_background.png";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">Get to know the person behind the code</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              I'm a passionate frontend developer with a love for creating beautiful, 
              functional web experiences. My journey in web development started with 
              curiosity and has evolved into a dedication to crafting digital solutions 
              that make a difference.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or learning about the latest trends 
              in web development. I believe in continuous learning and pushing the 
              boundaries of what's possible on the web.
            </p>
            <p>
              My goal is to bridge the gap between design and development, creating 
              seamless user experiences that are both visually stunning and highly functional.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">2+</h3>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-1">15+</h3>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-secondary mb-1">42</h3>
                <p className="text-sm text-gray-400">School Student</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-96 md:w-80 md:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-card group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
               <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-secondary/30 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
