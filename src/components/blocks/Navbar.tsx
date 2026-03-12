"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/config/routes";

const navLinks = [
  { name: "Home", href: ROUTES.home },
  { name: "About", href: ROUTES.about },
  { name: "Programs", href: ROUTES.programs },
  { name: "Gallery", href: ROUTES.gallery },
  // { name: "Contact", href: ROUTES.contact },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
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
          scrolled ? "py-2" : "py-3 sm:py-4"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 lg:px-6 transition-all duration-500">
          <div
            className={`flex justify-between items-center px-3 sm:px-4 lg:px-6 transition-all duration-500 rounded-2xl border ${
              scrolled
                ? "h-14 bg-white/95 backdrop-blur-xl shadow-xl shadow-black/10 border-gray-200/50"
                : "h-14 sm:h-16 bg-white/80 backdrop-blur-lg shadow-lg shadow-black/5 border-white/30"
            }`}
          >
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={ROUTES.home}
                className="flex items-center gap-2 sm:gap-3 group min-w-0"
              >
                <div className="relative">
                  <Image
                    src="/favicon.svg"
                    alt="The Girl Essence"
                    width={scrolled ? 36 : 40}
                    height={scrolled ? 36 : 40}
                    className="transition-all duration-300"
                  />
                </div>
                <div
                  className={`min-w-0 transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-100 lg:opacity-100"}`}
                >
                  <span
                    className="block max-w-[9rem] sm:max-w-none text-sm sm:text-base lg:text-xl font-bold text-gray-900 leading-none sm:leading-tight"
                    style={{
                      fontFamily:
                        "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(1rem, 3.2vw, 1.75rem)",
                    }}
                  >
                    The Girl <span className="text-[#c8335a]">Essence</span>
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 block ${
                      isActive(link.href)
                        ? "text-[#c8335a]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
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
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={ROUTES.contact}
                  className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#c8335a] to-[#a02847] text-white font-semibold text-sm rounded-xl shadow-lg shadow-[#c8335a]/25 hover:shadow-xl hover:shadow-[#c8335a]/30 transition-all duration-300 relative overflow-hidden group block"
                >
                  <span className="relative z-10">Get Involved</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#a02847] to-[#c8335a]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-gray-100/80 hover:bg-gray-200/80 transition-colors duration-200 flex-shrink-0"
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
              className="lg:hidden absolute top-full left-3 right-3 sm:left-4 sm:right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-3 sm:p-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 ${
                        isActive(link.href)
                          ? "text-[#c8335a] bg-gradient-to-r from-[#c8335a]/10 to-[#c8335a]/5 border border-[#c8335a]/20 shadow-sm"
                          : "text-gray-700 hover:text-[#c8335a] hover:bg-gray-50 hover:shadow-sm"
                      }`}
                    >
                      {link.name}
                      {isActive(link.href) && (
                        <motion.div
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-[#c8335a]"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={ROUTES.contact}
                    onClick={() => setMenuOpen(false)}
                    className="block mt-4 px-4 py-3 bg-gradient-to-r from-[#c8335a] to-[#a02847] text-white font-semibold rounded-xl text-center text-sm sm:text-base shadow-lg relative overflow-hidden"
                  >
                    <span className="relative z-10">Get Involved</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
