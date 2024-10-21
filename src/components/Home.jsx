import { motion } from 'framer-motion';



export default function Home() {
  return (

    <>
<div className="md:p-20 lg:p-52 max-w-full flex items-center bg-blue-950">
  <div className="text-center md:text-left">
    <motion.div
      className="w-full"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-2 md:p-5 text-white mb-3 hover:text-orange-700 transition-all">
        HI, I AM <br /> SHAHEER KHAN <br /> A DEVELOPER FROM <br /> PLANET EARTH
      </h1>
      <button className="bg-white mx-3 sm:mx-5 hover:bg-orange-700 text-black font-bold mt-5 py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 rounded transition-all">
        Contact me
      </button>
    </motion.div>
  </div>
</div>


    </>
  )
}