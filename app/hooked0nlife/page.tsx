import Image from "next/image";
import MenuHeader from "../components/menuHeader";
import Footer from "../components/footer";
import Script from "next/script";
import Link from "next/link";

export default function Hooked0nLife() {
  return (
    <main className="flex flex-col items-center min-h-screen justify-between py-20 bg-[#C4B8AC] w-full">

<section className="bg-[#D1C8BD] rounded-xl py-12 px-4">
  <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
    <h1 className="text-4xl text-[#7E674E] text-center font-bold mb-6">
      Hooked0nLife
    </h1>
    <p className="text-lg text-[#1E0C08] text-center mb-8">
      Hooked0nLife is dedicated to revolutionizing living spaces through sustainable buildings integrated with advanced Algorithms. Our mission includes developing solutions for efficient food delivery, healthcare, and enhancing the lives of those in need of specialized care. Inspired by Andreas & Gertrud Höök, we aim to promote self-care, sustainability, and affordable living options for all, especially in older age.
    </p>
    <p className="text-sm text-[#7E674E] italic text-center">
     {" \"Improving lives, honoring legacies.\""}
    </p>
  </div>
</section>


<section className=" py-8 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl text-[#7E674E] font-bold text-center mb-6">
       Goals
    </h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li className="flex items-start mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-lg text-[#1E0C08]">Develop sustainable AI-integrated buildings.</span>
      </li>
      <li className="flex items-start mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-lg text-[#1E0C08]">Innovate AI solutions for food delivery, healthcare, and elder care.</span>
      </li>
      <li className="flex items-start mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-lg text-[#1E0C08]">Create an advanced Alexa-like system to combat boredom and cognitive decline.</span>
      </li>
      <li className="flex items-start mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-lg text-[#1E0C08]">Integrate farming and natural spaces into living environments.</span>
      </li>
      <li className="flex items-start mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-lg text-[#1E0C08]">Design accessible bungalows with automated systems for mobility-impaired individuals.</span>
      </li>
      <li className="flex items-start mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-lg text-[#1E0C08]">Enhance quality of life for the elderly, in memoriam to Andreas & Gertrud Höök.</span>
      </li>
      <li className="flex items-start mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-lg text-[#1E0C08]">Promote self-care and sustainable living.</span>
      </li>
      <li className="flex items-start mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-lg text-[#1E0C08]">Ensure affordable, comfortable living for all, especially in old age.</span>
      </li>
    </ul>
  </div>
</section>



    <section className="w-full flex items-center justify-center py-8">
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div className="flex flex-col items-start justify-center group rounded-lg p-6 shadow-sm transition-all hover:shadow-lg bg-[#D1C8BD]">
          <h3 className="mb-2 text-xl font-semibold text-[#1E0C08] ">
            Wide Doorways
          </h3>
          <p className="mb-4 text-[#1E0C08]">
            Ensure easy access for wheelchair users and those with mobility challenges by incorporating wide doorways
            throughout the living space.
          </p>
          <Link
            href="#"
            className="inline-flex h-9 items-center  hover:scale-105 justify-center rounded-md bg-[#1E0C08] px-4 text-sm font-medium text-[#F3EFEC] shadow transition-colors hover:bg-[#1E0C08] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E0C08] disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center group rounded-lg p-6 shadow-sm transition-all hover:shadow-lg bg-[#D1C8BD]">
          <h3 className="mb-2 text-xl font-semibold text-[#1E0C08] ">
            Adjustable Countertops
          </h3>
          <p className="mb-4 text-[#1E0C08]">
            Incorporate adjustable countertops that can be raised or lowered to accommodate users of different heights,
            including those in wheelchairs.
          </p>
          <Link
            href="#"
            className="inline-flex h-9 items-center  hover:scale-105 justify-center rounded-md bg-[#1E0C08] px-4 text-sm font-medium text-[#F3EFEC] shadow transition-colors hover:bg-[#1E0C08] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E0C08] disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center group rounded-lg p-6 shadow-sm transition-all hover:shadow-lg bg-[#D1C8BD]">
          <h3 className="mb-2 text-xl font-semibold text-[#1E0C08] ">
            Accessible Bathrooms
          </h3>
          <p className="mb-4 text-[#1E0C08]">
            Design bathrooms with ample space, grab bars, and other features to ensure they are fully accessible for
            users with mobility challenges.
          </p>
          <Link
            href="#"
            className="inline-flex h-9 items-center  hover:scale-105 justify-center rounded-md bg-[#1E0C08] px-4 text-sm font-medium text-[#F3EFEC] shadow transition-colors hover:bg-[#1E0C08] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E0C08] disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center group rounded-lg p-6 shadow-sm transition-all hover:shadow-lg bg-[#D1C8BD]">

          <h3 className="mb-2 text-xl font-semibold text-[#1E0C08] ">
            Automated Lighting
          </h3>
          <p className="mb-4 text-[#1E0C08]">
            Implement automated lighting systems that can be controlled remotely or through voice commands, making it
            easier for users with limited mobility to navigate the space.
          </p>
          <Link
            href="#"
            className="inline-flex h-9 items-center  hover:scale-105 justify-center rounded-md bg-[#1E0C08] px-4 text-sm font-medium text-[#F3EFEC] shadow transition-colors hover:bg-[#1E0C08] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E0C08] disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center group rounded-lg p-6 shadow-sm transition-all hover:shadow-lg bg-[#D1C8BD]">
          <h3 className="mb-2 text-xl font-semibold text-[#1E0C08] ">
            Wheelchair-Friendly Flooring
          </h3>
          <p className="mb-4 text-[#1E0C08]">
            Choose flooring materials that are smooth, level, and easy to navigate for users in wheelchairs or with
            other mobility challenges.
          </p>
          <Link
            href="#"
            className="inline-flex h-9 items-center  hover:scale-105 justify-center rounded-md bg-[#1E0C08] px-4 text-sm font-medium text-[#F3EFEC] shadow transition-colors hover:bg-[#1E0C08] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E0C08] disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center group rounded-lg p-6 shadow-sm transition-all hover:shadow-lg bg-[#D1C8BD]">
            <h3 className="mb-2 text-xl font-semibold text-[#1E0C08]">
                Accessible Outdoor Spaces
            </h3>
            <p className="mb-4 text-[#1E0C08]">
                Create outdoor environments that are accessible and enjoyable for elderly residents and individuals with mobility challenges. Ensure pathways are wide, smooth, and well-lit, and provide comfortable seating areas for relaxation and socializing.
            </p>
            <Link
                href="#"
                className="inline-flex h-9 items-center hover:scale-105 justify-center rounded-md bg-[#1E0C08] px-4 text-sm font-medium text-[#F3EFEC] shadow transition-colors hover:bg-[#1E0C08] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E0C08] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
            >
                Learn More
            </Link>
        </div>
        <div className="flex flex-col items-start justify-center group rounded-lg p-6 shadow-sm transition-all hover:shadow-lg bg-[#D1C8BD]">
            <h3 className="mb-2 text-xl font-semibold text-[#1E0C08]">
                AI-Powered Smart Home Controls
            </h3>
            <p className="mb-4 text-[#1E0C08]">
                Implement AI systems that enable voice-activated control of home features like lighting, temperature, and appliances. These systems adapt to residents preferences and routines, enhancing comfort and convenience.
            </p>
            <Link
                href="#"
                className="inline-flex h-9 items-center hover:scale-105 justify-center rounded-md bg-[#1E0C08] px-4 text-sm font-medium text-[#F3EFEC] shadow transition-colors hover:bg-[#1E0C08] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E0C08] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
            >
                Learn More
            </Link>
        </div>

        <div className="flex flex-col items-start justify-center group rounded-lg p-6 shadow-sm transition-all hover:shadow-lg bg-[#D1C8BD]">
            <h3 className="mb-2 text-xl font-semibold text-[#1E0C08]">
                AI-Powered Health Monitoring Systems
            </h3>
            <p className="mb-4 text-[#1E0C08]">
                Deploy AI systems that monitor residents health metrics and activity levels in real-time. These systems provide alerts for emergencies like falls or health declines, ensuring timely intervention and enhancing safety.
            </p>
            <Link
                href="#"
                className="inline-flex h-9 items-center hover:scale-105 justify-center rounded-md bg-[#1E0C08] px-4 text-sm font-medium text-[#F3EFEC] shadow transition-colors hover:bg-[#1E0C08] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E0C08] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
            >
                Learn More
            </Link>
        </div>


        <div className="flex flex-col items-start justify-center group rounded-lg p-6 shadow-sm transition-all hover:shadow-lg bg-[#D1C8BD]">
            <h3 className="mb-2 text-xl font-semibold text-[#1E0C08]">
                AI-Assisted Virtual Companionship
            </h3>
            <p className="mb-4 text-[#1E0C08]">
                Introduce AI-powered virtual companions that interact with residents, providing conversation, entertainment, and reminders. These companionship solutions enhance mental stimulation, reduce loneliness, and assist with daily routines.
            </p>
            <Link
                href="#"
                className="inline-flex h-9 items-center hover:scale-105 justify-center rounded-md bg-[#1E0C08] px-4 text-sm font-medium text-[#F3EFEC] shadow transition-colors hover:bg-[#1E0C08] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E0C08] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
            >
                Learn More
            </Link>
        </div>





      </div>
    </section>

  

   
 




    <section className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-[#7E674E] font-bold text-center mb-6">
          Ensuring Accessible Living Quarters
        </h2>
        <p className="text-lg text-[#1E0C08] text-center mb-8">
          At Hooked0nLife, we are committed to making our living spaces accessible and affordable for everyone. Our approach includes:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Developing a tiered pricing model based on income levels to ensure affordability.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Offering subsidies and financial aid through partnerships with governmental and non-governmental organizations.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Implementing sustainable energy use and efficient design to reduce costs.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Creating community-supported agriculture (CSA) programs for sustainable and affordable food sources.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Encouraging volunteerism and community involvement to foster a sense of belonging and reduce operational costs.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Incorporating universal design principles to ensure inclusivity for all residents.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Developing a sustainable funding model through public-private partnerships.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Securing grants and subsidies from government agencies and philanthropic organizations.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Implementing tax incentives and credits for sustainable building practices.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Exploring low-interest loans and financing options tailored to sustainable housing projects.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Partnering with impact investors interested in social and environmental sustainability.</span>
          </li>
          <li className="flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#7E674E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg text-[#1E0C08]">Crowdfunding campaigns to engage community support and raise funds for accessibility features.</span>
          </li>
        </ul>
      </div>
    </section>

    
{/*
    <section className="flex flex-col items-center justify-center py-4 w-[90vw] max-w-4xl">
      <h2 className="text-2xl text-[#7E674E] font-bold mb-4">
        How You Can Get Involved
      </h2>
      <p className="text-md text-[#1E0C08] text-center mb-4">
        We welcome individuals and organizations to join us in our mission. Whether you’re a researcher, a technology enthusiast, or someone passionate about improving living conditions, there are many ways to get involved with Hooked0nLife. Together, we can create a future where sustainable, AI-assisted living is a reality for all.
      </p>
      <button className="bg-[#7E674E] text-white py-2 px-4 rounded-md">Contact Us</button>
    </section>
  */}

  </main>
  );
}
