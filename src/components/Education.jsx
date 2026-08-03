"use client"
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";




export default function Education() {

    return (
        <section

id="education"
            className="bg-[#0B1220] py-24 overflow-x-hidden">
            <div className="max-w-[1320px] mx-auto px-5">

                {/* Heading */}
                <div className="mx-4">
                    <p className="uppercase tracking-[8px] text-cyan-400 text-sm">
                        Learning Path
                    </p>

                    <h2 className="text-5xl lg:text-7xl font-bold text-white mt-3 mb-16">
                        Education
                    </h2>

                    {/* Main Grid */}

                    <div

                        className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-16 items-center mx-4 ">

                        {/* Left Image */}

                        <motion.div
                            initial={{ opacity: 0, x: -120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="relative w-fit mx-auto"
                        >
                            {/* Back Border */}
                            <div className="absolute top-5 left-5 w-full h-full border-2 border-cyan-500 rounded-3xl"></div>

                            {/* Image */}
                            <img
                                src="/images/my.jpg"
                                alt="Education"
                                className="relative z-10 w-[380px] h-[520px] object-cover rounded-3xl border border-cyan-500"
                            />
                        </motion.div>

                        {/* Right Side */}

                        <motion.div
                            initial={{ opacity: 0, x: 120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                              className="flex flex-col gap-8"

                        >

                            {/* Card 1 */}

                            <div className="bg-[#171B35] rounded-3xl p-4 border border-cyan-500/20 hover:border-cyan-500 transition-all duration-500  mx-1">

                                <div className="flex justify-between items-center gap-2">

                                    <div className="flex items-center gap-3">

                                        <div className="w-16 h-16   rounded-lg border border-cyan-500 flex justify-center items-center">
                                            <FaGraduationCap className="text-cyan-400 text-3xl" />
                                        </div>

                                        <div>

                                            <h3 className="text-3xl font-bold text-white">
                                                Bachelor of Arts
                                            </h3>

                                            <p className="text-gray-400 mt-1">
                                                Maharshi Dayanand University
                                            </p>

                                        </div>

                                    </div>

                                    <button className="bg-cyan-500 text-black px-5 py-2 rounded-full font-medium">
                                        2000 - 2005
                                    </button>

                                </div>

                                <p className="text-gray-400 leading-8 mt-8">
                                    Completed Bachelor of Arts with strong academic performance and
                                    developed communication, analytical and problem-solving skills.
                                </p>
                                <div className="flex  mt-3  gap-4">

                                    <FaCheckCircle className=" mt-1 bg-cyan-500 text-cyan-700 rounded-full" />
                                    <span className="bg-blue-200  bg-clip-text text-transparent">Academic Exllecance</span>


                                </div>

                            </div>
                            <div className="bg-[#171B35] rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500 transition-all duration-500 ">

                                <div className="flex justify-between items-center">

                                    <div className="flex items-center gap-5">

                                        <div className="w-16 h-16 rounded-2xl border border-cyan-500 flex justify-center items-center">
                                            <FaGraduationCap className="text-cyan-400 text-3xl" />
                                        </div>

                                        <div>

                                            <h3 className="text-3xl font-bold text-white">
                                                Full Stack Web Development

                                            </h3>

                                            <p className="text-gray-400 mt-1">
                                                WsCube Tech (Online)

                                            </p>

                                        </div>

                                    </div>

                                    <button className="bg-cyan-500 text-black px-5 py-2 rounded-full font-medium">
                                        2024 - 2025
                                    </button>

                                </div>

                                <p className="text-gray-400 leading-8 mt-8">
                                    Completed a comprehensive Full Stack Web Development course covering HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, REST APIs, Git & GitHub, and built multiple real-world projects.

                                </p>
                                <div className="flex  mt-3  gap-4">

                                    <FaCheckCircle className=" mt-1 bg-cyan-500 text-cyan-700 rounded-full" />
                                    <span className="bg-blue-200  bg-clip-text text-transparent">Academic Exllecance</span>


                                </div>
                            </div>

                            {/* Card 2 */}

                        </motion.div>

                    </div>

                </div>
            </div>


        
        </section >
    );
}