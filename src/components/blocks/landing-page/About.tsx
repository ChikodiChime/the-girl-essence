"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Heart, Users, Target, Sparkles, ArrowRight, Star } from "lucide-react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("who");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const tabs = [
    { id: "who", label: "Who We Are", icon: Heart },
    { id: "what", label: "What We Do", icon: Users },
    { id: "vision", label: "Our Vision", icon: Target },
    { id: "impact", label: "Our Impact", icon: Sparkles },
  ];

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

  const tabContent: any = {
    who: {
      title: "Who We Are",
      content:
        "We are a purpose-driven community dedicated to raising wholesome, confident, and intentional women. At our core is a passion for empowering girls to grow, thrive, and lead — not just in their own lives, but in the world around them.",
      highlight: "Purpose-driven community",
      stats: [
        { number: "500+", label: "Girls Empowered" },
        { number: "50+", label: "Mentors" },
        { number: "20+", label: "Communities" },
      ],
    },
    what: {
      title: "What We Do",
      content:
        "We create safe, nurturing spaces for girls to explore their identity and develop the tools they need to succeed. Through mentorship, coaching, counselling, and advocacy, we walk alongside each girl on her journey to self-discovery, confidence, and purposeful living.",
      highlight: "Safe, nurturing spaces",
      services: ["Mentorship", "Coaching", "Counselling", "Advocacy"],
      description:
        "Whether in schools, communities, or one-on-one sessions, our programs are designed to inspire lasting transformation — emotionally, mentally, and socially.",
    },
    vision: {
      title: "Our Vision",
      content:
        "A world where every girl is seen, heard, and empowered to become the woman she was created to be — confident, whole, and intentional in every part of her life.",
      highlight: "Every girl empowered",
      qualities: ["Confident", "Whole", "Intentional"],
    },
    impact: {
      title: "Our Impact",
      content:
        "We're already seeing change. From mentorship circles to community outreaches and mental wellness programs, our work is reaching hearts, shifting mindsets, and building futures. One girl at a time, we're creating ripples of transformation that go far beyond today.",
      highlight: "Creating ripples of transformation",
      programs: [
        "Mentorship Circles",
        "Community Outreach",
        "Mental Wellness Programs",
      ],
    },
  };

  return (
    <section ref={sectionRef} className="py-20  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Star className="w-4 h-4" />
            About Us
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Empowering <span className="text-[#c8335a]">Tomorrow's</span>{" "}
            Leaders
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Building a community where every girl discovers her potential,
            embraces her worth, and steps boldly into her purpose.
          </motion.p>
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-white shadow-lg"
                      : "text-gray-600 hover:text-[#c8335a] hover:bg-gray-50"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-gradient-to-r from-[#c8335a] to-[#a02847] rounded-xl"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <Icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10 hidden sm:block">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              >
                {tabContent[activeTab].title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed mb-6"
              >
                {tabContent[activeTab].content}
              </motion.p>

              {tabContent[activeTab].description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 leading-relaxed mb-6"
                >
                  {tabContent[activeTab].description}
                </motion.p>
              )}

              {/* Services/Programs/Qualities List */}
              {(tabContent[activeTab].services ||
                tabContent[activeTab].programs ||
                tabContent[activeTab].qualities) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {(
                    tabContent[activeTab].services ||
                    tabContent[activeTab].programs ||
                    tabContent[activeTab].qualities
                  )?.map(
                    (
                      item:
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactElement<
                            unknown,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<
                            | string
                            | number
                            | bigint
                            | boolean
                            | React.ReactPortal
                            | React.ReactElement<
                                unknown,
                                string | React.JSXElementConstructor<any>
                              >
                            | Iterable<React.ReactNode>
                            | null
                            | undefined
                          >
                        | null
                        | undefined,
                      index: React.Key | null | undefined
                    ) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#c8335a]/10 text-[#c8335a] rounded-full font-semibold text-sm"
                      >
                        {item}
                      </span>
                    )
                  )}
                </motion.div>
              )}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#c8335a] text-white font-semibold rounded-full hover:bg-[#a02847] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Visual Content */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                {/* Highlight Card */}
                <div className="bg-gradient-to-br from-[#c8335a] to-[#a02847] rounded-3xl p-8 text-white shadow-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="text-2xl font-bold mb-4">
                      {tabContent[activeTab].highlight}
                    </h4>

                    {/* Stats for "Who We Are" */}
                    {tabContent[activeTab].stats && (
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        {tabContent[activeTab].stats.map(
                          (
                            stat: { number: number; label: string },
                            index: number
                          ) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                              className="text-center"
                            >
                              <div className="text-2xl font-bold text-white">
                                {stat.number}
                              </div>
                              <div className="text-white/80 text-sm">
                                {stat.label}
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    )}

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -left-6 w-12 h-12 bg-[#c8335a]/20 rounded-full blur-sm"
                ></motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -right-6 w-8 h-8 bg-[#c8335a]/30 rounded-full blur-sm"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#c8335a]/10 to-[#a02847]/10 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in empowering the next generation of confident, purposeful
              women. Together, we can create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#c8335a] text-white font-semibold rounded-full hover:bg-[#a02847] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Involved
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-[#c8335a] text-[#c8335a] font-semibold rounded-full hover:bg-[#c8335a] hover:text-white transition-all duration-300"
              >
                Support Our Cause
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
