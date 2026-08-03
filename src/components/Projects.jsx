"use client"
import React from "react";
import { delay, motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      image: "/images/4.png",
    },
    {
      id: 2,
      title: "Real Estate Website",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      title: "Portfolio Website",
      image: "/images/5.jpg",
    },
    {
      id: 4,
      title: "Admin Dashboard",
      image: "/images/6.jpg",
    },
    {
      id: 5,
      title: "Task Management App",
      image: "/images/13.jpg",
    },
    {
      id: 6,
      title: "Chat Application",
      image: "/images/12.png",
    },
  ];
  const rotateVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay:0.5
        
      },
    },
  };
  return (
    <section 
      id="projects"
className="min-h-screen bg-[#0B1220] mt-8  items-center">
      <h1  className="text-6xl bg-blue-900 bg-clip-text text-transparent py-3 font-bold animate-slideFromRight ">Projects</h1>
      <div className="max-w-[1320px] mx-auto py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 overflow-hidden">

        {
          projects.map((projects) => {
            return (
              < motion.div
                variants={rotateVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={0}
                className="bg-cyan-600 p-5 rounded-[30px] transition-all duration-300 overflow-hidden ">
                <img src={projects.image} alt={projects.title} className="w-full h-64 object-cover rounded-[30px] hover:scale-125" />

              </motion.div>
            )
          })
        }
      </div>
    </section>
  );
}