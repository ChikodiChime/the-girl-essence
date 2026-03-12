import HeroSlideshow from "@/components/blocks/landing-page/Hero";
import HomeAboutTeaser from "@/components/blocks/landing-page/HomeAboutTeaser";
import HomeImpact from "@/components/blocks/landing-page/HomeImpact";
import HomeGalleryTeaser from "@/components/blocks/landing-page/HomeGalleryTeaser";
import HomeInstagramCTA from "@/components/blocks/landing-page/HomeInstagramCTA";
import HomeProgramsTeaser from "@/components/blocks/landing-page/HomeProgramsTeaser";
import Testimonial from "@/components/blocks/landing-page/Testimonial";

export default function Home() {
  return (
    <main>
      <HeroSlideshow />
      <HomeImpact />
      <HomeAboutTeaser />
      <HomeProgramsTeaser />
      <HomeGalleryTeaser />
      <Testimonial />
      <HomeInstagramCTA />
    </main>
  );
}
