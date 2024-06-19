import { House } from "@phosphor-icons/react/dist/ssr";

export default function PoliticsHeader() {
    return (
      <header>
        <nav>
          <div className="flex  flex-row   items-center justify-center sm:fixed absolute  py-4 px-2 gap-2 w-full">
          
            <a href="/" className="sm:text-lg text-md text-[#9dd2e9] text-center rounded-lg bg-[#4e577e] px-3 py-1">
            <House size={32} weight="light" />
            </a>
          </div>
        </nav>
      </header>
    );
  }
  