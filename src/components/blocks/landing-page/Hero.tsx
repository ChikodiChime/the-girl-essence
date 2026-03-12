"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

export default function EnhancedHero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effect for background elements
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 25,
        y: (e.clientY / window.innerHeight - 0.5) * 25,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#fffafb] selection:bg-[#c8335a]/20"
    >
      {/* 1. Ethereal Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-[10%] -left-[5%] h-[55%] w-[60%] rounded-full bg-gradient-to-br from-[#fce7f3] to-transparent blur-[100px] opacity-60 sm:blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-[20%] -right-[10%] h-[45%] w-[50%] rounded-full bg-gradient-to-tl from-[#ffe4e6] to-transparent blur-[80px] opacity-50 sm:blur-[100px]"
        />

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-100 mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* 2. Text Content (Column 1-7) */}
          <div className="space-y-4 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c8335a]/10 bg-[#c8335a]/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#c8335a] sm:mb-6 sm:px-4 sm:text-sm sm:tracking-wide">
                <Sparkles className="w-4 h-4" /> Mentorship • Advocacy • Growth
              </span>

              <h1
                className="font-serif font-medium text-gray-900 leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 9vw, 5.5rem)" }}
              >
                Raising <span className="italic font-light">Whole</span>, <br />
                <span className="relative">
                  Confident
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2"
                    viewBox="0 0 300 20"
                    fill="none"
                  >
                    <path
                      d="M5 15Q150 5 295 15"
                      stroke="#c8335a"
                      strokeWidth="4"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>
                </span>{" "}
                & <br />
                <span className="text-[#c8335a]">Purpose-Driven</span> Girls
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl text-base leading-relaxed text-gray-600 font-light sm:text-lg md:text-xl"
            >
              Empowering young women aged 16–30 to redefine their narrative
              through curated mentorship and a community built on authenticity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col gap-3 pt-3 sm:flex-row sm:gap-4 sm:pt-4"
            >
              <Link
                href={ROUTES.programs}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#c8335a] px-6 py-3.5 text-center font-bold text-white shadow-2xl shadow-[#c8335a]/20 transition-all hover:bg-[#a02847] sm:px-8 sm:py-4"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={ROUTES.contact}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3.5 text-center font-bold text-gray-900 transition-all hover:border-[#c8335a] hover:text-[#c8335a] sm:px-8 sm:py-4"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>

          {/* 3. Visual Element (Column 8-12) */}
          <div className="relative lg:col-span-5">
            <motion.div
              style={{
                rotateX: mousePosition.y * -0.1,
                rotateY: mousePosition.x * 0.1,
              }}
              className="relative mx-auto w-full max-w-[420px] perspective-1000 sm:max-w-[460px]"
            >
              {/* Main Image with refined border radius */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] shadow-[0_40px_80px_-20px_rgba(200,51,90,0.15)] sm:rounded-[60px] lg:rounded-[84px] z-20">
                <Image
                  src="/gallery/img25.jpeg"
                  alt="Young women from The Girl Essence community"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  quality={85}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 36vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              </div>

              {/* Glassmorphic Stat Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 right-2 z-30 rounded-2xl border border-white/50 bg-white/85 p-3 shadow-xl backdrop-blur-md sm:-top-6 sm:-right-6 sm:p-4 lg:-right-8 lg:rounded-3xl lg:p-6"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="rounded-xl bg-[#c8335a]/10 p-2">
                    <Users className="h-5 w-5 text-[#c8335a] sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 sm:text-2xl">
                      4000+
                    </div>
                    <div className="text-[10px] font-medium text-gray-500 sm:text-xs">
                      Impacted
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-5 left-2 z-30 rounded-2xl border border-white/50 bg-white/85 p-3 shadow-xl backdrop-blur-md sm:bottom-10 sm:-left-6 sm:p-4 lg:bottom-20 lg:-left-10 lg:rounded-3xl lg:p-6"
              >
                <div className="text-2xl font-bold text-[#c8335a] sm:text-3xl">
                  16-30
                </div>
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-widest">
                  Age Focus
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. Elegant Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-4 sm:flex md:bottom-10">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c8335a] to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          Scroll
        </span>
      </div>
    </section>
  );
}
