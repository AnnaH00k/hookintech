import Image from "next/image";
import MenuHeader from "../../../../components/headers/menuHeader";
import Footer from "../../../../components/footer";
import Script from "next/script";

export default function BlobToBadass() {
  return (
    <>
      <main className="flex gap-6 flex-col items-center min-h-[90vh] justify-between py-20 pb-[10vh] bg-[#0A1109] w-full">
        <div className="flex items-center flex-col justify-center w-[90vw] max-w-[800px]">
          <h1 className="text-4xl text-[#7C9838] text-start font-bold w-full">
            {"From Blob to Badass: My Journey to Transformation"}
          </h1>
          <p className="text-lg text-[#A0A2A0] text-start w-full mt-4">
            {"Hey everyone! I'm Anna, and today I'm incredibly excited to kick off a brand new project that's very close to my heart. If you remember, at the beginning of this year, I made a video called \"Decoding 2024\" where I set some extremely big goals for myself. Unfortunately, things didn’t quite go as planned with that challenge."}
          </p>
          <p className="text-lg text-[#A0A2A0] text-start w-full mt-4">
            {"But that’s okay! We’ve all faced setbacks, and sometimes they’re just a stepping stone to something even better. So, I’m ready to make an epic comeback with my new project: \"From Blob to Badass!\""}
          </p>
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold w-full mt-8">
            {"Why \"Blob to Badass\"?"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start w-full mt-4">
            {"Right now, I feel like I'm at a point in my life where I'm more of a blob than a badass. By \"blob,\" I mean someone who pushes all their goals and dreams away because they're either too lazy or too afraid to try. I tend to overthink things to the point where I end up doing nothing, eating up all that anxiety and pressure, and hiding myself in the consumption of media and unhealthy habits instead of facing my challenges."}
          </p>
          <p className="text-md text-[#A0A2A0] text-start w-full mt-4">
            {"But that stops now. Instead of hiding and postponing my dreams, I want to tackle them head-on. I want to become a person who is capable of doing what is necessary to fulfill dreams and make an impact. So, what's \"From Blob to Badass\" all about? Simply put, it’s a journey to transform myself into the ultimate version of a badass – like Lara Croft but with superb coding and creation skills."}
          </p>
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold w-full mt-8">
            {"The Plan"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start w-full mt-4">
            {"My goals are simple but ambitious:"}
          </p>
          <ul className="list-disc list-inside text-md text-[#A0A2A0] text-start w-full mt-4">
            <li>{"Improve my health: This includes everything from getting into better physical shape to adopting healthier eating habits."}</li>
            <li>{"Learn new skills: I've always wanted to try mountain biking and figure skating, so these are on my list. Additionally, I want to build enough strength to do at least 10 pull-ups."}</li>
            <li>{"Tackle mental challenges: This involves programming complex apps, starting VR development, and learning new concepts like how to build an AI."}</li>
          </ul>

          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold w-full mt-8">
            {"Stay Tuned!"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start w-full mt-4">
            {"I'll be posting updates on my YouTube channel every 2 weeks and write regular updates in my Blog. Join me on this incredible transformation. Let’s make \"From Blob to Badass\" something truly epic together!"}
          </p>
          <p className="text-md text-[#A0A2A0] text-start w-full mt-4">
            {"Thank you all for your support and for sticking around even though I haven’t posted in a while. See you in the next update!"}
          </p>
          <p className="text-md text-[#A0A2A0] text-start w-full mt-4">
            {"Stay badass,"}
          </p>
          <p className="text-md text-[#A0A2A0] text-start w-full mt-1">
            {"-Anna"}
          </p>
        </div>
      </main>
    </>
  );
}
