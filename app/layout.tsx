import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marvin's AI Learning Hub",
  description: "AI-powered entertainment workflow and learning resources for Marvin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
