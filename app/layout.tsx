import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { satoshi } from "@/style/fonts";
import { CartProvider } from "@/components/CartContext"; 
import CustomCursor from "@/components/Cursor";


export const metadata: Metadata = {
  title: "Shop.co",
  description: "Shop the latest trends in fashion and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} antialiased`}
      >
        <CartProvider>
          <CustomCursor/>
          <Header />
            <main>
              {children}
            </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
