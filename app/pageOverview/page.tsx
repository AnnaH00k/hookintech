// app/pageOverview/page.tsx
import Link from 'next/link';
import getAllPageLinks from '../../lib/getPageLinks';

// Function to recursively organize links into a nested structure
const organizeLinks = (links: string[]) => {
  const groups: { [key: string]: any } = {};

  links.forEach((link) => {
    const parts = link.split('/').filter(Boolean);
    let currentLevel = groups;

    parts.forEach((part, index) => {
      if (!currentLevel[part]) {
        currentLevel[part] = index === parts.length - 1 ? [] : {};
      }
      currentLevel = currentLevel[part];
    });

    if (Array.isArray(currentLevel)) {
      currentLevel.push(link);
    }
  });

  return groups;
};

// Use the return type of getAllPageLinks
export default function PageOverview() {
  const { count, groups } = getAllPageLinks();
  const allLinks = Object.values(groups).flat();
  const organizedLinks = organizeLinks(allLinks);

  // Render links recursively with connectors
  const renderLinks = (linkStructure: any, parentPath = "") => {
    return Object.keys(linkStructure).map((key) => {
      const value = linkStructure[key];
      const fullPath = `${parentPath}/${key}`.replace(/^\/+/, ""); // Entfernt doppelten Slash
  
      return (
        <div key={key} className="mb-6 relative">
          <h3 className="text-lg text-[#A0A2A0] font-semibold flex items-center">
            {Array.isArray(value) && value.length > 0 ? <span className="mr-2">🔽</span> : "📁"}
            <Link href={`/${fullPath}`} className="hover:underline">
              {key}
            </Link>
          </h3>
          {Array.isArray(value) ? (
            <div className="flex flex-col ml-4">
              {value.map((link) => (
                <Link key={link} href={link} className="bg-secondary p-2 rounded-md shadow-lg transition-transform hover:shadow-text shadow-md mb-2">
                  <p className="text-text hyphens-auto">{link}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="ml-4">{renderLinks(value, fullPath)}</div>
          )}
          {/* Linien zeichnen */}
          <div className="absolute left-0 top-6 h-full w-px bg-[#A0A2A0]"></div>
        </div>
      );
    });
  };
  

  return (
    <div className="w-full h-auto">
      <main className="flex  flex-col items-center justify-between py-10 pb-[10vh] bg-[#0A1109] w-full h-auto">
        <div className="flex flex-col justify-center h-auto items-center w-full mt-[5vh]">
          <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold">
            Overview of all {count} Pages
          </h1>
          <h2 className="text-2xl text-center w-[90vw] text-[#A0A2A0] font-light mt-2">
            Here you can find all the pages I have created so far.
          </h2>

          <div className="w-[80vw] sm:w-[60vw] h-full">
            {renderLinks(organizedLinks)}
          </div>
        </div>
      </main>
    </div>
  );
}
