"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { title: "Programs", links: ["Mentorship", "Workshops", "Scholarships", "Leadership"] },
    { title: "About Us", links: ["Our Story", "Team", "Partners", "Impact"] },
    { title: "Get Involved", links: ["Volunteer", "Donate", "Partner", "Careers"] },
    { title: "Resources", links: ["Blog", "FAQs", "Annual Report", "Contact"] },
  ];
  
  const socialLinks = [
    { icon: Facebook, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Linkedin, url: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative h-12 w-12">
                <Image 
                  src="/logo.png" 
                  alt="The Girl Essence" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#c8335a] to-pink-500 bg-clip-text text-transparent">
                The Girl Essence
              </span>
            </div>
            <p className="text-gray-400">
              Empowering girls and young women to reach their full potential through education, mentorship, and leadership development.
            </p>
            
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#c8335a] transition-colors"
                  aria-label={`Follow us on ${social.icon.displayName}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          {links.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-[#c8335a] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#c8335a] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email us at</p>
                  <a href="mailto:info@thegirlessence.org" className="hover:text-[#c8335a] transition-colors">
                    info@thegirlessence.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#c8335a] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Call us at</p>
                  <a href="tel:+12345678900" className="hover:text-[#c8335a] transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#c8335a] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Visit us at</p>
                  <p>123 Empowerment Street<br />Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} The Girl Essence. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#c8335a] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#c8335a] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#c8335a] transition-colors">
              Sitemap
            </a>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#c8335a] fill-current" />
            <span>in Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
