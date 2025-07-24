"use client";
import { motion, useInView, Variants } from "framer-motion";
import { Star, Sparkles, Calendar, Users, Award, Check } from "lucide-react";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

const Upcoming = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const router = useRouter();

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
    { icon: Calendar, text: "September–December 2025" },
    { icon: Users, text: "Virtual + Physical Sessions" },
    { icon: Award, text: "Training | Mentorship | Exposure | Growth" },
    { icon: Check, text: "Absolutely FREE to selected participants" },
  ];

  return (
    <section ref={sectionRef} className="py-20  ">
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
            <Star className="w-4 h-4" />
            Upcoming Project
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="text-[#c8335a]">AfriGirl Leads 2025</span> is here!
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-12"
          >
            We're calling ambitious, purpose-driven young women across Enugu
            State to step into the leader they were born to be!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Are you...</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 mt-1 text-[#c8335a] flex-shrink-0" />
                  <span>A girl between 18–30 years old?</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 mt-1 text-[#c8335a] flex-shrink-0" />
                  <span>Someone with dreams bigger than your background?</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 mt-1 text-[#c8335a] flex-shrink-0" />
                  <span>
                    Ready to grow, lead, and make an impact in your community?
                  </span>
                </li>
              </ul>
              <p className="text-xl font-medium mt-6 text-gray-700">
                Then, this 12-week leadership development program is for{" "}
                <span className="text-[#c8335a]">YOU</span>.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <h4 className="text-xl font-bold text-gray-900">
                Program Highlights
              </h4>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-[#c8335a] flex-shrink-0" />
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-[300px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Flier Placeholder */}
            {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#c8335a]/5 to-pink-100">
              <div className="text-center p-8">
                <Sparkles className="w-12 h-12 mx-auto text-[#c8335a] mb-4" />
                <p className="text-lg text-gray-600">AfriGirl Leads 2025</p>
                <p className="text-sm text-gray-500 mt-2">Program flier coming soon</p>
              </div>
            </div> */}

            <Image
              src="/afrigirl.jpg"
              alt="event"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center flex flex-col items-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            From <span className="text-[#c8335a]">Potential</span> to{" "}
            <span className="text-[#c8335a]">Power</span>
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This is your moment. This is your movement.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="mt-8 px-8 py-4"
            onClick={() =>
              router.push("https://tinyurl.com/AfriGirlLeadsApplication")
            }
          >
            Apply Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Upcoming;
