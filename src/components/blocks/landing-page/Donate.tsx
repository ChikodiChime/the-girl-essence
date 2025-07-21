"use client";
import { motion, useInView, Variants } from "framer-motion";
import { Heart, GraduationCap, BookOpen, HeartHandshake, Users, Briefcase, BookMarked } from "lucide-react";
import React, { useRef } from "react";

const Donate = () => {
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

  const donationOptions = [
    {
      icon: GraduationCap,
      title: "Sponsor a scholarship",
      description: "Help a girl continue her education and unlock her full potential through financial support.",
    },
    {
      icon: BookOpen,
      title: "Donate school materials",
      description: "Provide essential learning tools and resources to support her educational journey.",
    },
    {
      icon: HeartHandshake,
      title: "Fund a counselling session",
      description: "Support mental health and personal development through professional guidance.",
    },
    {
      icon: Users,
      title: "Volunteer as a mentor",
      description: "Share your knowledge and experience to guide the next generation of leaders.",
    },
    {
      icon: Briefcase,
      title: "Support a startup dream",
      description: "Help turn entrepreneurial dreams into reality with your financial backing.",
    },
    {
      icon: BookMarked,
      title: "Teach a skill",
      description: "Empower girls with practical skills that can transform their future career opportunities.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50"
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
            Make an Impact
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Support a Girl. <span className="text-[#c8335a]">Empower Her Future.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-12"
          >
            Every girl deserves a chance to rise — and your support can make that possible. 
            Whether through scholarships, mentorship, counselling, learning materials, or 
            volunteering your time, your contribution creates lasting change in the life of a girl.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {donationOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 hover:border-[#c8335a]/20"
            >
              <div className="w-12 h-12 rounded-full bg-[#c8335a]/10 flex items-center justify-center mb-4 text-[#c8335a]">
                <option.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
        >
          <button className="px-12 py-4 bg-[#c8335a] text-white font-semibold rounded-full hover:bg-[#a82a4a] transition-colors duration-300 text-lg">
            Become a Supporter
          </button>
          <button className="px-12 py-4 bg-white text-[#c8335a] font-semibold rounded-full border-2 border-[#c8335a] hover:bg-[#c8335a]/5 transition-colors duration-300 text-lg">
            Donate
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;