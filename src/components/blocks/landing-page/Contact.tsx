"use client";
import { motion, useInView, Variants } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Users,
  Handshake,
  Heart,
  GraduationCap,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import React, { useState, useRef } from "react";

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

  .section-title { font-family: 'Cormorant Garamond', Georgia, serif; }

  /* ── Involvement rows ── */
  .inv-row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 0;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: padding-left 0.35s cubic-bezier(0.34,1.4,0.64,1);
  }
  .inv-row::before {
    content: '';
    position: absolute;
    left: -20px; top: 8px; bottom: 8px;
    width: 2.5px;
    background: linear-gradient(180deg, #c8335a, #7c1933);
    border-radius: 99px;
    opacity: 0;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: opacity 0.2s ease, transform 0.38s cubic-bezier(0.34,1.4,0.64,1) 0.05s;
  }
  .inv-row:hover { padding-left: 6px; }
  .inv-row:hover::before { opacity: 1; transform: scaleY(1); }

  .inv-icon {
    width: 40px; height: 40px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.1);
    flex-shrink: 0;
    transition: background 0.3s ease, border-color 0.3s ease,
                transform 0.4s cubic-bezier(0.34,1.4,0.64,1),
                box-shadow 0.3s ease;
  }
  .inv-icon svg { color: rgba(255,255,255,0.7); transition: color 0.3s ease; }
  .inv-row:hover .inv-icon {
    background: rgba(200,51,90,0.28);
    border-color: rgba(200,51,90,0.35);
    transform: rotate(-6deg) scale(1.1);
    box-shadow: 0 4px 16px rgba(200,51,90,0.3);
  }
  .inv-row:hover .inv-icon svg { color: #f4a0b5; }

  .inv-text-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: white;
    line-height: 1.2;
    transition: color 0.25s ease;
  }
  .inv-row:hover .inv-text-title { color: #f4a0b5; }

  .inv-text-desc {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.45);
    line-height: 1.5;
    transition: color 0.25s ease;
  }
  .inv-row:hover .inv-text-desc { color: rgba(255,255,255,0.65); }

  .inv-arrow {
    margin-left: auto;
    width: 32px; height: 32px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.3s ease, border-color 0.3s ease,
                transform 0.4s cubic-bezier(0.34,1.4,0.64,1),
                box-shadow 0.3s ease;
  }
  .inv-arrow svg { color: rgba(255,255,255,0.4); transition: color 0.25s ease; width: 13px; height: 13px; }
  .inv-row:hover .inv-arrow {
    background: #c8335a;
    border-color: #c8335a;
    transform: rotate(42deg) scale(1.08);
    box-shadow: 0 4px 14px rgba(200,51,90,0.4);
  }
  .inv-row:hover .inv-arrow svg { color: white; }

  .inv-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent);
  }

  /* ── Contact info items ── */
  .cinfo-item {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }
  .cinfo-item:hover { opacity: 0.75; }

  .cinfo-icon {
    width: 36px; height: 36px;
    border-radius: 9px;
    background: rgba(200,51,90,0.18);
    border: 1px solid rgba(200,51,90,0.25);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.25s ease, transform 0.35s cubic-bezier(0.34,1.4,0.64,1);
  }
  .cinfo-icon svg { color: #f4a0b5; }
  .cinfo-item:hover .cinfo-icon {
    background: rgba(200,51,90,0.3);
    transform: scale(1.1);
  }

  /* ── Form inputs ── */
  .form-input {
    width: 100%;
    padding: 13px 16px;
    border-radius: 12px;
    border: 1.5px solid #ede4e9;
    background: #faf8f9;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    color: #1a1118;
    outline: none;
    transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
    resize: none;
  }
  .form-input::placeholder { color: #b8a8b0; }
  .form-input:focus {
    border-color: #c8335a;
    background: white;
    box-shadow: 0 0 0 3px rgba(200,51,90,0.08);
  }

  .form-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 600;
    color: #5a4a52;
    margin-bottom: 7px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  /* ── Submit button ── */
  .submit-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 15px 32px;
    background: linear-gradient(135deg, #c8335a, #a02847);
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: transform 0.28s cubic-bezier(0.34,1.4,0.64,1),
                box-shadow 0.28s ease, filter 0.28s ease;
    box-shadow: 0 6px 24px rgba(200,51,90,0.3);
    letter-spacing: 0.02em;
  }
  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 12px 32px rgba(200,51,90,0.38);
    filter: brightness(1.06);
  }
  .submit-btn:active:not(:disabled) { transform: scale(0.98); }
  .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

  /* ── Instagram link ── */
  .ig-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 18px;
    border-radius: 12px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    text-decoration: none;
    transition: background 0.25s ease, border-color 0.25s ease,
                transform 0.35s cubic-bezier(0.34,1.4,0.64,1);
  }
  .ig-link:hover {
    background: rgba(200,51,90,0.18);
    border-color: rgba(200,51,90,0.28);
    transform: translateX(4px);
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const involvementOptions = [
  {
    icon: Users,
    title: "Become a Mentor",
    description: "Share your experience and guide young women on their journey.",
    href: "#",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Collaborate on programs and outreach initiatives.",
    href: "#",
  },
  {
    icon: Heart,
    title: "Support & Sponsor",
    description: "Fund our initiatives and help us reach more girls.",
    href: "#",
  },
  {
    icon: GraduationCap,
    title: "Join Our Sessions",
    description: "Participate in trainings, workshops, and events.",
    href: "#",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <section
        ref={sectionRef}
        id="contact"
        className="py-28 bg-white relative overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Ambient blobs */}
        <div aria-hidden style={{ position: "absolute", top: "-80px", left: "-80px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,51,90,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,51,90,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section header ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-7"
              style={{ background: "linear-gradient(135deg, rgba(200,51,90,0.12), rgba(200,51,90,0.06))", color: "#c8335a", border: "1px solid rgba(200,51,90,0.2)", letterSpacing: "0.03em" }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Get Involved
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="section-title mb-5"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", fontWeight: 700, color: "#1a1118", lineHeight: 1.1, letterSpacing: "-0.01em" }}
            >
              Join{" "}
              <em style={{ color: "#c8335a", fontStyle: "italic" }}>Our Movement</em>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              style={{ fontSize: "1.05rem", color: "#6b5d64", maxWidth: "580px", margin: "0 auto", lineHeight: 1.8 }}
            >
              There are many ways to be part of The Girl Essence. Whether you want
              to mentor, partner, support, or participate—we'd love to have you.
            </motion.p>
          </motion.div>

          {/* ── Main split layout ── */}
          <div className="grid lg:grid-cols-5 gap-6 items-start">

            {/* ── LEFT: Dark panel ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-2 rounded-3xl overflow-hidden relative"
              style={{
                background: "#1a1118",
                border: "1.5px solid #2a1e24",
                padding: "40px 36px",
              }}
            >
              {/* Background glows */}
              <div aria-hidden style={{ position: "absolute", top: "-60px", right: "-60px", width: "260px", height: "260px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,51,90,0.14), transparent 70%)", pointerEvents: "none" }} />
              <div aria-hidden style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,51,90,0.08), transparent 70%)", pointerEvents: "none" }} />

              <div className="relative z-10">
                {/* Heading */}
                <motion.div variants={itemVariants} className="mb-10">
                  <p style={{ color: "#c8335a", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Ways to connect
                  </p>
                  <h3
                    className="section-title"
                    style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", fontWeight: 700, color: "white", lineHeight: 1.15, letterSpacing: "-0.01em" }}
                  >
                    Get{" "}
                    <em style={{ color: "#c8335a", fontStyle: "italic" }}>Involved</em>
                  </h3>
                </motion.div>

                {/* Involvement rows */}
                <div style={{ paddingLeft: "20px", marginBottom: "36px" }}>
                  {involvementOptions.map((opt, i) => {
                    const Icon = opt.icon;
                    return (
                      <React.Fragment key={opt.title}>
                        <motion.a
                          href={opt.href}
                          className="inv-row"
                          variants={rowVariants}
                        >
                          <div className="inv-icon">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div className="inv-text-title">{opt.title}</div>
                            <div className="inv-text-desc">{opt.description}</div>
                          </div>
                          <div className="inv-arrow">
                            <ArrowUpRight />
                          </div>
                        </motion.a>
                        {i < involvementOptions.length - 1 && <div className="inv-divider" />}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "28px" }} />

                {/* Contact info */}
                <motion.div variants={itemVariants} className="space-y-4 mb-8">
                  <a href="mailto:info@thegirlessence.org" className="cinfo-item">
                    <div className="cinfo-icon">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1px" }}>Email</div>
                      <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>info@thegirlessence.org</div>
                    </div>
                  </a>

                  <div className="cinfo-item" style={{ cursor: "default" }}>
                    <div className="cinfo-icon">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1px" }}>Location</div>
                      <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>Nigeria</div>
                    </div>
                  </div>
                </motion.div>

                {/* Instagram link */}
                <motion.a
                  variants={itemVariants}
                  href="https://instagram.com/thegirlessence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-link"
                >
                  <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "rgba(200,51,90,0.2)", border: "1px solid rgba(200,51,90,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Instagram className="w-4 h-4" style={{ color: "#f4a0b5" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1px" }}>Instagram</div>
                    <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>@thegirlessence</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4" style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
                </motion.a>
              </div>
            </motion.div>

            {/* ── RIGHT: Form panel ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-3 rounded-3xl"
              style={{ background: "#faf8f9", border: "1.5px solid #ede4e9", padding: "40px 40px" }}
            >
              <motion.div variants={itemVariants} className="mb-10">
                <p style={{ color: "#c8335a", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
                  Reach out
                </p>
                <h3
                  className="section-title"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", fontWeight: 700, color: "#1a1118", lineHeight: 1.15, letterSpacing: "-0.01em" }}
                >
                  Send Us a{" "}
                  <em style={{ color: "#c8335a", fontStyle: "italic" }}>Message</em>
                </h3>
                <p style={{ color: "#6b5d64", fontSize: "0.9rem", marginTop: "8px", lineHeight: 1.7 }}>
                  Have questions? We'd love to hear from you.
                </p>
              </motion.div>

              {/* Status messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ marginBottom: "20px", padding: "14px 18px", background: "rgba(34,197,94,0.08)", color: "#15803d", borderRadius: "12px", border: "1.5px solid rgba(34,197,94,0.2)", fontSize: "0.88rem", fontWeight: 500 }}
                >
                  ✓ Thank you! We'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ marginBottom: "20px", padding: "14px 18px", background: "rgba(239,68,68,0.07)", color: "#b91c1c", borderRadius: "12px", border: "1.5px solid rgba(239,68,68,0.18)", fontSize: "0.88rem", fontWeight: 500 }}
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      required placeholder="Jane Doe"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      required placeholder="you@example.com"
                      className="form-input"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} style={{ marginBottom: "20px" }}>
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text" id="subject" name="subject"
                    value={formData.subject} onChange={handleChange}
                    required placeholder="How can we help you?"
                    className="form-input"
                  />
                </motion.div>

                <motion.div variants={itemVariants} style={{ marginBottom: "28px" }}>
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    value={formData.message} onChange={handleChange}
                    required placeholder="Tell us more..."
                    className="form-input"
                    style={{ display: "block" }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button type="submit" disabled={isSubmitting} className="submit-btn">
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeDashoffset="12" strokeLinecap="round" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;