export const ROUTES = {
  // Internal Routes
  home: "/",
  about: "/about",
  programs: "/programs",
  programDetail: (slug: string) => `/programs/${slug}`,
  contact: "/contact",
  gallery: "/gallery",
  
  // External Routes
  external: {
    instagram: "https://instagram.com/thegirlessence",
    contactEmail: "mailto:thegirlessenceinitiative@gmail.com",
    infoEmail: "mailto:thegirlessenceinitiative@gmail.com",
    whatsapp: (phone: string = "+2349016462033") => {
      const cleanPhone = phone.replace(/\D/g, "");
      return `https://wa.me/${cleanPhone}?text=Hi%2C%20I%27d%20like%20to%20get%20involved%20with%20The%20Girl%20Essence.`;
    },
    afriGirlLeadsApp: "https://tinyurl.com/AfriGirlLeadsApplication",
  },

  // Contact info (non-URL values)
  contactInfo: {
    whatsappPhone: "+2349016462033",
    instagramHandle: "@thegirlessence",
    contactEmailAddress: "thegirlessenceinitiative@gmail.com",
    infoEmailAddress: "info@thegirlessence.org",
  },
} as const;
