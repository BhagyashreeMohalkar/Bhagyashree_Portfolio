import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Hop as Home, User, Briefcase, Code, FolderGit2, Award, Trophy, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Patent", href: "#patent", icon: Award },
  { name: "Certifications", href: "#certifications", icon: Trophy },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy with better threshold
      const sections = navItems.map((item) => item.name.toLowerCase());
      let foundSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            foundSection = section;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed top-6 inset-x-0 justify-center z-50 pointer-events-none"
      >
        <nav
          className={cn(
            "pointer-events-auto flex items-center gap-0.5 sm:gap-1 p-1 sm:p-1.5 rounded-full transition-all duration-300",
            scrolled
              ? "glass-nav shadow-lg shadow-primary/10"
              : "bg-transparent"
          )}
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => scrollTo(item.name.toLowerCase())}
                className={cn(
                  "relative px-2.5 sm:px-3 lg:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1",
                  isActive
                    ? "text-white"
                    : "text-muted-foreground hover:text-white"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/20 rounded-full -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <Icon
                  size={16}
                  className={cn(
                    "transition-colors duration-200",
                    isActive ? "text-primary" : "text-current"
                  )}
                  aria-hidden="true"
                />

                <span className="hidden lg:inline">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </motion.header>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 rounded-xl glass-nav hover:bg-white/5 transition-colors touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobileMenuOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              id="mobile-menu"
              className="md:hidden fixed top-20 left-4 right-4 z-40 rounded-2xl glass-nav p-4 border border-white/10"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.name.toLowerCase();

                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollTo(item.name.toLowerCase())}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-xl transition-all duration-200 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                        isActive
                          ? "bg-primary/20 text-white"
                          : "hover:bg-white/5 text-gray-300"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon
                        size={18}
                        className={isActive ? "text-primary" : ""}
                        aria-hidden="true"
                      />
                      <span className="font-medium">{item.name}</span>

                      {isActive && (
                        <motion.div
                          layoutId="mobile-active-indicator"
                          className="ml-auto w-2 h-2 rounded-full bg-primary"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Decorative gradient bar */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-50" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
