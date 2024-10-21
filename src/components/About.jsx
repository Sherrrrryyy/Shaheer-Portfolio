import { motion } from 'framer-motion';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const About = () => {
    const data = [
        { name: 'HTML', uv: 100, pv: 2400, amt: 2400 },
        { name: 'CSS', uv: 95, pv: 2400, amt: 2400 },
        { name: 'JavaScript', uv: 90, pv: 2400, amt: 2400 },
        { name: 'MySQL', uv: 70, pv: 2400, amt: 2400 },
        { name: 'T-CSS', uv: 85, pv: 2400, amt: 2400 },
        { name: 'React.js', uv: 40, pv: 2400, amt: 2400 },

    ];


    return (


        <section className="p-8 m-8 font-normal">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-2">About Me</h2>
                    <motion.div
                        className="w-full"
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 50 }}
                    >
                        <p className="text-black font-medium text-1xl ">
                        I'm a passionate web developer focusing on full-stack development, particularly the MERN stack (MongoDB, Express.js, React.js, Node.js). I have strong front-end skills in HTML, CSS, JavaScript (ES5 & ES6), and experience with frameworks like Bootstrap and Tailwind CSS for creating responsive, visually appealing web applications. I also have hands-on experience with Firebase for backend services and user authentication.

Currently, I’m diving deep into React.js and Next.js to master modern web development practices. My goal is to build scalable, user-friendly web applications that offer seamless experiences. I’m always eager to learn new technologies, solve coding challenges, and contribute to impactful projects.
                        </p>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-10">Skills</h2>
                    <BarChart width={500} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" fill="#172554" />
                    </BarChart>
                </div>
            </div>
        </section>
    )
}

export default About