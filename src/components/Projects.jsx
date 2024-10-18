// const Projects = () => {

//     const projects = [
//         {
//             title: "Qr Code Generator",
//             description:
//                 "This project allows users to generate custom QR codes for any text or URL. It provides a simple and user-friendly interface where you can enter text, and the app instantly creates a scannable QR code.",
//             demoLink: "https://qrcode-generator-shaheer.surge.sh/",
//             codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
//         },
//         {
//             title: "Text-to-Speech Converter",
//             description:
//                 "A simple app that converts any text input into speech with the click of a button. Built using JavaScript, this tool showcases how web technologies can enhance accessibility by converting written content into audible speech.",
//             demoLink: "https://text-to-speech-convertor-shaheer.surge.sh/",
//             codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
//         },
//         {
//             title: "To-do Task App",
//             description:
//                 "A user-friendly task management application that allows you to create, edit, and delete effortlessly. Built with HTML, CSS, and JavaScript, this app helps you stay organized and boost productivity by keeping track of your daily tasks in one place.",
//             demoLink: "https://to-do-task-app-shaheer-.surge.sh/",
//             codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
//         },
//         {
//             title: "Password Generator",
//             description:
//                 "An intuitive web application that generates strong and secure passwords with customizable options for length and character types. Built using JavaScript, this tool helps users create unique passwords to enhance online security and protect their accounts effectively.",
//             demoLink: "https://random-password-generator-shaheer.surge.sh/",
//             codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
//         },
//         {
//             title: "Currency Convertor",
//             description:
//                 "A straightforward application that converts currencies in real-time using up-to-date exchange rates. Built with HTML, CSS, and JavaScript, this tool provides users with an easy way to calculate and compare currency values, making international transactions and travel planning more convenient.",
//             demoLink: "https://currency-conversion-app-shaheer.surge.sh/",
//             codeLink: "https://github.com/Sherrrrryyy/30days30JSprojects",
//         },

//     ];

//     return (
        
//         <div className="w-full p-8 py-16 px-10 bg-blue-950">
//             <h2 className="text-4xl font-bold mb-10 text-white">
//                 All Projects
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {projects.map((project, index) => (
//                     <div
//                         key={index}
//                         className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition duration-300"
//                     >
//                         <h3 className="text-2xl font-semibold text-blue-950 mb-4">
//                             {project.title}
//                         </h3>
//                         <p className="text-gray-600 mb-4">{project.description}</p>
//                         <div className="flex justify-between items-center">
//                             <a
//                                 href={project.demoLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 font-bold hover:text-blue-700 transition"
//                             >
//                                 Live Demo
//                             </a>
//                             <a
//                                 href={project.codeLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 font-bold hover:text-blue-700 transition"
//                             >
//                                 GitHub Repo
//                             </a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Projects

import React, { useState } from 'react';

const Projects = () => {
  const languages = ['All', 'HTML & CSS', 'JavaScript', 'React'];

  const projects = [
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
      language: 'HTML & CSS',
    }
  ];

 const [selectedLanguage , setSelectedLanguage] = useState("All")

 const filteredProjects = selectedLanguage === "All" ? projects :  projects.filter(project => project.language === selectedLanguage)

  return (
    <div className="w-full p-8 py-16 px-10 bg-blue-950">
      <div className="mb-8 flex space-x-4 justify-center">
        {languages.map((language, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-white rounded-full ${selectedLanguage === language ? 'bg-blue-800' : 'bg-gray-700'}`}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </button>
        ))}
      </div>

      {/* Projects Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-950 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-bold hover:text-blue-700 transition"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-bold hover:text-blue-700 transition"
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
