import { Envelope, InstagramLogo, PinterestLogo, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
  <div className="flex flex-col items-center justify-center gap-2  w-full bg-[#151C14]">
    <div className="flex flex-col items-center justify-center w-full p-4 gap-2">
        <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[40vw]">Contact me</h1>
        <div className="flex items-center justify-center m-4 gap-2 text-[#A0A2A0]  ">
          <a href="mailto:hookintech@gmail.com" target="_blank" className="hover:text-[#fff]"> <Envelope size={32} /> </a>
          <a href="https://www.instagram.com/hookintech/?utm_source=ig_web_button_share_sheet" target="_blank" className="hover:text-[#fff]"> <InstagramLogo size={32} /> </a>
          <a href="https://www.tiktok.com/@hookintech?_t=ZN-8w3D15JSP14&_r=1" target="_blank" className="hover:text-[#fff]"> <TiktokLogo size={32} /> </a>
          <a href="https://www.youtube.com/@hookintech" target="_blank" className="hover:text-[#fff]"> <YoutubeLogo size={32} /> </a>
        </div>
        
        <a href="/datasecurity" className="text-sm sm:text-md text-center text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1 max-w-[300px] sm:w-[40vw] w-[90vw]" target="_blank">Datasecurity</a>

    </div>

  
    </div>
  );
}
