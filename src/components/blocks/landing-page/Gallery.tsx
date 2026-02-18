"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Camera,
  ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = `
  .section-title { font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif; }
  
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.95);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .modal-content {
    // position: relative;
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
  }
  
  .modal-image {
    max-width: 100%;
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
  }
  
  .modal-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
  }
  
  .modal-nav-btn:hover {
    background: rgba(200, 51, 90, 0.8);
    border-color: rgba(200, 51, 90, 1);
    transform: translateY(-50%) scale(1.1);
  }
  
  .modal-nav-btn.prev { left: 20px; }
  .modal-nav-btn.next { right: 20px; }
  
  .modal-close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
  }
  
  .modal-close-btn:hover {
    background: rgba(200, 51, 90, 0.8);
    border-color: rgba(200, 51, 90, 1);
    transform: scale(1.1);
  }
  
  .gallery-image-clickable {
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .gallery-image-clickable:hover {
    transform: scale(1.02);
  }
`;

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - replace with actual images when available
  // To add images: place them in /public/gallery/ folder and update this array
  const galleryImages = {
    column1: [
      { id: 1, src: "/gallery/img1.jpeg", alt: "The Girl Essence event" },
      { id: 2, src: "/gallery/img2.jpeg", alt: "Mentorship session" },
      { id: 3, src: "/gallery/img3.jpeg", alt: "Leadership workshop" },
      { id: 4, src: "/gallery/img4.jpeg", alt: "Community outreach" },
      { id: 5, src: "/gallery/img5.jpeg", alt: "Girl's Talk session" },
      { id: 6, src: "/gallery/img6.jpeg", alt: "AfriGirl Summit" },
    ],
    column2: [
      { id: 7, src: "/gallery/img7.jpeg", alt: "Training session" },
      { id: 8, src: "/gallery/img8.jpeg", alt: "Group mentorship" },
      { id: 9, src: "/gallery/img9.jpeg", alt: "Empowerment event" },
      { id: 10, src: "/gallery/img10.jpeg", alt: "Workshop activity" },
      { id: 11, src: "/gallery/img11.jpeg", alt: "Leadership training" },
      { id: 12, src: "/gallery/img12.jpeg", alt: "Community event" },
    ],
    column3: [
      { id: 13, src: "/gallery/img13.jpeg", alt: "Coaching session" },
      { id: 14, src: "/gallery/img14.jpeg", alt: "Team building" },
      { id: 15, src: "/gallery/img15.jpeg", alt: "Celebration event" },
      { id: 16, src: "/gallery/img16.jpeg", alt: "Advocacy campaign" },
      { id: 17, src: "/gallery/img17.jpeg", alt: "Skills workshop" },
      { id: 18, src: "/gallery/img18.jpeg", alt: "Networking event" },
    ],
    column4: [
      { id: 19, src: "/gallery/img19.jpeg", alt: "Panel discussion" },
      { id: 20, src: "/gallery/img20.jpeg", alt: "Award ceremony" },
      { id: 21, src: "/gallery/img21.jpeg", alt: "Award ceremony" },
      { id: 22, src: "/gallery/img22.jpeg", alt: "Award ceremony" },
      { id: 23, src: "/gallery/img23.jpeg", alt: "Award ceremony" },
      { id: 24, src: "/gallery/img24.jpeg", alt: "Award ceremony" },
    ],
    column5: [
      { id: 25, src: "/gallery/img25.jpeg", alt: "Award ceremony" },
      { id: 26, src: "/gallery/img26.jpeg", alt: "Award ceremony" },
      { id: 27, src: "/gallery/img27.jpeg", alt: "Award ceremony" },
      { id: 28, src: "/gallery/img28.jpeg", alt: "Award ceremony" },
      { id: 29, src: "/gallery/img1.jpeg", alt: "The Girl Essence event" },
      { id: 30, src: "/gallery/img15.jpeg", alt: "Celebration event" },
    ],
  };

  // Flatten all images into a single array for modal navigation
  const allImages = [
    ...galleryImages.column1,
    ...galleryImages.column2,
    ...galleryImages.column3,
    ...galleryImages.column4,
    ...galleryImages.column5,
  ];

  const usePlaceholders = false;

  const openModal = (imageId: number) => {
    const index = allImages.findIndex((img) => img.id === imageId);
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? allImages.length - 1 : selectedImage - 1,
      );
    } else {
      setSelectedImage(
        selectedImage === allImages.length - 1 ? 0 : selectedImage + 1,
      );
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeModal, navigateImage]);

  const PlaceholderImage = ({
    index,
    height,
  }: {
    index: number;
    height: string;
  }) => (
    <div
      className={`relative w-full ${height} bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden group`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#c8335a]/5 to-[#a02847]/10" />
      <div className="text-center z-10">
        <ImageIcon className="w-10 h-10 text-gray-300 mx-auto mb-2" />
        <span className="text-xs text-gray-400">Image {index}</span>
      </div>
      <div className="absolute inset-0 bg-[#c8335a]/0 group-hover:bg-[#c8335a]/10 transition-all duration-300" />
    </div>
  );

  const GalleryColumn = ({
    images,
    animationClass,
    heights,
  }: {
    images: typeof galleryImages.column1;
    animationClass: string;
    heights: string[];
  }) => (
    <div className={`flex flex-col gap-4 ${animationClass}`}>
      {/* Duplicate images for seamless loop */}
      {[...images, ...images].map((image, index) => (
        <div key={`${image.id}-${index}`} className="flex-shrink-0">
          {usePlaceholders ? (
            <PlaceholderImage
              index={image.id}
              height={heights[index % heights.length]}
            />
          ) : (
            <div
              className={`relative w-full ${heights[index % heights.length]} rounded-2xl overflow-hidden group gallery-image-clickable`}
              onClick={() => openModal(image.id)}
            >
              <Image
                src={image.src}
                  alt={image.alt}
                  fill
                 sizes="(max-width: 768px) 50vw,
         (max-width: 1024px) 33vw,
         20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <section
        ref={sectionRef}
        id="gallery"
        className="py-28 bg-white relative overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Ambient blob */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-100px",
            left: "-60px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,51,90,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
              <Camera className="w-3.5 h-3.5" />
              Our Gallery
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
              Moments of{" "}
              <em style={{ color: "#c8335a", fontStyle: "italic" }}>Impact</em>
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
              Capturing the journey of transformation, empowerment, and growth
              across our programs and events.
            </motion.p>
          </motion.div>

          {/* Gallery Grid - Multi-column vertical autoplay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gallery-container relative h-[500px] lg:h-[600px] overflow-hidden rounded-3xl"
          >
            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" />

            {/* Column Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 h-full">
              {/* Column 1 - Scrolls up */}
              <div className="overflow-hidden">
                <GalleryColumn
                  images={galleryImages.column1}
                  animationClass="gallery-col-up"
                  heights={["h-48", "h-64", "h-56", "h-72", "h-52"]}
                />
              </div>

              {/* Column 2 - Scrolls down */}
              <div className="overflow-hidden">
                <GalleryColumn
                  images={galleryImages.column2}
                  animationClass="gallery-col-down"
                  heights={["h-56", "h-48", "h-72", "h-52", "h-64"]}
                />
              </div>

              {/* Column 3 - Scrolls up (slower) - Hidden on mobile */}
              <div className="overflow-hidden hidden md:block">
                <GalleryColumn
                  images={galleryImages.column3}
                  animationClass="gallery-col-up-slow"
                  heights={["h-64", "h-52", "h-48", "h-72", "h-56"]}
                />
              </div>

              {/* Column 4 - Scrolls down (slower) - Hidden on tablet */}
              <div className="overflow-hidden hidden lg:block">
                <GalleryColumn
                  images={galleryImages.column4}
                  animationClass="gallery-col-down-slow"
                  heights={["h-52", "h-72", "h-56", "h-48", "h-64"]}
                />
              </div>

              {/* Column 5 - Scrolls up (faster) - Hidden on tablet */}
              <div className="overflow-hidden hidden lg:block">
                <GalleryColumn
                  images={galleryImages.column5}
                  animationClass="gallery-col-up"
                  heights={["h-64", "h-48", "h-52", "h-72", "h-56"]}
                />
              </div>
            </div>
          </motion.div>

          {/* Coming Soon Notice */}
          {usePlaceholders && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-8"
            >
              <p className="text-gray-500 text-sm">
                More photos coming soon! Follow us on{" "}
                <a
                  href="https://instagram.com/thegirlessence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8335a] hover:underline font-medium"
                >
                  @thegirlessence
                </a>{" "}
                for the latest updates.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[selectedImage].src}
                alt={allImages[selectedImage].alt}
                width={1200}
                height={800}
                className="modal-image"
                priority
              />

              {/* Close button */}
              <button
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation buttons */}
              <button
                className="modal-nav-btn prev"
                onClick={() => navigateImage("prev")}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="modal-nav-btn next"
                onClick={() => navigateImage("next")}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image counter */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(10px)",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                {selectedImage + 1} / {allImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
