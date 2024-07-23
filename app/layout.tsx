import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/clientLayout";
import ConsentBanner from "./components/consentBanner"; // Import the ConsentBanner component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hooked0ntech",
  description: "Welcome to my Portfolio, where you can find out more about my Projects, the Tech Stack I use and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ConsentBanner /> {/* Add the ConsentBanner component */}
        
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
