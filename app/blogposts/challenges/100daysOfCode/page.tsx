'use client';

import { useState } from "react";

export default function CodeJourney() {
  const [ideas, setIdeas] = useState([
    { day: "1", goal: "Setup overview page for 100 days of code", status: "complete" },
    { day: "2", goal: "Start with new code stack for university case study, Learning about Java Beans and Java Server Faces", status: "complete" },
    { day: "3", goal: "Programming some frontend stuff for work", status: "complete" },
    { day: "4", goal: "Begin coding for case study (Programming an industrial Information System with Java EE)", status: "complete" },
    { day: "5", goal: "Designing landing page Ideas while relaxing", status: "complete" },
    { day: "6", goal: "Automated overview for all hooked0n.tech Pages", status: "complete" },
    { day: "7", goal: "Learn about the `use client` directive in React.Programming for work.", status: "complete" },
    { day: "8", goal: "Work on a maven project", status: "complete" },
    { day: "9", goal: "Design and start building Application for ghost nets.", status: "complete" },
    { day: "10", goal: "programming for work & connecting Ghostnet project to Github", status: "complete" },
    { day: "11", goal: "programming for work.", status: "complete" },
    { day: "12", goal: "Update days of code journey", status: "complete" },
    { day: "13", goal: "Make a birthday goal and reflection page for my 24 birthday", status: "complete" },
    { day: "14", goal: "Work on ghost net Pages (Implementing design)", status: "complete" },
    { day: "15", goal: "Make a project called DiaTopia for fun (diabetes innovations overview page)", status: "complete" },


    { day: "16", goal: "create some new pages at work, finish ghost net basic UI", status: "pending" },




    { day: "17", goal: "Implement the Update and Delete endpoints for your API (PUT and DELETE).", status: "pending" },
    { day: "18", goal: "Connect your API to a MongoDB database using Mongoose. Set up models for your data.", status: "pending" },
    { day: "19", goal: "Write unit tests for your API endpoints using a testing library like Jest.", status: "pending" },
    { day: "20", goal: "Learn about user authentication with JWT. Implement a registration endpoint.", status: "pending" },
    { day: "21", goal: "Implement a login endpoint for your API with JWT authentication.", status: "pending" },
    { day: "22", goal: "Set up middleware to protect your routes using JWT.", status: "pending" },
    { day: "23", goal: "Explore how to handle CORS in your Express application.", status: "pending" },
    { day: "24", goal: "Deploy your Express API to Heroku or Vercel.", status: "pending" },
    { day: "25", goal: "Update your frontend application to connect to the deployed API.", status: "pending" },
    { day: "26", goal: "Implement a simple feature that allows users to create new entries using your API.", status: "pending" },
    { day: "27", goal: "Add user authentication in your frontend app (login/register forms).", status: "pending" },
    { day: "28", goal: "Learn about session management and store JWT in local storage.", status: "pending" },
    { day: "29", goal: "Create a simple dashboard to display user data fetched from the API.", status: "pending" },
    { day: "30", goal: "Refactor your codebase for better structure and organization.", status: "pending" },
    { day: "31", goal: "Research API monetization models (subscription, freemium, etc.).", status: "pending" },
    { day: "32", goal: "Implement rate limiting on your API to control usage.", status: "pending" },
    { day: "33", goal: "Explore GraphQL and set up a simple GraphQL server.", status: "pending" },
    { day: "34", goal: "Create a simple GraphQL query and mutation.", status: "pending" },
    { day: "35", goal: "Build a React component that uses GraphQL to fetch data.", status: "pending" },
    { day: "36", goal: "Start learning React Native. Set up a basic React Native environment.", status: "pending" },
    { day: "37", goal: "Create your first React Native component and run it on a simulator.", status: "pending" },
    { day: "38", goal: "Learn about navigation in React Native. Implement basic navigation.", status: "pending" },
    { day: "39", goal: "Connect your React Native app to your Express API.", status: "pending" },
    { day: "40", goal: "Build a feature in your React Native app that displays data from your API.", status: "pending" },
    { day: "41", goal: "Explore local storage options in React Native (AsyncStorage).", status: "pending" },
    { day: "42", goal: "Implement offline capabilities in your mobile app using local storage.", status: "pending" },
    { day: "43", goal: "Create a form in React Native to submit data to your API.", status: "pending" },
    { day: "44", goal: "Learn about debugging tools for React Native and practice debugging.", status: "pending" },
    { day: "45", goal: "Start working on your study app project. Outline its features and architecture.", status: "pending" },
    { day: "46", goal: "Create the initial layout and navigation for your study app in React Native.", status: "pending" },
    { day: "47", goal: "Implement user authentication in your study app.", status: "pending" },
    { day: "48", goal: "Add a feature for users to save study materials or notes in your app.", status: "pending" },
    { day: "49", goal: "Build a simple quiz or flashcard feature in your study app.", status: "pending" },
    { day: "50", goal: "Write tests for your React Native components and features.", status: "pending" },
    { day: "51", goal: "Research the basics of AI and machine learning. Write a summary of what you learned.", status: "pending" },
    { day: "52", goal: "Explore supervised vs. unsupervised learning concepts.", status: "pending" },
    { day: "53", goal: "Set up a Python environment and install libraries like TensorFlow or PyTorch.", status: "pending" },
    { day: "54", goal: "Build a simple linear regression model using scikit-learn.", status: "pending" },
    { day: "55", goal: "Experiment with datasets from Kaggle. Load and visualize data.", status: "pending" },
    { day: "56", goal: "Learn about classification algorithms. Implement a simple classifier.", status: "pending" },
    { day: "57", goal: "Train your classifier on a dataset and evaluate its performance.", status: "pending" },
    { day: "58", goal: "Research natural language processing (NLP). Implement a simple text classification model.", status: "pending" },
    { day: "59", goal: "Build a small chatbot using NLP techniques.", status: "pending" },
    { day: "60", goal: "Explore existing AI APIs (e.g., OpenAI). Implement a feature that uses an AI API in your study app.", status: "pending" },
    { day: "61", goal: "Integrate AI into your app for personalized recommendations or study tips.", status: "pending" },
    { day: "62", goal: "Explore TensorFlow.js and try running a simple AI model in your React app.", status: "pending" },
    { day: "63", goal: "Research ethical considerations in AI. Write a summary of your findings.", status: "pending" },
    { day: "64", goal: "Explore data privacy and security in AI applications. Implement basic security measures in your app.", status: "pending" },
    { day: "65", goal: "Start documenting your AI features and how they work.", status: "pending" },
    { day: "66", goal: "Build a simple user feedback feature in your study app to collect data on AI performance.", status: "pending" },
    { day: "67", goal: "Experiment with different machine learning models and compare their results.", status: "pending" },
    { day: "68", goal: "Refine your AI models based on user feedback and performance metrics.", status: "pending" },
    { day: "69", goal: "Research AI trends and advancements. Write about what you find interesting.", status: "pending" },
    { day: "70", goal: "Prepare a small presentation or demo showcasing your AI features.", status: "pending" },
    { day: "71", goal: "Review your study app’s features and prioritize improvements.", status: "pending" },
    { day: "72", goal: "Refactor your code for better performance and readability.", status: "pending" },
    { day: "73", goal: "Implement user notifications (e.g., reminders for study sessions).", status: "pending" },
    { day: "74", goal: "Improve the UI/UX of your study app based on user feedback.", status: "pending" },
    { day: "75", goal: "Add a feature for users to track their progress and achievements.", status: "pending" },
    { day: "76", goal: "Set up continuous integration for your app to automate testing and deployment.", status: "pending" },
    { day: "77", goal: "Test your entire application and fix any bugs found during testing.", status: "pending" },
    { day: "78", goal: "Create marketing materials (screenshots, descriptions) for your app.", status: "pending" },
    { day: "79", goal: "Research app monetization strategies. Plan how you will monetize your app.", status: "pending" },
    { day: "80", goal: "Prepare for the app launch. Create a checklist of tasks to complete before launching.", status: "pending" },
    { day: "81", goal: "Launch your app on the App Store/Google Play. Monitor for feedback and issues.", status: "pending" },
    { day: "82", goal: "Collect user feedback post-launch and address critical issues.", status: "pending" },
    { day: "83", goal: "Learn about app analytics tools. Set up analytics for your app.", status: "pending" },
    { day: "84", goal: "Analyze user behavior using analytics data and plan further improvements.", status: "pending" },
    { day: "85", goal: "Plan future features and enhancements for your app based on user feedback.", status: "pending" },
    { day: "86", goal: "Explore advanced AI techniques (like deep learning) and their applications.", status: "pending" },
    { day: "87", goal: "Implement a simple neural network model using TensorFlow or PyTorch.", status: "pending" },
    { day: "88", goal: "Experiment with training techniques (e.g., dropout, regularization) to improve model performance.", status: "pending" },
    { day: "89", goal: "Research on AI ethical standards and regulations. Write a report on best practices.", status: "pending" },
    { day: "90", goal: "Prepare a portfolio of your work throughout the 100 days, including your app and AI projects.", status: "pending" },
    { day: "91", goal: "Reflect on your learning journey and write about your progress and challenges faced.", status: "pending" },
    { day: "92", goal: "Set new goals for the next 100 days based on what you've learned and want to explore further.", status: "pending" },
    { day: "93", goal: "Join developer communities online (like GitHub, Stack Overflow) and share your work.", status: "pending" },
    { day: "94", goal: "Explore open-source projects related to your interests and contribute to them.", status: "pending" },
    { day: "95", goal: "Network with other developers through social media or local meetups.", status: "pending" },
    { day: "96", goal: "Look for freelance opportunities or projects where you can apply your skills.", status: "pending" },
    { day: "97", goal: "Prepare your resume and online profiles with your new skills and projects.", status: "pending" },
    { day: "98", goal: "Explore job opportunities in the field of software development or AI.", status: "pending" },
    { day: "99", goal: "Plan your next learning objectives or projects for the following months.", status: "pending" },
    { day: "100", goal: "Celebrate your achievements and share your progress with your community.", status: "pending" },
    
  ]);

  // State to manage the visibility of pending goals
  const [showPending, setShowPending] = useState(false);

  const togglePending = () => {
    setShowPending(!showPending);
  };

  const [fullscreenEmbed, setFullscreenEmbed] = useState<string | null>(null);

  const openFullscreen = (embedSrc: string) => {
    console.log("Fullscreen opened for:", embedSrc); // Debugging statement
    setFullscreenEmbed(embedSrc);
  };

  const closeFullscreen = () => {
    console.log("Closing fullscreen"); // Debugging statement
    setFullscreenEmbed(null);
  };

  return (
    <div className="min-h-[80vh] bg-[#070b0b] text-[#A0A2A0] relative">
      <main className="flex flex-col items-center min-h-[80vh] justify-center sm:p-20 py-5 w-full">
        <h1 className="text-3xl sm:text-5xl font-bold mt-[5vh] mb-10">100 Days of Code</h1>
        <p className="text-center w-[90vw]">
          I will be updating this page daily with my goals and stats.
        </p>
        <p className="text-center mb-10 w-[90vw]">
          <span className="font-bold">Goal:</span> at least 20 min. of coding daily
        </p>

       {/* Clickable Wrapper around embed elements */}
       <div className="w-full flex justify-center sm:flex-row flex-col items-center min-h-[20vh] p-4">
          <div
            onClick={() => openFullscreen("https://wakatime.com/share/@hooked0ntech/bce096f1-f745-44e9-bd3c-610bd08720eb.svg")}
            className="cursor-pointer sm:hover:scale-[105%] p-1"
          >
            <figure>
              <embed
                className="h-[20vh] min-h-[200px] w-auto max-w-[500px] rounded-xl pointer-events-none"
                src="https://wakatime.com/share/@hooked0ntech/bce096f1-f745-44e9-bd3c-610bd08720eb.svg"
              ></embed>
            </figure>
          </div>
          
          <div
            onClick={() => openFullscreen("https://wakatime.com/share/@hooked0ntech/a3093e73-b600-43f6-aa44-83e7cae41064.svg")}
            className="cursor-pointer sm:hover:scale-[105%] p-1"
          >
            <figure>
              <embed
                className="h-[20vh] min-h-[200px] w-auto max-w-[500px] rounded-xl pointer-events-none"
                src="https://wakatime.com/share/@hooked0ntech/a3093e73-b600-43f6-aa44-83e7cae41064.svg"
              ></embed>
            </figure>
          </div>
        </div>

        {/* Goals Table */}
        <div className="overflow-x-auto w-full mt-10">
          <table className="w-full table-auto text-left border-collapse border border-gray-700">
            <thead>
              <tr>
                <th className="p-3 border-b border-gray-700">Day</th>
                <th className="p-3 border-b border-gray-700">Goal</th>
                <th className="p-3 border-b border-gray-700">Status</th> {/* Added Status Column */}
              </tr>
            </thead>
            <tbody>
              {ideas.map((idea) => {
                // Determine if the goal is complete, incomplete, or pending
                const isPending = idea.status === "pending";
                const isVisible = !isPending || showPending;

                return (
                  isVisible && (
                    <tr key={idea.day} className={isPending ? "opacity-50" : ""}>
                      <td className="p-3 border-b border-gray-700">{idea.day}</td>
                      <td className="p-3 border-b border-gray-700">{idea.goal || "No goal set"}</td>
                      <td className="p-3 border-b border-gray-700">
                        {idea.status === "complete" && "✅"}
                        {idea.status === "incomplete" && "❌"}
                        {idea.status === "pending" && "⏳"}
                      </td> {/* Displaying Status */}
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
        
         {/* Fullscreen Embed Overlay */}
      {fullscreenEmbed && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-[90vw] h-[90vh] max-w-3xl">
            <button
              onClick={closeFullscreen}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <embed className="w-full h-full rounded-lg" src={fullscreenEmbed}></embed>
          </div>
        </div>
      )}

        {/* Show More Button */}
        {ideas.some(idea => idea.status === "pending") && (
          <button onClick={togglePending} className="mt-4 px-4 py-2 bg-secondary text-text rounded">
            {showPending ? "Show Less" : "Show planned days"}
          </button>
        )}
      </main>
    </div>
  );
}
