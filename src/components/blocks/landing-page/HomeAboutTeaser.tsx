"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
import { ROUTES } from "@/config/routes";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
  
  .section-title { font-family: 'Cormorant Garamond', Georgia, serif; }
  
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
    box-shadow: 0 6px 24px rgba(200,51,90,0.3);
    letter-spacing: 0.02em;
  }
  .cta-btn:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 32px rgba(200,51,90,0.4);
    filter: brightness(1.06);
  }
  .cta-btn:active { transform: scale(0.98); }
`;

export default function HomeAboutTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section
        ref={ref}
        className="py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Ambient blob */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            transform: "translateY(-50%)",
            background:
              "radial-gradient(circle, rgba(200,51,90,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="relative rounded-3xl overflow-hidden mx-auto max-w-[28rem] lg:max-w-none"
                style={{
                  aspectRatio: "4/5",
                  maxHeight: "min(580px, 78vh)",
                  border: "1.5px solid #ede4e9",
                  boxShadow: "0 20px 60px rgba(26,17,24,0.08)",
                }}
              >
                <Image
                  src="/afrigirl.jpg"
                  alt="The Girl Essence community"
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(1.05)" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(26,17,24,0.35) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Floating quote card */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-4 right-4 -bottom-6 p-4 sm:left-auto sm:right-4 sm:max-w-[240px] sm:p-5 lg:right-auto lg:-left-8 lg:p-6 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(140deg, #1a1118 0%, #2a1020 100%)",
                  border: "1.5px solid rgba(200,51,90,0.25)",
                  boxShadow: "0 24px 48px rgba(0,0,0,0.25)",
                }}
              >
                <Heart className="w-5 h-5 mb-3" style={{ color: "#c8335a" }} />
                <p
                  className="section-title"
                  style={{
                    fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.88)",
                    lineHeight: 1.55,
                  }}
                >
                  "Raising whole women, one girl at a time."
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-7"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(200,51,90,0.12), rgba(200,51,90,0.06))",
                  color: "#c8335a",
                  border: "1px solid rgba(200,51,90,0.2)",
                  letterSpacing: "0.03em",
                }}
              >
                <Heart className="w-3.5 h-3.5" />
                About Us
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="section-title"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#1a1118",
                  lineHeight: 1.12,
                  marginBottom: "24px",
                  letterSpacing: "-0.01em",
                }}
              >
                Empowering Young{" "}
                <em style={{ color: "#c8335a", fontStyle: "italic" }}>Women</em>{" "}
                to Lead
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{
                  color: "#5a4d54",
                  fontSize: "clamp(0.98rem, 2.8vw, 1.05rem)",
                  lineHeight: 1.8,
                  marginBottom: "18px",
                  fontWeight: 400,
                }}
              >
                The Girl Essence is a girl-centered mentorship and advocacy
                platform committed to raising whole, confident, and
                purpose-driven young women aged 16–30.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  color: "#7a6c73",
                  fontSize: "0.98rem",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                We create safe spaces where girls can learn, grow, and lead
                without judgment — through mentorship, training, counselling,
                and community.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Link href={ROUTES.about} className="cta-btn group">
                  Learn More About Us
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
