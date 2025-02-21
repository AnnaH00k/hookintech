"use client";

import { Download, Upload } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { BusinessIdea, FinancialEntry, TodoItem } from "../types";

interface ImportExportData {
  financialData: FinancialEntry[];
  businessIdeas: BusinessIdea[];
  todoItems: TodoItem[];
}

interface DataImportExportProps {
  data: ImportExportData;
  onImport: (data: ImportExportData) => void;
}

export function DataImportExport({ data, onImport }: DataImportExportProps) {
  const [importSuccess, setImportSuccess] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const content = e.target?.result as string;
        try {
          const importedData = JSON.parse(content);
          onImport(importedData);
          setImportSuccess(true);
          setTimeout(() => setImportSuccess(false), 3000);
        } catch (error) {
          console.error("Invalid JSON format:", error);
          alert("Invalid file format. Please upload a valid JSON file.");
        }
      };
      fileReader.readAsText(file);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to read the file.");
    }
  };

  const handleDownload = () => {
    try {
      const dataStr = JSON.stringify(data, null, 2);
      const dataBlob = new Blob([dataStr], { type: "application/json" });
      const url = window.URL.createObjectURL(dataBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "self-employment-data.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download data");
    }
  };

  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-[#2A3828] px-4 py-2 rounded hover:bg-[#3A4838]"
      >
        <Download size={20} /> Export Data
      </button>
      <div className="relative">
        <label className="flex items-center gap-2 bg-[#2A3828] px-4 py-2 rounded hover:bg-[#3A4838] cursor-pointer">
          <Upload size={20} /> Import Data
          <input
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            accept=".json"
          />
        </label>
        {importSuccess && (
          <div className="absolute top-full left-0 mt-2 p-2 bg-green-900 text-white rounded animate-fade-out">
            Data imported successfully!
          </div>
        )}
      </div>
    </div>
  );
} 