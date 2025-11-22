import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import imgHeart from "@assets/images/ai_heart_disease_detection_interface.png";
import imgNexus from "@assets/images/nexus_ai_network_concept.png";
import imgMental from "@assets/images/mental_health_analytics_dashboard.png";
import imgCancer from "@assets/images/cancer_detection_medical_imaging.png";
import imgShoes from "@assets/images/smart_iot_navigation_shoes.png";
import imgIrrigation from "@assets/images/smart_irrigation_iot_system.png";

const projects = [
  {
    id: 1,
    title: "Hridayam",
    subtitle: "AI-powered Heart Disease Detection",
    description: "An advanced medical AI system that predicts heart disease risk using machine learning algorithms. Features a user-friendly interface for instant analysis and health insights.",
    tags: ["Machine Learning", "Python", "Healthcare AI", "Streamlit"],
    image: imgHeart,
    featured: true
  },
  {
    id: 2,
    title: "Nexus.AI",
    subtitle: "Next-Gen Artificial Intelligence",
    description: "A comprehensive AI platform designed to bridge the gap between complex neural networks and practical applications. Focuses on scalability and real-time processing.",
    tags: ["Artificial Intelligence", "Neural Networks", "Deep Learning", "Python"],
    image: imgNexus,
    featured: true
  },
  {
    id: 3,
    title: "Mental Fitness Tracker",
    subtitle: "using Machine Learning",
    description: "Analyzes global mental health data to predict fitness trends. Uses Linear Regression and Random Forest models to provide actionable insights for mental well-being.",
    tags: ["Machine Learning", "Data Analytics", "Random Forest", "Pandas"],
    image: imgMental,
    featured: true
  },
  {
    id: 4,
    title: "Cancerous Tissue Detection",
    subtitle: "with Logistic Regression",
    description: "A high-precision diagnostic tool utilizing Logistic Regression to identify cancerous tissues from medical imaging data, aiding in early and accurate diagnosis.",
    tags: ["Logistic Regression", "Medical Imaging", "Python", "Scikit-learn"],
    image: imgCancer,
    featured: false
  },
  {
    id: 5,
    title: "Smart Navigation Shoes",
    subtitle: "IoT Wearable Tech",
    description: "Innovative footwear embedded with sensors and IoT connectivity to provide haptic navigation feedback, designed to assist visually impaired users.",
    tags: ["IoT", "Arduino", "Sensors", "Wearable Tech"],
    image: imgShoes,
    featured: false
  },
  {
    id: 6,
    title: "Smart Irrigation System",
    subtitle: "Soil Moisture Sensing",
    description: "Automated agricultural solution that monitors soil moisture levels in real-time and optimizes water usage through intelligent irrigation control.",
    tags: ["IoT", "Automation", "Smart Agriculture", "C++"],
    image: imgIrrigation,
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
              whileHover={{ y: -10 }}
              className="group bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(236,72,153,0.3)] flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-black/50">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10 z-10">
                    Featured
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  <Button size="icon" variant="secondary" className="rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Github size={20} />
                  </Button>
                  <Button size="icon" className="rounded-full bg-pink-600 hover:bg-pink-500 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <ExternalLink size={20} />
                  </Button>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                {/* Subtle gradient shine effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-pink-500/80 font-medium mt-1">{project.subtitle}</p>
                  )}
                </div>
                
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
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

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors cursor-pointer group/link">
                  <Github size={16} />
                  <span className="group-hover/link:underline">View Code</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Explore Other Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ y: -3 }}
            className="btn-secondary h-14 text-lg flex items-center justify-center gap-2"
            onClick={() => window.open('https://github.com/BhagyashreeMohalkar?tab=repositories', '_blank')}
            data-testid="button-explore-projects-other"
          >
            Explore other projects
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
