
export default function Footer() {
  return (
  <div className="flex flex-row items-center justify-center gap-2  w-full bg-[#151C14]">
    <div className="flex flex-col items-center justify-center w-full p-4 gap-2">
        <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[40vw]">Contact me</h1>
        <a href="mailto:hook0ntech@gmail.com" className="text-sm sm:text-md text-center text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1 max-w-[300px] sm:w-[40vw] w-[90vw] " target="_blank">Email: hook0ntech@gmail.com</a>
        <a href="/datasecurity" className="text-sm sm:text-md text-center text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1 max-w-[300px] sm:w-[40vw] w-[90vw]" target="_blank">Datasecurity</a>

    </div>
    </div>
  );
}
