import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";


// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "sonner";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
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
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
