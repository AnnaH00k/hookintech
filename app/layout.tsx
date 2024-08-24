import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/clientLayout";
import ConsentBanner from "./components/consentBanner";
import '../public/fonts.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hooked0ntech",
  description: "Welcome to a safe space for tech enthusiasts, developers, and creators. On this platform, I showcase my projects, share my experiences, and provide resources to help you grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H9SD5NE89T"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H9SD5NE89T');
            `,
          }}
        ></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8710642569603774"
     crossOrigin="anonymous"></script>
      </head>

      <body className={inter.className}>
        <ConsentBanner />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
