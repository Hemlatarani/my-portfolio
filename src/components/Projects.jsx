"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);
  const contentRef = useRef(null)

  const [activeTab, setActiveTab] = useState("All");

  // =========================================
  // PROJECT DATA
  // =========================================

  const tabs = [
    "All",
    "Frontend",
    "Full Stack",
  ];

  const projects = [
    {
      title: "Travel Website",
      category: "Frontend",
      image: "/images/2.jpg",
      description:
        "Modern responsive travel landing page with clean UI and interactive sections.",
      technologies: ["React", "Tailwind", "JavaScript"],
      live: "#",
      github: "#",
    },

    {
      title: "Business Landing Page",
      category: "Frontend",
      image: "/images/12.png",
      description:
        "Professional business website designed with responsive layouts and modern animations.",
      technologies: ["Next.js", "Tailwind", "GSAP"],
      live: "#",
      github: "#",
    },

    {
      title: "Startup Website",
      category: "Frontend",
      image: "/images/6.jpg",
      description:
        "Creative startup website with modern sections, gradients and responsive design.",
      technologies: ["React", "CSS", "JavaScript"],
      live: "#",
      github: "#",
    },

    {
      title: "E-Commerce Website",
      category: "Full Stack",
      image: "/images/6.jpg",
      description:
        "Full-stack e-commerce application with products, cart, authentication and orders.",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      live: "#",
      github: "#",
    },

    {
      title: "Real Estate Website",
      category: "Full Stack",
      image: "/images/6.jpg",
      description:
        "Property listing platform with property details, search and responsive dashboard.",
      technologies: ["React", "Node.js", "MongoDB"],
      live: "#",
      github: "#",
    },

    {
      title: "Portfolio Website",
      category: "Frontend",
      image: "/images/6.jpg",
      description:
        "Personal developer portfolio with smooth scrolling and professional animations.",
      technologies: ["Next.js", "Tailwind", "GSAP"],
      live: "#",
      github: "#",
    },
  ];

  // =========================================
  // FILTER PROJECTS
  // =========================================

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeTab
        );

  // =========================================
  // SCROLL ANIMATION
  // =========================================
    

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reset",
        },
      });

      timeline.from(".projects-heading", {
        y: 50,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1,
        ease: "power3.out",
      });

      timeline.from(
        ".projects-description",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

      timeline.from(
        ".project-tabs",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );

      timeline.from(
        ".project-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.94,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // =========================================
  // TAB CHANGE ANIMATION
  // =========================================

  useEffect(() => {
    if (!projectsRef.current) return;

    gsap.fromTo(
      projectsRef.current.querySelectorAll(".project-card"),
      {
        y: 25,
        opacity: 0,
        scale: 0.97,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        bg-[#0B1220]
        py-24
        overflow-hidden
      "
    >

      {/* =====================================
          GREEN BACKGROUND
      ===================================== */}

      <div
      ref={contentRef}
        className="
          absolute inset-0
           mx-2
        rounded-2xl
          z-0
        
             "style={{
    background:
      "linear-gradient(135deg, #ec4899, #a855f7, #6366f1, #3b82f6, #06b6d4, #14b8a6)",
  }}
       
      />

      {/* =====================================
          CONTENT
          CONTENT GREEN BACKGROUND KE UPAR
      ===================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1400px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* =================================
            HEADING
        ================================= */}

        <div
          className="
            text-center
            max-w-[850px]
            mx-auto
          "
        >
          <h2
            className="
              projects-heading
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              text-white
            "
          >
            Projects
          </h2>

          <p
            className="
              projects-description
              mt-6
              text-gray-400
              text-sm
              sm:text-base
              leading-7
              max-w-[720px]
              mx-auto
            "
          >
            Here are some of the projects I have built using
            modern web technologies, responsive design and
            interactive animations.
          </p>
        </div>

        {/* =================================
            TABS
        ================================= */}

        <div
          className="
            project-tabs
            flex
            justify-center
            mt-12
            mb-14
            px-2
          "
        >
          <div
            className="
              flex
              items-center
              w-full
              max-w-[850px]
              p-1
              rounded-full
              bg-[#171717]
              border
              border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,0.3)]
            "
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative
                  flex-1
                  py-3
                  sm:py-4
                  rounded-full
                  text-sm
                  sm:text-base
                  font-semibold
                  transition-all
                  duration-700

                  ${
                    activeTab === tab
                      ? `
                        text-white
                        bg-gradient-to-r
                        from-fuchsia-600
                        via-purple-600
                        to-indigo-600
                        shadow-[0_0_25px_rgba(147,51,234,0.25)]
                      `
                      : `
                        text-gray-400
                        hover:text-white
                      `
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* =================================
            PROJECT GRID
        ================================= */}

        <div
          ref={projectsRef}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-7
            lg:gap-8
          "
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


// =====================================================
// PROJECT CARD
// =====================================================

function ProjectCard({ project }) {
  return (
    <div
      className="
        project-card
        group
        relative
        rounded-[28px]
        bg-[#151923]
        overflow-hidden
        border
        border-white/10
        shadow-[0_15px_50px_rgba(0,0,0,0.25)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-purple-500/40
        hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]
      "
    >

      {/* =================================
          IMAGE
      ================================= */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
        "
      >

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* DARK OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/20
            to-transparent
            opacity-70
            transition-opacity
            duration-500
          "
        />

        {/* HOVER OVERLAY */}

        <div
          className="
            absolute
            inset-0
            translate-y-[-100%]
            group-hover:translate-y-0
            transition-transform
            duration-500
            bg-purple-900/30
            flex
            items-center
            justify-center
          "
        >
          <span
            className="
              text-white
              text-lg
              font-semibold
              tracking-widest
              uppercase
            "
          >
            {project.category}
          </span>
        </div>

        {/* PROJECT INFO */}

        <div
          className="
            absolute
            left-5
            right-5
            bottom-5
            group-hover:opacity-0
            transition-opacity
            duration-300
          "
        >
          <h3
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-white
            "
          >
            {project.title}
          </h3>

          <p
            className="
              text-gray-300
              text-sm
              mt-1
            "
          >
            {project.category}
          </p>
        </div>
      </div>

      {/* =================================
          CARD CONTENT
      ================================= */}

      <div className="p-5 sm:p-6">

        <p
          className="
            text-gray-400
            text-sm
            leading-6
            line-clamp-2
          "
        >
          {project.description}
        </p>

        {/* TECHNOLOGIES */}

        <div
          className="
            flex
            flex-wrap
            gap-2
            mt-5
          "
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1.5
                rounded-full
                bg-white/5
                border
                border-white/10
                text-gray-300
                text-xs
                transition-colors
                duration-300
                group-hover:border-purple-500/30
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BOTTOM LINKS */}

        <div
          className="
            flex
            items-center
            justify-between
            mt-6
            pt-5
            border-t
            border-white/10
          "
        >

          <a
            href={project.github}
            className="
              flex
              items-center
              gap-2
              text-gray-400
              text-sm
              hover:text-white
              transition-colors
              duration-300
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            className="
              flex
              items-center
              gap-2
              text-purple-400
              text-sm
              font-medium
              hover:text-purple-300
              transition-colors
              duration-300
            "
          >
            Live Demo
            <FaExternalLinkAlt size={12} />
          </a>

        </div>
      </div>
    </div>
  );
}