"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Camera } from "lucide-react";
import { ROUTES } from "@/config/routes";

const images = [
  { src: "/gallery/img1.jpeg", alt: "The Girl Essence event" },
  { src: "/gallery/img8.jpeg", alt: "Group mentorship session" },
  { src: "/gallery/img15.jpeg", alt: "Celebration moment" },
  { src: "/gallery/img22.jpeg", alt: "Community award ceremony" },
];

const styles = `
.section-title { font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif; }

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
}

.cta-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 12px 32px rgba(200,51,90,0.4);
}

.gallery-card {
  border-radius: 24px;
  border: 1.5px solid #ede4e9;
  background: #faf8f9;
  box-shadow: 0 18px 45px rgba(26,17,24,0.06);
}
`;

export default function HomeGalleryTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [img1, img2, img3, img4] = images;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <section
        ref={ref}
        className="py-20 sm:py-24 bg-white relative overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
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
              "radial-gradient(circle, rgba(200,51,90,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-7"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(200,51,90,0.12), rgba(200,51,90,0.06))",
                  color: "#c8335a",
                  border: "1px solid rgba(200,51,90,0.2)",
                }}
              >
                <Camera className="w-3.5 h-3.5" />
                Gallery Highlights
              </div>

              <h2
                className="section-title"
                style={{
                  fontSize: "clamp(2.2rem,5vw,3.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.12,
                  marginBottom: "20px",
                  color: "#333",
                }}
              >
                Moments that tell
                <em style={{ color: "#c8335a", fontStyle: "italic" }}>
                  {" "}
                  our story
                </em>
              </h2>

              <p className="text-sm sm:text-base text-[#5a4d54] leading-relaxed mb-4">
                Explore snapshots from our programs, mentorship sessions,
                outreach events, and the everyday moments shaping confident
                young women.
              </p>

              <p className="text-sm sm:text-base text-[#7a6c73] leading-relaxed mb-8">
                A glimpse into the transformation, connection, and impact
                happening across The Girl Essence community.
              </p>

              <Link
                href={ROUTES.gallery}
                className="cta-btn group w-full justify-center sm:w-auto"
              >
                View Full Gallery
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* RIGHT GALLERY */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              // className="gallery-card p-5"
            >
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {/* COLUMN 1 */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden h-[220px] sm:h-[280px] lg:h-[320px]"
                  >
                    <Image
                      src={img1.src}
                      alt={img1.alt}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={80}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    className="relative rounded-2xl overflow-hidden h-[150px] sm:h-[180px] lg:h-[200px]"
                  >
                    <Image
                      src={img2.src}
                      alt={img2.alt}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={80}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                  </motion.div>
                </div>

                {/* COLUMN 2 */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.35 }}
                    className="relative rounded-2xl overflow-hidden h-[150px] sm:h-[180px] lg:h-[200px]"
                  >
                    <Image
                      src={img3.src}
                      alt={img3.alt}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={80}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.42 }}
                    className="relative rounded-2xl overflow-hidden h-[220px] sm:h-[280px] lg:h-[320px]"
                  >
                    <Image
                      src={img4.src}
                      alt={img4.alt}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={80}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
