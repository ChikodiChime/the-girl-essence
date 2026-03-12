"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import { ROUTES } from "@/config/routes";

export default function HomeInstagramCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6 p-6 sm:gap-8 md:flex-row md:gap-12 md:p-10 rounded-2xl"
          style={{
            background: "#faf8f9",
            border: "1.5px solid #ede4e9",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(193,53,132,0.1), rgba(200,51,90,0.08))",
              border: "1px solid rgba(193,53,132,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Instagram
              className="w-7 h-7 sm:w-8 sm:h-8"
              style={{ color: "#c13584" }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2
              style={{
                fontFamily:
                  "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "#1a1118",
                lineHeight: 1.2,
                marginBottom: "8px",
              }}
            >
              Stay{" "}
              <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                Connected
              </em>
            </h2>
            <p
              style={{
                color: "#6b5d64",
                fontSize: "clamp(0.92rem, 2.6vw, 0.95rem)",
                lineHeight: 1.7,
              }}
            >
              Follow us on Instagram for program updates, behind-the-scenes
              moments, and stories of impact.
            </p>
          </div>

          {/* CTA */}
          <motion.a
            href={ROUTES.external.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm md:w-auto flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #c13584, #a02847)",
              color: "white",
              boxShadow: "0 6px 20px rgba(193,53,132,0.25)",
              textDecoration: "none",
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 12px 30px rgba(193,53,132,0.35)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Instagram className="w-4 h-4" />
            @thegirlessence
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
