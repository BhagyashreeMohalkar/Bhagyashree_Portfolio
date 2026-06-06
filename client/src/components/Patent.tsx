
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
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Patent
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Patent 1 — 2026 (First) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-green-500/20 rounded-lg p-8 hover:border-green-500/40 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Hybrid Solar-Wind Energy Harvesting Pole System
                  </h3>
                  <div className="flex items-center gap-2 text-green-300">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-medium">No. 485928-001 | January 2026</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-green-500/20 flex items-center gap-2 mt-auto">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-300">Patent Granted</span>
              </div>
            </div>
          </motion.div>

          {/* Patent 2 — 2024 (Second) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-purple-500/20 rounded-lg p-8 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Precision Control Brake With Ergonomic Grip
                  </h3>
                  <div className="flex items-center gap-2 text-purple-300">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-medium">December 2024</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-purple-500/20 flex items-center gap-2 mt-auto">
                <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-sm text-purple-300">Patent Granted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
