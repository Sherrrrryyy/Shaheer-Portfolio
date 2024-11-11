import { useState,useEffect } from "react";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textColor = scrollPosition > 100 ? 'text-blue-950' : 'text-black';
  return (
    <>
      <div className="max-w-full h-20 sticky top-0 bg-transparent z-50 backdrop-blur-lg shadow-md">
        <div className="p-5 flex text-center justify-center ml-5 ">
          <h1 className={`text-4xl font-bold text-black hover:text-white ${textColor} transition-all `} >
            Shaheer{"</>"}
          </h1>
        </div>
      </div>

    </>
  )
}


export default Navbar