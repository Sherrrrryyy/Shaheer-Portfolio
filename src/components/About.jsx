import { motion } from 'framer-motion';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const About = () => {
    const data = [
        { name: 'HTML', uv: 100, pv: 2400, amt: 2400 },
        { name: 'CSS', uv: 95, pv: 2400, amt: 2400 },
        { name: 'JavaScript', uv: 90, pv: 2400, amt: 2400 },
        { name: 'MySQL', uv: 85, pv: 2400, amt: 2400 },
        { name: 'T-CSS', uv: 50, pv: 2400, amt: 2400 },
        { name: 'React.js', uv: 40, pv: 2400, amt: 2400 },

    ];


    return (


        <section className="p-8 m-8">
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
                            I'm a passionate and motivated web developer currently honing my skills in full-stack development, with a strong focus on the MERN stack (MongoDB, Express.js, React.js, and Node.js). I have a solid foundation in front-end technologies like HTML, CSS, and JavaScript (ES5 & ES6), and I've worked with frameworks such as Bootstrap and Tailwind CSS to create responsive and visually appealing web applications. Alongside my web development journey, I've also gained experience in Firebase for backend services and user authentication.

                            Learning new technologies excites me, and I'm continuously striving to expand my knowledge base. Currently, I am diving deep into React.js and Next.js to master modern web development practices, and I look forward to exploring even more cutting-edge frameworks and tools. My goal is to build efficient, scalable, and user-friendly web applications that provide seamless user experiences.

                            I believe in the power of learning and constantly challenging myself to grow. Whether it's through solving complex coding problems or contributing to meaningful projects, I aim to make a positive impact through technology.
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