"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: any) => {
    setActiveLink(href);
    setMenuOpen(false);
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-gray-200/50"
            : "bg-white backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo with enhanced hover effect */}
            <motion.a
              href="/"
              onClick={() => handleLinkClick("/")}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <Image src="/logo.png" alt="Logo" width={60} height={60} />
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8335a]/60 to-[#a02847]/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
              </div>
              {/* <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  The Girl Essence
                </span>
              </div> */}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <motion.a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeLink === link.href
                        ? "text-[#c8335a]"
                        : "text-gray-700 hover:text-[#c8335a]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    {activeLink === link.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gray-50 rounded-lg opacity-0 -z-10"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                </motion.div>
              ))}

              <Button
                href="/donate"
                variant="primary"
                size="md"
                className="ml-6"
                gradientFrom="#c8335a"
                gradientTo="#a02847"
                hoverGradientFrom="#a02847"
                hoverGradientTo="#8b1f3a"
                shadowColor="rgba(200, 51, 90, 0.4)"
              >
                Donate
              </Button>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#c8335a] focus:ring-offset-2"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  <motion.span
                    animate={
                      menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                    }
                    className="w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center"
                  />
                  <motion.span
                    animate={
                      menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }
                    }
                    className="w-5 h-0.5 bg-gray-700 rounded-full mt-1.5 transition-all duration-300"
                  />
                  <motion.span
                    animate={
                      menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                    className="w-5 h-0.5 bg-gray-700 rounded-full mt-1.5 transition-all duration-300 origin-center"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeLink === link.href
                        ? "text-[#c8335a] bg-[#c8335a]/5 border-l-4 border-[#c8335a]"
                        : "text-gray-700 hover:text-[#c8335a] hover:bg-gray-50"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg">{link.name}</span>
                  </motion.a>
                ))}

                <motion.a
                  href="/donate"
                  onClick={() => handleLinkClick("/donate")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block mt-6 mx-4"
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-[#c8335a] to-[#a02847] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    Donate Now
                  </div>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-18"></div>
    </>
  );
};

export default Navbar;
