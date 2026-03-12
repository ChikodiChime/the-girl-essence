"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Sparkles, Calendar, MapPin } from "lucide-react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
  
  .section-title { font-family: 'Cormorant Garamond', Georgia, serif; }
  
  .stat-card {
    position: relative;
    padding: 24px 20px;
    border-radius: 24px;
    background: linear-gradient(145deg, #ffffff 0%, #faf8f9 100%);
    border: 1px solid rgba(200,51,90,0.08);
    cursor: default;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.34,1.4,0.64,1);
    backdrop-filter: blur(10px);
  }
  
  .stat-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(145deg, transparent, rgba(200,51,90,0.1), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  .stat-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 32px 64px rgba(200,51,90,0.12),
      0 16px 32px rgba(26,17,24,0.08),
      inset 0 1px 0 rgba(255,255,255,0.8);
    border-color: rgba(200,51,90,0.15);
  }
  
  .stat-card:hover::before { opacity: 1; }
  
  .stat-card-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 16px;
    margin-bottom: 16px;
    transition: all 0.5s cubic-bezier(0.34,1.4,0.64,1);
    position: relative;
    z-index: 2;
    box-shadow: 
      0 8px 24px rgba(0,0,0,0.06),
      inset 0 1px 0 rgba(255,255,255,0.8);
  }
  
  .stat-card:hover .stat-card-icon {
    transform: rotate(-8deg) scale(1.15);
    box-shadow: 
      0 12px 32px rgba(200,51,90,0.2),
      inset 0 1px 0 rgba(255,255,255,0.9);
  }
  
  .stat-value {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 12px;
    position: relative;
    z-index: 2;
    transition: all 0.4s cubic-bezier(0.34,1.4,0.64,1);
    background: linear-gradient(135deg, #1a1118 0%, #2a1020 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .stat-card:hover .stat-value { 
    transform: scale(1.08);
    background: linear-gradient(135deg, var(--stat-color) 0%, #1a1118 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .stat-label {
    font-size: 0.81rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    position: relative;
    z-index: 2;
    color: #6b5d64;
    transition: color 0.3s ease;
  }
  
  .stat-card:hover .stat-label { color: var(--stat-color); }
  
  /* Floating decorative elements */
  .stat-decoration {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.34,1.4,0.64,1);
    pointer-events: none;
  }
  
  .stat-decoration-1 {
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, var(--stat-color)08, transparent 70%);
  }
  
  .stat-decoration-2 {
    bottom: -15px;
    left: -15px;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, var(--stat-color)06, transparent 70%);
  }
  
  .stat-card:hover .stat-decoration-1 {
    opacity: 1;
    transform: translate(10px, 10px);
  }
  
  .stat-card:hover .stat-decoration-2 {
    opacity: 1;
    transform: translate(-8px, -8px);
  }
  
  /* Shimmer effect on hover */
  .stat-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.4),
      transparent
    );
    transition: left 0.6s ease;
    pointer-events: none;
    z-index: 1;
  }
  
  .stat-card:hover::after { left: 100%; }
`;

const stats = [
  { value: "4000+", label: "Girls Impacted", icon: Users, color: "#c8335a" },
  { value: "6", label: "Active Programs", icon: Sparkles, color: "#e879a0" },
  { value: "3+", label: "Years of Impact", icon: Calendar, color: "#f4a0b5" },
  {
    value: "Nigeria",
    label: "Based & Growing",
    icon: MapPin,
    color: "#c8335a",
  },
];

export default function HomeImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section
        ref={ref}
        className="py-20 relative overflow-hidden bg-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 32, scale: 0.96 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="stat-card"
                  style={{
                    ["--stat-color" as any]: stat.color,
                  }}
                >
                  {/* Floating decorative elements */}
                  <div className="stat-decoration stat-decoration-1" />
                  <div className="stat-decoration stat-decoration-2" />

                  <div
                    className="stat-card-icon"
                    style={{
                      background: `linear-gradient(145deg, ${stat.color}12, ${stat.color}08)`,
                      border: `1px solid ${stat.color}20`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: stat.color }}
                    />
                  </div>

                  <div className="stat-value">{stat.value}</div>

                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
