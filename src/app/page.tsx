import HeroSlideshow from "@/components/blocks/landing-page/Hero";
import AboutUs from "@/components/blocks/landing-page/About";
import Programs from "@/components/blocks/landing-page/Upcoming";
import Gallery from "@/components/blocks/landing-page/Gallery";
import Testimonial from "@/components/blocks/landing-page/Testimonial";
import Partners from "@/components/blocks/landing-page/Partners";
import Contact from "@/components/blocks/landing-page/Contact";

export default function Home() {
  return (
    <main>
      <HeroSlideshow />
      <AboutUs />
      <Programs />
      <Gallery />
      <Testimonial />
      {/* <Partners /> */}
      <Contact />
    </main>
  );
}
