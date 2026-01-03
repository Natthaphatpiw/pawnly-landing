import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pawnly - The Future of Valuables & Loans",
  description: "Get fast, competitive loans for your valuables through our AI-powered P2P platform. List your item, receive funding, and drop off your collateral—all from your phone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
