import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Intelligence Platform",
  description: "AI-powered construction risk and decision acceleration platform.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
