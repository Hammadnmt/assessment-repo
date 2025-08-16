import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/context/cart/cart.context";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TradeMaster AI",
  description: "AI-powered tools and strategies for smarter trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}>
        <CartProvider>
          {/* Global Toast Notifications */}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: "#1f2937", // Dark gray toast
                color: "#f9fafb", // Light text
                borderRadius: "0.75rem",
                padding: "1rem",
              },
            }}
          />
          <main className="min-h-screen flex flex-col">
            <Navbar />
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
