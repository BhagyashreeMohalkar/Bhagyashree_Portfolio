import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, FolderGit2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy
      const sections = navItems.map(item => item.name.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 inset-x-0 flex justify-center z-50 pointer-events-none"
    >
      <nav className={cn(
        "pointer-events-auto flex items-center gap-1 p-1.5 rounded-full transition-all duration-300",
        scrolled ? "glass-nav shadow-lg shadow-primary/10" : "bg-transparent"
      )}>
        {navItems.map((item) => {
          const isActive = activeSection === item.name.toLowerCase();
          const Icon = item.icon;
          
          return (
            <button
              key={item.name}
              onClick={() => scrollTo(item.name.toLowerCase())}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2",
                isActive 
                  ? "text-white" 
                  : "text-muted-foreground hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-primary/20 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon size={16} className={isActive ? "text-primary" : ""} />
              <span className="hidden sm:inline">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </motion.div>
  );
}
