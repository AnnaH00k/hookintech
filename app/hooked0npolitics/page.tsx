import Image from "next/image";
import MenuHeader from "../components/headers/menuHeader";
import Footer from "../components/footer";
import Script from "next/script";
import Link from "next/link";

export default function Hooked0nPolitics() {
  return (
    <main className="flex flex-col items-center min-h-screen justify-between py-20 bg-[#283150] w-full">
      <div className="w-4/5 max-w-4xl text-white">
        <section className="mb-10">
          <h1 className="text-4xl font-bold mb-5">Hooked on Politics</h1>
          <p className="text-lg">
            Welcome to Hooked on Politics, where we critically examine the current political landscape and explore how a scientifically-driven and technologically-competent political system can lead to better governance and societal outcomes.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-3">Critique of Current Political Systems</h2>
          <p className="text-lg">
            Modern political systems often suffer from inefficiencies, corruption, and a lack of long-term vision. Policies are frequently influenced by short-term electoral gains rather than scientific evidence and technological innovation. This results in inadequate responses to global challenges like climate change, economic inequality, and public health crises.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-3">Vision for an Ideal Political System</h2>
          <p className="text-lg">
            An ideal political system should integrate scientific research and technological advancements into the decision-making process. This system would prioritize:
          </p>
          <ul className="list-disc ml-5 text-lg">
            <li>Evidence-based policymaking, relying on data and research to craft laws and regulations.</li>
            <li>Technological competence, ensuring leaders understand and leverage technology to solve problems.</li>
            <li>Transparency and accountability, with open access to government data and decisions.</li>
            <li>Long-term planning, focusing on sustainability and future generations.</li>
            <li>Inclusive participation, encouraging diverse voices and expertise in governance.</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-3">Implementing the Vision</h2>
          <p className="text-lg">
            To implement this vision, we propose the following steps:
          </p>
          <ol className="list-decimal ml-5 text-lg">
            <li>Establish a council of scientists and technologists to advise on key policy areas.</li>
            <li>Mandate science and technology education for all political leaders.</li>
            <li>Create public platforms for transparent data sharing and citizen engagement.</li>
            <li>Develop long-term policy frameworks focused on sustainability and innovation.</li>
            <li>Encourage public and private sector collaboration in technological research and development.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-3">Get Involved</h2>
          <p className="text-lg">
            Join us in advocating for a political system that embraces science and technology. Stay informed, participate in discussions, and support initiatives that aim for evidence-based governance.
          </p>
          <Link href="/get-involved">
            <p className="text-blue-500 underline">Learn how you can get involved</p>
          </Link>
        </section>
      </div>
    </main>
  );
}
