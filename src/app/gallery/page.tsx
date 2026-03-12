import Gallery from "@/components/blocks/landing-page/Gallery";
import PageHero from "@/components/blocks/PageHero";
import type { Metadata } from "next";
import { Instagram, ArrowUpRight } from "lucide-react";
import { ROUTES } from "@/config/routes";

export const metadata: Metadata = {
  title: "Gallery | The Girl Essence",
  description:
    "Moments of impact — photos from our programs, events, and community outreach across Nigeria.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        badge="Gallery"
        badgeIcon="Camera"
        title="Moments of"
        titleAccent="Impact"
        subtitle="A visual journey through our programs, events, and the lives we touch. Every photo tells a story of growth, connection, and transformation."
      />

      <Gallery />

      {/* Instagram CTA */}
      <div className="bg-white pb-20 px-4">
        <div
          className="max-w-2xl mx-auto text-center rounded-3xl p-6 sm:p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(200,51,90,0.04), rgba(200,51,90,0.08))",
            border: "1.5px solid rgba(200,51,90,0.15)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center"
            style={{
              background: "rgba(200,51,90,0.1)",
              border: "1px solid rgba(200,51,90,0.2)",
            }}
          >
            <Instagram className="w-7 h-7" style={{ color: "#c8335a" }} />
          </div>
          <h3
            className="text-2xl font-bold mb-3"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "#1a1118",
            }}
          >
            See More on{" "}
            <em style={{ color: "#c8335a", fontStyle: "italic" }}>Instagram</em>
          </h3>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">
            We share behind-the-scenes moments, program updates, and stories of
            impact regularly on Instagram. Follow us to stay connected.
          </p>
          <a
            href={ROUTES.external.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
            style={{
              background: "linear-gradient(135deg, #c8335a, #a02847)",
              boxShadow: "0 6px 24px rgba(200,51,90,0.3)",
            }}
          >
            <Instagram className="w-4 h-4" />
            @thegirlessence
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
