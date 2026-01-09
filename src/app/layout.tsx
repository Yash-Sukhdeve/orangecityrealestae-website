import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
