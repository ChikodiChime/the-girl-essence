"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  Instagram,
  Users,
  GraduationCap,
  MessageCircle,
  Heart,
  School,
  Award,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Program } from "@/lib/programs";
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
  .wa-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 28px;
    border-radius: 14px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.3s ease;
  }
  .wa-cta:hover {
    transform: translateY(-3px) scale(1.02);
  }
`;

interface Props {
  program: Program;
  whatsappHref: string;
  instagramUrl: string;
}

export default function ProgramDetailClient({
  program,
  whatsappHref,
  instagramUrl,
}: Props) {
  const Icon = iconMap[program.iconName] ?? Heart;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {/* ── Hero Banner ── */}
        <div
          className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 px-4"
          style={{
            background: "linear-gradient(135deg, #1a1118 0%, #2a1020 100%)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "400px",
              height: "400px",
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
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(200,51,90,0.1), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="max-w-4xl mx-auto relative z-10 px-1 sm:px-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.div variants={itemVariants}>
                <Link
                  href={ROUTES.programs}
                  className="inline-flex items-center gap-2 text-sm mb-8"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                  }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Programs
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-start gap-4 mb-6 sm:flex-row sm:items-center"
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: "rgba(200,51,90,0.2)",
                    border: "1px solid rgba(200,51,90,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#f4a0b5" }} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 12px",
                        borderRadius: "99px",
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        background: "rgba(200,51,90,0.18)",
                        color: "#f4a0b5",
                        border: "1px solid rgba(200,51,90,0.25)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="section-title text-white mb-4"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 4rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                {program.title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.1rem)",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  maxWidth: "600px",
                }}
              >
                {program.tagline}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            {/* About this program */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16"
            >
              <p
                style={{
                  color: "#c8335a",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                About this program
              </p>
              <h2
                className="section-title mb-8"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#1a1118",
                  lineHeight: 1.15,
                }}
              >
                What is{" "}
                <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                  {program.title}?
                </em>
              </h2>
              <div className="space-y-5">
                {program.fullDescription.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      color: "#4a3d44",
                      fontSize: "clamp(0.98rem, 2.5vw, 1rem)",
                      lineHeight: 1.8,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16"
            >
              <p
                style={{
                  color: "#c8335a",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                At a glance
              </p>
              <h2
                className="section-title mb-8"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#1a1118",
                  lineHeight: 1.15,
                }}
              >
                Key{" "}
                <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                  Highlights
                </em>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "18px 20px",
                      borderRadius: "16px",
                      background: "#faf8f9",
                      border: "1.5px solid #ede4e9",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#b8a8b0",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      {h.label}
                    </div>
                    <div
                      style={{
                        fontSize: "1rem",
                        color: "#1a1118",
                        fontWeight: 600,
                      }}
                    >
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Flyer section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16"
            >
              <p
                style={{
                  color: "#c8335a",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Program flyer
              </p>
              <h2
                className="section-title mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#1a1118",
                  lineHeight: 1.15,
                }}
              >
                Official{" "}
                <em style={{ color: "#c8335a", fontStyle: "italic" }}>Flyer</em>
              </h2>

              {program.hasFlyer ? (
                <div
                  className="relative w-full max-w-md rounded-2xl overflow-hidden mx-auto sm:mx-0"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src={`/flyers/${program.slug}.jpg`}
                    alt={`${program.title} flyer`}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex flex-col items-center justify-center rounded-2xl max-w-md mx-auto sm:mx-0"
                  style={{
                    aspectRatio: "3/4",
                    background: "#faf8f9",
                    border: "2px dashed #ede4e9",
                    maxWidth: "320px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "rgba(200,51,90,0.08)",
                      border: "1px solid rgba(200,51,90,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <ImageIcon
                      className="w-6 h-6"
                      style={{ color: "#c8335a", opacity: 0.5 }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#b8a8b0",
                      textAlign: "center",
                      lineHeight: 1.6,
                      padding: "0 24px",
                    }}
                  >
                    Flyer coming soon.
                    <br />
                    <span style={{ fontSize: "0.75rem" }}>
                      Drop{" "}
                      <code
                        style={{
                          background: "#f0eaed",
                          padding: "1px 5px",
                          borderRadius: "4px",
                        }}
                      >
                        /public/flyers/{program.slug}.jpg
                      </code>{" "}
                      to display it here.
                    </span>
                  </p>
                </div>
              )}
            </motion.div>

            {/* Instagram CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-6"
              style={{
                background: "rgba(193,53,132,0.05)",
                border: "1.5px solid rgba(193,53,132,0.15)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "rgba(193,53,132,0.1)",
                  border: "1px solid rgba(193,53,132,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Instagram className="w-6 h-6" style={{ color: "#c13584" }} />
              </div>
              <div style={{ flex: 1 }} className="text-center sm:text-left">
                <p
                  style={{
                    fontWeight: 700,
                    color: "#1a1118",
                    marginBottom: "4px",
                    fontSize: "1rem",
                  }}
                >
                  Stay updated on {program.title}
                </p>
                <p
                  style={{
                    color: "#6b5d64",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                  }}
                >
                  Follow <strong>@thegirlessence</strong> on Instagram for
                  announcements, application openings, and behind-the-scenes
                  moments from this program.
                </p>
              </div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm flex-shrink-0"
                style={{
                  background: "rgba(193,53,132,0.1)",
                  color: "#c13584",
                  border: "1px solid rgba(193,53,132,0.2)",
                  textDecoration: "none",
                }}
              >
                <Instagram className="w-4 h-4" />
                Follow us
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Apply / Join CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl p-6 sm:p-8 lg:p-10 text-center relative overflow-hidden"
              style={{ background: "#1a1118", border: "1.5px solid #2a1e24" }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(200,51,90,0.18), transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div className="relative z-10">
                <p
                  style={{
                    color: "#c8335a",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Ready to join?
                </p>
                <h2
                  className="section-title text-white mb-4"
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                  }}
                >
                  Get Involved with{" "}
                  <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                    {program.title}
                  </em>
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "clamp(0.92rem, 2.6vw, 0.95rem)",
                    lineHeight: 1.7,
                    maxWidth: "480px",
                    margin: "0 auto 32px",
                  }}
                >
                  Reach out to us on WhatsApp to ask questions, express
                  interest, or find out when the next cohort opens.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-cta"
                    style={{
                      background: "rgba(37,211,102,0.12)",
                      color: "#25d366",
                      border: "1px solid rgba(37,211,102,0.25)",
                      boxShadow: "0 6px 20px rgba(37,211,102,0.15)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ width: "18px", height: "18px", flexShrink: 0 }}
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.75.75 0 0 0 .916.916l5.573-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.693 9.693 0 0 1-4.953-1.357l-.355-.21-3.683.972.983-3.595-.23-.37A9.693 9.693 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <Link
                    href={ROUTES.programs}
                    className="wa-cta"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.75)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    All Programs
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
