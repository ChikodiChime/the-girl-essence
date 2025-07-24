import HeroSlideshow from "@/components/blocks/landing-page/Hero";
import AboutUs from "@/components/blocks/landing-page/About";
import Upcoming from "@/components/blocks/landing-page/Upcoming";
import Donate from "@/components/blocks/landing-page/Donate";
import Book from "@/components/blocks/landing-page/Book";
import Testimonial from "@/components/blocks/landing-page/Testimonial";
import Partners from "@/components/blocks/landing-page/Partners";
import Contact from "@/components/blocks/landing-page/Contact";

export default function Home() {
  return (
    <div className="">
      <HeroSlideshow />
      <AboutUs />
      <Upcoming />
      <Donate />
      <Book/>
      <Testimonial/>
      <Partners/>
      <Contact/>
    </div>
  );
}
