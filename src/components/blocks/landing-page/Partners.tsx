"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Handshake, Users, Globe, Heart, Award } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";

const partners = [
  { id: 1, name: "Partner One", logo: "/logo.png" },
  { id: 2, name: "Partner Two", logo: "/vercel.svg" },
  { id: 3, name: "Partner Three", logo: "/file.svg" },
  { id: 4, name: "Partner Four", logo: "/globe.svg" },
  { id: 5, name: "Partner Five", logo: "/window.svg" },
  { id: 6, name: "Partner Six", logo: "/logo.png" },
  { id: 7, name: "Partner Seven", logo: "/vercel.svg" },
  { id: 8, name: "Partner Eight", logo: "/file.svg" },
];

// Fallback component for missing logos
const PartnerIcon = ({ name }: { name: string }) => {
  const icons = [
    <Handshake key="handshake" className="w-12 h-12 text-[#c8335a]" />,
    <Users key="users" className="w-12 h-12 text-[#c8335a]" />,
    <Globe key="globe" className="w-12 h-12 text-[#c8335a]" />,
    <Heart key="heart" className="w-12 h-12 text-[#c8335a]" />,
    <Award key="award" className="w-12 h-12 text-[#c8335a]" />,
  ];

  // Use the name to generate a consistent icon for each partner
  const iconIndex =
    name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    icons.length;
  return icons[iconIndex];
};

const Partners = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-white via-gray-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8335a]/10 rounded-full text-[#c8335a] font-semibold text-sm mb-6">
            <Handshake className="w-4 h-4" />
            Our Partners
          </motion.div>

          <motion.h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Together We{" "}
            <span className="text-[#c8335a]">Make a Difference</span>
          </motion.h2>

          <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to collaborate with these amazing organizations that
            share our vision for empowering girls and young women.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group w-full max-w-[180px] h-32 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="object-contain max-h-16 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <PartnerIcon name={partner.name} />
                    <span className="mt-2 text-xs text-gray-500 text-center">
                      {partner.name}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <p className="text-gray-600 mb-6">
            Interested in becoming a partner? Let's work together to create more
            impact.
          </p>
          <Button variant="primary" size="md">
            Partner With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
