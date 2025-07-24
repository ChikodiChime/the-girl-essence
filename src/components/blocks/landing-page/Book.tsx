"use client";
import { motion, useInView, Variants } from "framer-motion";
import { Heart, MessageCircle, MapPin, Lock, Calendar } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";

const Book = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
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

  const features = [
    {
      icon: MapPin,
      title: "In-person or virtual options available",
    },
    {
      icon: MessageCircle,
      title: "1-on-1 with a certified counsellor",
    },
    {
      icon: Lock,
      title: "Completely safe and confidential",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8335a]/10 rounded-full text-[#c8335a] font-semibold text-sm mb-6"
          >
            <Heart className="w-4 h-4" />
            Support & Guidance
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Book a <span className="text-[#c8335a]">Counselling Session</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-6"
          >
            Need a listening ear? You're not alone.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
          >
            We provide confidential, supportive counselling sessions for girls
            navigating personal challenges, mental health concerns, family
            struggles, or life decisions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700 mb-8">
                Whether it's one conversation or ongoing support, our trained
                counsellors are here to help — without judgment.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <feature.icon className="w-6 h-6 text-[#c8335a]" />
                    </div>
                    <p className="text-lg text-gray-700">{feature.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-lg font-medium text-gray-900 mb-6">
                Take the first step toward healing and growth.
              </p>
              <Button leftIcon={<Calendar className="w-5 h-5" />}>
                Book a Session Now
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#c8335a]/5 to-pink-100 flex items-center justify-center p-8"
          >
            <div className="text-center max-w-md">
              <div className="w-20 h-20 rounded-full bg-[#c8335a]/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-[#c8335a]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Safe Space to Share
              </h3>
              <p className="text-gray-600">
                Our counsellors provide a warm, non-judgmental environment where
                you can freely express yourself and work through challenges at
                your own pace.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Book;
