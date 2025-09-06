# Scripts Directory

This directory contains utility scripts for the HookinTech project.

## UML Generator (`generateUML.js`)

The UML generator creates a visual representation of your project structure using Mermaid diagrams and automatically updates your README.md file.

### Features

- 🏗️ **Live Project Analysis**: Scans your actual project structure
- 🎨 **Visual UML Diagram**: Creates a comprehensive Mermaid diagram
- 📝 **Auto-Update README**: Automatically updates the README.md with the diagram
- 🎯 **Smart Filtering**: Ignores common build/dependency directories
- 🎨 **Color-Coded**: Different colors for pages, components, data, utils, and assets

### Usage

```bash
# Generate and update UML diagram
npm run generate-uml

# Or run directly
node scripts/generateUML.js
```

### What it does

1. **Scans** your project directory structure
2. **Generates** a Mermaid UML diagram showing:
   - Main project directories
   - Page structure (including all your study sections)
   - Component organization
   - API routes
   - Data files
   - Utility functions
   - Public assets
3. **Updates** your README.md with the diagram in a dedicated "Project Structure" section

### Diagram Structure

The generated diagram shows:

- 🏠 **Root Project** → Main directories
- 📱 **App Directory** → Next.js app structure
- 🎯 **Pages** → All your routes and pages
- 🎨 **Components** → Reusable UI components
- 🔌 **API Routes** → Backend endpoints
- 📊 **Data** → JSON files and data sources
- 🔧 **Utils** → Helper functions
- 📚 **Public Assets** → Static files

### Customization

You can modify the script to:

- Add more directories to ignore
- Change the diagram styling
- Add more detailed component relationships
- Include file counts or other metadata

The diagram is automatically regenerated each time you run the script, so it always reflects your current project structure!
