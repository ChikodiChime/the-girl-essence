"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  Heart,
  Users,
  Target,
  Sparkles,
  Shield,
  HandHeart,
  UsersRound,
  CheckCircle,
  GraduationCap,
  Megaphone,
  BookOpen,
  MessageCircle,
  User,
} from "lucide-react";
import { CoreValues } from "./About/CoreValues";
import { WhatWeDo } from "./About/WhatWeDo";
import { WhoWeServe } from "./About/WhoWeServe";
import { Founder } from "./About/Founder";
import { VisionMission } from "./About/VisionMission";

// ─── Inline style injection ───────────────────────────────────────────────────
const globalStyles = `
  :root {
    --rose: #c8335a;
    --rose-dark: #a02847;
    --rose-light: #f8e6ec;
    --ink: #1a1118;
    --mist: #f4f0f2;
  }

  /* Card hover shimmer */
  .card-shimmer {
    position: relative;
    overflow: hidden;
  }
  .card-shimmer::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      transparent 40%,
      rgba(255,255,255,0.35) 50%,
      transparent 60%
    );
    transform: translateX(-100%);
    transition: transform 0s;
    pointer-events: none;
  }
  .card-shimmer:hover::after {
    transform: translateX(100%);
    transition: transform 0.55s ease;
  }

  /* ── Value card (new editorial style) ── */
 /* ─────────────────────────────────────────────────────────────────
   VALUE CARD  –  paste this block into globalStyles in AboutUs.tsx
   (replace the old .value-card … .value-card:hover .vc-line block)
──────────────────────────────────────────────────────────────────── */

/* Base */
.value-card {
  position: relative;
  overflow: hidden;
  cursor: default;
  transition:
    transform 0.4s cubic-bezier(0.34,1.4,0.64,1),
    box-shadow 0.4s ease;
}
.value-card:hover {
  transform: translateY(-6px) scale(1.025);
  box-shadow: 0 28px 56px -10px rgba(200,51,90,0.28), 0 8px 20px -4px rgba(0,0,0,0.1);
}

/* Shared transitions */
.vc-icon-wrap {
  transition: background 0.3s ease, transform 0.4s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.3s ease;
}
.value-card:hover .vc-icon-wrap { transform: rotate(-10deg) scale(1.15); }
.vc-title { transition: color 0.3s ease; }
.vc-desc  { transition: color 0.3s ease; }
.vc-line  {
  height: 2px;
  width: 36px;
  border-radius: 99px;
  margin: 14px 0 0;
  transition: background 0.3s ease, width 0.4s ease;
}
.value-card:hover .vc-line { width: 56px; }

.vc-number {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 700;
  line-height: 1;
  position: absolute;
  top: 12px;
  right: 16px;
  transition: color 0.35s ease;
  pointer-events: none;
  user-select: none;
}

/* ── LIGHT variant (cream bg → rose on hover) ── */
.vc-light::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #c8335a, #7c1933);
  opacity: 0;
  transition: opacity 0.35s ease;
  z-index: 0;
}
.vc-light:hover::before { opacity: 1; }
.vc-light .vc-number    { font-size: 5rem; color: rgba(200,51,90,0.1); }
.vc-light .vc-icon-wrap { background: rgba(200,51,90,0.1); }
.vc-light .vc-icon-wrap svg { color: #c8335a; transition: color 0.3s ease; }
.vc-light .vc-title     { color: #1a1118; }
.vc-light .vc-desc      { color: #7a6c73; }
.vc-light .vc-line      { background: rgba(200,51,90,0.25); }

.vc-light:hover .vc-number    { color: rgba(255,255,255,0.15); }
.vc-light:hover .vc-icon-wrap { background: rgba(255,255,255,0.18) !important; box-shadow: 0 6px 20px rgba(0,0,0,0.15); }
.vc-light:hover .vc-icon-wrap svg { color: white !important; }
.vc-light:hover .vc-title     { color: white; }
.vc-light:hover .vc-desc      { color: rgba(255,255,255,0.82); }
.vc-light:hover .vc-line      { background: rgba(255,255,255,0.35); }

/* ── DARK variant (ink bg → rose accent on hover) ── */
.vc-dark .vc-number    { font-size: 5rem; color: rgba(255,255,255,0.07); }
.vc-dark .vc-icon-wrap { background: rgba(255,255,255,0.1); }
.vc-dark .vc-icon-wrap svg { color: rgba(255,255,255,0.85); transition: color 0.3s ease; }
.vc-dark .vc-title     { color: white; }
.vc-dark .vc-desc      { color: rgba(255,255,255,0.55); }
.vc-dark .vc-line      { background: rgba(255,255,255,0.2); }

.vc-dark:hover { box-shadow: 0 28px 56px -10px rgba(200,51,90,0.35), 0 8px 20px -4px rgba(0,0,0,0.25) !important; }
.vc-dark:hover .vc-number    { color: rgba(200,51,90,0.3); }
.vc-dark:hover .vc-icon-wrap { background: rgba(200,51,90,0.3) !important; box-shadow: 0 6px 20px rgba(200,51,90,0.3); }
.vc-dark:hover .vc-icon-wrap svg { color: white !important; }
.vc-dark:hover .vc-title     { color: white; }
.vc-dark:hover .vc-desc      { color: rgba(255,255,255,0.78); }
.vc-dark:hover .vc-line      { background: rgba(200,51,90,0.6); }

/* ── ROSE variant (gradient bg → brightens on hover) ── */
.vc-rose .vc-number    { font-size: 4.5rem; color: rgba(255,255,255,0.12); }
.vc-rose .vc-icon-wrap { background: rgba(255,255,255,0.18); }
.vc-rose .vc-icon-wrap svg { color: white; transition: color 0.3s ease; }
.vc-rose .vc-title     { color: white; }
.vc-rose .vc-desc      { color: rgba(255,255,255,0.75); }
.vc-rose .vc-line      { background: rgba(255,255,255,0.3); }

.vc-rose:hover { box-shadow: 0 28px 56px -10px rgba(200,51,90,0.5), 0 8px 20px -4px rgba(0,0,0,0.2) !important; }
.vc-rose:hover .vc-number    { color: rgba(255,255,255,0.22); }
.vc-rose:hover .vc-icon-wrap { background: rgba(255,255,255,0.28) !important; box-shadow: 0 6px 24px rgba(255,255,255,0.2); }
.vc-rose:hover .vc-icon-wrap svg { color: white !important; }
.vc-rose:hover .vc-title     { color: white; }
.vc-rose:hover .vc-desc      { color: rgba(255,255,255,0.92); }
.vc-rose:hover .vc-line      { background: rgba(255,255,255,0.5); }
  /* What-we-do card */
  .wwd-card {
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                box-shadow 0.35s ease;
  }
  .wwd-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 56px -8px rgba(200,51,90,0.15), 0 12px 24px -6px rgba(0,0,0,0.06);
  }
  .wwd-card:hover .wwd-icon {
    transform: scale(1.15) rotate(6deg);
    box-shadow: 0 8px 24px rgba(200,51,90,0.4);
  }
  .wwd-icon {
    transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
  }
  .wwd-card .wwd-line {
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #c8335a, #f8a4bc);
    transition: width 0.4s ease;
    margin-top: 12px;
  }
  .wwd-card:hover .wwd-line {
    width: 48px;
  }

  /* ── Who We Serve cards ── */
  .serve-card {
    position: relative;
    overflow: hidden;
    transition:
      transform 0.4s cubic-bezier(0.34,1.4,0.64,1),
      box-shadow 0.4s ease;
    cursor: default;
  }
  .serve-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #c8335a, #f07090);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.34,1.4,0.64,1);
  }
  .serve-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 52px -8px rgba(200,51,90,0.2), 0 8px 20px rgba(0,0,0,0.06);
  }
  .serve-card:hover::after { transform: scaleX(1); }
  .serve-card:hover .sc-icon-ring {
    transform: scale(1.12) rotate(-6deg);
    background: linear-gradient(135deg, #c8335a, #7c1933);
    box-shadow: 0 8px 24px rgba(200,51,90,0.4);
  }
  .serve-card:hover .sc-icon-ring svg { color: white !important; }
  .serve-card:hover .sc-number { opacity: 1; transform: translateY(0); }

  .sc-icon-ring {
    transition:
      transform 0.4s cubic-bezier(0.34,1.4,0.64,1),
      background 0.3s ease,
      box-shadow 0.3s ease;
  }
  .sc-number {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 3.5rem;
    font-weight: 700;
    color: rgba(200,51,90,0.07);
    line-height: 1;
    position: absolute;
    bottom: 12px; right: 16px;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s ease, transform 0.4s ease;
    pointer-events: none;
    user-select: none;
  }

  /* Founder card */
  .founder-card:hover .founder-image-wrap {
    transform: scale(1.02);
    box-shadow: 0 24px 48px rgba(200,51,90,0.2);
  }
  .founder-image-wrap {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  /* Tag chip hover */
  .tag-chip {
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }
  .tag-chip:hover {
    background: #c8335a;
    color: white;
    transform: translateY(-2px);
  }

  /* Noise overlay utility */
  .noise-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    border-radius: inherit;
  }

  /* Fade-up definition for non-motion contexts */
  .section-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
  }
  .body-font {
    font-family: 'DM Sans', sans-serif;
  }
`;

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const coreValues = [
    {
      icon: Heart,
      title: "Wholesome",
      description: "Growth that nurtures mind, character, and purpose.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honesty, accountability, and moral courage.",
    },
    {
      icon: HandHeart,
      title: "Empathy",
      description: "Understanding and compassion for others.",
    },
    {
      icon: UsersRound,
      title: "Community",
      description: "Building supportive networks and sisterhood.",
    },
    {
      icon: CheckCircle,
      title: "Excellence",
      description: "Striving for personal and collective greatness.",
    },
  ];

  //   Mentorship & Coaching

  // We provide structured mentorship and coaching sessions that address personal development, goal-setting, self-worth, boundaries, leadership, and life skills relevant to today’s young woman.

  // Leadership Development

  // Through programs like AfriGirl Leads, we train young women to develop leadership competence, confidence, and practical experience through projects, trainings, and community engagement.

  // Advocacy & Awareness

  // We advocate for girl-focused issues including education, health, substance abuse prevention, self-esteem, and safe relationships through outreach programs, campaigns, and conversations.

  // Workshops & Trainings

  // We organize physical and virtual workshops covering topics such as personal growth, career readiness, entrepreneurship, digital skills, and emotional intelligence.

  // Community Conversations

  // Our Girl’s Talk Sessions create safe, honest spaces for girls to discuss real-life issues, ask difficult questions, and learn from shared experiences.

  const whatWeDo = [
    {
      icon: Users,
      title: "Mentorship & Coaching",
      description:
        "We provide structured mentorship and coaching sessions that address personal development, goal-setting, self-worth, boundaries, leadership, and life skills relevant to today’s young woman.",
    },
    {
      icon: GraduationCap,
      title: "Leadership Development",
      description:
        "Through programs like AfriGirl Leads, we train young women to develop leadership competence, confidence, and practical experience through projects, trainings, and community engagement.",
    },
    {
      icon: Megaphone,
      title: "Advocacy & Awareness",
      description:
        "We advocate for girl-focused issues including education, health, substance abuse prevention, self-esteem, and safe relationships through outreach programs, campaigns, and conversations.",
    },
    {
      icon: BookOpen,
      title: "Workshops & Trainings",
      description:
        "We organize physical and virtual workshops covering topics such as personal growth, career readiness, entrepreneurship, digital skills, and emotional intelligence.",
    },
    {
      icon: MessageCircle,
      title: "Community Conversations",
      description:
        "Our Girls' Talk Sessions create safe, honest spaces for girls to discuss real-life issues, ask difficult questions, and learn from shared experiences.",
    },
    {
      icon: Sparkles,
      title: "Personal Development",
      description:
        "Programs focused on self-awareness, goal-setting, emotional intelligence, and spiritual growth.",
    },
  ];

  const whoWeServe = [
    { label: "Secondary school girls", icon: Users },
    { label: "University students", icon: GraduationCap },
    { label: "Young women aged 16–30", icon: User },
    { label: "Emerging female leaders", icon: Target },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      <section
        ref={sectionRef}
        id="about"
        className="body-font py-28 bg-white relative overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Subtle ambient blobs */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,51,90,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,51,90,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Section Header ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-24"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-7"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,51,90,0.12), rgba(200,51,90,0.06))",
                color: "#c8335a",
                border: "1px solid rgba(200,51,90,0.2)",
                letterSpacing: "0.03em",
              }}
            >
              <Heart className="w-3.5 h-3.5" />
              About The Girl Essence
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="section-title mb-6"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                fontWeight: 700,
                color: "#1a1118",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Raising{" "}
              <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                Wholesome
              </em>{" "}
              Women
            </motion.h2>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.1rem",
                color: "#6b5d64",
                maxWidth: "940px",
                margin: "0 auto",
                lineHeight: 1.8,
                // textAlign: "justify",
              }}
            >
              The Girl Essence was founded on the belief that every girl
              deserves guidance, safe conversations, and access to opportunities
              that help her thrive—emotionally, intellectually, socially, and
              spiritually. <br /> <br />
              We create supportive spaces where girls can learn, unlearn, ask
              questions, and grow without judgment. Our work blends mentorship,
              advocacy, leadership development, and practical skill-building to
              help girls become wholesome women who lead with confidence and
              integrity.
            </motion.p>
          </motion.div>

          <VisionMission variants={itemVariants} isInView={isInView} />
          <CoreValues variants={itemVariants} isInView={isInView} />
          <WhatWeDo
            items={whatWeDo}
            variants={itemVariants}
            isInView={isInView}
          />
          <WhoWeServe
            items={whoWeServe}
            variants={itemVariants}
            isInView={isInView}
          />
          <Founder variants={itemVariants} isInView={isInView} />

          {/* ── Tagline ── */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center"
          >
            <p
              className="section-title"
              style={{
                fontSize: "clamp(1.2rem, 2.8vw, 1.75rem)",
                fontWeight: 600,
                fontStyle: "italic",
                color: "#6b5d64",
                lineHeight: 1.6,
              }}
            >
              "Together, let's raise whole women and shape a better future—{" "}
              <span style={{ color: "#c8335a" }}>one girl at a time.</span>"
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
