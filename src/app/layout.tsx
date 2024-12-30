import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";

export const metadata: Metadata = {
  title: "The Luna Initiative",
  description:
    "The Luna Initiative is dedicated to combating period poverty by providing accessible menstrual products and hosting educational workshops on menstrual health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <div className="min-h-content-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
