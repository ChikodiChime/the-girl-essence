"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/config/routes";
import {
  ArrowUpRight,
  Sparkles,
  Users,
  GraduationCap,
  MessageCircle,
  Heart,
  School,
  Award,
  Star,
} from "lucide-react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
  
  .section-title { font-family: 'Cormorant Garamond', Georgia, serif; }
  
  .feat-shimmer {
    position: relative;
    overflow: hidden;
  }
  .feat-shimmer::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.05) 50%, transparent 62%);
    transform: translateX(-100%);
    transition: transform 0s;
    pointer-events: none;
  }
  .feat-shimmer:hover::after {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  .prog-preview-card {
    display: block;
    padding: 22px;
    border-radius: 16px;
    background: rgba(255,255,255,0.04);
    border: 1.5px solid rgba(255,255,255,0.08);
    text-decoration: none;
    transition: background 0.3s ease, border-color 0.3s ease,
                transform 0.38s cubic-bezier(0.34,1.4,0.64,1),
                box-shadow 0.3s ease;
  }
  .prog-preview-card:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(200,51,90,0.3);
    transform: translateY(-6px);
    box-shadow: 0 18px 42px rgba(200,51,90,0.18);
  }
  
  .prog-icon {
    width: 44px;
    height: 44px;
    border-radius: 11px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(200,51,90,0.15);
    border: 1px solid rgba(200,51,90,0.22);
    margin-bottom: 14px;
    transition: transform 0.4s cubic-bezier(0.34,1.4,0.64,1),
                background 0.3s ease;
  }
  .prog-preview-card:hover .prog-icon {
    transform: rotate(-6deg) scale(1.1);
    background: rgba(200,51,90,0.25);
  }
  
  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: linear-gradient(135deg, #c8335a, #a02847);
    color: white;
    font-weight: 600;
    font-size: 0.92rem;
    border-radius: 12px;
    text-decoration: none;
    transition: transform 0.28s cubic-bezier(0.34,1.4,0.64,1),
                box-shadow 0.28s ease, filter 0.28s ease;
    box-shadow: 0 6px 24px rgba(200,51,90,0.35);
    letter-spacing: 0.02em;
  }
  .cta-btn:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 32px rgba(200,51,90,0.45);
    filter: brightness(1.06);
  }
`;

const iconMap: Record<string, React.ElementType> = {
  Users,
  GraduationCap,
  MessageCircle,
  Heart,
  School,
  Award,
};

// Placeholder programs data - replace with your actual import
const programs = [
  {
    slug: "afrigirl-leads",
    title: "AfriGirl Leads",
    tagline:
      "A leadership training program for young women aged 18–25, building capacity and real-life impact.",
    iconName: "Award",
  },
  {
    slug: "afrigirl-summit",
    title: "AfriGirl Summit",
    tagline:
      "Annual empowerment summit for inspiration, mentorship, and opportunities.",
    iconName: "Users",
  },
  {
    slug: "afrigirl-scholars",
    title: "AfriGirl Scholars",
    tagline:
      "Scholarships, free trainings, and skill-development for promising girls.",
    iconName: "GraduationCap",
  },
  {
    slug: "girls-talk",
    title: "Girl's Talk Sessions",
    tagline:
      "Monthly discussions on life skills, boundaries, and personal development.",
    iconName: "MessageCircle",
  },
];

export default function HomeProgramsTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = programs[0];
  const preview = programs.slice(1, 4);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section
        ref={ref}
        className="py-20 sm:py-24 lg:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(140deg, #1a1118 0%, #2a1020 100%)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Background glows */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "min(560px, 76vw)",
            height: "min(560px, 76vw)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,51,90,0.12), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "min(400px, 62vw)",
            height: "min(400px, 62vw)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,51,90,0.08), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-7"
              style={{
                background: "rgba(200,51,90,0.18)",
                color: "#f4a0b5",
                border: "1px solid rgba(200,51,90,0.28)",
                letterSpacing: "0.03em",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Our Programs
            </div>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.12,
                marginBottom: "14px",
                letterSpacing: "-0.01em",
              }}
            >
              Transformative{" "}
              <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                Programs
              </em>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.52)",
                fontSize: "clamp(0.96rem, 2.8vw, 1.02rem)",
                maxWidth: "540px",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              Empowering young women through mentorship, training, and
              community.
            </p>
          </motion.div>

          {/* Preview grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 mb-10 sm:mb-12">
            {preview.map((prog, i) => {
              const Icon = iconMap[prog.iconName] ?? Heart;
              return (
                <motion.div
                  key={prog.slug}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={ROUTES.programDetail(prog.slug)}
                    className="prog-preview-card group h-full"
                  >
                    <div className="prog-icon">
                      <Icon className="w-4 h-4" style={{ color: "#f4a0b5" }} />
                    </div>
                    <h3
                      className="section-title"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "white",
                        marginBottom: "8px",
                        lineHeight: 1.25,
                      }}
                    >
                      {prog.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.84rem",
                        color: "rgba(255,255,255,0.48)",
                        lineHeight: 1.65,
                        maxWidth: "32rem",
                      }}
                    >
                      {prog.tagline}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* View all CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center"
          >
            <Link
              href={ROUTES.programs}
              className="cta-btn group w-full justify-center sm:w-auto"
            >
              View All Programs
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
