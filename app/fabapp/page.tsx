import Link from "next/link";
import Image from "next/image";

export default function FABapp() {
  return (
    <div className="flex flex-col justify-start w-[100vw] min-h-[100vh] bg-fabMainBeige text-fabMainBlue font-serif  font-semibold cursor-default pt-[100px]">
     
     
     
     
      <header className=" flex flex-row gap-2 top-0 fixed p-4 w-full h-[100px]  bg-fabMainBeige shadow-fabMainBlue/20 shadow-xl text-center text-xl items-center justify-between">
        <div className="flex gap-6 font-thin border-0 ">
          <p className=" border-1 p-2 rounded-full"> Home </p>
          <p className=" border-1 p-2 rounded-full"> App Info </p>
          <p className=" border-1 p-2 rounded-full"> Kontakt </p>
          <p className=" border-1 p-2 rounded-full"> Events </p>
          <p className=" p-2 rounded-full"> Datenschutz </p>
        </div>
        <Link
          href={""}
          className="bg-fabMainBlue text-fabMainBeige py-2 px-4 rounded-lg"
        >
          
          FABapp Herunterladen
        </Link>
      </header>

      <section className="flex flex-col items-center w-full bg-fabMainBlue text-fabMainBeige p-6 py-20 ">
        <h1 className="text-center text-4xl"> Was zeichnet die FABapp aus? </h1>

        <section className="grid grid-cols-3 gap-6 pt-6 max-w-6xl">
          <div className="bg-[#04091E] flex flex-col items-center  justify-end gap-4 rounded-lg p-4 max-w-sm font-sans">
              <Image
                src="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=478,height=640/image/176012209/5abb4b49-6ad2-4f94-946c-6628f3d17065.png"
                alt="Knowledge test illustration"    
                width={400}
                height={200}
                className="object-cover rounded-lg"
              />
          
            <p className="text-md ">
              Ob noch in der Ausbildung,
              schon fertig ausgebildet oder einfach aus Interesse. Hier kann
              jeder sein Wissen auffrischen.{" "}
            </p>
          </div>
          <div className="bg-[#04091E] flex flex-col items-center gap-4 rounded-lg p-4 max-w-sm font-sans">
              <Image
                src="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=478,height=640/image/176012206/12999da0-7079-4549-96ff-98fbba55ca1c.png"
                alt="Growth illustration"
                width={400}
                height={200}                
                className="object-cover rounded-lg"
              />
            <p className="text-md ">
              Wähle aus vorgegebenen und Eigenen Fragenkatalogen. Hier kann dein Potenzial sich frei entfalten.
            </p>
          </div>
          <div className="bg-[#04091E] flex flex-col items-center gap-4  justify-end  rounded-lg p-4 max-w-sm font-sans">
              <Image
                src="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=478,height=640/image/176012207/50559c2d-72c3-4870-8f4c-64bbdd27e9b4.png"
                alt="Motivation illustration"
                width={400}
                height={200}                  
                className="object-cover rounded-lg"
              />
            <p className="text-md ">
              In der Endübersicht überprüfst du deine Leistungen. Kommentare
              motivieren dich stets weiter zu lernen. Finde deine Motivation!
            </p>
          </div>
        </section>
      </section>

      <section className="w-full bg-fabMainBeige text-fabMainBlue p-10 font-sans flex flex-col items-center justify-center text-lg gap-4">
        <h2 className="text-4xl font-serif">FABapp</h2>
        <div className="max-w-4xl">
          <p>Eine Lern App für alle Fachangestellten für Bäderbetriebe.</p>
          <p>Vor allem begleitend zur Ausbildung können Sie sich Ideal mit der App auf die Abschlussprüfung vorbereiten.</p>
          <p>Mit Multiple Choice Fragen überprüfen Sie ihr Wissen in den 4 Prüfungsfächern:</p>
          <p>1. Retten, Erstversorgen, Schwimmen</p>
          <p>2. Badebetrieb</p>
          <p>3. Bädertechnik</p>
          <p>4. Wirtschafts- und Sozialkunde.</p>
        </div>
        <p className="font-light text">Gibt es noch Fragen? ich helfe ihnen gerne weiter!</p>
        <Link
          href={""}
          className="bg-fabMainBlue text-fabMainBeige py-2 px-4 rounded-lg"
        >
          Kontakt 
        </Link>
      </section>
    </div>
  );
}
