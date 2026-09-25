import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BN Education Group — Your Family’s Private Education Office",
    template: "%s — BN Education Group",
  },
  description:
    "We uncover your child’s potential, create a personalised education strategy and manage the entire journey — from choosing the right school to university admission.",
};

export const viewport: Viewport = {
  themeColor: "#1d0f33",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // Keeps CSS smooth scrolling for in-page scrolls, but lets Next jump instantly to the top on
      // route changes (Next 16 no longer does this by default).
      data-scroll-behavior="smooth"
      className={`${raleway.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
