import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maplify - Expert Tax Solutions",
  description:
    "Professional accounting and tax services for individuals and businesses across Australia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gradient-to-b from-blue-100 to-purple-100">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
