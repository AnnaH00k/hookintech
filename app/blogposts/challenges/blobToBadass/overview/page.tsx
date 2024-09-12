"use client";

import { Question } from "@phosphor-icons/react";
import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const inputVideoRef = useRef<HTMLVideoElement>(null);
  const outputVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Handle video file upload
  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      resetVideoProcessing();
      processVideo(url);
    }
  };

  // Reset video processing state
  const resetVideoProcessing = () => {
    setDownloadUrl(null);
    setProgress(0);
  };

  // Daily tasks data
  const dailyTasks = [
    { date: "1", privateProjects: "4h adding Google Analytics to my website and seeking AdSense approval", study: "1.5h of math repetition for an exam in 2 weeks", work: "4h with Clye (bug fixing and video planning)", health: "Bought food to prep healthy burritos & recovering from a vaccination", topicOfTheWeek: "How to automate tasks to focus on what's important.", question: "", answer:"" },
    { date: "2", privateProjects: "4h restructuring & refining my website to get AdSense approval", study: "nothing", work: "4h working on the LegalBFF Chatbot", health: "Ate the rest of the chocolate I had in the house", topicOfTheWeek: "How to automate tasks to focus on what's important.", question: "", answer:"" },
    { date: "3", privateProjects: "1h working on overview for blob to badass challenge", study: "2h of math repetition for an exam in 2 weeks", work: "4h working for LegalBFF & Clye", health: "1h bikeride", topicOfTheWeek: "How to automate tasks to focus on what's important.", question: "", answer:"" },
    { date: "4", privateProjects: "2h video scripting & formatting", study: "1h of math tasks for an exam", work: "4h working for LegalBFF & Clye", health: "prepping 18 healthy burritos", topicOfTheWeek: "How to automate tasks to focus on what's important.", question: "", answer:"" },
    { date: "5&6", privateProjects: "3h trying to make a video processing automation", study: "5h of math tasks for an exam", work: "nothing", health: "enjoying the weekend", topicOfTheWeek: "How to automate tasks to focus on what's important.", question: "", answer:"" },
    { date: "7", privateProjects: "none", study: "4h of math tasks for an exam", work: "5h meetings, video animation and graphic design", health: "lots of veggies & stretching", topicOfTheWeek: "focusing on my exam, end of the week.", question: "", answer:"" },
    { date: "8", privateProjects: "none", study: "1h of math tasks for an exam", work: "3.5h meetings, video animation and graphic design", health: "procrastinating, guess i needed a pause?", topicOfTheWeek: "focusing on my exam, end of the week.", question: "", answer:"" },
    { date: "9", privateProjects: "thought about making videos about some practical apliences of algorithms.", study: "3h of math tasks for an exam", work: "4.5h testing the new GPT4-mini model, creating video animations", health: "20 min. walk", topicOfTheWeek: "focusing on my exam, end of the week.", question: "", answer:"" },
    { date: "10", privateProjects: "none", study: "4h of math tasks for an exam", work: "5h working for CLYE & LegalBFF", health: "1h Pilates", topicOfTheWeek: "focusing on my exam, end of the week.", question: "", answer:"" },
    { date: "11", privateProjects: "none", study: "8.5h of math tasks for an exam", work: "2.5h working for LegalBFF", health: "nothing", topicOfTheWeek: "focusing on my exam, end of the week.", question: "", answer:"" },
    { date: "12&13", privateProjects: "some YouTube video skripting, will post it some time this week, sorry for being late.", study: "6.5h studying and writing an exam", work: "1h GPT prompt optimisation", health: "1h Yoga", topicOfTheWeek: "focusing on my exam, end of the week.", question: "", answer:"" },
    { date: "14", privateProjects: "2h video preperations", study: "0.5h choosing my next subject", work: "2h working for CLYE", health: "20 min. bike ride until I flew over the handlebars ", topicOfTheWeek: "Video creation", question: "", answer:"" },
    { date: "15", privateProjects: "watching some videos on blender animation", study: "nothing", work: "2h working for CLYE", health: "30 min. bike ride", topicOfTheWeek: "Video creation", question: "", answer:"" },
    { date: "16", privateProjects: "nothing", study: "nothing", work: "8.5h working for CLYE", health: "nothing", topicOfTheWeek: "Video creation", question: "", answer:"" },
    { date: "17", privateProjects: "45min. video creation", study: "1h programming industrial web applications with java EE", work: "4h working for CLYE", health: "10 min. bike ride & some stretching", topicOfTheWeek: "Video creation", question: "", answer:"" },
    { date: "18", privateProjects: "0.5h. video creation", study: "nothing", work: "6h working for CLYE & LegalBFF", health: "45 min. bike ride & some stretching", topicOfTheWeek: "Video creation", question: "", answer:"" },
    { date: "19&20", privateProjects: "6h creating a video on full project build & 4h planning more process automation", study: "nothing", work: "none", health: "2h housecleaning & some stretching", topicOfTheWeek: "Video creation", question: "", answer:"" },
    { date: "21", privateProjects: "5h cutting my video on a full project build which is out now on my YouTube account", study: "nothing", work: "4h working for CLYE", health: "nothing", topicOfTheWeek: "Video Cutting 2 days/ Requirements of Engineering 5 days", question: "", answer:"" },
    { date: "22&23", privateProjects: "7h cutting my video which is now on my YouTube channel", study: "nothing", work: "8.5h working for CLYE", health: "eating icecream", topicOfTheWeek: "Video Cutting 2 days/ Requirements of Engineering 5 days", question: "", answer:"" },
    { date: "24", privateProjects: "4.5h implementing Three Js to import 3D models to my website", study: "nothing", work: "4.5h working for CLYE", health: "30min. bike ride", topicOfTheWeek: "Video Cutting 2 days/ Requirements of Engineering 5 days", question: "", answer:"" },
    { date: "25-27", privateProjects: "nothing", study: "6.5h reading script on requirements of engineering", work: "5h working for CLYE", health: "2h Gym (3.5km run, full body weight training) & Enjoying the weekend.", topicOfTheWeek: "Video Cutting 2 days/ Requirements of Engineering 5 days", question: "", answer:"" },
    { date: "28", privateProjects: "nothing", study: "4.5h reading script on requirements of engineering & doing tasks", work: "4h working for CLYE", health: "rest day", topicOfTheWeek: "Requirements of Engineering with exam end of the week", question: "", answer:"" },
    { date: "29", privateProjects: "3h adding statistics to my hooked0nStudys Page", study: "0.5h requirements of engineering", work: "4.5h working for CLYE", health: "3.33km walk with 15kg backpack", topicOfTheWeek: "Requirements of Engineering with exam end of the week", question: "", answer:"" },
    { date: "30-31", privateProjects: "9.5h writing a book on procrastination", study: "0.5h requirements of engineering", work: "6h working for CLYE", health: "finally got a urban sports membership and trained 2 hours in the gym.", topicOfTheWeek: "How to be a master procrastinater and not writing your exam.", question: "", answer:"" },
    { date: "32", privateProjects: "4h working om my procratination techniques defining how I want to get my procrastination under controll.", study: "3h requirements of engineering", work: "nothing", health: "some cake and yoga", topicOfTheWeek: "How to be a master procrastinater and not writing your exam.", question: "", answer:"" },
    { date: "33-37", privateProjects: "3:23h trying to implement a capacitor web and app solution", study: "2h memorizing requirements of engineering, IOT research 6h + (utracked time reading articles)", work: "22h working for Clye", health: "3x at the gym for min 70 min.", topicOfTheWeek: "IOT and threeJS", question: "", answer:"" },
    { date: "38", privateProjects: "nothing", study: " 1h IOT research reading articles", work: "4h working for Clye", health: "some stretching/rest day", topicOfTheWeek: "IOT and threeJS", question: "", answer:"" },
    { date: "39-41", privateProjects: "4h working on some python scripts & 3h API update for FABapp", study: " 3h IOT research reading articles", work: "17h working for Clye, putting in some freetime to experiment with blender and acerternity", health: "2h gym", topicOfTheWeek: "IOT and threeJS", question: "What is a GLB and a GLTF file?", answer:"- GLB: This is the binary version of the GLTF format. It packages all the 3D data, textures, and animations into a single file, making it easier to share and use in web and mobile applications.\n - GLTF: This stands for \"GL Transmission Format.\" It stores 3D model data in a JSON format. Unlike GLB, it typically references external files for textures, but it's still lightweight and efficient for web use. " },
    { date: "42", privateProjects: "redesigning my daily overview page", study: " 3h IOT research reading articles", work: "6h working for Clye", health: "nothing", topicOfTheWeek: "IOT", question: "What is QoL?", answer:"QoL stands for \"Quality of Life.\" It refers to the overall well-being and happiness of a person or group, considering factors like health, comfort, safety, and life satisfaction. It measures how good or satisfying life is for someone, beyond just wealth or material things." },
    { date: "43", privateProjects: "nothing", study: " 5h IOT research reading articles taking notes", work: "nothing", health: "nothing", topicOfTheWeek: "IOT", question: "Service robots in nursing homes?", answer:"Service robots in nursing homes are machines designed to assist caregivers with tasks such as delivering items, observing residents, and providing support, while also ensuring a safe and comfortable environment for elderly residents, including those with cognitive impairments like dementia" },
    { date: "44-47", privateProjects: "nothing", study: "8h IOT Research", work: "13h working for Clye", health: "2h figure skating", topicOfTheWeek: "IOT", question: "What is Edge Computing", answer:"Edge computing is a way of processing data closer to where it's created, like on a device or nearby server, instead of sending it all to a central cloud. This makes data processing faster, reduces internet use, and helps with real-time tasks, like self-driving cars or smart home devices." },
    { date: "48-51", privateProjects: "recording some videos for a cinematic vlog (Video creation definetly not my biggest skill set. Video will be out on day 100 if i make it that far.)", study: "10.5 h  IT-rights", work: "11.5h working for Clye", health: "2h figure skating + 5km hiking with 22.4kg backpack", topicOfTheWeek: "IT-rights", question: "Waht is the DSGVO", answer:"The DSGVO (German for General Data Protection Regulation, or GDPR) is a law in the European Union that protects people's personal data. It gives individuals control over how their data is collected, used, and stored by businesses and organizations. The law requires companies to be transparent, secure, and responsible with personal data, and people can request to see, change, or delete their data. If companies don't follow the rules, they can face large fines." },

  ];

  const lastDayTask = dailyTasks[dailyTasks.length - 1];
  const overlayText = `Day ${lastDayTask.date}`;

  // Process video and add overlay text
  const processVideo = (url: string) => {
    if (!inputVideoRef.current || !canvasRef.current || !outputVideoRef.current) return;

    const videoElement = inputVideoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const outputVideo = outputVideoRef.current;

    const stream = canvas.captureStream();
    const recorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp8', // Use a more widely supported codec
      videoBitsPerSecond: 2500000
    });

    const chunks: BlobPart[] = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' }); // Change MIME type for broader compatibility
      const downloadUrl = URL.createObjectURL(blob);
      outputVideo.src = downloadUrl;
      outputVideo.style.display = 'block';
      setDownloadUrl(downloadUrl);
      setProgress(100);
    };

    recorder.start();

    videoElement.onloadedmetadata = () => {
      const duration = videoElement.duration;
      const targetDuration = 6;
      const playbackRate = duration / targetDuration;
      videoElement.playbackRate = playbackRate;

      const processFrames = () => {
        if (videoElement.paused || videoElement.ended) {
          recorder.stop();
          return;
        }

        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;

        if (context) {
          drawOverlay(context, videoElement, canvas.width, canvas.height);
        }

        setProgress((prev) => prev + (100 / (duration * 60)));
        requestAnimationFrame(processFrames);
      };

      videoElement.play();
      processFrames();
    };

    videoElement.src = url;
  };

  // Draw overlay text on the video frames
  const drawOverlay = (context: CanvasRenderingContext2D, videoElement: HTMLVideoElement, width: number, height: number) => {
    context.drawImage(videoElement, 0, 0, width, height);
    context.font = '250px "WhiteScratches"';
    context.fillStyle = 'white';
    context.strokeStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.shadowBlur = 10;
    context.shadowColor = 'black';
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';

    const textLines = overlayText.trim().split('\n');
    const lineHeight = 300;
    const x = width / 2;
    const y = height / 2 - (lineHeight * (textLines.length - 1) / 2);

    textLines.forEach((line, index) => {
      context.fillText(line, x, y + index * lineHeight);
      context.strokeText(line, x, y + index * lineHeight);
    });
  };

  // Generate post text for a specific task
  const generatePostText = (task: { date: any; privateProjects: any; study: any; work: any; health: any; topicOfTheWeek: any; question:any; answer:any }) => {
    return`Day ${task.date} ||${task.question}
    
${task.answer}

🕵🏻‍♀Private Projects: 
      - ${task.privateProjects}
    
📚Study: 
      - ${task.study}
    
👩🏻‍💻Work: 
      - ${task.work}
    
🦦Health: 
      - ${task.health}
    
📍Topic of the week:
      - ${task.topicOfTheWeek} 
    

#Day${task.date} #BlobToBadass #computerscience #programming #student #codinglife #webdeveloper #motivation #persistencyiskey #homeoffice #tech #studygram #software #technology #codingcommunity #codingjourney #learntocode #studyInspiration #challenge #productivity #healthjourney #mealprep #study #work #projects #developer #worklifebalance #studyhard #codingLife #blobtobaddie`;
  };

  // Copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Post text copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  // Handle long press to copy post text
  const handleLongClick = (task: { date: string; privateProjects: string; study: string; work: string; health: string; topicOfTheWeek: string; question:any; answer:any }) => {
    const postText = generatePostText(task);
    copyToClipboard(postText);
  };

  // Calculate row span for the topic of the week column
  const calculateRowSpan = (index: number) => {
    const currentTopic = dailyTasks[index].topicOfTheWeek;
    let spanCount = 1;
    for (let i = index + 1; i < dailyTasks.length; i++) {
      if (dailyTasks[i].topicOfTheWeek === currentTopic) {
        spanCount++;
      } else {
        break;
      }
    }
    return spanCount;
  };

  // Determine cell class based on the value and type
  const isBad = (value: string, type: string) => {
    switch (type) {
      case 'study':
        return value.toLowerCase() === 'nothing';
      case 'health':
        return value.toLowerCase().includes('chocolate');
      default:
        return false;
    }
  };

  const getCellClass = (value: string, type: string) => (isBad(value, type) ? 'bg-[#431717] bg-opacity-30' : '');

  // Get a random emoji
  const getRandomEmoji = () => {
    const emojis = ["🌱", "🚀", "🥗", "📚", "🏋️‍♂️", "🌿", "🍃", "🍀", "🚴‍♀️", "📖", "📝", "📚", "📜", "📄", "📈", "📊", "💪", "🤖", "🦾"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  return (
    <div className="flex flex-col items-center min-h-[90vh] py-10 justify-start overflow-x-hidden bg-[#0A1109] pt-[7vh] w-full">
      <h1 className="text-4xl text-[#7C9838] w-[90vw] text-center font-bold mb-4">
        {"From Blob to Badass: Overview"}
      </h1>
       {/*
      <label htmlFor="video-upload" className="text-[#A0A2A0]">Upload a video:</label>
      <input type="file" id="video-upload" accept="video/*" onChange={handleVideoUpload} title="Choose a video file to upload" />
      
      Video processing code 
      <div className="flex mt-4 flex-row gap-4">
        <video ref={inputVideoRef} style={{ display: 'none' }} />
        <video ref={outputVideoRef} controls autoPlay style={{ display: 'none', maxWidth: '300px' }} />
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      </div>
      {videoSrc && (
        <div className="mt-4 text-[#A0A2A0]">
          Processing: {progress.toFixed(2)}% complete
        </div>
      )}
      {downloadUrl && (
        <a href={downloadUrl} download="processed_video.webm" className="rounded-xl mt-2 p-2 border">
          Download Processed Video
        </a>
      )}
*/}
      {/* Daily Tasks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 sm:px-8 lg:px-16">
        {dailyTasks.slice().reverse().map((task, index) => (
          <div 
            key={index}
            className="bg-[#1A1F1A] p-4 rounded-lg border border-[#303830] shadow-md"
            onPointerDown={(e) => e.persist()}
            onPointerUp={() => handleLongClick(task)}
          >
            <h2 className="text-xl font-bold text-[#7C9838] mb-2">Day {task.date}</h2>
            <p className="text-sm text-[#A0A2A0] mb-1">
             <b>🕵🏻‍♀Private Projects:</b> <br />- {task.privateProjects}
            </p>
            <p className="text-sm text-[#A0A2A0] mb-1">
              <b>📚Study:</b> <br />- {task.study}
            </p>
            <p className="text-sm text-[#A0A2A0] mb-1">
              <b>👩🏻‍💻Work:</b> <br />- {task.work}
            </p>
            <p className="text-sm text-[#A0A2A0] mb-1">
              <b>🦦Health:</b> <br />- {task.health}
            </p>
            <p className="text-sm text-[#A0A2A0] mb-1">
              <b>📍Topic of the Week:</b> <br />- {task.topicOfTheWeek}
            </p>
            <p className="text-sm text-[#A0A2A0] mb-1">
              {task.question && (
                <>
                  <span className="font-semibold">❓Question:</span> <br /> {task.question}
                  <br />
                  <span className="font-semibold">✅Answer:</span> <br /> {task.answer}
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

