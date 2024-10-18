import React from 'react'


const Footer = ()=>{
    return(
        <footer className="bg-blue-950 text-white py-6 w-full ">
        <div className="container mx-auto text-center">
          <p className="mb-2">© {new Date().getFullYear()} M. Shaheer Khan. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Sherrrrryyy" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">GitHub</a>
            <a href="https://www.linkedin.com/in/shaheer-khan-ab6327285/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">LinkedIn</a>
            <a href="https://www.instagram.com/shaheerrrrrrrr_?igsh=MW5haDh0bnh0ajJ0dQ==" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Instagram</a>
          </div>
          <p className="mt-4">Built with using React and Tailwind CSS</p>
        </div>
      </footer>
    )
}

export default Footer