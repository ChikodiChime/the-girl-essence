"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Target, Sparkles } from "lucide-react";

interface VisionMissionProps {
  variants: Variants;
  isInView: boolean;
}

export const VisionMission: React.FC<VisionMissionProps> = ({
  variants,
  isInView,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid md:grid-cols-2 gap-4 sm:gap-5 mb-20 sm:mb-24"
    >
      {/* Vision */}
      <motion.div
        variants={variants}
        className="noise-bg card-shimmer relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-11 text-white"
        style={{
          background:
            "linear-gradient(140deg, #c8335a 0%, #8c1f3f 60%, #5a1029 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "min(220px, 42vw)",
            height: "min(220px, 42vw)",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "30px",
            width: "min(100px, 22vw)",
            height: "min(100px, 22vw)",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }}
        />
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold mb-5 sm:mb-7"
            style={{
              background: "rgba(255,255,255,0.18)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Target className="w-3 h-3" />
            Our Vision
          </div>
          <p
            className="section-title"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
              fontWeight: 600,
              lineHeight: 1.55,
            }}
          >
            To raise a generation of confident, wholesome, and purpose-driven
            young women who positively transform their communities.
          </p>
        </div>
      </motion.div>

      {/* Mission */}
      <motion.div
        variants={variants}
        className="noise-bg card-shimmer relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-11 text-white"
        style={{ background: "#1a1118" }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "-50px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(200,51,90,0.18)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "rgba(200,51,90,0.08)",
            pointerEvents: "none",
          }}
        />
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold mb-5 sm:mb-7"
            style={{
              background: "rgba(255,255,255,0.1)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Sparkles className="w-3 h-3" />
            Our Mission
          </div>
          <p
            className="section-title"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
              fontWeight: 600,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            To empower girls and young women through mentorship, education,
            leadership training, and advocacy—equipping them with the tools they
            need to make informed life choices and achieve personal and societal
            impact.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
