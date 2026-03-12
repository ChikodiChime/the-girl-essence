"use client";
import { motion, useInView, Variants } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Users,
  GraduationCap,
  MessageCircle,
  Heart,
  School,
  Award,
  Star,
  Calendar,
} from "lucide-react";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/lib/programs";
import PageHero from "@/components/blocks/PageHero";
import { ROUTES } from "@/config/routes";

const iconMap: Record<string, React.ElementType> = {
  Users,
  GraduationCap,
  MessageCircle,
  Heart,
  School,
  Award,
};

const styles = `
  .section-title { font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif; }

  .prog-card {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    border: 1.5px solid #ede4e9;
    background: white;
    transition: transform 0.35s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.35s ease, border-color 0.3s ease;
    text-decoration: none;
  }
  .prog-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(200,51,90,0.12);
    border-color: rgba(200,51,90,0.25);
  }
  .prog-card-icon {
    width: 48px; height: 48px;
    border-radius: 13px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(200,51,90,0.1);
    border: 1px solid rgba(200,51,90,0.15);
    transition: background 0.3s ease, transform 0.4s cubic-bezier(0.34,1.4,0.64,1);
  }
  .prog-card:hover .prog-card-icon {
    background: rgba(200,51,90,0.18);
    transform: rotate(-6deg) scale(1.1);
  }
  .prog-card-arrow {
    width: 34px; height: 34px;
    border-radius: 50%;
    border: 1.5px solid rgba(200,51,90,0.2);
    display: flex; align-items: center; justify-content: center;
    transition: background 0.3s ease, border-color 0.3s ease, transform 0.4s cubic-bezier(0.34,1.4,0.64,1);
    flex-shrink: 0;
  }
  .prog-card:hover .prog-card-arrow {
    background: #c8335a;
    border-color: #c8335a;
    transform: rotate(42deg) scale(1.08);
  }
  .prog-card:hover .prog-card-arrow svg { color: white; }

  .faq-item {
    border-bottom: 1px solid #ede4e9;
    overflow: hidden;
  }
  .faq-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    gap: 16px;
  }
`;

const faqs = [
  {
    q: "Who can apply to The Girl Essence programs?",
    a: "Our programs are designed for girls and young women aged 16–30. Some programs like AfriGirl Leads have a specific age range (18–25). Each program page has eligibility details.",
  },
  {
    q: "Are the programs free to join?",
    a: "Yes — all our programs are free for participants. Some programs like AfriGirl Leads select participants through an application process, but there is no cost to apply or participate.",
  },
  {
    q: "Are sessions virtual or in-person?",
    a: "We offer both! Most programs run in a hybrid format — virtual sessions for accessibility and in-person sessions for community and connection. Check each program's details for specifics.",
  },
  {
    q: "How do I join or apply?",
    a: "The easiest way is to reach out to us on WhatsApp or send us a message through the Contact page. You can also follow us on Instagram @thegirlessence where we announce open applications and upcoming sessions.",
  },
];

export default function ProgramsPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const featured = programs[0]; // AfriGirl Leads
  const rest = programs.slice(1);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <PageHero
        badge="Our Programs"
        badgeIcon="Sparkles"
        title="Transformative"
        titleAccent="Programs"
        subtitle="Discover our range of programs designed to empower, educate, and elevate young women at every stage of their journey."
      />
      <main
        ref={sectionRef}
        className="pb-24 bg-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
          {/* Featured: AfriGirl Leads */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-16 sm:mb-20"
          >
            <motion.div variants={itemVariants}>
              <Link
                href={ROUTES.programDetail(featured.slug)}
                className="relative overflow-hidden rounded-3xl block"
                style={{
                  background: "#1a1118",
                  border: "1.5px solid #2a1e24",
                  textDecoration: "none",
                }}
              >
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
                  <div className="p-6 sm:p-8 lg:p-14 flex flex-col justify-center">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold mb-6 sm:mb-8 self-start"
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
                    <h2
                      className="section-title mb-4 text-white"
                      style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                      }}
                    >
                      AfriGirl{" "}
                      <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                        Leads
                      </em>
                    </h2>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "clamp(0.95rem, 2.6vw, 1rem)",
                        lineHeight: 1.8,
                        marginBottom: "24px",
                        maxWidth: "460px",
                      }}
                    >
                      {featured.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                      {[
                        { icon: Calendar, text: "Sept–Dec 2025" },
                        { icon: Users, text: "Virtual + Physical" },
                        { icon: Award, text: "FREE for selected participants" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm"
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
                    <div
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm text-white self-start"
                      style={{
                        background: "linear-gradient(135deg, #c8335a, #a02847)",
                        boxShadow: "0 6px 24px rgba(200,51,90,0.35)",
                      }}
                    >
                      Learn More
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div
                    className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] overflow-hidden"
                    style={{ borderRadius: "0 0 1.5rem 1.5rem" }}
                  >
                    <Image
                      src="/afrigirl.jpg"
                      alt="AfriGirl Leads"
                      fill
                      className="object-cover"
                      style={{ filter: "brightness(0.8) saturate(1.1)" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, #1a1118 0%, transparent 30%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* All other programs grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-20 sm:mb-24"
          >
            <motion.div variants={itemVariants} className="mb-10">
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
              <h2
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
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {rest.map((prog) => {
                const Icon = iconMap[prog.iconName] ?? Heart;
                return (
                  <motion.div key={prog.slug} variants={itemVariants}>
                    <Link
                      href={ROUTES.programDetail(prog.slug)}
                      className="prog-card block h-full"
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-start justify-between gap-3 mb-5">
                          <div className="prog-card-icon">
                            <Icon
                              className="w-5 h-5"
                              style={{ color: "#c8335a" }}
                            />
                          </div>
                          <div className="prog-card-arrow">
                            <ArrowUpRight
                              className="w-4 h-4"
                              style={{ color: "#c8335a" }}
                            />
                          </div>
                        </div>
                        <h3
                          className="section-title mb-2"
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "#1a1118",
                            lineHeight: 1.2,
                          }}
                        >
                          {prog.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.88rem",
                            color: "#7a6c73",
                            lineHeight: 1.65,
                            flex: 1,
                          }}
                        >
                          {prog.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {prog.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              style={{
                                padding: "3px 10px",
                                borderRadius: "99px",
                                fontSize: "0.68rem",
                                fontWeight: 500,
                                background: "rgba(200,51,90,0.07)",
                                color: "#9a5068",
                                border: "1px solid rgba(200,51,90,0.13)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
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
                Got questions?
              </p>
              <h2
                className="section-title"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#1a1118",
                  letterSpacing: "-0.01em",
                }}
              >
                Frequently Asked{" "}
                <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                  Questions
                </em>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button
                    className="faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(1rem, 3vw, 1.1rem)",
                        fontWeight: 700,
                        color: "#1a1118",
                        lineHeight: 1.3,
                      }}
                    >
                      {faq.q}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: "#c8335a" }}
                      />
                    ) : (
                      <ChevronDown
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: "#b8a8b0" }}
                      />
                    )}
                  </button>
                  {openFaq === i && (
                    <div
                      style={{
                        paddingBottom: "20px",
                        color: "#6b5d64",
                        fontSize: "0.95rem",
                        lineHeight: 1.75,
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <p
                style={{
                  color: "#6b5d64",
                  marginBottom: "16px",
                  fontSize: "0.95rem",
                }}
              >
                Still have questions? We'd love to hear from you.
              </p>
              <Link
                href={ROUTES.contact}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
                style={{
                  background: "linear-gradient(135deg, #c8335a, #a02847)",
                  boxShadow: "0 6px 24px rgba(200,51,90,0.3)",
                }}
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
