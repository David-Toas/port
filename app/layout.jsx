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
  title: "Toas",
  description: "My Website Development profile page",
  keywords: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Portfolio"],
  robots: "index, follow",
  
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
