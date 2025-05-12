import Link from "next/link";
import Image from "next/image";
import { House, Briefcase, Rocket, Person } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-[#192210]/80 to-background/20 backdrop-blur-md border-2 border-[#2a3328]/20">
      <div className=" mx-auto px-2 ">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all duration-300"
          >
            <div className="relative h-[60px] w-20">
              <Image
                src="/images/HookInTechImageWithoutText.png"
                alt="hook in tech logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2">
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 text-[#8E967E] hover:text-[#D7E0C5] transition-all duration-300"
            >
              <Person
                size={24}
                weight="fill"
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="hidden sm:inline text-lg font-medium">
                Portfolio
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
