"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Heart, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const programs = [
    { name: "AfriGirl Leads", href: "#programs" },
    { name: "AfriGirl Summit", href: "#programs" },
    { name: "AfriGirl Scholars", href: "#programs" },
    { name: "Girl's Talk Sessions", href: "#programs" },
    { name: "Gist With Her", href: "#programs" },
    { name: "University Outreach", href: "#programs" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const getInvolved = [
    { name: "Become a Mentor", href: "#contact" },
    { name: "Partner With Us", href: "#contact" },
    { name: "Support & Sponsor", href: "#contact" },
    { name: "Join Our Sessions", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/logo.png"
                  alt="The Girl Essence"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  The Girl <span className="text-[#c8335a]">Essence</span>
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A girl-centered mentorship and advocacy platform committed to
              raising whole, confident, and purpose-driven young women aged
              16–30.
            </p>

            {/* Social Link */}
            <a
              href="https://instagram.com/thegirlessence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-[#c8335a]" />
              <span className="text-sm">@thegirlessence</span>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href.replace("#", ""))}
                    className="text-gray-400 hover:text-[#c8335a] transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <button
                    onClick={() =>
                      scrollToSection(program.href.replace("#", ""))
                    }
                    className="text-gray-400 hover:text-[#c8335a] transition-colors text-sm"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get Involved
            </h3>
            <ul className="space-y-3 mb-8">
              {getInvolved.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href.replace("#", ""))}
                    className="text-gray-400 hover:text-[#c8335a] transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c8335a]" />
                <a
                  href="mailto:info@thegirlessence.org"
                  className="text-gray-400 hover:text-[#c8335a] transition-colors text-sm"
                >
                  info@thegirlessence.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c8335a]" />
                <span className="text-gray-400 text-sm">Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} The Girl Essence. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#c8335a] fill-current" />
              <span>in Nigeria</span>
            </div>

            <p className="text-gray-500 text-sm italic">
              "Raising whole women, one girl at a time."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
