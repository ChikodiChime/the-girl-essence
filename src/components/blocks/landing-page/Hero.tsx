/* eslint-disable react/no-unescaped-entities */

"use client";
import type { StaticImageData } from "next/image";
import type { Variants } from "framer-motion";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface Slide {
  id: number;
  image: StaticImageData | string;
}

export default function HeroSlideshow() {
  const slides: Slide[] = [
    { id: 1, image: "/hero1.jpg" },
    { id: 2, image: "/hero2.jpg" },
    { id: 3, image: "/hero3.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNext = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // const goToPrev = () => {
  //   setDirection("left");
  //   setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };

  const slideVariants: Variants = {
    enter: (direction: string) => ({
      opacity: 1,
      x: direction === "right" ? "100%" : "-100%",
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: string) => ({
      opacity: 1,
      x: direction === "right" ? "-100%" : "100%",
    }),
  };

  const textContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const textItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for easeOut
      },
    },
  };

  const highlightItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for easeOut
      },
    },
    pulse: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const getImageUrl = (image: StaticImageData | string) => {
    return typeof image === "string" ? image : image.src;
  };

  return (
    <div className="relative flex h-screen w-full flex-col justify-center overflow-hidden py-[10vh]">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slides[currentSlide].id}
          animate="center"
          className="absolute inset-0 h-full w-full"
          custom={direction}
          exit="exit"
          initial="enter"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          variants={slideVariants}
        >
          <div
            className="h-full w-full bg-cover bg-no-repeat md:bg-center"
            style={{
              backgroundImage: `url(${getImageUrl(
                slides[currentSlide].image
              )})`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 px-6 text-white md:px-22">
        <motion.div animate="show" initial="hidden" variants={textContainer}>
          <motion.p
            className="mb-[5vh] w-fit rounded-full bg-white px-1 py-1 text-[9px] font-semibold text-[#c8335a] md:mb-4 md:px-3 md:text-base"
            variants={textItem}
          >
            Non-profit Organisation
          </motion.p>
          <motion.h1
            className={`my-[3vh] text-5xl font-bold md:text-[80px] lg:text-[100px] lg:leading-24`}
          >
            <motion.span variants={textItem}>Empowering </motion.span>
            <motion.span
              className="text-[#c8335a]"
              style={{ display: "inline-block" }}
              variants={highlightItem}
            >
              Women,
            </motion.span>{" "}
            <br />
            <motion.span variants={textItem}>Transforming Futures.</motion.span>
          </motion.h1>
          <motion.p
            className="mb-8 w-full text-xs md:text-base lg:w-2/3"
            variants={textItem}
          >
            We build wholesome, confident, and intentional women by guiding
            girls through mentorship, coaching, counselling, and advocacy. By
            helping them discover their voice and purpose, we’re shaping a
            generation ready to lead and transform their world — one girl at a
            time.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative my-[5vh] flex items-center space-x-2 px-6 md:space-x-5 md:px-22">
       <Button
       href="/book"
       variant="secondary"
       size="md"
       className=""
       fullWidth={false}
       borderRadius="calc(infinity * 1px)"
      //  gradientFrom="#c8335a"
      //  gradientTo="#a02847"
      //  hoverGradientFrom="#a02847"
      //  hoverGradientTo="#8b1f3a"
      //  shadowColor="rgba(200, 51, 90, 0.4)"
     >
       Book a counselling session
     </Button>

        <Button
          href="/donate"
          variant="primary"
          size="md"
          className=""
          fullWidth={false}
          borderRadius="calc(infinity * 1px)"
          gradientFrom="#c8335a"
          gradientTo="#a02847"
          hoverGradientFrom="#a02847"
          hoverGradientTo="#8b1f3a"
          shadowColor="rgba(200, 51, 90, 0.4)"
        >
          Donate
        </Button>
      </div>

      <div className="relative z-10 hidden gap-4 px-6 md:flex md:px-22">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative flex h-4 items-center focus:outline-none"
            onClick={() => goToSlide(index)}
          >
            <div className="h-1 w-12 rounded-lg bg-gray-300/50 transition-colors group-hover:bg-white/80 md:w-16" />
            {index === currentSlide && (
              <motion.div
                className="absolute h-1.5 w-12 rounded-lg bg-white md:w-16"
                layoutId="activeDash"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
