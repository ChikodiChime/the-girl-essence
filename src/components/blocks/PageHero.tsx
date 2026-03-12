"use client";
import { motion } from "framer-motion";
import {
  Heart,
  Camera,
  HandHeart,
  Sparkles,
  Users,
  GraduationCap,
  Award,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Camera,
  HandHeart,
  Sparkles,
  Users,
  GraduationCap,
  Award,
};

interface PageHeroProps {
  badge?: string;
  badgeIcon?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
}

export default function PageHero({
  badge,
  badgeIcon,
  title,
  titleAccent,
  subtitle,
}: PageHeroProps) {
  const BadgeIcon = badgeIcon ? iconMap[badgeIcon] : null;
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
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
          width: "min(400px, 68vw)",
          height: "min(400px, 68vw)",
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
          width: "min(300px, 54vw)",
          height: "min(300px, 54vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,51,90,0.1), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center px-1 sm:px-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {badge && (
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                style={{
                  background: "rgba(200,51,90,0.18)",
                  color: "#f4a0b5",
                  border: "1px solid rgba(200,51,90,0.28)",
                  letterSpacing: "0.06em",
                }}
              >
                {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-white mb-5"
            style={{
              fontFamily:
                "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.1rem, 8vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
            {titleAccent && (
              <>
                {" "}
                <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                  {titleAccent}
                </em>
              </>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="px-2 sm:px-0"
              style={{
                fontSize: "clamp(0.98rem, 3.2vw, 1.1rem)",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                maxWidth: "42rem",
                margin: "0 auto",
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-[1px] text-white leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-10 w-full sm:h-12 lg:h-14"
          aria-hidden="true"
        >
          <path
            d="M0,20 C360,140 1080,140 1440,20 L1440,140 L0,140 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
