"use client";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "I used to be really unsure of myself, but after joining the mentorship circle, I now believe in my worth and dreams.",
    author: "Ada",
    role: "Age 16",
  },
  {
    id: 2,
    quote:
      "The counselling session helped me process a lot of things I couldn't share with anyone else. I feel lighter and stronger.",
    author: "Rukayat",
    role: "Mentee",
  },
  {
    id: 3,
    quote:
      "Supporting this initiative was one of the best decisions I've made. You can see real impact in these girls' lives.",
    author: "Mrs. Okon",
    role: "Donor",
  },
  {
    id: 4,
    quote:
      "Watching my daughter transform through this program has been amazing. She's more confident, assertive, and joyful.",
    author: "Parent of Mentee",
    role: "",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isHovered]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8335a]/10 rounded-full text-[#c8335a] font-semibold text-sm mb-6">
            <Quote className="w-4 h-4" />
            Voices of Impact
          </motion.div>

          <motion.h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-[#c8335a]">Inspiring</span> Stories of Change
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Hear from the girls, parents, and mentors who’ve experienced our
            programs firsthand — from moments of breakthrough to journeys of
            empowerment.
          </motion.p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
              >
                <Quote className="w-8 h-8 text-[#c8335a] opacity-20 mb-4" />
                <p className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#c8335a]/10 flex items-center justify-center text-[#c8335a] font-bold text-lg mr-4">
                    {testimonials[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonials[currentIndex].author}
                    </p>
                    {testimonials[currentIndex].role && (
                      <p className="text-sm text-gray-500">
                        {testimonials[currentIndex].role}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-[#c8335a] hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-[#c8335a] hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-[#c8335a]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
