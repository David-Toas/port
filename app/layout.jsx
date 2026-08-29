import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";


// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "sonner";

// body + headings
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// logo, stat numbers, tech labels, eyebrows — accents only, never body copy
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://olabode.vercel.app"),
  title: "Olabode Showole | Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Engineer specializing in React, Next.js, TypeScript, and Node.js. 8+ years of combined IT and software development experience building production web applications.",
  keywords: ["Next.js", "React", "TypeScript", "Node.js", "Full-Stack Engineer", "Portfolio"],
  robots: "index, follow",
  openGraph: {
    title: "Olabode Showole | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer specializing in React, Next.js, TypeScript, and Node.js.",
    url: "https://olabode.vercel.app",
    siteName: "Olabode Showole",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Olabode Showole | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer specializing in React, Next.js, TypeScript, and Node.js.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="/no-metamask.js" 
          strategy="beforeInteractive" 
          id="no-metamask"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Header />
        <PageTransition>{children}</PageTransition>
        <Toaster richColors position="top-right" theme="dark" />
      </body>
    </html>
  );
}
