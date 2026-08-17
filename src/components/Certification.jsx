"use client";

import { FaAward } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      platform: "Coursera / Meta",
      date: "Dec 2023",
      title: "Frontend Development",
      desc: "Learned HTML, CSS, JavaScript, React.js and responsive web development.",
      link: "#",
    },
    {
      id: 2,
      platform: "Amazon Web Services",
      date: "Oct 2025",
      title: "AWS Cloud Practitioner",
      desc: "Learned AWS fundamentals including EC2, S3, IAM and Cloud concepts.",
      link: "#",
    },
    {
      id: 3,
      platform: "Udemy",
      date: "Dec 2026",
      title: "Full Stack Web Development",
      desc: "Completed MERN Stack Development and built real-world projects.",
      link: "#",
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-[#0B1220] py-16 sm:py-20 lg:py-24 overflow-x-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <p className="cert-heading uppercase tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] text-cyan-400 text-xs sm:text-sm">
          Achievements
        </p>

        <h2 className="cert-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-10 sm:mb-14 lg:mb-20">
          Certifications
        </h2>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((item) => (
            <div
              key={item.id}
              className="cert-card group relative bg-[#181C45] rounded-3xl p-5 sm:p-6 lg:p-8 border border-transparent transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              {/* Floating Icon */}

              <div
                className="
                  absolute
                  -top-5
                  right-5
                  sm:right-8
                  w-14
                  h-14
                  sm:w-16
                  sm:h-16
                  rounded-2xl
                  bg-cyan-400
                  flex
                  justify-center
                  items-center
                  shadow-lg
                  transition-all
                  duration-500
                  group-hover:-rotate-12
                  group-hover:scale-110
                  group-hover:-translate-y-2
                "
              >
                <FaAward className="text-white text-xl sm:text-2xl" />
              </div>

              {/* Top */}

              <div className="flex items-center justify-between flex-wrap gap-3 text-gray-400 text-xs sm:text-sm mt-6">
                <div className="flex items-center gap-2">
                  <HiOutlineShieldCheck />
                  <span>{item.platform}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MdOutlineDateRange />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Title */}

              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-6 leading-tight">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-gray-400 mt-5 leading-7">
                {item.desc}
              </p>

              {/* Link */}

              <a
                href={item.link}
                className="inline-flex items-center gap-2 text-cyan-400 font-semibold mt-6 sm:mt-8 transition-all duration-300 group-hover:gap-4"
              >
                View Certificate
                <FiExternalLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}