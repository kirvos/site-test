import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FlyingBirds from "@/components/FlyingBirds";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "My Blog",
  description: "A blog about something interesting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-gray-100 text-gray-900`}>
        <FlyingBirds />
        {children}
      </body>
    </html>
  );
}
