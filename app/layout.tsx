import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import RoutePreloader from "@/components/RoutePreloader";
import { ProjectModalProvider } from "@/components/providers/ProjectModalProvider";
import { MeetingModalProvider } from "@/components/providers/MeetingModalProvider";
import DeferredAIMount from "@/components/ai/DeferredAIMount";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
  // FIX #7: explicit display:swap. Without it, behavior across browsers
  // for the default can be inconsistent — being explicit guarantees text
  // using this font never blocks paint waiting on the font file (it falls
  // back to a system font immediately, then swaps in once loaded).
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://recenturesoft.com'),
  title: "RecentureSoft | Enterprise Software Development",
  description: "RecentureSoft builds scalable enterprise software, AI products, web platforms, and mobile applications for global businesses.",
  openGraph: {
    title: "RecentureSoft | Enterprise Software Development",
    description: "RecentureSoft builds scalable enterprise software, AI products, web platforms, and mobile applications for global businesses.",
    url: 'https://recenturesoft.com',
    siteName: 'RecentureSoft',
    images: [
      {
        url: '/og-image.jpg', // Assuming a default OG image exists or will be added
        width: 1200,
        height: 630,
        alt: 'RecentureSoft Enterprise Software',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ProjectModalProvider>
            <MeetingModalProvider>
              <RoutePreloader />
              {children}
              {/*
                  FIX #6: RecentureAIWrapper (chat/AI widget) is not needed
                  for first paint on any device. DeferredAIMount (a client
                  component, see below) only fetches + mounts it after the
                  browser goes idle (or a short fallback timeout), so its
                  JS chunk never competes with the hero image / hydration
                  for bandwidth and CPU. This is a pure win on both mobile
                  and desktop — desktop is already fast so the widget still
                  appears almost immediately, but it stops contributing to
                  "Legacy JavaScript" / "Reduce unused JavaScript" /
                  main-thread-work numbers during the critical rendering
                  window that Lighthouse measures, which is where mobile
                  was losing the most points.
                */}
              <DeferredAIMount />
            </MeetingModalProvider>
          </ProjectModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}