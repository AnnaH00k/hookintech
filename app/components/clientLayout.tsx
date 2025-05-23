"use client";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import LifeHeader from "./headers/lifeHeader";
import PoliticsHeader from "./headers/politicsheader";
import StudyHeader from "./headers/studyHeader";
import Header from "./headers/header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.includes("hooked0nlife");
  const hideHeaderFooterForPolitics = pathname.includes("hooked0npolitics");
  const hideHeaderFooterForHookBook = pathname.includes("hookbook");
  const hideHeaderFooterForSwimmingCourses = pathname.includes("swimmingCourses");
  const hideHeaderFooterForfabapp = pathname.includes("fabapp");




  return (
    <>
      {!hideHeaderFooterForHookBook && !hideHeaderFooterForPolitics && !hideHeaderFooter && !hideHeaderFooterForSwimmingCourses && !hideHeaderFooterForfabapp && <Header />}
      {hideHeaderFooterForPolitics && <PoliticsHeader />}

      {hideHeaderFooter && <LifeHeader />}

      {children}
      {pathname === "/" && <Footer />}
    </>
  );
}
