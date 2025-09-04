import {
  Envelope,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-background to-[#192210] border-2 border-[#2a3328]/20 ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-bold cursor-default text-center">
            <span className="bg-gradient-to-r from-[#8E967E] to-[#D7E0C5] bg-clip-text text-transparent">
              Contact me
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="mailto:hookintech@gmail.com"
              target="_blank"
              className="transform transition-all duration-300 hover:scale-110 hover:text-[#D7E0C5] text-[#8E967E]"
            >
              <Envelope size={32} weight="fill" />
            </a>
            <a
              href="https://www.instagram.com/hookintech/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              className="transform transition-all duration-300 hover:scale-110 hover:text-[#D7E0C5] text-[#8E967E]"
            >
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a
              href="https://github.com/AnnaH00k"
              target="_blank"
              className="transform transition-all duration-300 hover:scale-110 hover:text-[#D7E0C5] text-[#8E967E]"
            >
              <GithubLogo size={32} weight="fill" />
            </a>
            <Image
              src="/images/Anna.jpg"
              alt="Anna Hook"
              width={64}
              height={64}
              className="rounded-full ring-2 ring-[#2a3328]/30 shrink-0 w-12 h-12 sm:w-16 sm:h-16"
              priority
            />
            <a
              href="https://www.linkedin.com/in/anna-h%C3%B6%C3%B6k-177931230/"
              target="_blank"
              className="transform transition-all duration-300 hover:scale-110 hover:text-[#D7E0C5] text-[#8E967E]"
            >
              <LinkedinLogo size={32} weight="fill" />
            </a>
            <a
              href="https://www.tiktok.com/@hookintech?_t=ZN-8w3D15JSP14&_r=1"
              target="_blank"
              className="transform transition-all duration-300 hover:scale-110 hover:text-[#D7E0C5] text-[#8E967E]"
            >
              <TiktokLogo size={32} weight="fill" />
            </a>
            <a
              href="https://www.youtube.com/@hookintech"
              target="_blank"
              className="transform transition-all duration-300 hover:scale-110 hover:text-[#D7E0C5] text-[#8E967E]"
            >
              <YoutubeLogo size={32} weight="fill" />
            </a>
          </div>

          <a
            href="/datasecurity"
            className="mt-4 text-sm sm:text-md text-center text-[#8E967E] hover:text-[#D7E0C5] transition-all duration-300 rounded-full bg-[#303830]/50 hover:bg-[#303830] px-6 py-2 max-w-[300px] sm:w-[40vw] w-[90vw] border border-[#2a3328]/20 hover:border-[#2a3328]/40"
            target="_blank"
          >
            Datasecurity
          </a>
        </div>
      </div>
    </footer>
  );
}
