import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/GrainOverlay";

const ztNature = Fraunces({
  subsets: ["latin"],
  variable: "--font-zt-nature-family",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const monoLabel = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-label-family",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammed Sali — Mobil Yazılım Geliştirici",
  description:
    "Flutter ve Android ekosisteminde üretim kalitesinde mobil uygulamalar geliştiren yazılım mühendisliği öğrencisi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${ztNature.variable} ${monoLabel.variable}`}>
      <body className="font-[family-name:var(--font-zt-nature-family)] antialiased">
        {children}
        <GrainOverlay />
      </body>
    </html>
  );
}
