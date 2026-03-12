import Contact from "@/components/blocks/landing-page/Contact";
import Donate from "@/components/blocks/landing-page/Donate";
import PageHero from "@/components/blocks/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | The Girl Essence",
  description:
    "Join The Girl Essence — become a mentor, partner with us, support our work, or send us a message.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="Get Involved"
        badgeIcon="HandHeart"
        title="Join Our"
        titleAccent="Mission"
        subtitle="Become a mentor, partner with us, support our work, or simply reach out. Together, we can raise whole women."
      />
      <Donate />
      <Contact />
    </main>
  );
}
