"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles, Heart, Target, Users, ArrowRight } from "lucide-react";

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
          className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#fce7f3] to-transparent blur-[120px] opacity-60" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#ffe4e6] to-transparent blur-[100px] opacity-50" 
        />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-100 mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* 2. Text Content (Column 1-7) */}
          <div className="lg:col-span-7 space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8335a]/5 border border-[#c8335a]/10 text-[#c8335a] text-sm font-bold tracking-wide mb-6 uppercase">
                <Sparkles className="w-4 h-4" /> Mentorship • Advocacy • Growth
              </span>
              
              <h1 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 leading-[1.1] tracking-tight">
                Raising <span className="italic font-light">Whole</span>, <br />
                <span className="relative">
                  Confident
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                    <path d="M5 15Q150 5 295 15" stroke="#c8335a" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
                  </svg>
                </span> & <br />
                <span className="text-[#c8335a]">Purpose-Driven</span> Girls
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed font-light"
            >
              Empowering young women aged 16–30 to redefine their narrative through 
              curated mentorship and a community built on authenticity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="group px-8 py-4 bg-[#c8335a] text-white rounded-full font-bold shadow-2xl shadow-[#c8335a]/20 hover:bg-[#a02847] transition-all flex items-center justify-center gap-3">
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold border border-gray-200 hover:border-[#c8335a] hover:text-[#c8335a] transition-all">
                Get Involved
              </button>
            </motion.div>
          </div>

          {/* 3. Visual Element (Column 8-12) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{
                rotateX: mousePosition.y * -0.1,
                rotateY: mousePosition.x * 0.1,
              }}
              className="relative aspect-[4/5] w-full max-w-[450px] mx-auto perspective-1000"
            >
              {/* Main Image with refined border radius */}
              <div className="relative w-full h-[500px] rounded-[60px] lg:rounded-[100px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(200,51,90,0.15)] z-20">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: "url('/gallery/img25.jpeg')" }} 
                />
              </div>

              {/* Glassmorphic Stat Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-8 z-30 backdrop-blur-md bg-white/80 p-6 rounded-3xl border border-white/50 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#c8335a]/10 rounded-xl">
                    <Users className="w-6 h-6 text-[#c8335a]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-xs text-gray-500 font-medium">Impacted</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-12 z-30 backdrop-blur-md bg-white/80 p-6 rounded-3xl border border-white/50 shadow-xl"
              >
                <div className="text-3xl font-bold text-[#c8335a]">16-30</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-widest">Age Focus</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* 4. Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c8335a] to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Scroll</span>
      </div>
    </section>
  );
}