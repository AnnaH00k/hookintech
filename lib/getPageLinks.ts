import fs from "fs";
import path from "path";

const pagesDirectory = path.resolve(process.cwd(), "app");

interface PageLinks {
  count: number;
  groups: { [folder: string]: string[] };
}

const excludedFolders = ["components"];
const excludedFiles = ["layout.tsx"];
const excludedPathPatterns = ["selfEmployment/ideas"];

function getAllPageLinks(dir = pagesDirectory): PageLinks {
  let results: PageLinks = {
    count: 0,
    groups: {},
  };

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!excludedFolders.includes(file)) {
        const subDirLinks = getAllPageLinks(fullPath);
        results.count += subDirLinks.count;

        Object.entries(subDirLinks.groups).forEach(([subFolder, links]) => {
          const folderPath = path.join(file, subFolder).replace(/\\/g, "/");
          if (!excludedPathPatterns.some((pattern) => folderPath.startsWith(pattern))) {
            results.groups[folderPath] = (results.groups[folderPath] || []).concat(links);
          }
        });
      }
    } else if (file.endsWith(".tsx") && !excludedFiles.includes(file)) {
      let relativePath = fullPath
        .replace(pagesDirectory, "")
        .replace(/\\/g, "/")
        .replace("/page.tsx", "");

      let folderPath = path.dirname(relativePath).substring(1) || "Root";

      if (!excludedPathPatterns.some((pattern) => folderPath.startsWith(pattern))) {
        results.count += 1;
        if (!results.groups[folderPath]) {
          results.groups[folderPath] = [];
        }
        results.groups[folderPath].push(relativePath);

        // **Hier sorgen wir dafür, dass alle Elternpfade existieren**
        let parts = folderPath.split("/");
        let accumulatedPath = "";
        for (let i = 0; i < parts.length; i++) {
          accumulatedPath += (i > 0 ? "/" : "") + parts[i];
          if (!results.groups[accumulatedPath]) {
            results.groups[accumulatedPath] = []; // Jetzt ist es sichtbar
          }
        }
      }
    }
  });

  return results;
}

export default getAllPageLinks;
