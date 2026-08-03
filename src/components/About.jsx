"use client"
import React from "react";
import { motion } from "framer-motion";
import { VscDownload } from "react-icons/vsc";

export default function About() {

  const cardVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.5,
    },
  }),
};
  return (
  <>
  
  
    <section
      id="about me"
      className="min-h-screen bg-[#0B1220] text-white flex items-center "
    >
      <div className="max-w-[1320px] mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center overflow-hidden">

        {/* Left */}
        <div>
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            I'm <span className="text-cyan-400">Hemlata</span>
            <br />
            Frontend Developer
          </h2>

          <p className="text-gray-400 leading-8 mb-8">
            Passionate Frontend Developer with knowledge of HTML, CSS,
            JavaScript, React, Next.js and Tailwind CSS. I love building
            responsive, modern and user-friendly web applications.
          </p>

          <div className="flex items-center gap-2">
            <button className="mt-10 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 duration-300">
              Hire me
            </button>
            <button className=" flex mt-10 px-5 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 duration-300">
              Download Resume <VscDownload className=" m-1" />

            </button>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-6">

          <motion.div 
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once:false,amount:0.2}}
          custom={0}

          className="bg-[#131D2D] p-6 rounded-2xl border border-cyan-500/20">
            <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </motion.div>

          < motion.div 
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once:false,amount:0.4}}
          custom={1}
          className="bg-[#131D2D] p-6 rounded-2xl border border-cyan-500/20">
            <h3 className="text-4xl font-bold text-cyan-400">1+</h3>
            <p className="text-gray-400 mt-2">Years Learning</p>
          </motion.div>

          < motion.div 
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once:false,amount:0.6}}
          custom={2}
          className="bg-[#131D2D] p-6 rounded-2xl border border-cyan-500/20">
            <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
            <p className="text-gray-400 mt-2">Responsive Design</p>
          </motion.div>

          < motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once:false,amount:0.2}}
          custom={3}
           className="bg-[#131D2D] p-6 rounded-2xl border border-cyan-500/20">
            <h3 className="text-4xl font-bold text-cyan-400">24/7</h3>
            <p className="text-gray-400 mt-2">Learning & Improving</p>
          </motion.div>

        </div>

      </div>
      
    </section>
   
          </>
  );
}