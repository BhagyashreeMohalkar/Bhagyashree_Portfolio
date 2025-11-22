import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AI & Machine Learning Specialization",
      issuer: "Coursera",
      date: "2024",
      credential: "Verified Certificate",
      link: "https://drive.google.com/",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Advanced Deep Learning",
      issuer: "Udacity",
      date: "2024",
      credential: "Nanodegree Certification",
      link: "https://drive.google.com/",
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Data Science with Python",
      issuer: "IBM",
      date: "2023",
      credential: "Professional Certificate",
      link: "https://drive.google.com/",
      color: "from-orange-500 to-red-400"
    },
    {
      id: 4,
      title: "Cloud Computing Fundamentals",
      issuer: "Google Cloud",
      date: "2023",
      credential: "Associate Cloud Engineer",
      link: "https://drive.google.com/",
      color: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-lg blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-700/50 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
                <div className="mb-4">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} bg-clip-text text-transparent text-xs font-semibold`}>
                    {cert.issuer}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-400">
                    <span className="text-gray-300 font-medium">Type:</span> {cert.credential}
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="text-gray-300 font-medium">Year:</span> {cert.date}
                  </p>
                </div>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 bg-gradient-to-r ${cert.color} text-white/90 hover:shadow-lg hover:shadow-current/50`}
                  data-testid={`button-certificate-${cert.id}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-400"
        >
          <p className="text-sm">
            More certifications coming soon. Update the drive links to your certificate URLs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
