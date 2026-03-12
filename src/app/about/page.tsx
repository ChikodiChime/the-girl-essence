import AboutUs from "@/components/blocks/landing-page/About";
import PageHero from "@/components/blocks/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Girl Essence",
  description:
    "Learn about The Girl Essence — our story, mission, vision, core values, and the founder behind the movement.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        badge="About Us"
        badgeIcon="Heart"
        title="Our"
        titleAccent="Story"
        subtitle="A girl-centered mentorship and advocacy platform committed to raising whole, confident, and purpose-driven young women."
      />
      <AboutUs />
    </main>
  );
}
