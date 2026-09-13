import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import { CartProvider } from "@/hooks/useCart";
import { WishlistProvider } from "@/hooks/useWishList";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raumwerk – Möbel & Interior Design",
  description:
    "Hochwertige, designorientierte Möbel für dein Zuhause – von Raumwerk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.variable}>
        <WishlistProvider>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
