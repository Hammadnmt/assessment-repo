import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { CartProvider } from "@/context/cart/cart.context";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NavBar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // pick weights you need
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
      <body
        className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} antialiased bg-black text-gray-100`}
      >
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
            <NavBar />
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
