"use client";

import React, { useRef } from "react";
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {

    // =========================================
    // SECTION REF
    // =========================================

    const sectionRef = useRef(null);


    // =========================================
    // ANIMATION SETTINGS
    // =========================================

    const headingAnimation = {
        y: 50,
        opacity: 0,
        filter: "blur(8px)",
    };

    const contentAnimation = {
        y: 45,
        opacity: 0,
        scale: 0.97,
        filter: "blur(4px)",
    };

    const headingTiming = {
        duration: 1.1,
        ease: "power3.out",
    };

    const contentTiming = {
        duration: 1.35,
        ease: "power3.out",
    };


    // =========================================
    // GSAP SCROLL ANIMATION
    // =========================================

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 72%",
                toggleActions: "play none none reset",
                id: "education-trigger",
            },
        });


        // =========================================
        // HEADING ANIMATION
        // =========================================

        tl.from(".education-heading", {
            ...headingAnimation,
            ...headingTiming,
        });


        // =========================================
        // IMAGE + CARDS
        // EK SAATH APPEAR HONGE
        // =========================================

        tl.from(
            ".education-content",
            {
                ...contentAnimation,
                ...contentTiming,
            },
            "-=0.45"
        );


        // =========================================
        // IMAGE PAR THODA SOFT FLOAT EFFECT
        // =========================================

        gsap.to(".education-floating-border", {
            y: -10,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

    }, {
        scope: sectionRef,
    });


    // =========================================
    // RETURN
    // =========================================

    return (

        <section
            ref={sectionRef}
            id="education"
            className="
                bg-[#0B1220]
                py-24
                overflow-hidden
            "
        >

            <div className="max-w-[1320px] mx-auto px-5">

                <div className="mx-4">


                    {/* =================================
                        HEADING
                    ================================= */}

                    <div className="education-heading">

                        <p
                            className="
                                uppercase
                                tracking-[8px]
                                text-cyan-400
                                text-sm
                            "
                        >
                            Learning Path
                        </p>

                        <h2
                            className="
                                text-4xl
                                sm:text-5xl
                                lg:text-7xl

                                font-bold

                                text-white

                                mt-3
                                mb-16
                            "
                        >
                            Education
                        </h2>

                    </div>


                    {/* =================================
                        MAIN CONTENT
                    ================================= */}

                    <div
                        className="
                            education-content

                            grid
                            grid-cols-1

                            lg:grid-cols-[32%_68%]

                            gap-14
                            lg:gap-16

                            items-center

                            mx-4
                        "
                    >


                        {/* =================================
                            LEFT IMAGE
                        ================================= */}

                        <div
                            className="
                                relative
                                w-fit
                                mx-auto
                            "
                        >

                            {/* ---------------------------------
                                FLOATING BACK BORDER
                            --------------------------------- */}

                            <div
                                className="
                                    education-floating-border

                                    absolute

                                    top-5
                                    left-5

                                    w-full
                                    h-full

                                    border-2
                                    border-cyan-500/70

                                    rounded-3xl
                                "
                            />


                            {/* ---------------------------------
                                IMAGE
                            --------------------------------- */}

                            <img
                                src="/images/my.jpg"
                                alt="Education"
                                className="
                                    relative
                                    z-10

                                    w-[260px]
                                    h-[360px]

                                    sm:w-[320px]
                                    sm:h-[440px]

                                    lg:w-[380px]
                                    lg:h-[520px]

                                    object-cover

                                    rounded-3xl

                                    border
                                    border-cyan-500

                                    shadow-[0_0_40px_rgba(34,211,238,0.12)]

                                    transition-all
                                    duration-500

                                    hover:scale-[1.025]
                                    hover:shadow-[0_0_55px_rgba(34,211,238,0.20)]
                                "
                            />

                        </div>


                        {/* =================================
                            RIGHT SIDE
                        ================================= */}

                        <div
                            className="
                                flex
                                flex-col
                                gap-8
                            "
                        >


                            {/* =================================
                                CARD 1
                            ================================= */}

                            <div
                                className="
                                    group
                                    relative
                                    overflow-hidden

                                    bg-[#171B35]

                                    rounded-3xl

                                    p-5
                                    sm:p-7

                                    border
                                    border-cyan-500/20

                                    hover:border-cyan-500/60

                                    transition-all
                                    duration-500

                                    hover:-translate-y-1

                                    hover:shadow-[0_15px_50px_rgba(34,211,238,0.08)]
                                "
                            >

                                {/* ---------------------------------
                                    GLOW
                                --------------------------------- */}

                                <div
                                    className="
                                        absolute

                                        -right-20
                                        -top-20

                                        w-40
                                        h-40

                                        bg-cyan-500/10

                                        rounded-full

                                        blur-3xl

                                        group-hover:bg-cyan-500/20

                                        transition-all
                                        duration-700
                                    "
                                />


                                {/* ---------------------------------
                                    HEADER
                                --------------------------------- */}

                                <div
                                    className="
                                        relative
                                        z-10

                                        flex
                                        flex-col

                                        sm:flex-row

                                        sm:justify-between
                                        sm:items-center

                                        gap-4
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >

                                        {/* ICON */}

                                        <div
                                            className="
                                                w-14
                                                h-14

                                                sm:w-16
                                                sm:h-16

                                                rounded-2xl

                                                border
                                                border-cyan-500

                                                flex
                                                justify-center
                                                items-center

                                                shrink-0

                                                bg-cyan-500/5

                                                transition-all
                                                duration-500

                                                group-hover:bg-cyan-500/10
                                                group-hover:scale-105
                                            "
                                        >

                                            <FaGraduationCap
                                                className="
                                                    text-cyan-400
                                                    text-3xl
                                                "
                                            />

                                        </div>


                                        {/* TITLE */}

                                        <div>

                                            <h3
                                                className="
                                                    text-xl
                                                    sm:text-2xl
                                                    lg:text-3xl

                                                    font-bold

                                                    text-white
                                                "
                                            >
                                                Bachelor of Arts
                                            </h3>

                                            <p
                                                className="
                                                    text-gray-400
                                                    mt-1
                                                "
                                            >
                                                KUK University
                                            </p>

                                        </div>

                                    </div>


                                    {/* YEAR */}

                                    <span
                                        className="
                                            bg-cyan-500

                                            text-black

                                            px-4
                                            py-2

                                            rounded-full

                                            font-semibold

                                            text-sm

                                            w-fit
                                        "
                                    >
                                        2015- 2020
                                    </span>

                                </div>


                                {/* ---------------------------------
                                    DESCRIPTION
                                --------------------------------- */}

                                <p
                                    className="
                                        relative
                                        z-10

                                        text-gray-400

                                        leading-7

                                        mt-7

                                        text-sm
                                        sm:text-base
                                    "
                                >
                                    Completed Bachelor of Arts with strong
                                    academic performance and developed
                                    communication, analytical and
                                    problem-solving skills.
                                </p>


                                {/* ---------------------------------
                                    ACHIEVEMENT
                                --------------------------------- */}

                                <div
                                    className="
                                        relative
                                        z-10

                                        flex
                                        items-center

                                        mt-5

                                        gap-3
                                    "
                                >

                                    <FaCheckCircle
                                        className="
                                            text-cyan-400
                                            text-lg
                                            shrink-0
                                        "
                                    />

                                    <span
                                        className="
                                            text-cyan-300
                                            font-medium
                                        "
                                    >
                                        Academic Excellence
                                    </span>

                                </div>

                            </div>


                            {/* =================================
                                CARD 2
                            ================================= */}

                            <div
                                className="
                                    group
                                    relative
                                    overflow-hidden

                                    bg-[#171B35]

                                    rounded-3xl

                                    p-5
                                    sm:p-7

                                    border
                                    border-cyan-500/20

                                    hover:border-cyan-500/60

                                    transition-all
                                    duration-500

                                    hover:-translate-y-1

                                    hover:shadow-[0_15px_50px_rgba(34,211,238,0.08)]
                                "
                            >

                                {/* ---------------------------------
                                    GLOW
                                --------------------------------- */}

                                <div
                                    className="
                                        absolute

                                        -right-20
                                        -top-20

                                        w-40
                                        h-40

                                        bg-purple-500/10

                                        rounded-full

                                        blur-3xl

                                        group-hover:bg-purple-500/20

                                        transition-all
                                        duration-700
                                    "
                                />


                                {/* ---------------------------------
                                    HEADER
                                --------------------------------- */}

                                <div
                                    className="
                                        relative
                                        z-10

                                        flex
                                        flex-col

                                        sm:flex-row

                                        sm:justify-between
                                        sm:items-center

                                        gap-4
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >

                                        {/* ICON */}

                                        <div
                                            className="
                                                w-14
                                                h-14

                                                sm:w-16
                                                sm:h-16

                                                rounded-2xl

                                                border
                                                border-cyan-500

                                                flex
                                                justify-center
                                                items-center

                                                shrink-0

                                                bg-cyan-500/5

                                                transition-all
                                                duration-500

                                                group-hover:bg-cyan-500/10
                                                group-hover:scale-105
                                            "
                                        >

                                            <FaGraduationCap
                                                className="
                                                    text-cyan-400
                                                    text-3xl
                                                "
                                            />

                                        </div>


                                        {/* TITLE */}

                                        <div>

                                            <h3
                                                className="
                                                    text-xl
                                                    sm:text-2xl
                                                    lg:text-3xl

                                                    font-bold

                                                    text-white
                                                "
                                            >
                                                Full Stack Web Development
                                            </h3>

                                            <p
                                                className="
                                                    text-gray-400
                                                    mt-1
                                                "
                                            >
                                                WsCube Tech (Online)
                                            </p>

                                        </div>

                                    </div>


                                    {/* YEAR */}

                                    <span
                                        className="
                                            bg-cyan-500

                                            text-black

                                            px-4
                                            py-2

                                            rounded-full

                                            font-semibold

                                            text-sm

                                            w-fit
                                        "
                                    >
                                        2024 - 2025
                                    </span>

                                </div>


                                {/* ---------------------------------
                                    DESCRIPTION
                                --------------------------------- */}

                                <p
                                    className="
                                        relative
                                        z-10

                                        text-gray-400

                                        leading-7

                                        mt-7

                                        text-sm
                                        sm:text-base
                                    "
                                >
                                    Completed a comprehensive Full Stack Web
                                    Development course covering HTML, CSS,
                                    JavaScript, React.js, Next.js, Node.js,
                                    Express.js, MongoDB, REST APIs, Git &
                                    GitHub, and built multiple real-world
                                    projects.
                                </p>


                                {/* ---------------------------------
                                    ACHIEVEMENT
                                --------------------------------- */}

                                <div
                                    className="
                                        relative
                                        z-10

                                        flex
                                        items-center

                                        mt-5

                                        gap-3
                                    "
                                >

                                    <FaCheckCircle
                                        className="
                                            text-cyan-400
                                            text-lg
                                            shrink-0
                                        "
                                    />

                                    <span
                                        className="
                                            text-cyan-300
                                            font-medium
                                        "
                                    >
                                        Full Stack Development
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}