
export default function MenuHeader() {
  return (
    <header>
      <nav>
        <div className="sm:flex sm:flex-row grid grid-cols-2 flex-col items-center justify-center sm:fixed absolute  py-4 px-2 gap-2 w-full">
          <a href="/#projects" className="sm:text-lg text-[#A0A2A0] text-center text-md rounded-full bg-[#303830] px-3 py-1">
            Projects
          </a>
          <a
            href="/#techStack"
            className="sm:text-lg text-md rounded-full text-[#A0A2A0] text-center bg-[#303830] px-3 py-1"          >
            Tech Stack
          </a>
          <a href="/#media" className="sm:text-lg text-md text-[#A0A2A0] text-center rounded-full bg-[#303830] px-3 py-1">
            Media
          </a>
          <a href="/#products" className="sm:text-lg text-md text-[#A0A2A0] text-center rounded-full bg-[#303830] px-3 py-1">
            Products
          </a>
        </div>
      </nav>
    </header>
  );
}
