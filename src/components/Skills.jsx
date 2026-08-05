"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBriefcase,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "HTML & CSS",
      percent: 90,
      icon: <FaHtml5 />,
    },
    {
      id: 2,
      name: "React.js",
      percent: 85,
      icon: <FaReact />,
    },
    {
      id: 3,
      name: "JavaScript",
      percent: 95,
      icon: <IoLogoJavascript />,
    },
    {
      id: 4,
      name: "Next.js",
      percent: 80,
      icon: <RiNextjsFill />,
    },
    {
      id: 5,
      name: "Tailwind CSS",
      percent: 92,
      icon: <RiTailwindCssFill />,
    },
    {
      id: 6,
      name: "Node.js & MongoDB",
      percent: 75,
      icon: <SiMongodb />,
    },
  ];

  const experience = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Self Projects",
      duration: "2024 - Present",
    },
    {
      id: 2,
      role: "Full Stack Learner",
      company: "WsCube Tech",
      duration: "2024 - 2025",
    },
  ];

  return (
    <section id="skills" className="bg-[#0B1220] py-24"
    >
      <div className="max-w-[1320px] mx-auto px-5 overflow-hidden">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-cyan-400">
            My Expertise
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mt-4">
            Skills &
            <span className="text-cyan-400"> Experience</span>
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}

          <div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>

            {skills.map((skill) => (

              <div
                key={skill.id}
                className="mb-8"
              >

                <div className="flex justify-between mb-3">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-xl bg-[#131D2D] border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">

                      {skill.icon}

                    </div>

                    <h3 className="text-white font-semibold text-lg">
                      {skill.name}
                    </h3>

                  </div>

                  <span className="text-cyan-400 font-bold">
                    {skill.percent}%
                  </span>

                </div>

                {/* Progress */}

                <div className="w-full h-3 bg-[#1B2336] rounded-full overflow-hidden">

                  <div
                    style={{ width: `${skill.percent}%` }}
                    className="h-full bg-cyan-400 rounded-full"
                  ></div>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT */}

          <div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">
              Work <span className="text-cyan-400">Experience</span>
            </h2>

            {experience.map((item) => (

              <div
                key={item.id}
                className="bg-[#22153D] rounded-3xl p-8 mb-8 border border-cyan-500/10 hover:border-cyan-400 transition-all duration-500 hover:scale-[1.02]"
              >

                <div className="flex gap-6">

                  <div className="w-16 h-16 rounded-2xl bg-[#131D2D] flex justify-center items-center text-cyan-400 text-2xl">

                    <FaBriefcase />

                  </div>

                  <div>

                    <h3 className="text-2xl text-white font-bold">

                      {item.role}

                    </h3>

                    <p className="text-gray-400 mt-2">

                      {item.company}

                    </p>

                    <p className="text-cyan-400 mt-2">

                      {item.duration}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}