import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/blocks/Navbar";
import Footer from "@/components/blocks/landing-page/Footer";
import { Toaster } from "sonner";
import { Nunito, Cormorant_Garamond } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "The Girl Essence",
  description:
    "Raising whole women and shape a better future—one girl at a time",
  metadataBase: new URL("https://the-girl-essence.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "The Girl Essence",
    description:
      "Raising whole women and shape a better future—one girl at a time",
    url: "https://the-girl-essence.vercel.app",
    siteName: "The Girl Essence",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "The Girl Essence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Girl Essence",
    description:
      "Raising whole women and shape a better future—one girl at a time",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${nunito.className} ${cormorantGaramond.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: "'Nunito', sans-serif",
              borderRadius: "14px",
              border: "1.5px solid rgba(200,51,90,0.2)",
              padding: "14px 18px",
              background: "#fdf2f5",
              color: "#1a1118",
              boxShadow: "0 8px 32px rgba(200,51,90,0.15)",
            },
            classNames: {
              success: "!border-[rgba(200,51,90,0.3)]",
              error: "!border-[rgba(200,51,90,0.3)]",
            },
          }}
        />
      </body>
    </html>
  );
}
