'use client';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface WorkProcess {
  name: string;
  links: string[];
}

const ProcessHub: React.FC = () => {
  const [workProcesses, setWorkProcesses] = useState<WorkProcess[]>([]);
  const [processName, setProcessName] = useState<string>('');
  const [inputLink, setInputLink] = useState<string>('');
  const [selectedProcessIndex, setSelectedProcessIndex] = useState<number>(-1);

  useEffect(() => {
    const savedProcesses = Cookies.get('work-processes');
    if (savedProcesses) {
      setWorkProcesses(JSON.parse(savedProcesses));
    }
  }, []);

  const addProcess = () => {
    if (processName) {
      const updatedProcesses = [...workProcesses, { name: processName, links: [] }];
      setWorkProcesses(updatedProcesses);
      Cookies.set('work-processes', JSON.stringify(updatedProcesses), { expires: 7 });
      setProcessName('');
    }
  };

  const addLink = () => {
    if (inputLink && selectedProcessIndex >= 0) {
      const updatedProcesses = [...workProcesses];
      updatedProcesses[selectedProcessIndex].links.push(inputLink);
      setWorkProcesses(updatedProcesses);
      Cookies.set('work-processes', JSON.stringify(updatedProcesses), { expires: 7 });
      setInputLink('');
    }
  };

  const startProcess = async (index: number) => {
    const links = workProcesses[index].links;
    for (const link of links) {
      window.open(link, '_blank');
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const backupProcesses = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(workProcesses)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = 'work-processes.json';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target?.result as string;
        const uploadedProcesses = JSON.parse(contents);
        setWorkProcesses(uploadedProcesses);
        Cookies.set('work-processes', JSON.stringify(uploadedProcesses), { expires: 7 });
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-black p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Process Hub</h1>
        <div className="mb-4text-black">
          <input
            type="text"
            className="border p-2 w-full mb-2 text-black"
            placeholder="Process name"
            value={processName}
            onChange={(e) => setProcessName(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded w-full"
            onClick={addProcess}
          >
            Add Process
          </button>
        </div>
        <div className="mb-4">
          <select
            className="border p-2 w-full mb-2 text-black"
            value={selectedProcessIndex}
            onChange={(e) => setSelectedProcessIndex(parseInt(e.target.value))}
          >
            <option value={-1}>Select a process</option>
            {workProcesses.map((process, index) => (
              <option key={index} value={index}>
                {process.name}
              </option>
            ))}
          </select>
        </div>
        {selectedProcessIndex >= 0 && (
          <>
            <div className="mb-4">
              <input
                type="text"
                className="border p-2 w-full mb-2 text-black"
                placeholder="Enter link"
                value={inputLink}
                onChange={(e) => setInputLink(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white p-2 rounded w-full"
                onClick={addLink}
              >
                Add Link
              </button>
            </div>
            <ul className="list-disc pl-5 mb-4">
              {workProcesses[selectedProcessIndex].links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
            <div className="mb-4">
              <button
                className="bg-green-500 text-white p-2 rounded w-full"
                onClick={() => startProcess(selectedProcessIndex)}
              >
                Start Work Process
              </button>
            </div>
          </>
        )}
        <div className="mb-4">
          <button
            className="bg-yellow-500 text-white p-2 rounded w-full"
            onClick={backupProcesses}
          >
            Backup Processes
          </button>
        </div>
        <div className="mb-4">
          <input
            type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessHub;
