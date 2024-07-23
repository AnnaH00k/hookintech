import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/clientLayout";
import ConsentBanner from "./components/consentBanner";

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
      </head>

      <body className={inter.className}>
        <ConsentBanner />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
