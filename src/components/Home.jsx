import { motion } from 'framer-motion';



export default function Home() {
  return (

    <>
<div className="md:p-20 lg:p-52 flex items-cente">
  <div className="text-center md:text-left">
    <motion.div
      className="w-full"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 60 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  md:p-5 text-gray mb-3">
        HI, I AM <br /> SHAHEER KHAN <br /> <span className='text-4xl text-gray-600'> A Front end Developer</span>
      </h1>
      <button className="bg-black mx-3 sm:mx-5 text-white font-bold mt-5 py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 rounded transition-all">
        Contact me
      </button>
    </motion.div>
  </div>
</div>


    </>
  )
}