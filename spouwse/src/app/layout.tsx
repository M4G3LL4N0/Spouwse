import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spouwse",
  description: "The operating system for stronger relationships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white antialiased">{children}</body>
    </html>
  );
}
