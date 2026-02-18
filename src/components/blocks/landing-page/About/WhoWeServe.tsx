"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WhoWeServeItem {
  label: string;
  icon: LucideIcon;
}

interface WhoWeServeProps {
  items: WhoWeServeItem[];
  variants: Variants;
  isInView: boolean;
}

export const WhoWeServe: React.FC<WhoWeServeProps> = ({
  items,
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

  const descriptions = [
    "Girls in secondary school navigating identity, purpose, and academic life.",
    "Young women in university building confidence and career direction.",
    "Women finding their voice, boundaries, and life vision.",
    "Girls stepping into leadership with clarity and courage.",
  ];

  const palettes = [
    {
      bg: "#faf8f9",
      border: "#ede4e9",
      iconBg: "rgba(200,51,90,0.1)",
      iconColor: "#c8335a",
      textColor: "#1a1118",
      subColor: "#7a6c73",
    },
    {
      bg: "#1a1118",
      border: "#2e2028",
      iconBg: "rgba(255,255,255,0.1)",
      iconColor: "rgba(255,255,255,0.85)",
      textColor: "white",
      subColor: "rgba(255,255,255,0.5)",
    },
    {
      bg: "linear-gradient(140deg, #c8335a, #7c1933)",
      border: "transparent",
      iconBg: "rgba(255,255,255,0.18)",
      iconColor: "white",
      textColor: "white",
      subColor: "rgba(255,255,255,0.7)",
    },
    {
      bg: "#faf8f9",
      border: "#ede4e9",
      iconBg: "rgba(200,51,90,0.1)",
      iconColor: "#c8335a",
      textColor: "#1a1118",
      subColor: "#7a6c73",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-24"
    >
      <motion.div
        variants={variants}
        className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
      >
        <div>
          <p
            style={{
              color: "#c8335a",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Our community
          </p>
          <h3
            className="section-title"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#1a1118",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Who We{" "}
            <em style={{ color: "#c8335a", fontStyle: "italic" }}>Serve</em>
          </h3>
        </div>
        <p
          style={{
            color: "#6b5d64",
            maxWidth: "340px",
            lineHeight: 1.7,
            fontSize: "0.9rem",
            flexShrink: 0,
          }}
        >
          We meet girls and young women wherever they are in their journey.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item, i) => {
          const p = palettes[i];
          return (
            <motion.div
              key={item.label}
              variants={variants}
              className="serve-card rounded-3xl p-7"
              style={{
                background: p.bg,
                border: `1.5px solid ${p.border}`,
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <span className="sc-number">{`0${i + 1}`}</span>

              <div
                className="sc-icon-ring inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                style={{ background: p.iconBg }}
              >
                <item.icon className="w-7 h-7" style={{ color: p.iconColor }} />
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <h4
                  className="section-title"
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: p.textColor,
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.label}
                </h4>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: p.subColor,
                    lineHeight: 1.7,
                  }}
                >
                  {descriptions[i]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
