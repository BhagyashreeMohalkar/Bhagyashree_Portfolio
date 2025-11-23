import { motion } from "framer-motion";
import { Award, FileText } from "lucide-react";

export default function Patent() {
  return (
    <section id="patent" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Patent
            </h2>
            <Award className="opacity-0 w-8 h-8" /> {/* Balancing for perfect centering */}
          </div>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-purple-500/20 rounded-lg p-8 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-sm">
            
            {/* Centered Title */}
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              Precision Control Brake With Ergonomic Grip
            </h3>

            <div className="flex justify-center items-center gap-2 text-purple-300 mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">December 2024</span>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-500/30 text-purple-300">
                    ✓
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Designed an ergonomic lever with a pivot mechanism for precision and durability in manual operations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-500/30 text-purple-300">
                    ✓
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Optimized for comfort and control with a curved handle and finger grooves, ensuring user safety and efficiency.
                </p>
              </motion.div>
            </div>

            <div className="mt-6 pt-6 border-t border-purple-500/20 flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm text-purple-300">Patent Granted</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
