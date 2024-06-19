import Image from "next/image";
import MenuHeader from "../components/headers/menuHeader";
import Footer from "../components/footer";
import Script from "next/script";
import Link from "next/link";
import { Check } from "@phosphor-icons/react/dist/ssr";

export default function Hooked0nPolitics() {
  return (
    <main className="flex flex-col items-center min-h-screen justify-between py-20 bg-[#283150] w-full">


<section className="w-full min-h-[88vh] pb-12 flex flex-col items-center justify-center  bg-gradient-to-b from-[#283150] to-[#4e577e]">
      <div className=" w-full px-4 md:px-6 text-center">
        <div className="space-y-4 w-full">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
            Hooked0nPolitics
          </h1>
          <p className="mx-auto max-w-[700px] text-white md:text-xl">
            Rethinking Politics for a Fair and Scientific Future
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#283150] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#283150]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </section>

    <section className="w-full flex items-center justify-center bg-gradient-to-b from-[#4e577e] to-[#283150]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
             Exploring the Need for Scientifically-Driven Governance
            </h2>
            <p className="mt-4 text-white md:text-xl lg:text-lg">
              Current political systems often fall short in addressing the complex challenges of our time. Policies are
              frequently influenced by short-term electoral gains rather than scientific evidence and technological
              innovation, leading to inadequate responses to global issues like climate change, economic inequality, and
              public health crises. This section aims to explore how a more scientifically-driven and
              technologically-competent political system can lead to better governance and more effective solutions.
            </p>
          </div>
          <div className="grid gap-6 text-white">
            <div className="rounded-lg shadow-[#283150] shadow-lg bg-[#4e577e] p-6 ">
              <h3 className="text-xl font-bold">Inefficiencies in Current Systems</h3>
              <p className="mt-2 ">
                Modern political systems often suffer from bureaucratic inefficiencies, outdated decision-making
                processes, and a lack of adaptability to rapidly changing circumstances. This can result in slow
                responses to pressing issues and a failure to capitalize on technological advancements that could
                streamline governance and improve public services.
              </p>
            </div>
            <div className="rounded-lg  bg-[#4e577e] p-6 shadow-[#283150] shadow-lg">
              <h3 className="text-xl font-bold">Corruption and Lack of Accountability</h3>
              <p className="mt-2">
                Widespread corruption, cronyism, and a lack of transparency in many political systems undermine public
                trust and hinder the implementation of policies that truly serve the common good. This can lead to the
                prioritization of special interests over the needs of the broader population.
              </p>
            </div>
            <div className="rounded-lg  bg-[#4e577e] p-6 shadow-[#283150] shadow-lg">
              <h3 className="text-xl font-bold">Short-Term Thinking and Lack of Vision</h3>
              <p className="mt-2 ">
                Political decision-makers often focus on short-term electoral gains rather than long-term, sustainable
                solutions. This can result in a lack of investment in critical areas like education, infrastructure, and
                scientific research, which are essential for addressing complex, global challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="flex flex-col items-center justify-center bg-background text-foreground">
      <main className="max-w-4xl w-full px-4 py-20 ">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Vision for an Ideal Political System
            </h1>
            <p className=" text-lg">
              Integrating scientific research and technological advancements into the decision-making process for a more
              informed, transparent, and accountable political system.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Key Features:</h2>
            <ul className="space-y-2 ">
              <li className="flex items-start gap-2">
              <Check size={32} />
                <div>
                  <h3 className="font-bold">Evidence-Based Policymaking</h3>
                  <p className="text-[#a8b1d7]">Decisions grounded in rigorous scientific research and data analysis.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
              <Check size={32} />
                <div>
                  <h3 className="font-bold">Technological Competence</h3>
                  <p className="text-[#a8b1d7]">Leveraging technological advancements to improve governance and public services.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
              <Check size={32} />
                <div>
                  <h3 className="font-bold">Transparency and Accountability</h3>
                  <p className="text-[#a8b1d7]">Open and accessible decision-making processes with robust oversight mechanisms.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
              <Check size={32} />
                <div>
                  <h3 className="font-bold">Long-Term Planning</h3>
                  <p className="text-[#a8b1d7]">Prioritizing sustainable, future-oriented policies that address complex, systemic challenges.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
              <Check size={32} />
            <div>
                  <h3 className="font-bold">Inclusive Participation</h3>
                  <p className="text-[#a8b1d7]">Engaging diverse stakeholders and empowering citizens in the decision-making process.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>



    <section className="mb-10 md:w-auto md:m-4 w-[90vw] text-white">
  <h2 className="text-3xl font-semibold mb-3">Implementing the Vision</h2>
  <p className="text-lg mb-5">
    To implement this vision, we propose the following steps:
  </p>
  <div className="relative pl-4 sm:pl-8">
    <div className="absolute top-0 bottom-0 left-2 sm:left-4 w-0.5 bg-[#3b4a6b]"></div>
    
    <div className="mb-6 sm:mb-10 relative">
      <div className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#4e577e] left-[-6px] sm:left-[-10px] top-2.5"></div>
      <div className="bg-[#4e577e] p-4 sm:p-5 rounded-lg">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Step 1: Establish a Council</h3>
        <p className="text-base sm:text-lg">
          Establish a council of scientists and technologists to advise on key policy areas.
        </p>
      </div>
    </div>
    
    <div className="mb-6 sm:mb-10 relative">
      <div className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#4e577e] left-[-6px] sm:left-[-10px] top-2.5"></div>
      <div className="bg-[#4e577e] p-4 sm:p-5 rounded-lg">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Step 2: Educate Leaders</h3>
        <p className="text-base sm:text-lg">
          Mandate science and technology education for all political leaders.
        </p>
      </div>
    </div>
    
    <div className="mb-6 sm:mb-10 relative">
      <div className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#4e577e] left-[-6px] sm:left-[-10px] top-2.5"></div>
      <div className="bg-[#4e577e] p-4 sm:p-5 rounded-lg">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Step 3: Public Platforms</h3>
        <p className="text-base sm:text-lg">
          Create public platforms for transparent data sharing and citizen engagement.
        </p>
      </div>
    </div>
    
    <div className="mb-6 sm:mb-10 relative">
      <div className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#4e577e] left-[-6px] sm:left-[-10px] top-2.5"></div>
      <div className="bg-[#4e577e] p-4 sm:p-5 rounded-lg">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Step 4: Policy Frameworks</h3>
        <p className="text-base sm:text-lg">
          Develop long-term policy frameworks focused on sustainability and innovation.
        </p>
      </div>
    </div>
    
    <div className="mb-6 sm:mb-10 relative">
      <div className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#4e577e] left-[-6px] sm:left-[-10px] top-2.5"></div>
      <div className="bg-[#4e577e] p-4 sm:p-5 rounded-lg">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Step 5: Collaboration</h3>
        <p className="text-base sm:text-lg">
          Encourage public and private sector collaboration in technological research and development.
        </p>
      </div>
    </div>
  </div>
</section>



    </main>
  );
}
