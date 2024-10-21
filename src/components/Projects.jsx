import React, { useState } from 'react';

const Projects = () => {
    const languages = ['All', 'HTML & CSS', 'JavaScript', 'React'];

    const projects = [
        {
            title: "Blocktopia.com",
            description: "This is the Crypto website clone called Bloctopia,this will help me to  learn about flex.",
            demoLink: "http://blocktopia.com-shaheer.surge.sh/",
            codeLink: "https://github.com/Sherrrrryyy/Bloktopia.com",
            language: 'HTML & CSS',
        },
        {
            title: "Upwork.com",
            description: "This is the clone of most known Freelancing platform Upwork.",
            demoLink: "http://upwork.com-shaheer.surge.sh/",
            codeLink: "https://github.com/Sherrrrryyy/Upwork-Clone",
            language: 'HTML & CSS',

        },
        {
            title: "Apple.com",
            description: "This is the clone of Apple.com showcase my skills in Front-end, the good thing is this  project is fully responsive.",
            demoLink: "https://ludicrous-clock.surge.sh/",
            codeLink: "https://github.com/Sherrrrryyy/Apple-Clone",
            language: 'HTML & CSS',
        },
        {
            title: "Qr Code Generator",
            description: "Generates custom QR codes for any text or URL.",
            demoLink: "https://qrcode-generator-shaheer.surge.sh/",
            codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
            language: 'JavaScript',
        },
        {
            title: "Text-to-Speech Converter",
            description: "Converts any text input into speech with one click.",
            demoLink: "https://text-to-speech-convertor-shaheer.surge.sh/",
            codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
            language: 'JavaScript',
        },
        {
            title: "To-do Task App",
            description: "Create, edit, and delete tasks with ease.",
            demoLink: "https://to-do-task-app-shaheer-.surge.sh/",
            codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
            language: 'JavaScript',
        },
        {
            title: "Password Generator",
            description: "Generates strong, secure passwords.",
            demoLink: "https://random-password-generator-shaheer.surge.sh/",
            codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
            language: 'JavaScript',
        },
        {
            title: "Currency Convertor",
            description: "Converts currencies using real-time exchange rates.",
            demoLink: "https://currency-conversion-app-shaheer.surge.sh/",
            codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
            language: 'JavaScript',
        },
        {
            title: "Age Calculator",
            description: "An efficient tool that calculates your exact age in years, months, and days based on your birthdate..",
            demoLink: "https://vengeful-color.surge.sh/",
            codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
            language: 'JavaScript',
        },
        {
            title: "Chat App",
            description: "Basic Chat App create using React and Tailwind css, you can quickly interact with anyone after Signup Authentication of Firebase",
            demoLink: "https://chatappshaheer.netlify.app/",
            codeLink: "https://github.com/Sherrrrryyy/Chat-App-with-React",
            language: 'React',
        }

    ];

    const [selectedLanguage, setSelectedLanguage] = useState("All")

    const filteredProjects = selectedLanguage === "All" ? projects : projects.filter(project => project.language === selectedLanguage)

    return (
        <div className="w-full p-6 sm:p-8 md:py-16 md:px-10 bg-blue-950">
        <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 justify-center">
          {languages.map((language, index) => (
            <button
              key={index}
              className={`px-3 sm:px-4 py-1 sm:py-2 text-white rounded-full ${
                selectedLanguage === language ? 'bg-blue-800' : 'bg-gray-700'
              }`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </button>
          ))}
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-4 sm:p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-3 sm:mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-950 font-bold hover:text-blue-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-950 font-bold hover:text-blue-700 transition"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
};

export default Projects;
