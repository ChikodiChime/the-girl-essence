"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WhatWeDoItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhatWeDoProps {
  items: WhatWeDoItem[];
  variants: Variants;
  isInView: boolean;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-24"
    >
      <motion.div variants={variants} className="text-center mb-14">
        <h3
          className="section-title mb-3"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#1a1118",
            letterSpacing: "-0.01em",
          }}
        >
          What We{" "}
          <em style={{ color: "#c8335a", fontStyle: "italic" }}>Do</em>
        </h3>
        <p
          style={{
            color: "#6b5d64",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Our work blends mentorship, advocacy, leadership development, and
          practical skill-building to help girls become wholesome women.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={variants}
            className="wwd-card rounded-2xl p-7 bg-white"
            style={{
              border: "1.5px solid #f0eaed",
              boxShadow: "0 2px 12px rgba(26,17,24,0.04)",
            }}
          >
            <div
              className="wwd-icon inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
              style={{
                background: "linear-gradient(135deg, #c8335a, #a02847)",
              }}
            >
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <h4
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#1a1118",
                marginBottom: "8px",
              }}
            >
              {item.title}
            </h4>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#7a6c73",
                lineHeight: 1.72,
              }}
            >
              {item.description}
            </p>
            <div className="wwd-line" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
