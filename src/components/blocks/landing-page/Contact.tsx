"use client";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate successful submission
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section ref={sectionRef} id="contact" className="py-20  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8335a]/10 rounded-full text-[#c8335a] font-semibold text-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </motion.div>

          <motion.h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We'd Love to <span className="text-[#c8335a]">Hear From You</span>
          </motion.h2>

          <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or want to learn more about our programs? Send us a
            message and we'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h3>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg"
              >
                Something went wrong. Please try again later.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={item}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name <span className="text-[#c8335a]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c8335a] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address <span className="text-[#c8335a]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c8335a] focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </motion.div>

              <motion.div variants={item}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject <span className="text-[#c8335a]">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c8335a] focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                />
              </motion.div>

              <motion.div variants={item}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message <span className="text-[#c8335a]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c8335a] focus:border-transparent transition-all"
                  placeholder="Tell us more about how we can help..."
                ></textarea>
              </motion.div>

              <motion.div variants={item} className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  leftIcon={<Send className="w-5 h-5" />}
                  fullWidth
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : <>Send Message</>}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#c8335a]/10 p-3 rounded-full text-[#c8335a] mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <p className="text-gray-600">info@thegirlessence.org</p>
                    <p className="text-gray-600">support@thegirlessence.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#c8335a]/10 p-3 rounded-full text-[#c8335a] mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                    <p className="text-gray-600">
                      Mon - Fri: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#c8335a]/10 p-3 rounded-full text-[#c8335a] mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Visit Us</h4>
                    <p className="text-gray-600">123 Empowerment Street</p>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { name: "Facebook", icon: "F", color: "text-blue-600" },
                    { name: "Twitter", icon: "𝕏", color: "text-black" },
                    { name: "Instagram", icon: "IG", color: "text-pink-600" },
                    { name: "LinkedIn", icon: "in", color: "text-blue-700" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={`https://${social.name.toLowerCase()}.com/thegirlessence`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#c8335a] hover:text-white transition-colors ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
