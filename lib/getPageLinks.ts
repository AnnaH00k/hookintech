// lib/getPageLinks.ts
import fs from 'fs';
import path from 'path';

// Define the starting directory for page links
const pagesDirectory = path.resolve(process.cwd(), 'app');

// Define the structure of the return type for getAllPageLinks
interface PageLinks {
  count: number;
  groups: { [folder: string]: string[] };
}

// List of folder names to exclude
const excludedFolders = ['components'];

// Specify files to exclude
const excludedFiles = ['layout.tsx'];

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
      // Skip directories in the excluded list
      if (!excludedFolders.includes(file)) {
        const subDirLinks = getAllPageLinks(fullPath);
        results.count += subDirLinks.count;

        // Merge groups recursively
        Object.entries(subDirLinks.groups).forEach(([subFolder, links]) => {
          const folderPath = path.join(file, subFolder).replace(/\\/g, '/');
          results.groups[folderPath] = (results.groups[folderPath] || []).concat(links);
        });
      }
    } else if (file.endsWith('.tsx') && !excludedFiles.includes(file)) {
      const relativePath = fullPath
        .replace(pagesDirectory, '')
        .replace(/\\/g, '/')
        .replace('/page.tsx', '');

      const folderPath = path.dirname(relativePath).substring(1) || 'Root';

      results.count += 1;

      if (!results.groups[folderPath]) {
        results.groups[folderPath] = [];
      }

      results.groups[folderPath].push(relativePath);
    }
  });

  return results;
}

export default getAllPageLinks;
