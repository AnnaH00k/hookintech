import { House } from "@phosphor-icons/react/dist/ssr";

export default function LifeHeader() {
    return (
      <header>
        <nav>
          <div className="flex  flex-row   items-center justify-center sm:fixed absolute  py-4 px-2 gap-2 w-full">
          
            <a href="/" className="sm:text-lg text-md text-[#C4B8AC] text-center rounded-lg bg-[#7E674E] px-3 py-1">
            <House size={32} weight="light" />
            </a>
          </div>
        </nav>
      </header>
    );
  }
  