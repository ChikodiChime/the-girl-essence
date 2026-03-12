"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Heart, Shield, Sparkles, UsersRound, CheckCircle } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────────
interface CoreValue {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CoreValuesProps {
  variants: Variants;
  isInView: boolean;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const coreValues: CoreValue[] = [
  {
    icon: Heart,
    title: "Wholesomeness",
    description: "Growth that nurtures mind, character, and purpose.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Doing what is right, even when it is hard.",
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    description: "Helping girls discover and use their voice.",
  },
  {
    icon: UsersRound,
    title: "Community",
    description: "Growing together through shared experiences and support.",
  },
  {
    icon: CheckCircle,
    title: "Accountability",
    description: "Taking responsibility for growth and impact.",
  },
];

// ── Card layouts: [variant, gridSpan] ─────────────────────────────────────────
// Layout:  [ BIG light (row 1+2 left) ] | [ dark, light (row 1 right) ]
//                                        | [ rose, light (row 2 right) ]
// Index:          0                          1     2                3     4

// ── Component ─────────────────────────────────────────────────────────────────
export const CoreValues: React.FC<CoreValuesProps> = ({
  variants,
  isInView,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-20 sm:mb-24"
    >
      {/* ── Section header ── */}
      <motion.div
        variants={variants}
        className="mb-10 sm:mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <p
            style={{
              color: "#c8335a",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            What drives us
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
            Our Core{" "}
            <em style={{ color: "#c8335a", fontStyle: "italic" }}>Values</em>
          </h3>
        </div>
        <p
          style={{
            color: "#6b5d64",
            maxWidth: "340px",
            lineHeight: 1.75,
            fontSize: "clamp(0.92rem, 2.4vw, 0.95rem)",
            flexShrink: 0,
          }}
        >
          The principles that guide everything we do at The Girl Essence.
        </p>
      </motion.div>

      {/* ── Bento grid ── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
        {/* ── Col 1: Big featured card (spans 2 rows) ── */}
        <motion.div
          variants={variants}
          className="value-card vc-light rounded-3xl p-6 sm:p-8 lg:min-h-[340px] lg:h-full"
          style={{
            background: "#faf8f9",
            border: "1.5px solid #ede4e9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <span
            className="vc-number"
            style={{
              fontSize: "clamp(4.5rem, 18vw, 9rem)",
              top: "8px",
              right: "20px",
            }}
          >
            01
          </span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="vc-icon-wrap inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mb-5 sm:mb-6">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h4
              className="vc-title section-title"
              style={{
                fontSize: "clamp(1.35rem, 4vw, 1.65rem)",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              {coreValues[0].title}
            </h4>
            <p
              className="vc-desc"
              style={{
                fontSize: "clamp(0.9rem, 2.6vw, 0.95rem)",
                lineHeight: 1.8,
              }}
            >
              {coreValues[0].description}
            </p>
            <div className="vc-line" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 2 — dark */}
          <motion.div
            variants={variants}
            className="value-card vc-dark rounded-3xl p-5 sm:p-6"
            style={{
              background: "#1a1118",
              border: "1.5px solid #2e2028",
            }}
          >
            <span className="vc-number">02</span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="vc-icon-wrap inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5">
                <Shield className="w-5 h-5" />
              </div>
              <h4
                className="vc-title section-title"
                style={{
                  fontSize: "clamp(1rem, 2.8vw, 1.1rem)",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                {coreValues[1].title}
              </h4>
              <p
                className="vc-desc"
                style={{ fontSize: "0.82rem", lineHeight: 1.65 }}
              >
                {coreValues[1].description}
              </p>
              <div className="vc-line" />
            </div>
          </motion.div>

          {/* Card 3 — light */}
          <motion.div
            variants={variants}
            className="value-card vc-light rounded-3xl p-5 sm:p-6"
            style={{
              background: "#faf8f9",
              border: "1.5px solid #ede4e9",
            }}
          >
            <span className="vc-number">03</span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="vc-icon-wrap inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4
                className="vc-title section-title"
                style={{
                  fontSize: "clamp(1rem, 2.8vw, 1.1rem)",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                {coreValues[2].title}
              </h4>
              <p
                className="vc-desc"
                style={{ fontSize: "0.82rem", lineHeight: 1.65 }}
              >
                {coreValues[2].description}
              </p>
              <div className="vc-line" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-start-2">
          {/* Card 4 — rose */}
          <motion.div
            variants={variants}
            className="value-card vc-rose rounded-3xl p-5 sm:p-6"
            style={{
              background: "linear-gradient(140deg, #c8335a 0%, #7c1933 100%)",
              border: "1.5px solid transparent",
            }}
          >
            <span className="vc-number">04</span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="vc-icon-wrap inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5">
                <UsersRound className="w-5 h-5" />
              </div>
              <h4
                className="vc-title section-title"
                style={{
                  fontSize: "clamp(1rem, 2.8vw, 1.1rem)",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                {coreValues[3].title}
              </h4>
              <p
                className="vc-desc"
                style={{ fontSize: "0.82rem", lineHeight: 1.65 }}
              >
                {coreValues[3].description}
              </p>
              <div className="vc-line" />
            </div>
          </motion.div>

          {/* Card 5 — light */}
          <motion.div
            variants={variants}
            className="value-card vc-light rounded-3xl p-5 sm:p-6"
            style={{
              background: "#faf8f9",
              border: "1.5px solid #ede4e9",
            }}
          >
            <span className="vc-number">05</span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="vc-icon-wrap inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4
                className="vc-title section-title"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                {coreValues[4].title}
              </h4>
              <p
                className="vc-desc"
                style={{ fontSize: "0.82rem", lineHeight: 1.65 }}
              >
                {coreValues[4].description}
              </p>
              <div className="vc-line" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
