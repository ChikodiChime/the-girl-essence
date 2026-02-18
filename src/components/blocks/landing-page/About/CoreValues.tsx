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
export const CoreValues: React.FC<CoreValuesProps> = ({ variants, isInView }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
  };

  const renderCard = (
    value: CoreValue,
    index: number,
    variant: "vc-light" | "vc-dark" | "vc-rose",
    numLabel: string,
    numStyle?: React.CSSProperties,
    cardStyle?: React.CSSProperties,
    titleSize = "1.1rem",
    iconSize = "w-11 h-11",
    iconInnerSize = "w-5 h-5",
  ) => {
    const Icon = value.icon;
    return (
      <motion.div
        key={value.title}
        variants={variants}
        className={`value-card ${variant} rounded-3xl p-6`}
        style={cardStyle}
      >
        <span className="vc-number" style={numStyle}>
          {numLabel}
        </span>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            className={`vc-icon-wrap inline-flex items-center justify-center ${iconSize} rounded-xl mb-5`}
          >
            <Icon className={iconInnerSize} />
          </div>
          <h4
            className="vc-title section-title"
            style={{ fontSize: titleSize, fontWeight: 700, marginBottom: "6px" }}
          >
            {value.title}
          </h4>
          <p
            className="vc-desc"
            style={{ fontSize: "0.82rem", lineHeight: 1.7 }}
          >
            {value.description}
          </p>
          <div className="vc-line" />
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-24"
    >
      {/* ── Section header ── */}
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
            fontSize: "0.95rem",
            flexShrink: 0,
          }}
        >
          The principles that guide everything we do at The Girl Essence.
        </p>
      </motion.div>

      {/* ── Bento grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "16px",
        }}
      >
        {/* ── Col 1: Big featured card (spans 2 rows) ── */}
        <motion.div
          variants={variants}
          className="value-card vc-light rounded-3xl p-8"
          style={{
            gridColumn: "1",
            gridRow: "1 / 3",
            background: "#faf8f9",
            border: "1.5px solid #ede4e9",
            minHeight: "340px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <span className="vc-number" style={{ fontSize: "9rem", top: "8px", right: "20px" }}>
            01
          </span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="vc-icon-wrap inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6">
              <Heart className="w-7 h-7" />
            </div>
            <h4
              className="vc-title section-title"
              style={{ fontSize: "1.65rem", fontWeight: 700, marginBottom: "10px" }}
            >
              {coreValues[0].title}
            </h4>
            <p className="vc-desc" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              {coreValues[0].description}
            </p>
            <div className="vc-line" />
          </div>
        </motion.div>

        {/* ── Col 2, Row 1: dark + light ── */}
        <div
          style={{
            gridColumn: "2",
            gridRow: "1",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {/* Card 2 — dark */}
          <motion.div
            variants={variants}
            className="value-card vc-dark rounded-3xl p-6"
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
                style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}
              >
                {coreValues[1].title}
              </h4>
              <p className="vc-desc" style={{ fontSize: "0.82rem", lineHeight: 1.65 }}>
                {coreValues[1].description}
              </p>
              <div className="vc-line" />
            </div>
          </motion.div>

          {/* Card 3 — light */}
          <motion.div
            variants={variants}
            className="value-card vc-light rounded-3xl p-6"
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
                style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}
              >
                {coreValues[2].title}
              </h4>
              <p className="vc-desc" style={{ fontSize: "0.82rem", lineHeight: 1.65 }}>
                {coreValues[2].description}
              </p>
              <div className="vc-line" />
            </div>
          </motion.div>
        </div>

        {/* ── Col 2, Row 2: rose + light ── */}
        <div
          style={{
            gridColumn: "2",
            gridRow: "2",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {/* Card 4 — rose */}
          <motion.div
            variants={variants}
            className="value-card vc-rose rounded-3xl p-6"
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
                style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}
              >
                {coreValues[3].title}
              </h4>
              <p className="vc-desc" style={{ fontSize: "0.82rem", lineHeight: 1.65 }}>
                {coreValues[3].description}
              </p>
              <div className="vc-line" />
            </div>
          </motion.div>

          {/* Card 5 — light */}
          <motion.div
            variants={variants}
            className="value-card vc-light rounded-3xl p-6"
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
                style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}
              >
                {coreValues[4].title}
              </h4>
              <p className="vc-desc" style={{ fontSize: "0.82rem", lineHeight: 1.65 }}>
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