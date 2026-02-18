"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Heart, User } from "lucide-react";

interface FounderProps {
  variants: Variants;
  isInView: boolean;
}

export const Founder: React.FC<FounderProps> = ({ variants, isInView }) => {
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
      className="mb-16"
    >
      <motion.div
        variants={variants}
        className="founder-card relative overflow-hidden rounded-3xl p-8 lg:p-12 bg-white"
        style={{
          border: "1.5px solid #ede4e9",
          boxShadow:
            "0 4px 24px rgba(26,17,24,0.06), 0 1px 4px rgba(26,17,24,0.04)",
        }}
      >
        {/* Background accent */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "320px",
            height: "320px",
            borderRadius: "50% 0 0 0",
            background:
              "radial-gradient(circle at 100% 100%, rgba(200,51,90,0.05), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
          {/* Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div
              className="founder-image-wrap relative w-52 h-52 lg:w-full lg:h-72 rounded-2xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(140deg, rgba(200,51,90,0.15) 0%, rgba(160,40,71,0.08) 100%)",
                border: "1.5px solid rgba(200,51,90,0.15)",
              }}
            >
              <User
                style={{
                  width: "72px",
                  height: "72px",
                  color: "rgba(200,51,90,0.35)",
                }}
              />
              {/* Decorative corner dots */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "rgba(200,51,90,0.3)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "rgba(200,51,90,0.15)",
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{
                background: "rgba(200,51,90,0.08)",
                color: "#c8335a",
                border: "1px solid rgba(200,51,90,0.18)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <Heart className="w-3 h-3" />
              The Founder
            </div>

            <h3
              className="section-title mb-5"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "#1a1118",
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
              }}
            >
              Obiamaka Nwachi
            </h3>

            <p
              style={{
                color: "#6b5d64",
                lineHeight: 1.85,
                marginBottom: "24px",
                fontSize: "0.975rem",
              }}
            >
              Obiamaka Nwachi is a girl coach, mentor, and social impact
              advocate passionate about empowering young women to live wholesome
              and purpose-driven lives. Through The Girl Essence, she combines
              mentorship, leadership training, and advocacy to support girls in
              becoming confident leaders and responsible contributors to
              society.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Girl Coach", "Mentor", "Social Impact Advocate"].map((tag) => (
                <span
                  key={tag}
                  className="tag-chip px-4 py-2 rounded-full text-sm font-medium cursor-default"
                  style={{
                    background: "#f4f0f2",
                    color: "#5a4a52",
                    border: "1px solid #ede4e9",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
