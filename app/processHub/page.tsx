'use client';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Trash } from '@phosphor-icons/react/dist/ssr';

interface WorkProcess {
  name: string;
  links: string[];
}

const ProcessHub: React.FC = () => {
  const [workProcesses, setWorkProcesses] = useState<WorkProcess[]>([]);
  const [processName, setProcessName] = useState<string>('');
  const [inputLink, setInputLink] = useState<string>('');
  const [selectedProcessIndex, setSelectedProcessIndex] = useState<number>(-1);
  const [showDeletionOptions, setShowDeletionOptions] = useState<boolean>(false);

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

  const deleteLink = (linkIndex: number) => {
    if (selectedProcessIndex >= 0) {
      const updatedProcesses = [...workProcesses];
      updatedProcesses[selectedProcessIndex].links.splice(linkIndex, 1);
      setWorkProcesses(updatedProcesses);
      Cookies.set('work-processes', JSON.stringify(updatedProcesses), { expires: 7 });
    }
  };

  const deleteProcess = (processIndex: number) => {
    const updatedProcesses = [...workProcesses];
    updatedProcesses.splice(processIndex, 1);
    setWorkProcesses(updatedProcesses);
    Cookies.set('work-processes', JSON.stringify(updatedProcesses), { expires: 7 });
    setSelectedProcessIndex(-1);
  };

  const deleteAllProcesses = () => {
    if (window.confirm('Are you sure you want to delete all processes?')) {
      setWorkProcesses([]);
      Cookies.remove('work-processes');
      setSelectedProcessIndex(-1);
    }
  };

  const toggleDeletionOptions = () => {
    setShowDeletionOptions(!showDeletionOptions);
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
    <div className="sm:min-h-screen min-h-[85vh] bg-[#0A1109] flex items-center justify-center text-[#A0A2A0]">
      <div className="bg-[#303830]  p-8 rounded shadow-md w-[95vw] max-w-lg">
        <h1 className="text-2xl text-center font-bold mb-4">Process Hub</h1>
        <div className="mb-4">
          <input
            type="text"
            className="p-2 w-full mb-2 text-[#0A1109] bg-[#A0A2A0] placeholder:text-[#0A1109]"
            placeholder="Process name..."
            value={processName}
            onChange={(e) => setProcessName(e.target.value)}
          />
          <button
            className="bg-[#4f6d4b] text-white p-2 mb-2 rounded w-full"
            onClick={addProcess}
          >
            Add Process
          </button>
        </div>
        <div className="mb-4">
          <select
            className="p-2 w-full mb-2 text-[#0A1109] bg-[#A0A2A0]"
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
                className="p-2 w-full mb-2 text-[#0A1109] bg-[#A0A2A0] placeholder:text-[#0A1109]"
                placeholder="Enter link..."
                value={inputLink}
                onChange={(e) => setInputLink(e.target.value)}
              />
              <button
                className="bg-[#4f6d4b] text-white p-2 rounded w-full"
                onClick={addLink}
              >
                Add Link
              </button>
            </div>
            <ul className="list-disc pl-5 mb-4">
              {workProcesses[selectedProcessIndex].links.map((link, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{link}</span>
                  {showDeletionOptions && (
                    <button
                      className="bg-[#662828] text-white p-1 m-2 rounded"
                      onClick={() => deleteLink(index)}
                    >
                      Delete
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div className="mb-4">
              <button
                className="bg-[#097f24] text-white p-2 rounded w-full"
                onClick={() => startProcess(selectedProcessIndex)}
              >
                Start Work Process
              </button>
            </div>
            {showDeletionOptions && (
              <div className="mb-4">
                <button
                  className="bg-[#662828] text-white p-2 rounded w-full"
                  onClick={() => deleteProcess(selectedProcessIndex)}
                >
                  Delete Process
                </button>
              </div>
            )}
          </>
        )}

        {showDeletionOptions && (
          <div className="mb-4">
            <button
              className="bg-[#662828] text-white p-2 rounded w-full"
              onClick={deleteAllProcesses}
            >
              Delete All Processes
            </button>
          </div>
        )}

        <div className="mb-4">
          <button
            className="bg-[#4f6d4b] text-white p-2 rounded w-full"
            onClick={backupProcesses}
          >
            Backup Processes
          </button>
        </div>
        <div className="mb-4 flex flex-row items-center justify-center gap-2">
          <div className="mb-4">
            <input
              type="file"
              className="block w-full text-sm text-[#A0A2A0] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#A0A2A0] file:text-[#0A1109] hover:file:bg-[#cdcfcd]"
              onChange={handleFileUpload}
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <button
              className={`bg-${showDeletionOptions ? '[#662828]' : '[#4f6d4b]'} text-white p-2 rounded`}
              onClick={toggleDeletionOptions}
            >
              <Trash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessHub;
