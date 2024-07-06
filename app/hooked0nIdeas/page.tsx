import Image from "next/image";
import MenuHeader from "../components/headers/menuHeader";
import Footer from "../components/footer";
import Script from "next/script";
import Link from "next/link";

export default function Hooked0nIdeas() {
  return (
    <main className="flex flex-col items-center min-h-screen justify-center  p-20 text-[#A0A2A0] bg-[#070b0b] w-full">
      <h1 className="text-5xl font-bold mt-[5vh] mb-10">Meine Ideen</h1>
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2 border border-[#303830]">App Name</th>
            <th className="px-4 py-2 border border-[#303830]">Beschreibung</th>
            <th className="px-4 py-2 border border-[#303830]">Zielgruppe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">FABapp</td>
            <td className="px-4 py-2 border border-[#303830]">Lern-App für Auszubildende in Bäderbetrieben</td>
            <td className="px-4 py-2 border border-[#303830]">Auszubildende in Bäderbetrieben</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">Azubee</td>
            <td className="px-4 py-2 border border-[#303830]">Plattform zum Teilen von Lernmaterialien, AusbildungsHelfer</td>
            <td className="px-4 py-2 border border-[#303830]">Ausbilder und Auszubildende aller Berufe</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">Challengor</td>
            <td className="px-4 py-2 border border-[#303830]">App zum Erstellen und Teilen von Challenges</td>
            <td className="px-4 py-2 border border-[#303830]">Allgemein</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">SipSave</td>
            <td className="px-4 py-2 border border-[#303830]">Wein-App zum Speichern, Teilen und Finden von Weinen</td>
            <td className="px-4 py-2 border border-[#303830]">Weinliebhaber</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">Hookbook</td>
            <td className="px-4 py-2 border border-[#303830]">Schreib-App mit Statistik, Zielsetzung, Recherche-Organisation, To-Do-Liste und KI-Optimierung</td>
            <td className="px-4 py-2 border border-[#303830]">Autoren</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">DesignatedDesigns</td>
            <td className="px-4 py-2 border border-[#303830]">Webseite mit Designvorlagen für CSS Frameworks</td>
            <td className="px-4 py-2 border border-[#303830]">Webdesigner</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">SphereMarketer</td>
            <td className="px-4 py-2 border border-[#303830]">Marketing-Automatisierungstool für Social Media Plattformen</td>
            <td className="px-4 py-2 border border-[#303830]">Social Media Manager und Marketer</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">MediMemo/ DocDiary</td>
            <td className="px-4 py-2 border border-[#303830]">Pflege-App für Arztberichte, Pläne, Termine und mehr</td>
            <td className="px-4 py-2 border border-[#303830]">Pflegekräfte und Angehörige</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">Persönlicher Bot</td>
            <td className="px-4 py-2 border border-[#303830]">Individuell entwickelter Chatbot und KI-Modell</td>
            <td className="px-4 py-2 border border-[#303830]">Benutzerdefiniert</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">VR/AR Mind Mapper</td>
            <td className="px-4 py-2 border border-[#303830]">Interaktive Lernumgebung mit VR/AR und Mind Mapping per Handtracking	</td>
            <td className="px-4 py-2 border border-[#303830]">Schüler und Studenten</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">Hooked0nStudys</td>
            <td className="px-4 py-2 border border-[#303830]">Webseite und App für effektives Lernen mit Studienorganisation, Statistiken und virtuellen Lernräumen</td>
            <td className="px-4 py-2 border border-[#303830]">Online-Studierende</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">Zukunftsblick</td>
            <td className="px-4 py-2 border border-[#303830]">Sachbuch/ geschichte über Politik, Motivation und Vertrauen in Wissenschaft und Logik	</td>
            <td className="px-4 py-2 border border-[#303830]">Allgemein</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-[#303830]">Superhelden-Serie</td>
            <td className="px-4 py-2 border border-[#303830]">Animationsserie über eine intelligente Superheldin	</td>
            <td className="px-4 py-2 border border-[#303830]">Allgemein (mit Fokus auf junge Mädchen)</td>
          </tr>
          {/* Add your other ideas here following the same format */}
        </tbody>
      </table>


        {/* 

            - FABapp eine Lernapp für Auszubildenden für bäderbetriebe übersicht  für praktischen und theoretischen teil der ausbildung.

            - Eine App die für alle Ausbildungsberufe in deutschland gemacht ist. Wo Ausbilder iheren Azubis selbst zusammengestellte lernmaterialien zur verfügung stellen können

            - Challengor a app where people can create and share challenges and see their progress. How they reach their goals.

            - Wine App where people can save their favorite wines drinks and share them with friends they can also direct people directly to stores.

            - An App for Writers where you can see your wordcount statistics, set writing goals, organise your research , have a to do list and write with an optimised ai

            - Website with design templates for css, tailwind, bootstrap and more... 

            - Marketing automation for Youtube, Instagram, TikTok & co

            - App die unterstützt wenn es um Pflege geht. Arztberichte und alle wichtigen unterlagen speichern, Tablettenpläne, Essensplan, Fitness & Reha Arzttermine, Rezepte und co...

            - Building my own personalised chatbot and AI modell. 

            - VR/AR development of a interactive study environment and a way to mindmap your ideas. Using Handtracking to copy and arrange texts, as if you could use magic. With acess to the web.

            - A website and app to organise studys and be super effective. Integrate GPT and statistics, motivation for online students with study rooms and so on.

            - Writing a book on political developments and how one could make the best of the current situation to build something new to motivate the world to do better and trust science and logical thinking

            - A story and animation series about a ironman like woman super hero. A crafty hero with intelligence which is not sexualised but more adored and put on a pedastol for her knowledge and inventions.

        */}


    </main>
  );
}
