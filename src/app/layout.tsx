import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doruk Karademirler | Software Developer",
  description:
    "Portfolio of Doruk Karademirler, CS student at the University of Toronto and former Software Toolchains Engineering Intern at Qualcomm.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
