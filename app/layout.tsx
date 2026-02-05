import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  // Includes weights 400 and 900, with italics
  weight: ['400', '900'],
  style: ['normal', 'italic'],
});




export const metadata: Metadata = {
  title: "Dipam Poudel",
  description: "Personal portfolio of Dipam Poudel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
