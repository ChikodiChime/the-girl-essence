"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Heart, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerPrograms = [
    { name: "AfriGirl Leads", href: ROUTES.programDetail("afrigirl-leads") },
    { name: "AfriGirl Summit", href: ROUTES.programDetail("afrigirl-summit") },
    {
      name: "AfriGirl Scholars",
      href: ROUTES.programDetail("afrigirl-scholars"),
    },
    { name: "Girl's Talk Sessions", href: ROUTES.programDetail("girls-talk") },
    { name: "Gist With Her", href: ROUTES.programDetail("gist-with-her") },
    {
      name: "University Outreach",
      href: ROUTES.programDetail("university-outreach"),
    },
  ];

  const quickLinks = [
    { name: "Home", href: ROUTES.home },
    { name: "About Us", href: ROUTES.about },
    { name: "Our Programs", href: ROUTES.programs },
    { name: "Gallery", href: ROUTES.gallery },
    { name: "Contact", href: ROUTES.contact },
  ];

  const getInvolved = [
    { name: "Become a Mentor", href: ROUTES.contact },
    { name: "Partner With Us", href: ROUTES.contact },
    { name: "Support & Sponsor", href: ROUTES.contact },
    { name: "Join Our Sessions", href: ROUTES.contact },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0">
                <Image
                  src="/favicon.svg"
                  alt="The Girl Essence"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <span
                  className="block text-white leading-none sm:leading-tight"
                  style={{
                    fontFamily:
                      "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.4rem, 5vw, 1.75rem)",
                  }}
                >
                  The Girl <span className="text-[#c8335a]">Essence</span>
                </span>
              </div>
            </div>
            <p className="max-w-xl text-sm sm:text-base text-gray-400 leading-relaxed">
              A girl-centered mentorship and advocacy platform committed to
              raising whole, confident, and purpose-driven young women aged
              16–30.
            </p>

            {/* Social Link */}
            <a
              href={ROUTES.external.instagram}
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
          <div className="lg:col-span-2 min-w-0">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#c8335a] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3 min-w-0">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {footerPrograms.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-gray-400 hover:text-[#c8335a] transition-colors text-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="lg:col-span-3 min-w-0">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get Involved
            </h3>
            <ul className="space-y-3 mb-8">
              {getInvolved.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#c8335a] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c8335a]" />
                <a
                  href={ROUTES.external.contactEmail}
                  className="break-all text-gray-400 hover:text-[#c8335a] transition-colors text-sm"
                >
                  thegirlessenceinitiative@gmail.com
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm max-w-xs sm:max-w-none">
              &copy; {currentYear} The Girl Essence. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#c8335a] fill-current" />
              <span>in Nigeria</span>
            </div>

            <p className="text-gray-500 text-sm italic max-w-xs sm:max-w-sm md:max-w-none">
              "Raising whole women, one girl at a time."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
