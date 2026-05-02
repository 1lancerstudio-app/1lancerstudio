import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Lancer Studio — Agentic AI & Digital Product Studio",
  description: "We architect autonomous business engines. Tamil Nadu's elite Agentic AI and full-stack product studio for founders who want to automate everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-text font-dm-sans selection:bg-chrome selection:text-background antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
