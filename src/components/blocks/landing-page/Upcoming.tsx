"use client";
import { motion, useInView, Variants } from "framer-motion";
import {
  Star,
  Sparkles,
  Calendar,
  Users,
  Award,
  GraduationCap,
  MessageCircle,
  Heart,
  School,
  ArrowRight,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import React, { useRef } from "react";
import Image from "next/image";

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = `
  .section-title { font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif; }

  /* ── Program row ── */
  .prog-row {
    position: relative;
    display: flex;
    align-items: center;
    padding: 26px 16px 26px 8px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 16px;
    overflow: hidden;
    transition: padding 0.35s ease;
  }

  /* Dark fill sweeps in from left */
  .prog-row::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #1a1118;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.52s cubic-bezier(0.76, 0, 0.24, 1);
    z-index: 0;
    border-radius: 16px;
  }
  .prog-row:hover::before { transform: scaleX(1); }

  /* Thin rose left border that appears on hover */
  .prog-row::after {
    content: '';
    position: absolute;
    left: 0; top: 16px; bottom: 16px;
    width: 3px;
    background: linear-gradient(180deg, #c8335a, #7c1933);
    border-radius: 99px;
    opacity: 0;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: opacity 0.2s ease, transform 0.4s cubic-bezier(0.34,1.4,0.64,1) 0.1s;
    z-index: 2;
  }
  .prog-row:hover::after { opacity: 1; transform: scaleY(1); }

  /* Divider */
  .prog-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, #ede4e9 15%, #ede4e9 85%, transparent);
    margin: 0 8px;
    transition: opacity 0.25s ease;
  }

  /* Index */
  .prog-index {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 0.82rem;
    font-weight: 700;
    color: rgba(200,51,90,0.4);
    letter-spacing: 0.05em;
    min-width: 44px;
    flex-shrink: 0;
    position: relative; z-index: 1;
    transition: color 0.3s ease;
  }
  .prog-row:hover .prog-index { color: rgba(200,51,90,0.6); }

  /* Icon */
  .prog-icon {
    width: 46px; height: 46px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(200,51,90,0.08);
    border: 1.5px solid rgba(200,51,90,0.12);
    flex-shrink: 0;
    margin-right: 18px;
    position: relative; z-index: 1;
    transition: background 0.3s ease, border-color 0.3s ease,
                transform 0.42s cubic-bezier(0.34,1.4,0.64,1),
                box-shadow 0.3s ease;
  }
  .prog-icon svg { color: #c8335a; transition: color 0.3s ease; }
  .prog-row:hover .prog-icon {
    background: rgba(200,51,90,0.22);
    border-color: rgba(200,51,90,0.3);
    transform: rotate(-6deg) scale(1.1);
    box-shadow: 0 6px 18px rgba(200,51,90,0.25);
  }
  .prog-row:hover .prog-icon svg { color: #f9b8c9; }

  /* Title */
  .prog-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1.35rem, 2.2vw, 1.9rem);
    font-weight: 700;
    color: #1a1118;
    flex: 1;
    line-height: 1.15;
    position: relative; z-index: 1;
    transition: color 0.3s ease;
  }
  .prog-row:hover .prog-title { color: white; }

  /* Tags — visible at rest, fade out on hover */
  .prog-tags {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 28px;
    flex-shrink: 0;
    position: relative; z-index: 1;
    transition: opacity 0.2s ease;
  }
  .prog-row:hover .prog-tags { opacity: 0; pointer-events: none; }
  .prog-tag {
    padding: 3px 10px;
    border-radius: 99px;
    font-size: 0.68rem;
    font-weight: 500;
    background: rgba(200,51,90,0.07);
    color: #9a5068;
    border: 1px solid rgba(200,51,90,0.13);
    white-space: nowrap;
    letter-spacing: 0.02em;
  }

  /* Description — fades in on hover replacing tags */
  .prog-desc {
    position: absolute;
    /* sits in the same region as tags */
    right: 80px;
    top: 50%;
    transform: translateY(-50%);
    width: 320px;
    font-size: 0.83rem;
    color: rgba(255,255,255,0.65);
    line-height: 1.72;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.28s ease 0.08s;
    font-family: 'DM Sans', sans-serif;
  }
  .prog-row:hover .prog-desc { opacity: 1; }

  /* Arrow button */
  .prog-arrow {
    width: 40px; height: 40px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    border: 1.5px solid rgba(200,51,90,0.25);
    flex-shrink: 0;
    position: relative; z-index: 1;
    transition: background 0.3s ease, border-color 0.3s ease,
                transform 0.42s cubic-bezier(0.34,1.4,0.64,1),
                box-shadow 0.3s ease;
  }
  .prog-arrow svg { color: #c8335a; transition: color 0.3s ease; width: 15px; height: 15px; }
  .prog-row:hover .prog-arrow {
    background: #c8335a;
    border-color: #c8335a;
    transform: rotate(42deg) scale(1.1);
    box-shadow: 0 6px 20px rgba(200,51,90,0.4);
  }
  .prog-row:hover .prog-arrow svg { color: white; }

  /* Apply button */
  .apply-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    background: linear-gradient(135deg, #c8335a, #a02847);
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.28s cubic-bezier(0.34,1.4,0.64,1),
                box-shadow 0.28s ease, filter 0.28s ease;
    box-shadow: 0 6px 24px rgba(200,51,90,0.35);
  }
  .apply-btn:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 14px 36px rgba(200,51,90,0.45);
    filter: brightness(1.07);
  }

  /* Featured shimmer */
  .feat-shimmer { position: relative; overflow: hidden; }
  .feat-shimmer::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.055) 50%, transparent 62%);
    transform: translateX(-100%);
    pointer-events: none;
  }
  .feat-shimmer:hover::after {
    transform: translateX(100%);
    transition: transform 0.72s ease;
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const programs = [
  {
    id: "afrigirl-summit",
    title: "AfriGirl Summit",
    icon: Users,
    tags: ["Annual event", "Networking", "Skills training"],
    description:
      "An annual empowerment summit bringing together girls and young women for inspiration, mentorship, and access to real opportunities.",
    href: "#",
  },
  {
    id: "afrigirl-scholars",
    title: "AfriGirl Scholars Program",
    icon: GraduationCap,
    tags: ["Scholarships", "Certifications", "Skill development"],
    description:
      "Identifying and supporting promising girls through scholarships, free trainings, certifications, and skill-development opportunities.",
    href: "#",
  },
  {
    id: "girls-talk",
    title: "Girl's Talk Sessions",
    icon: MessageCircle,
    tags: ["Monthly", "Safe space", "Peer learning"],
    description:
      "Monthly themed discussions on life skills, relationships, self-worth, boundaries, and personal development.",
    href: "#",
  },
  {
    id: "gist-with-her",
    title: "Gist With Her",
    icon: Heart,
    tags: ["Open conversations", "No judgment", "Guidance"],
    description:
      "A safe, relaxed conversation series where girls talk openly about real-life issues and receive guidance without judgment.",
    href: "#",
  },
  {
    id: "university-outreach",
    title: "University & Community Outreach",
    icon: School,
    tags: ["Campus programs", "Community", "Advocacy"],
    description:
      "Educational and advocacy programs addressing substance abuse, health, self-esteem, and leadership across universities and communities.",
    href: "#",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Programs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <section
        ref={sectionRef}
        id="programs"
        className="py-28 bg-white relative"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Ambient blob */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-100px",
            right: "60px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,51,90,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Section header ── */}
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
              <Sparkles className="w-3.5 h-3.5" />
              Our Programs
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
              Transformative{" "}
              <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                Programs
              </em>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.05rem",
                color: "#6b5d64",
                maxWidth: "580px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Discover our range of programs designed to empower, educate, and
              elevate young women at every stage of their journey.
            </motion.p>
          </motion.div>

          {/* ── Featured: AfriGirl Leads ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-24"
          >
            <motion.div
              variants={itemVariants}
              className="feat-shimmer relative overflow-hidden rounded-3xl"
              style={{ background: "#1a1118", border: "1.5px solid #2a1e24" }}
            >
              {/* Glows */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "-80px",
                  right: "-80px",
                  width: "360px",
                  height: "360px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(200,51,90,0.2), transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: "-60px",
                  left: "-60px",
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(200,51,90,0.09), transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div className="relative grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8 self-start"
                    style={{
                      background: "rgba(200,51,90,0.22)",
                      color: "#f4a0b5",
                      border: "1px solid rgba(200,51,90,0.28)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    <Star className="w-3 h-3" />
                    Featured Program
                  </div>

                  <h3
                    className="section-title mb-5 text-white"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    AfriGirl{" "}
                    <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                      Leads
                    </em>{" "}
                    <span
                      style={{
                        color: "rgba(255,255,255,0.28)",
                        fontStyle: "normal",
                        fontSize: "0.58em",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      2025
                    </span>
                  </h3>

                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "1rem",
                      lineHeight: 1.85,
                      marginBottom: "28px",
                      maxWidth: "460px",
                    }}
                  >
                    A leadership training and project-based program for young
                    women aged 18–25, focused on building leadership capacity,
                    accountability, and real-life impact through trainings and
                    practical projects.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {[
                      { icon: Calendar, text: "Sept–Dec 2025" },
                      { icon: Users, text: "Virtual + Physical" },
                      { icon: Award, text: "FREE for selected participants" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.09)",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        <item.icon
                          className="w-3.5 h-3.5"
                          style={{ color: "#c8335a" }}
                        />
                        {item.text}
                      </div>
                    ))}
                  </div>

                  {/* <a
                    href="https://tinyurl.com/AfriGirlLeadsApplication"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-btn self-start"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a> */}
                </div>

                {/* Image */}
                <div
                  className="relative lg:min-h-[420px] min-h-64 overflow-hidden"
                  style={{ borderRadius: "0 1.5rem 1.5rem 0" }}
                >
                  <Image
                    src="/afrigirl.jpg"
                    alt="AfriGirl Leads 2025"
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.8) saturate(1.1)" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to right, #1a1118 0%, transparent 28%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(26,17,24,0.5) 0%, transparent 50%)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Floating status badge */}
                  {/* <div style={{
                    position: "absolute", bottom: "24px", right: "24px",
                    background: "rgba(26,17,24,0.7)", backdropFilter: "blur(12px)",
                    border: "1px solid rgba(200,51,90,0.3)", borderRadius: "12px",
                    padding: "10px 16px", color: "white", fontSize: "0.8rem",
                    fontWeight: 500, display: "flex", alignItems: "center", gap: "8px",
                  }}>
                    <span style={{
                      width: "7px", height: "7px", borderRadius: "50%",
                      background: "#c8335a", display: "inline-block",
                      boxShadow: "0 0 8px rgba(200,51,90,0.9)", flexShrink: 0,
                    }} />
                    Applications Open
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Program rows list ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-24"
          >
            {/* Sub-header */}
            <motion.div
              variants={itemVariants}
              className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
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
                  Explore all
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
                  More{" "}
                  <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                    Programs
                  </em>
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
                Every program is built around one goal: helping girls become
                confident, whole, and purpose-driven women.
              </p>
            </motion.div>

            {/* List */}
            <div>
              {/* Top rule */}
              <div className="prog-divider" />

              {programs.map((prog, i) => {
                const Icon = prog.icon;
                return (
                  <React.Fragment key={prog.id}>
                    <motion.a
                      href={prog.href}
                      className="prog-row"
                      variants={rowVariants}
                      aria-label={`Learn more about ${prog.title}`}
                    >
                      {/* Index */}
                      <span className="prog-index">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Icon */}
                      <div className="prog-icon">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Title */}
                      <span className="prog-title">{prog.title}</span>

                      {/* Tags at rest — hidden below lg */}
                      <div className="prog-tags hidden lg:flex">
                        {prog.tags.map((t) => (
                          <span key={t} className="prog-tag">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Description on hover (desktop) */}
                      <span className="prog-desc hidden lg:block">
                        {prog.description}
                      </span>

                      {/* Arrow */}
                      <div className="prog-arrow">
                        <ArrowUpRight />
                      </div>
                    </motion.a>

                    {/* Rule */}
                    <div className="prog-divider" />
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div
              className="relative rounded-3xl p-10 lg:p-14 text-center overflow-hidden"
              style={{
                border: "1.5px solid #ede4e9",
                background:
                  "linear-gradient(135deg, rgba(200,51,90,0.03), rgba(160,40,71,0.05))",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "220px",
                  height: "220px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(200,51,90,0.08), transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  left: "-40px",
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(200,51,90,0.06), transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div className="relative z-10">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                  style={{
                    background: "rgba(200,51,90,0.08)",
                    color: "#c8335a",
                    border: "1px solid rgba(200,51,90,0.18)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  <Sparkles className="w-3 h-3" />
                  Begin your journey
                </div>

                <h3
                  className="section-title mb-5"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    color: "#1a1118",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                  }}
                >
                  From{" "}
                  <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                    Potential
                  </em>{" "}
                  to{" "}
                  <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                    Power
                  </em>
                </h3>

                <p
                  style={{
                    color: "#6b5d64",
                    maxWidth: "500px",
                    margin: "0 auto 36px",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                  }}
                >
                  Ready to begin your transformation journey? Join one of our
                  programs and discover the leader within you.
                </p>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="apply-btn"
                  style={{ display: "inline-flex" }}
                >
                  Get Started Today
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Programs;
