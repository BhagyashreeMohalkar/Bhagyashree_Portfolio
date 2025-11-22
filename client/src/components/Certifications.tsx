import { motion } from "framer-motion";
import { Trophy, Star, Zap } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AI & Machine Learning Specialization",
      issuer: "Coursera",
      date: "2024",
      link: "https://drive.google.com/",
      icon: "🤖",
      accentColor: "from-blue-500 via-blue-400 to-cyan-400"
    },
    {
      id: 2,
      title: "Advanced Deep Learning",
      issuer: "Udacity",
      date: "2024",
      link: "https://drive.google.com/",
      icon: "🧠",
      accentColor: "from-purple-500 via-purple-400 to-pink-400"
    },
    {
      id: 3,
      title: "Data Science with Python",
      issuer: "IBM",
      date: "2023",
      link: "https://drive.google.com/",
      icon: "📊",
      accentColor: "from-orange-500 via-orange-400 to-red-400"
    },
    {
      id: 4,
      title: "Cloud Computing Fundamentals",
      issuer: "Google Cloud",
      date: "2023",
      link: "https://drive.google.com/",
      icon: "☁️",
      accentColor: "from-cyan-500 via-blue-400 to-indigo-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          style={{ top: "-10%", left: "-10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          style={{ bottom: "-10%", right: "-10%" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and credentials validating expertise
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group"
            >
              {/* Glowing background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.accentColor} rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500 -z-10`} />
              
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                <div className={`h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-900/40 border-2 border-gray-700/50 group-hover:border-gray-600 transition-all duration-300 backdrop-blur-md`}>
                  
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-24 h-24 mb-6 rounded-full bg-gradient-to-br ${cert.accentColor} p-1 group-hover:shadow-xl group-hover:shadow-current/50 transition-all duration-300`}
                  >
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-4xl">{cert.icon}</span>
                    </div>
                    
                    {/* Rotating border */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${cert.accentColor} opacity-30`}
                      style={{
                        backgroundClip: "border-box",
                        WebkitMaskImage: "radial-gradient(circle, transparent 85%, black 100%)",
                        maskImage: "radial-gradient(circle, transparent 85%, black 100%)",
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white text-center mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  
                  <div className="text-center mb-4 flex-grow flex flex-col justify-center">
                    <p className={`text-sm font-semibold bg-gradient-to-r ${cert.accentColor} bg-clip-text text-transparent mb-1`}>
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>

                  {/* View Button */}
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 bg-gradient-to-r ${cert.accentColor} text-gray-900 hover:shadow-lg transition-all duration-300 relative overflow-hidden group/btn`}
                    data-testid={`button-certificate-${cert.id}`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      View
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-gray-700/50 rounded-xl p-6 text-center backdrop-blur-sm"
        >
          <p className="text-gray-300 text-sm">
            <span className="text-yellow-400 font-semibold">💡 Tip:</span> Click the buttons above to view your certificate links. Update them with your Google Drive or certificate URLs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
