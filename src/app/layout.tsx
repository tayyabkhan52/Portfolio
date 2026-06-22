import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontPlayfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const fontDmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fontJetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Tayyab Khan | Digital Designer & Engineer",
  description:
    "Portfolio of Muhammad Tayyab Khan — Engineering high-quality digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontPlayfair.variable} ${fontDmSans.variable} ${fontJetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-body selection:bg-accent selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
