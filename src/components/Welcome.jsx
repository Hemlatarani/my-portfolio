"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Welcome() {
  // ==============================
  // REFS
  // ==============================

  const sectionRef = useRef(null);
  const backgroundchangeRef = useRef(null);

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const skillsRef = useRef(null);

  const imageRef = useRef(null);
  const imageGlowRef = useRef(null);
  const techCardRef = useRef(null);

  // ==============================
  // GSAP
  // ==============================

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ==============================
      // HERO ENTRANCE
      // ==============================

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(badgeRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
      })

        .from(
          backgroundchangeRef.current,
          {
            opacity: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35"
        )

        .from(
          titleRef.current,
          {
            x: -70,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.35"
        )

        .from(
          nameRef.current,
          {
            y: 40,
            opacity: 0,
            scale: 0.9,
            duration: 0.9,
            ease: "back.out(1.4)",
          },
          "-=0.4"
        )

        .from(
          roleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45"
        )

        .from(
          descriptionRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )

        .from(
          buttonsRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35"
        )

        .from(
          skillsRef.current.children,
          {
            y: 15,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.25"
        )

        .from(
          imageRef.current,
          {
            x: 120,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: "back.out(1.5)",
          },
          "-=1"
        )

        .from(
          techCardRef.current,
          {
            x: 40,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.5"
        );

      // ==============================
      // DARK WATER BACKGROUND
      // ==============================

      const colors = [
        // Deep Ocean Blue
        "linear-gradient(135deg, #020D14 0%, #0A2540 40%, #0E4D6C 70%, #020D14 100%)",
        // Electric Cyan
        "linear-gradient(135deg, #021018 0%, #0C4A5E 40%, #0E7490 70%, #021018 100%)",
        // Royal Purple Dark
        "linear-gradient(135deg, #0D0A1E 0%, #2D1B69 40%, #4C1D95 70%, #0D0A1E 100%)",
        // Dark Emerald
        "linear-gradient(135deg, #021210 0%, #064E3B 40%, #065F46 70%, #021210 100%)",
        // Midnight Indigo
        "linear-gradient(135deg, #080B1A 0%, #1E3A5F 40%, #1D4ED8 70%, #080B1A 100%)",
        // Deep Rose Dark
        "linear-gradient(135deg, #130A0A 0%, #4C0519 40%, #881337 70%, #130A0A 100%)",
      ];

      const backgroundTimeline = gsap.timeline({
        repeat: -1,
        delay: 2,
      });

      colors.forEach((bg) => {
        backgroundTimeline.to(backgroundchangeRef.current, {
          background: bg,
          duration: 4,
          ease: "power2.inOut",
        });
      });

      // ==============================
      // IMAGE FLOAT
      // ==============================

      gsap.to(imageRef.current, {
        keyframes: [
          {
            y: -10,
            duration: 2,
          },
          {
            x: -25,
            y: -30,
            duration: 2,
          },
          {
            x: -35,
            y: 10,
            duration: 2,
          },
          {
            x: -10,
            y: 20,
            duration: 2,
          },
          {
            x: 0,
            y: 0,
            duration: 2,
          },
        ],
        repeat: -1,
        ease: "sine.inOut",
      });

      // ==============================
      // IMAGE GLOW
      // ==============================

      gsap.to(imageGlowRef.current, {
        scale: 1.15,
        opacity: 0.65,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ==============================
      // TECH CARD FLOAT
      // ==============================

      gsap.to(techCardRef.current, {
        y: -8,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // ==============================
  // JSX
  // ==============================

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#06141F]
        text-white
        flex
        items-center
        pt-24
        pb-16
      "
    >
      {/* ==========================================
          ANIMATED DARK WATER BACKGROUND
      ========================================== */}

      <div
        ref={backgroundchangeRef}
        className="
          absolute
          inset-0
          opacity-80
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(135deg, #062F3D, #075985, #06141F)",
        }}
      />

      {/* ==========================================
          TOP LEFT WATER GLOW
      ========================================== */}

      <div
        className="
          absolute
          top-[-250px]
          left-[-200px]
          w-[550px]
          h-[550px]
          rounded-full
          bg-cyan-500/10
          blur-[150px]
          pointer-events-none
        "
      />

      {/* ==========================================
          BOTTOM RIGHT BLUE GLOW
      ========================================== */}

      <div
        className="
          absolute
          bottom-[-250px]
          right-[-200px]
          w-[550px]
          h-[550px]
          rounded-full
          bg-blue-600/10
          blur-[150px]
          pointer-events-none
        "
      />

      {/* ==========================================
          CENTER WATER GLOW
      ========================================== */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/5
          blur-[140px]
          pointer-events-none
        "
      />

      {/* ==========================================
          SUBTLE GRID
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          pointer-events-none
          [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* ==========================================
          DECORATIVE WATER ORBS
      ========================================== */}

      <div
        className="
          absolute
          top-[25%]
          left-[8%]
          w-2
          h-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_20px_#22d3ee]
          animate-pulse
        "
      />

      <div
        className="
          absolute
          top-[18%]
          right-[12%]
          w-3
          h-3
          rounded-full
          bg-cyan-300
          shadow-[0_0_25px_#22d3ee]
          animate-pulse
        "
      />

      <div
        className="
          absolute
          bottom-[20%]
          left-[45%]
          w-2
          h-2
          rounded-full
          bg-blue-400
          animate-ping
        "
      />

      {/* ==========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1320px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          grid
          lg:grid-cols-[1.1fr_0.9fr]
          items-center
          gap-14
          lg:gap-20
        "
      >
        {/* ==========================================
            LEFT CONTENT
        ========================================== */}

        <div className="max-w-2xl">
          {/* AVAILABLE BADGE */}

          <div
            ref={badgeRef}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-300/20
              bg-cyan-400/5
              px-4
              py-2
              backdrop-blur-md
              shadow-[0_0_25px_rgba(34,211,238,0.05)]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_#22d3ee]
                animate-pulse
              "
            />

            <span className="text-sm text-cyan-100/80">
              Available for opportunities
            </span>
          </div>

          {/* SMALL INTRO */}

          <p
            ref={titleRef}
            className="
              mt-8
              text-lg
              sm:text-xl
              text-gray-300
            "
          >
            Hello, I'm
          </p>

          {/* NAME */}

          <h1
            ref={nameRef}
            className="
              mt-2
              text-5xl
              sm:text-6xl
              lg:text-7xl
              xl:text-[82px]
              font-bold
              tracking-tight
              leading-[0.95]
            "
          >
            Hemlata
            <span className="text-cyan-400">.</span>
          </h1>

          {/* ROLE */}

          <h2
            ref={roleRef}
            className="
              mt-6
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-semibold
              leading-tight
            "
          >
            Full Stack{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-sky-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Developer
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            ref={descriptionRef}
            className="
              mt-7
              max-w-xl
              text-base
              sm:text-lg
              leading-8
              text-gray-300
            "
          >
            I build modern, responsive and user-focused
            web applications using React, Next.js,
            Node.js and MongoDB — with clean interfaces
            and smooth interactions.
          </p>

          {/* BUTTONS */}

          <div
            ref={buttonsRef}
            className="
              mt-9
              flex
              flex-wrap
              gap-4
            "
          >
            <a
              href="#projects"
              className="
                group
                relative
                overflow-hidden
                rounded-full
                bg-cyan-400
                px-7
                py-3.5
                font-semibold
                text-[#06141F]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-cyan-300
                hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
              "
            >
              <span className="relative z-10">
                View Projects
              </span>

              <span
                className="
                  ml-2
                  inline-block
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            <a
              href="#contact"
              className="
                rounded-full
                border
                border-cyan-300/20
                bg-white/[0.04]
                px-7
                py-3.5
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:bg-cyan-400/10
                hover:scale-105
              "
            >
              Let's Talk
            </a>
          </div>

          {/* TECH STACK */}

          <div
            ref={skillsRef}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {[
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
              "Tailwind",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border
                  border-cyan-300/10
                  bg-cyan-400/[0.03]
                  px-4
                  py-2
                  text-sm
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:text-cyan-300
                  hover:bg-cyan-400/5
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ==========================================
            RIGHT PROFILE
        ========================================== */}

        <div
          className="
            relative
            flex
            min-h-[480px]
            sm:min-h-[560px]
            items-center
            justify-center
          "
        >
          {/* LARGE GLOW */}

          <div
            ref={imageGlowRef}
            className="
              absolute
              w-[280px]
              h-[280px]
              sm:w-[390px]
              sm:h-[390px]
              lg:w-[470px]
              lg:h-[470px]
              rounded-full
              bg-cyan-500/15
              blur-[100px]
            "
          />

          {/* DECORATIVE CIRCLE */}

          <div
            className="
              absolute
              w-[300px]
              h-[300px]
              sm:w-[410px]
              sm:h-[410px]
              lg:w-[490px]
              lg:h-[490px]
              rounded-full
              border
              border-cyan-400/10
            "
          />

          {/* ROTATING RING */}

          <div
            className="
              absolute
              w-[330px]
              h-[330px]
              sm:w-[440px]
              sm:h-[440px]
              lg:w-[520px]
              lg:h-[520px]
              rounded-full
              border
              border-dashed
              border-cyan-400/15
              animate-[spin_25s_linear_infinite]
            "
          />

          {/* IMAGE */}

          <div
            ref={imageRef}
            className="
              relative
              z-10
              p-[3px]
              rounded-[45%_55%_50%_50%/45%_45%_55%_55%]
              bg-gradient-to-br
              from-cyan-300
              via-sky-500
              to-blue-700
              shadow-[0_0_60px_rgba(34,211,238,0.15)]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[45%_55%_50%_50%/45%_45%_55%_55%]
                bg-[#06141F]
                w-[270px]
                h-[350px]
                sm:w-[340px]
                sm:h-[440px]
                lg:w-[390px]
                lg:h-[500px]
              "
            >
              <Image
                src="/images/my.jpg"
                alt="Hemlata - Full Stack Developer"
                width={650}
                height={750}
                priority
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* IMAGE GRADIENT */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#06141F]/40
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </div>

          {/* FLOATING TECH CARD */}

          <div
            ref={techCardRef}
            className="
              absolute
              z-20
              bottom-6
              left-1
              sm:left-4
              lg:left-0
              rounded-2xl
              border
              border-cyan-300/10
              bg-[#071A25]/85
              px-4
              py-3
              backdrop-blur-xl
              shadow-2xl
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400/10
                  text-xl
                "
              >
                ⚡
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Focus
                </p>

                <p className="text-sm font-semibold text-white">
                  Modern Web Apps
                </p>
              </div>
            </div>
          </div>

          {/* SMALL FLOATING BADGE */}

          <div
            className="
              absolute
              z-20
              top-16
              right-0
              sm:right-4
              lg:-right-2
              rounded-2xl
              border
              border-cyan-300/10
              bg-[#071A25]/85
              px-4
              py-3
              backdrop-blur-xl
            "
          >
            <p className="text-xs text-gray-500">
              Stack
            </p>

            <p className="text-sm font-semibold text-cyan-300">
              MERN / Next.js
            </p>
          </div>
        </div>
      </div>

      {/* ==========================================
          BOTTOM SCROLL INDICATOR
      ========================================== */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-gray-500
          lg:flex
        "
      >
        <span className="text-[10px] uppercase tracking-[3px]">
          Scroll
        </span>

        <span
          className="
            h-8
            w-[1px]
            bg-gradient-to-b
            from-cyan-400
            to-transparent
          "
        />
      </div>
    </section>
  );
}