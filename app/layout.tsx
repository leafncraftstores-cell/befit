import type { Metadata, Viewport } from "next";
import { Anton, Barlow } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { gymJsonLd } from "@/lib/jsonld";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { MobileBottomBar } from "@/components/ui/MobileBottomBar";
import { RevealObserver } from "@/components/ui/RevealObserver";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
  // Display copy is all uppercase, so Next's automatic (lowercase-based) fallback metrics
  // are too wide and headings re-wrap when Anton arrives. See "Anton Fallback Upper" in
  // globals.css: Arial scaled to Anton's uppercase width, so the swap causes no layout shift.
  adjustFontFallback: false,
  fallback: ["Anton Fallback Upper", "Impact", "sans-serif"],
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BE-FIT Fitness | Gym in Mahadevapura, Bengaluru (Now Open)",
    template: `%s | ${site.name}, Mahadevapura`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: "BE-FIT Fitness | Gym in Mahadevapura, Bengaluru (Now Open)",
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BE-FIT Fitness: gym in Mahadevapura, Bengaluru. Now open.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BE-FIT Fitness | Gym in Mahadevapura (Now Open)",
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
  category: "fitness",
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${anton.variable} ${barlow.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS is running (content stays visible without JS) */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gymJsonLd()) }}
        />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <MobileBottomBar />
        <RevealObserver />
      </body>
    </html>
  );
}
