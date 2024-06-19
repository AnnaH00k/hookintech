"use client";
import { usePathname } from "next/navigation";
import MenuHeader from "./headers/menuHeader";
import Footer from "./footer";
import LifeHeader from "./headers/lifeHeader";
import PoliticsHeader from "./headers/politicsheader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.includes("hooked0nlife");
  const hideHeaderFooterForPolitics = pathname.includes("hooked0npolitics");

  return (
    <>
      {!hideHeaderFooter && !hideHeaderFooterForPolitics && <MenuHeader />}
      {hideHeaderFooterForPolitics && <PoliticsHeader />}
      {hideHeaderFooter && <LifeHeader />}
      {children}
      {!hideHeaderFooter && !hideHeaderFooterForPolitics && <Footer />}
    </>
  );
}
