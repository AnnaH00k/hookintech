"use client";
import { usePathname } from "next/navigation";
import MenuHeader from "./menuHeader";
import Footer from "./footer";
import LifeHeader from "./lifeHeader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.includes("hooked0nlife");

  return (
    <>
      {!hideHeaderFooter && <MenuHeader />}
      {hideHeaderFooter && <LifeHeader/>}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
