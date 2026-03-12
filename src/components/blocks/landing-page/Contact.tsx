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
  ArrowUpRight,
  Instagram,
} from "lucide-react";
import React, { useState, useRef } from "react";
import { toast } from "sonner";
import { ROUTES } from "@/config/routes";

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

  .section-title { font-family: 'Cormorant Garamond', Georgia, serif; }

  /* ── Involvement cards (horizontal top row) ── */
  .inv-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 16px;
    background: #faf8f9;
    border: 1.5px solid #ede4e9;
    transition: transform 0.35s cubic-bezier(0.34,1.4,0.64,1),
                box-shadow 0.35s ease,
                border-color 0.3s ease;
  }
  .inv-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(200,51,90,0.12);
    border-color: rgba(200,51,90,0.2);
  }

  .inv-card-icon {
    width: 44px; height: 44px;
    border-radius: 12px;
    background: rgba(200,51,90,0.1);
    border: 1px solid rgba(200,51,90,0.15);
    display: flex; align-items: center; justify-content: center;
    transition: background 0.3s ease, transform 0.4s cubic-bezier(0.34,1.4,0.64,1);
  }
  .inv-card-icon svg { color: #c8335a; transition: color 0.3s ease; }
  .inv-card:hover .inv-card-icon {
    background: rgba(200,51,90,0.18);
    transform: rotate(-6deg) scale(1.08);
  }

  .inv-card-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: #1a1118;
    line-height: 1.2;
  }

  .inv-card-desc {
    font-size: 0.82rem;
    color: #7a6c73;
    line-height: 1.6;
  }

  /* ── Contact action buttons ── */
  .contact-btn {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 20px;
    border-radius: 16px;
    text-decoration: none;
    transition: background 0.3s ease, border-color 0.3s ease,
                transform 0.4s cubic-bezier(0.34,1.4,0.64,1),
                box-shadow 0.3s ease;
    border: 1.5px solid;
  }

  .contact-btn.whatsapp {
    background: rgba(37,211,102,0.06);
    border-color: rgba(37,211,102,0.18);
  }
  .contact-btn.whatsapp:hover {
    background: rgba(37,211,102,0.12);
    border-color: rgba(37,211,102,0.35);
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(37,211,102,0.2);
  }

  .contact-btn.email {
    background: rgba(200,51,90,0.06);
    border-color: rgba(200,51,90,0.18);
  }
  .contact-btn.email:hover {
    background: rgba(200,51,90,0.12);
    border-color: rgba(200,51,90,0.35);
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(200,51,90,0.2);
  }

  .contact-btn.instagram {
    background: rgba(193,53,132,0.06);
    border-color: rgba(193,53,132,0.18);
  }
  .contact-btn.instagram:hover {
    background: rgba(193,53,132,0.12);
    border-color: rgba(193,53,132,0.35);
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(193,53,132,0.2);
  }

  .contact-icon {
    width: 48px; height: 48px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: transform 0.4s cubic-bezier(0.34,1.4,0.64,1);
  }
  .contact-btn:hover .contact-icon { transform: scale(1.1) rotate(-5deg); }

  .contact-btn.whatsapp .contact-icon { background: rgba(37,211,102,0.15); }
  .contact-btn.email .contact-icon { background: rgba(200,51,90,0.15); }
  .contact-btn.instagram .contact-icon { background: rgba(193,53,132,0.15); }

  .contact-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 3px;
  }
  .contact-btn.whatsapp .contact-label { color: #15803d; }
  .contact-btn.email .contact-label { color: #a02847; }
  .contact-btn.instagram .contact-label { color: #a8226e; }

  .contact-text {
    font-size: 0.92rem;
    font-weight: 500;
    color: #1a1118;
  }

  .contact-arrow {
    margin-left: auto;
    color: #b8a8b0;
    transition: color 0.3s ease, transform 0.35s ease;
    flex-shrink: 0;
  }
  .contact-btn:hover .contact-arrow {
    color: #7a6c73;
    transform: translateX(3px);
  }

  /* ── Form inputs ── */
  .form-input {
    width: 100%;
    padding: 13px 16px;
    border-radius: 12px;
    border: 1.5px solid #ede4e9;
    background: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    color: #1a1118;
    outline: none;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
    resize: none;
  }
  .form-input::placeholder { color: #b8a8b0; }
  .form-input:focus {
    border-color: #c8335a;
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
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const involvementOptions = [
  {
    icon: Users,
    title: "Become a Mentor",
    description: "Share your experience and guide young women.",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Collaborate on programs and initiatives.",
  },
  {
    icon: Heart,
    title: "Support & Sponsor",
    description: "Fund our work and help us reach more girls.",
  },
  {
    icon: GraduationCap,
    title: "Join Our Sessions",
    description: "Participate in trainings and events.",
  },
];

const WHATSAPP_PHONE = ROUTES.contactInfo.whatsappPhone;
const WHATSAPP_HREF = ROUTES.external.whatsapp();

// ─── Component ────────────────────────────────────────────────────────────────
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent!", {
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong", {
        description: "Your message could not be sent. Please try again.",
      });
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
        className="py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Ambient blobs */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,51,90,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,51,90,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Section header ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-7"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,51,90,0.12), rgba(200,51,90,0.06))",
                color: "#c8335a",
                border: "1px solid rgba(200,51,90,0.2)",
                letterSpacing: "0.03em",
              }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Get Involved
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="section-title mb-5"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                fontWeight: 700,
                color: "#1a1118",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Join{" "}
              <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                Our Movement
              </em>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "clamp(0.96rem, 2.8vw, 1.05rem)",
                color: "#6b5d64",
                maxWidth: "580px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              There are many ways to be part of The Girl Essence. Choose how
              you'd like to connect with us below.
            </motion.p>
          </motion.div>

          {/* ── Ways to get involved (horizontal cards) ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-16"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {involvementOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <motion.div
                    key={opt.title}
                    variants={itemVariants}
                    className="inv-card"
                  >
                    <div className="inv-card-icon">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="inv-card-title">{opt.title}</div>
                      <div className="inv-card-desc">{opt.description}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Contact methods + Form ── */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* LEFT: Contact methods */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              <motion.div variants={itemVariants}>
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
                  Contact us
                </p>
                <h3
                  className="section-title"
                  style={{
                    fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                    fontWeight: 700,
                    color: "#1a1118",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                    marginBottom: "6px",
                  }}
                >
                  Get in{" "}
                  <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                    Touch
                  </em>
                </h3>
                <p
                  style={{
                    color: "#6b5d64",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  Ready to connect? Choose your preferred method below.
                </p>
              </motion.div>

              {/* WhatsApp */}
              <motion.a
                variants={itemVariants}
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn whatsapp"
              >
                <div className="contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ width: "20px", height: "20px", color: "#25d366" }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.75.75 0 0 0 .916.916l5.573-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.693 9.693 0 0 1-4.953-1.357l-.355-.21-3.683.972.983-3.595-.23-.37A9.693 9.693 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="contact-label">Chat on WhatsApp</div>
                  <div className="contact-text break-all">{WHATSAPP_PHONE}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 contact-arrow" />
              </motion.a>

              {/* Email */}
              <motion.a
                variants={itemVariants}
                href={ROUTES.external.contactEmail}
                className="contact-btn email"
              >
                <div className="contact-icon">
                  <Mail className="w-5 h-5" style={{ color: "#c8335a" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="contact-label">Send us an email</div>
                  <div className="contact-text break-all">
                    {ROUTES.contactInfo.contactEmailAddress}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 contact-arrow" />
              </motion.a>

              {/* Instagram */}
              <motion.a
                variants={itemVariants}
                href={ROUTES.external.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn instagram"
              >
                <div className="contact-icon">
                  <Instagram className="w-5 h-5" style={{ color: "#c13584" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="contact-label">Follow on Instagram</div>
                  <div className="contact-text break-all">
                    {ROUTES.contactInfo.instagramHandle}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 contact-arrow" />
              </motion.a>

              {/* Location */}
              <motion.div
                variants={itemVariants}
                className="pt-4 flex items-center gap-3"
                style={{ borderTop: "1px solid #ede4e9" }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(200,51,90,0.08)",
                    border: "1px solid rgba(200,51,90,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin className="w-4 h-4" style={{ color: "#c8335a" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "#b8a8b0",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "2px",
                    }}
                  >
                    Based in
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#1a1118",
                      fontWeight: 500,
                    }}
                  >
                    Nigeria
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: Contact form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="rounded-3xl"
              style={{
                background: "#faf8f9",
                border: "1.5px solid #ede4e9",
                padding: "24px",
              }}
            >
              <motion.div variants={itemVariants} className="mb-8">
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
                  Send a message
                </p>
                <h3
                  className="section-title"
                  style={{
                    fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                    fontWeight: 700,
                    color: "#1a1118",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                    marginBottom: "6px",
                  }}
                >
                  Contact{" "}
                  <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                    Form
                  </em>
                </h3>
                <p
                  style={{
                    color: "#6b5d64",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  Prefer to write? Fill out the form and we'll respond soon.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit}>
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
                >
                  <div>
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  style={{ marginBottom: "16px" }}
                >
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="form-input"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  style={{ marginBottom: "24px" }}
                >
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more..."
                    className="form-input"
                    style={{ display: "block" }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray="32"
                            strokeDashoffset="12"
                            strokeLinecap="round"
                          />
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
