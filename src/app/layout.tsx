import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orange City Real Estate | Premium Commercial Properties in Nagpur",
  description: "Nagpur's premier commercial real estate specialists. Office spaces, retail showrooms, warehouses, and industrial properties in MIHAN, Dharampeth, Civil Lines, and Butibori MIDC.",
  keywords: "commercial real estate Nagpur, office space Nagpur, retail showroom Nagpur, warehouse Nagpur, industrial property MIDC, MIHAN SEZ office",
  authors: [{ name: "Orange City Real Estate" }],
  openGraph: {
    title: "Orange City Real Estate | Premium Commercial Properties in Nagpur",
    description: "Nagpur's premier commercial real estate specialists. Your trusted partner for office spaces, retail showrooms, warehouses, and industrial properties.",
    url: "https://orangecityrealestate.com",
    siteName: "Orange City Real Estate",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orange City Real Estate | Commercial Properties in Nagpur",
    description: "Nagpur's premier commercial real estate specialists.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased bg-stone-50 text-stone-900 selection:bg-amber-900 selection:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
