import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

export const metadata: Metadata = {
  title: " Portfolio",
  description:
    "Welcome to the portfolio of Ahmed Gharib, a full stack web developer specializing in modern web applications using technologies like React, Node.js, Next.js, and MongoDB. Explore my projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
