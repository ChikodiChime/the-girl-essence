"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
    setActiveSection(targetId);
  };

  return (
    <>
      {/* Backdrop blur for mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div
          className={`max-w-6xl lg:mx-auto px-4 sm:px-6 transition-all duration-500 mx-4 `}
        >
          <div
            className={`flex justify-between items-center px-4 lg:px-6 transition-all duration-500 h-16 bg-white backdrop-blur-xl shadow-lg shadow-black/5 rounded-2xl border border-white/20`}
          >
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="The Girl Essence"
                  width={scrolled ? 45 : 55}
                  height={scrolled ? 45 : 55}
                  className="transition-all duration-300"
                />
              </div>
              <div
                className={`hidden sm:block transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-0 lg:opacity-100"}`}
              >
                <span className="text-lg lg:text-xl font-bold text-gray-900">
                  The Girl <span className="text-[#c8335a]">Essence</span>
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#c8335a]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-gradient-to-r from-[#c8335a]/10 to-[#c8335a]/5 rounded-xl -z-10 border border-[#c8335a]/20"
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {activeSection !== link.href.replace("#", "") && (
                    <motion.div
                      className="absolute inset-0 bg-gray-100/0 hover:bg-gray-100/80 rounded-xl -z-10"
                      initial={false}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(200, 51, 90, 0.3), 0 10px 10px -5px rgba(200, 51, 90, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#c8335a] to-[#a02847] text-white font-semibold text-sm rounded-xl shadow-lg shadow-[#c8335a]/25 hover:shadow-xl hover:shadow-[#c8335a]/30 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Involved</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#a02847] to-[#c8335a]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100/80 hover:bg-gray-200/80 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <motion.span
                  animate={
                    menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  className="w-5 h-0.5 bg-gray-700 rounded-full origin-center"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={
                    menuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  className="w-5 h-0.5 bg-gray-700 rounded-full mt-1.5"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={
                    menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  className="w-5 h-0.5 bg-gray-700 rounded-full mt-1.5 origin-center"
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[#c8335a] bg-gradient-to-r from-[#c8335a]/10 to-[#c8335a]/5 border border-[#c8335a]/20 shadow-sm"
                        : "text-gray-700 hover:text-[#c8335a] hover:bg-gray-50 hover:shadow-sm"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href.replace("#", "") && (
                      <motion.div
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-[#c8335a]"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                      />
                    )}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                  className="block mt-4 px-4 py-3 bg-gradient-to-r from-[#c8335a] to-[#a02847] text-white font-semibold rounded-xl text-center shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Involved</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#a02847] to-[#c8335a]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;