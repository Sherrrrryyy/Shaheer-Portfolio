import { motion } from 'framer-motion';



export default function Home() {
  return (

    <>
      <div className="p-28 w-full flex items-center bg-blue-950 ">
<div>
        <motion.div
          className="w-full"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <h1 className="text-6xl p-5 text-white mb-1 hover:text-orange-700 transition-all ">HI, I AM <br />SHAHEER KHAN <br /> A DEVELOPER FROM <br /> PLANET EARTH</h1>
          <button class="bg-white mx-5 hover:bg-orange-700 text-black font-bold mt-5 py-4 px-6 rounded transition-all ">
            Contact me
          </button>
        </motion.div>
        </div>
        </div>

    </>
  )
}