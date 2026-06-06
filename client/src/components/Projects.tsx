import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import imgHeart from "@assets/images/ai_heart_disease_detection_interface.png";
import imgNexus from "@assets/images/nexus_ai_network_concept.png";
import imgSupermarket from "@assets/images/supermarket_transaction_analysis.png";
import imgCancer from "@assets/images/cancer_detection_medical_imaging.png";
import imgTraceFinder from "@assets/images/tracefinder_forensic_scanner.png";
import imgBloodConnect from "@assets/images/blood_connect_pro.png";

const projects = [
   {
    id: 1,
    title: "TraceFinder",
    subtitle: "Forensic Scanner Identification",
    description: "An AI-driven forensic scanner identification system that analyzes scanner-specific digital fingerprints to determine the source of scanned documents. Achieved 94.64% accuracy and a weighted F1-score of 0.948 on a dataset of 4,500+ scanned images across 7 scanner classes, enabling reliable document origin verification and supporting digital forensic investigations.",
    tags: ["AI", "Forensics", "Computer Vision", "Python"],
    image: imgTraceFinder,
    featured: true,
    github: "https://github.com/AI-TraceFinder/Bhagyashree_Mohalkar_TraceFinder---Forensic-Scanner-Identification",
  },
  {
    id: 2,
    title: "Hridayam",
    subtitle: "AI-powered Heart Disease Detection",
    description: "A Heart Disease Detection System leveraging machine learning models to predict cardiovascular risk from 13 patient health parameters. Trained on 1,000+ medical records and integrated into a Flask web application, providing instant risk analysis and aiding early healthcare decision-making.",
    tags: ["Machine Learning", "Python", "Healthcare AI", "Streamlit"],
    image: imgHeart,
    featured: true,
    github: "https://github.com/BhagyashreeMohalkar/Hridayam--AI-powered-Heart-disease-Detection",
  },
  {
    id: 3,
    title: "Nexus.AI",
    subtitle: "Next-Gen Artificial Intelligence",
    description:
      "A Hybrid NLP chatbot that combines regex-based intent handling with SpaCy word embeddings and cosine similarity for semantic question matching. Trained on 3,500+ labeled conversations, achieving 85.71% accuracy and a macro F1-score of 67.59%.",
    tags: ["Artificial Intelligence", "Neural Networks", "Deep Learning", "Python"],
    image: imgNexus,
    featured: true,
    github: "https://github.com/BhagyashreeMohalkar/Nexus.AI-",
  },
  {
    id: 4,
    title: "SuperMarket Transaction Analysis",
    subtitle: "using Association Rule Mining",
    description:
      "Developed a Flask-based Market Basket Analysis system using Apriori and FP-Growth algorithms to identify frequent itemsets and product associations from supermarket transaction data. Generated recommendations using Support, Confidence, and Lift metrics, and visualized purchasing patterns through an interactive dashboard.",
    tags: ["FP-Growth", "Apriori", "Association Rule Mining", "Chart.js"],
    image: imgSupermarket,
    featured: true,
    github: "https://github.com/BhagyashreeMohalkar/Super-Market-Transaction-Analysis",
  },
  {
    id: 5,
    title: "Cancerous Tissue Detection",
    subtitle: "with Logistic Regression",
    description:
      "A high-precision diagnostic tool utilizing Logistic Regression to identify cancerous tissues from medical imaging data, aiding in early and accurate diagnosis.",
    tags: ["Logistic Regression", "Medical Imaging", "Python", "Scikit-learn"],
    image: imgCancer,
    featured: false,
    github: "https://github.com/BhagyashreeMohalkar/Cancerous-Tissue-Detection-with-Logistic-Regression",
  },
 {
    id: 6,
    title: "BloodLink",
    subtitle: "Emergency Donor Finder Website",
    description: "Developed a blood donation management platform that connects donors, hospitals, and blood banks. Features donor registration, blood availability tracking, emergency donor matching, and real-time request management to facilitate faster access to blood during emergencies.",
    tags: ["Healthcare", "Web Development", "Database", "Emergency Response", "PHP", "MySQL"],
    image: imgBloodConnect,
    featured: false,
    github: "https://github.com/BhagyashreeMohalkar/blood-connect-pro",
},
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-pink-500">
            Featured Projects
          </h2>
          <div className="w-16 md:w-20 h-1 bg-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            A showcase of my creative work and technical expertise
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="group bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(236,72,153,0.3)] flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/50">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] md:text-xs font-semibold text-white border border-white/10 z-10">
                    Featured
                  </div>
                )}

                {/* Hover Overlay Buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10 px-4">
                  {/* GitHub Button */}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                    onClick={() => window.open(project.github, "_blank")}
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <Github size={18} />
                  </Button>

                  {/* ExternalLink (placeholder) */}
                  <Button
                    size="icon"
                    className="rounded-full bg-pink-600 hover:bg-pink-500 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                    aria-label={`Open ${project.title} demo`}
                  >
                    <ExternalLink size={18} />
                  </Button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 md:p-6 flex flex-col flex-grow relative">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="mb-2">
                  <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-pink-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs md:text-sm text-pink-500/80 font-medium mt-1">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-gray-400 mb-4 md:mb-6 flex-grow text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs md:text-sm font-medium bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Code */}
                <div
                  className="mt-4 md:mt-6 pt-3 border-t border-white/5 flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors cursor-pointer group/link"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github size={14} />
                  <span className="group-hover/link:underline text-xs md:text-sm">View Code</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Other Projects Button (Premium Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="
              px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center gap-2
              bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500
              text-gray-900 hover:shadow-lg transition-all duration-300 relative overflow-hidden
            "
            onClick={() =>
              window.open(
                'https://github.com/BhagyashreeMohalkar?tab=repositories',
                '_blank'
              )
            }
            data-testid="button-explore-projects-other"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore other projects
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </span>
            <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 bg-white" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
