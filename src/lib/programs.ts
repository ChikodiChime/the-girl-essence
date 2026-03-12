import { Users, GraduationCap, MessageCircle, Heart, School, Award } from "lucide-react";
import { ROUTES } from "@/config/routes";

export interface ProgramHighlight {
  label: string;
  value: string;
}

export interface Program {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  description: string;
  fullDescription: string[];
  highlights: ProgramHighlight[];
  iconName: string;
  color: string;
  instagramUrl: string;
  hasFlyer: boolean;
}

export const WHATSAPP_PHONE = ROUTES.contactInfo.whatsappPhone;
export const WHATSAPP_HREF = ROUTES.external.whatsapp();
export const INSTAGRAM_URL = ROUTES.external.instagram;

export const programs: Program[] = [
  {
    slug: "afrigirl-leads",
    title: "AfriGirl Leads",
    tagline: "Building the next generation of African women leaders.",
    tags: ["Leadership", "Project-based", "Ages 18–25", "Free"],
    description:
      "A leadership training and project-based program for young women aged 18–25, focused on building leadership capacity, accountability, and real-life impact through trainings and practical projects.",
    fullDescription: [
      "AfriGirl Leads is The Girl Essence's flagship leadership development program, designed to identify, train, and equip young African women aged 18–25 with the competencies they need to lead with confidence, integrity, and purpose.",
      "Participants go through a structured curriculum covering leadership theory, personal accountability, project management, public speaking, community engagement, and ethical decision-making. Each cohort works on a real-world impact project that benefits their community — giving participants hands-on leadership experience beyond the classroom.",
      "Selected participants receive free access to all training sessions, mentorship from established women leaders, a certificate of completion, and ongoing support from The Girl Essence network. Past participants have gone on to launch community initiatives, secure scholarships, and take on leadership roles in their institutions.",
    ],
    highlights: [
      { label: "Duration", value: "Sept – Dec (4 months)" },
      { label: "Format", value: "Virtual + Physical sessions" },
      { label: "Eligibility", value: "Women aged 18–25" },
      { label: "Cost", value: "FREE for selected participants" },
    ],
    iconName: "Award",
    color: "#c8335a",
    instagramUrl: "https://instagram.com/thegirlessence",
    hasFlyer: false,
  },
  {
    slug: "afrigirl-summit",
    title: "AfriGirl Summit",
    tagline: "One stage. Hundreds of girls. Limitless possibilities.",
    tags: ["Annual event", "Networking", "Skills training"],
    description:
      "An annual empowerment summit bringing together girls and young women for inspiration, mentorship, and access to real opportunities.",
    fullDescription: [
      "The AfriGirl Summit is The Girl Essence's flagship annual event — a full-day gathering that brings together girls, young women, mentors, professionals, and advocates under one roof to celebrate, inspire, and equip the next generation.",
      "Each summit features keynote addresses from accomplished women, panel discussions on relevant topics, interactive breakout sessions, skills workshops, and networking opportunities. Past themes have covered leadership, entrepreneurship, mental health, career readiness, and navigating womanhood in modern Africa.",
      "The summit is open to secondary school girls, university students, and young women aged 16–30. It is designed to be an experience that leaves every attendee with renewed confidence, practical tools, and a stronger sense of community and belonging.",
    ],
    highlights: [
      { label: "Frequency", value: "Annual (once a year)" },
      { label: "Format", value: "In-person event" },
      { label: "Eligibility", value: "Girls & women aged 16–30" },
      { label: "Features", value: "Keynotes, panels, workshops, networking" },
    ],
    iconName: "Users",
    color: "#c8335a",
    instagramUrl: "https://instagram.com/thegirlessence",
    hasFlyer: false,
  },
  {
    slug: "afrigirl-scholars",
    title: "AfriGirl Scholars Program",
    tagline: "Investing in brilliant girls who deserve every opportunity.",
    tags: ["Scholarships", "Certifications", "Skill development"],
    description:
      "Identifying and supporting promising girls through scholarships, free trainings, certifications, and skill-development opportunities.",
    fullDescription: [
      "The AfriGirl Scholars Program exists because talent is evenly distributed but opportunity is not. This initiative identifies academically promising and highly motivated girls who face financial or social barriers to education and development, and provides them with targeted support to help them thrive.",
      "Scholars receive access to free skill-development trainings, professional certifications, mentorship, and where possible, scholarship funding toward their education. The program also connects scholars with a network of professionals and alumni who provide guidance, internship referrals, and career support.",
      "We believe that investing in one girl's education and development creates a ripple effect — she goes on to uplift her family, her community, and her generation. The AfriGirl Scholars Program is our commitment to making sure no girl's potential goes unrealised simply because of circumstance.",
    ],
    highlights: [
      { label: "Support type", value: "Scholarships, trainings, certifications" },
      { label: "Format", value: "Virtual + In-person" },
      { label: "Eligibility", value: "Girls aged 16–25 with demonstrated need" },
      { label: "Cost", value: "Fully sponsored" },
    ],
    iconName: "GraduationCap",
    color: "#c8335a",
    instagramUrl: "https://instagram.com/thegirlessence",
    hasFlyer: false,
  },
  {
    slug: "girls-talk",
    title: "Girl's Talk Sessions",
    tagline: "Real conversations. Safe spaces. Honest growth.",
    tags: ["Monthly", "Safe space", "Peer learning"],
    description:
      "Monthly themed discussions on life skills, relationships, self-worth, boundaries, and personal development.",
    fullDescription: [
      "Girl's Talk Sessions are monthly themed conversations designed to create a safe, honest, and judgment-free space where girls can discuss the real issues they face — from relationships and self-worth to mental health, boundaries, faith, and navigating life as a young woman in today's world.",
      "Each session is facilitated by a trained member of The Girl Essence team and focuses on a specific theme. Participants are encouraged to share openly, ask questions, and learn from each other's experiences. The sessions blend peer learning with expert input, creating a unique environment that feels both supportive and educational.",
      "Girl's Talk Sessions are held monthly and are open to girls aged 16–30. They are available both in-person and virtually, ensuring that girls across different locations can participate. Many participants describe these sessions as transformative — a place where they finally feel heard, understood, and empowered to make better choices.",
    ],
    highlights: [
      { label: "Frequency", value: "Monthly" },
      { label: "Format", value: "Virtual + In-person" },
      { label: "Eligibility", value: "Girls & women aged 16–30" },
      { label: "Cost", value: "Free to attend" },
    ],
    iconName: "MessageCircle",
    color: "#c8335a",
    instagramUrl: "https://instagram.com/thegirlessence",
    hasFlyer: false,
  },
  {
    slug: "gist-with-her",
    title: "Gist With Her",
    tagline: "No judgment. No scripts. Just honest conversation.",
    tags: ["Open conversations", "No judgment", "Guidance"],
    description:
      "A safe, relaxed conversation series where girls talk openly about real-life issues and receive guidance without judgment.",
    fullDescription: [
      "Gist With Her is a relaxed, informal conversation series that strips away the formality and creates space for girls to simply talk — about life, love, struggles, confusion, dreams, and everything in between. Think of it as a candid chat with a trusted older sister who has been through it and genuinely wants to help.",
      "Unlike structured programs, Gist With Her is intentionally low-pressure. There are no right or wrong answers, no performance, and no judgment. Facilitators guide the conversation gently, offering perspective, sharing experiences, and pointing participants toward helpful resources when needed.",
      "The series covers a wide range of topics including navigating friendships and relationships, dealing with family pressure, managing social media and self-image, understanding boundaries, and finding purpose. It is open to all girls aged 16–30 and runs periodically throughout the year.",
    ],
    highlights: [
      { label: "Frequency", value: "Periodic (multiple times a year)" },
      { label: "Format", value: "Virtual + In-person" },
      { label: "Eligibility", value: "Girls & women aged 16–30" },
      { label: "Tone", value: "Informal, open, judgment-free" },
    ],
    iconName: "Heart",
    color: "#c8335a",
    instagramUrl: "https://instagram.com/thegirlessence",
    hasFlyer: false,
  },
  {
    slug: "university-outreach",
    title: "University & Community Outreach",
    tagline: "Taking the conversation to where girls already are.",
    tags: ["Campus programs", "Community", "Advocacy"],
    description:
      "Educational and advocacy programs addressing substance abuse, health, self-esteem, and leadership across universities and communities.",
    fullDescription: [
      "The University & Community Outreach program takes The Girl Essence's work directly into schools, campuses, and communities — meeting girls where they are rather than waiting for them to come to us. Through partnerships with institutions and community leaders, we deliver impactful sessions on issues that directly affect young women.",
      "Outreach topics include substance abuse prevention, sexual and reproductive health, mental health awareness, self-esteem and body image, leadership and civic engagement, and safe relationships. Sessions are tailored to the specific needs and context of each institution or community.",
      "The program also trains peer advocates — young women within each institution who are equipped to continue the conversation after our team leaves. This ensures that the impact of each outreach extends far beyond a single visit and creates lasting change within the community.",
    ],
    highlights: [
      { label: "Format", value: "On-campus & community visits" },
      { label: "Topics", value: "Health, self-esteem, leadership, advocacy" },
      { label: "Eligibility", value: "Open to all institutions & communities" },
      { label: "Cost", value: "Free (partnership-based)" },
    ],
    iconName: "School",
    color: "#c8335a",
    instagramUrl: "https://instagram.com/thegirlessence",
    hasFlyer: false,
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
