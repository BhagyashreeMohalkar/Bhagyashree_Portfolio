import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import generated images
import imgPong from "@assets/generated_images/abstract_space_game_interface.png";
import imgTodo from "@assets/generated_images/modern_dark_mode_dashboard.png";
import imgDocker from "@assets/generated_images/server_container_conceptual_art.png";

const projects = [
  {
    id: 1,
    title: "Astro Pong",
    description: "A multiplayer Pong game with a modern twist, built using Next.js, TailwindCSS, and Django.",
    tags: ["Next.js", "Django", "TailwindCSS"],
    image: imgPong,
    featured: true
  },
  {
    id: 2,
    title: "Todo App",
    description: "A modern, responsive Todo application built with Next.js, React, Redux, and TypeScript. Features CRUD operations, sorting, dark/light theme.",
    tags: ["Next.js", "React", "Redux", "TypeScript", "Jest"],
    image: imgTodo,
    featured: true
  },
  {
    id: 3,
    title: "Inception",
    description: "A Docker-based project to set up a WordPress website with Docker Compose, NGINX, and MariaDB.",
    tags: ["Docker", "WordPress", "NGINX", "MariaDB"],
    image: imgDocker,
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pink-500">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">A showcase of my creative work and technical expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/5 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-black/50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                    Featured
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Github size={20} />
                  </Button>
                  <Button size="icon" className="rounded-full bg-pink-600 hover:bg-pink-500">
                    <ExternalLink size={20} />
                  </Button>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors cursor-pointer">
                  <Github size={16} />
                  <span>View Code</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
