"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);


// ======================================================
// SKILLS DATA
// ======================================================

const skills = [
    {
        name: "Web Development",
        percentage: 95,
    },
    {
        name: "React / Next.js",
        percentage: 90,
    },
    {
        name: "JavaScript",
        percentage: 90,
    },
    {
        name: "UI / UX Design",
        percentage: 85,
    },
    {
        name: "Node.js",
        percentage: 80,
    },
    {
        name: "MongoDB",
        percentage: 80,
    },
];


// ======================================================
// MAIN COMPONENT
// ======================================================

export default function Skills() {

    const sectionRef = useRef(null);

    // Check whether section has already entered viewport
    const hasEnteredRef = useRef(false);
    const isFirstRender = useRef(true);

    // Current carousel position
    const [activeIndex, setActiveIndex] = useState(0);


    // ==================================================
    // ONLY 3 SKILLS VISIBLE
    // ==================================================

    // activeIndex se shuru karke sirf 3 skills lo — yahi carousel mein dikhenge
    const visibleSkills = skills.slice(
        activeIndex,
        activeIndex + 3
    );


    // ==================================================
    // SCROLL ANIMATION
    //
    // IMPORTANT:
    // This effect runs ONLY once.
    //
    // activeIndex is NOT dependency.
    // So arrow click won't restart heading animation.
    // ==================================================

    useEffect(() => {

        const ctx = gsap.context(() => {

            // ------------------------------------------
            // INITIAL STATE
            // Sab elements ko pehle hide karo taaki
            // scroll par animate ho sakein
            // ------------------------------------------

            // Main box neeche aur invisible
            gsap.set(".skills-box", {
                y: 70,
                opacity: 0,
              
            });

            // Heading neeche, invisible aur blurred
            gsap.set(".skills-heading", {
                y: 45,
                opacity: 0,
                filter: "blur(8px)",
            });

            // Description thodi neeche aur invisible
            gsap.set(".skills-description", {
                y: 25,
                opacity: 0,
            });

            // Arrow + cards wala navigation area invisible
            gsap.set(".skill-navigation", {
                y: 25,
                opacity: 0,
            });

            // Har skill card neeche, invisible aur thoda chota
            gsap.set(".skill-card", {
                y: 45,
                opacity: 0,
                scale: 0.92,
            });


            // ------------------------------------------
            // CREATE MAIN TIMELINE
            // ------------------------------------------

            // Timeline banao jo abhi play nahi hogi
            // ScrollTrigger trigger karega isko
            const scrollTimeline = gsap.timeline({
                paused: true,
            });


            // ------------------------------------------
            // MAIN BOX
            // ------------------------------------------

            // Step 1: Main box upar aake visible ho
            scrollTimeline.to(".skills-box", {
                y: 0,
                opacity: 1,
                scale: 1,

                duration: 1,

                ease: "power3.out",
            });


            // ------------------------------------------
            // HEADING
            // ------------------------------------------

            // Step 2: Heading upar aake blur hata ke visible ho
            // "-=0.7" matlab box ke saath overlap karke chale
            scrollTimeline.to(
                ".skills-heading",
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",

                    duration: 1,

                    ease: "power3.out",
                },
                "-=0.7"
            );


            // ------------------------------------------
            // DESCRIPTION
            // ------------------------------------------

            // Step 3: Description fade in ho
            scrollTimeline.to(
                ".skills-description",
                {
                    y: 0,
                    opacity: 1,

                    duration: 0.75,

                    ease: "power3.out",
                },
                "-=0.55"
            );


            // ------------------------------------------
            // NAVIGATION AREA
            // ------------------------------------------

            // Step 4: Navigation area (arrows + cards wrapper) visible ho
            scrollTimeline.to(
                ".skill-navigation",
                {
                    y: 0,
                    opacity: 1,

                    duration: 0.7,

                    ease: "power3.out",
                },
                "-=0.45"
            );


            // ------------------------------------------
            // SKILL CARDS
            // ------------------------------------------

            // Step 5: Har card ek ek karke bounce karke aaye
            // stagger: 0.12 — cards ke beech 0.12s ka gap
            scrollTimeline.to(
                ".skill-card",
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,

                    duration: 0.85,

                    stagger: 0.12,

                    ease: "back.out(1.4)",
                },
                "-=0.35"
            );


            // ------------------------------------------
            // CIRCLE PROGRESS
            // ------------------------------------------

            // Step 6: Circle progress fill ho
            // strokeDashoffset kam hoga = circle bhar jaayega
            scrollTimeline.to(
                ".skill-progress",
                {
                    strokeDashoffset: (
                        index,
                        element
                    ) => {
                        // Circle ki poori length nikalo
                        const length =
                            element.getTotalLength();

                        // data-percentage attribute se value lo
                        const percentage =
                            Number(
                                element.dataset.percentage
                            );

                        // Jitna fill karna hai utna offset rakhdo
                        return (
                            length -
                            (percentage / 100) *
                                length
                        );
                    },

                    duration: 1.5,

                    stagger: 0.12,

                    ease: "power2.out",
                },
                "-=0.6"
            );


            // ==================================================
            // SCROLL TRIGGER
            // ==================================================

            ScrollTrigger.create({

                trigger: sectionRef.current,

                start: "top 75%",

                // ------------------------------------------
                // ENTER FROM BOTTOM
                // ------------------------------------------

                // Section pehli baar viewport mein aaya — animation shuru
                onEnter: () => {

                    hasEnteredRef.current = true;

                    scrollTimeline.restart();

                },


                // ------------------------------------------
                // ENTER AGAIN FROM TOP
                // ------------------------------------------

                // Upar se wapas aaya — animation dobara chale
                onEnterBack: () => {

                    hasEnteredRef.current = true;

                    scrollTimeline.restart();

                },


                // ------------------------------------------
                // LEAVE DOWN
                // ------------------------------------------

                // Neeche scroll karke section se bahar gaya — reset
                onLeave: () => {

                    hasEnteredRef.current = false;

                    scrollTimeline.pause(0);

                },


                // ------------------------------------------
                // LEAVE UP
                // ------------------------------------------

                // Upar scroll karke section se bahar gaya — reset
                onLeaveBack: () => {

                    hasEnteredRef.current = false;

                    scrollTimeline.pause(0);

                },

            });

        }, sectionRef);


        return () => ctx.revert();

    }, []);


    // ======================================================
    // INNER CAROUSEL ANIMATION
    //
    // activeIndex change hone par:
    // ONLY cards change honge.
    //
    // Heading / description / box untouched.
    // ======================================================

    useEffect(() => {

        // activeIndex 0 hai matlab pehla render hai — animation skip karo
        // Scroll wali useEffect pehle se handle kar chuki hai
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }


        // Section ke andar se saare .skill-card elements lo
        const cards =
            sectionRef.current?.querySelectorAll(
                ".skill-card"
            );


        if (!cards || cards.length === 0) {
            return;
        }


        // Naye cards ko hidden state se visible state mein animate karo
        gsap.fromTo(
            cards,
            {
                opacity: 0,   // shuru mein invisible
                y: 25,        // thoda neeche
                scale: 0.94,  // thoda chota
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,

                duration: 0.55,

                stagger: 0.08, // cards ek ek karke aayenge

                ease: "power3.out",
            }
        );


        // Circle progress animation
        const circles =
            sectionRef.current?.querySelectorAll(
                ".skill-progress"
            );


        if (circles) {

            circles.forEach((circle) => {

                // SVG circle ki poori length
                const length =
                    circle.getTotalLength();

                // data-percentage se skill ka % nikalo
                const percentage =
                    Number(
                        circle.dataset.percentage
                    );

                // Pehle circle ko 0% pe set karo (poora hidden)
                gsap.set(circle, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                });

                // Ab percentage tak fill karo
                gsap.to(circle, {

                    strokeDashoffset:
                        length -
                        (percentage / 100) *
                            length,

                    duration: 1,

                    ease: "power2.out",

                    delay: 0.15, // cards ke baad thoda ruk ke chale

                });

            });

        }

    }, [activeIndex]);


    // ======================================================
    // NEXT BUTTON
    // ======================================================

    const handleNext = () => {

        // Agar last 3 skills nahi dikh rahi tabhi aage jao
        if (
            activeIndex <
            skills.length - 3
        ) {

            setActiveIndex(
                (prev) => prev + 1
            );

        }

    };


    // ======================================================
    // PREVIOUS BUTTON
    // ======================================================

    const handlePrevious = () => {

        // Agar pehli skill nahi dikh rahi tabhi peeche jao
        if (activeIndex > 0) {

            setActiveIndex(
                (prev) => prev - 1
            );

        }

    };


    // ======================================================
    // RETURN
    // ======================================================

    return (

        <section
            ref={sectionRef}
            id="skills"
            className="
                relative

                bg-[#0B1220]

                py-24
                sm:py-28
                lg:py-32

                overflow-hidden
            "
        >

            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div
                className="
                    absolute

                    top-20
                    left-1/2

                    -translate-x-1/2

                    w-[500px]
                    h-[350px]

                    bg-purple-600/10

                    blur-[130px]

                    rounded-full

                    pointer-events-none
                "
            />


            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

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

                {/* =================================================
                    MAIN ROUNDED BOX
                    YE CHANGE NAHI HOGA
                ================================================= */}

                <div
                    className="
                        skills-box

                        relative

                        overflow-hidden

                        rounded-[35px]
                        sm:rounded-[45px]

                        bg-[#111111]

                        border
                        border-white/[0.06]

                        px-5
                        py-14

                        sm:px-10
                        sm:py-16

                        lg:px-16
                        lg:py-20

                        shadow-[0_30px_100px_rgba(0,0,0,0.4)]
                    "
                >

                    {/* =================================================
                        TOP GLOW
                    ================================================= */}

                    <div
                        className="
                            absolute

                            -top-40
                            left-1/2

                            -translate-x-1/2

                            w-[550px]
                            h-[300px]

                            bg-purple-600/10

                            blur-[100px]

                            rounded-full

                            pointer-events-none
                        "
                    />


                    {/* =================================================
                        HEADING
                        YE ARROW CLICK PAR CHANGE NAHI HOGA
                    ================================================= */}

                    <div
                        className="
                            relative
                            z-10

                            text-center
                        "
                    >

                        <h2
                            className="
                                skills-heading

                                text-4xl
                                sm:text-5xl
                                lg:text-6xl

                                font-bold

                                text-white
                            "
                        >
                            Skills
                        </h2>


                        <p
                            className="
                                skills-description

                                max-w-[720px]

                                mx-auto

                                mt-5
                                sm:mt-6

                                text-gray-400

                                text-sm
                                sm:text-base

                                leading-7

                                tracking-wide
                            "
                        >
                            I build modern, responsive and interactive
                            web experiences using modern technologies
                            and development tools.
                        </p>

                    </div>


                    {/* =================================================
                        INNER SKILLS CAROUSEL
                        SIRF YE CONTENT CHANGE HOGA
                    ================================================= */}

                    <div
                        className="
                            skill-navigation

                            relative
                            z-10

                            mt-14
                            sm:mt-16
                            lg:mt-20
                        "
                    >

                        {/* =================================================
                            LEFT ARROW
                        ================================================= */}

                        <button
                            type="button"
                            onClick={handlePrevious}
                            disabled={
                                activeIndex === 0
                            }
                            aria-label="Previous skills"
                            className={`
                                absolute

                                left-0
                                top-1/2

                                -translate-y-1/2

                                z-30

                                w-10
                                h-10

                                sm:w-12
                                sm:h-12

                                rounded-full

                                flex
                                items-center
                                justify-center

                                bg-black/80

                                border
                                border-white/10

                                text-white

                                transition-all
                                duration-300

                                ${
                                    activeIndex === 0
                                        ? "opacity-30 cursor-not-allowed"
                                        : "hover:bg-purple-600 hover:border-purple-400 hover:scale-110"
                                }
                            `}
                        >

                            <FaChevronLeft />

                        </button>


                        {/* =================================================
                            CARDS CONTAINER
                        ================================================= */}

                        <div
                            className="
                                grid

                                grid-cols-1
                                md:grid-cols-3

                                gap-14
                                md:gap-8
                                lg:gap-14

                                px-10
                                sm:px-14
                                lg:px-16
                            "
                        >

                            {visibleSkills.map(
                                (skill, index) => (

                                    <SkillCircle
                                        key={skill.name}
                                        skill={skill}
                                        index={index}
                                    />

                                )
                            )}

                        </div>


                        {/* =================================================
                            RIGHT ARROW
                        ================================================= */}

                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={
                                activeIndex >=
                                skills.length - 3
                            }
                            aria-label="Next skills"
                            className={`
                                absolute

                                right-0
                                top-1/2

                                -translate-y-1/2

                                z-30

                                w-10
                                h-10

                                sm:w-12
                                sm:h-12

                                rounded-full

                                flex
                                items-center
                                justify-center

                                bg-black/80

                                border
                                border-white/10

                                text-white

                                transition-all
                                duration-300

                                ${
                                    activeIndex >=
                                    skills.length - 3
                                        ? "opacity-30 cursor-not-allowed"
                                        : "hover:bg-purple-600 hover:border-purple-400 hover:scale-110"
                                }
                            `}
                        >

                            <FaChevronRight />

                        </button>

                    </div>


                    {/* =================================================
                        DOTS
                        OPTIONAL
                    ================================================= */}

                    <div
                        className="
                            relative
                            z-10

                            flex
                            justify-center
                            items-center

                            gap-2

                            mt-10
                        "
                    >

                        {skills
                            .slice(
                                0,
                                skills.length - 2
                            )
                            .map(
                                (_, index) => (

                                    <button
                                        key={index}
                                        type="button"
                                        aria-label={`Skill slide ${
                                            index + 1
                                        }`}
                                        onClick={() =>
                                            setActiveIndex(
                                                index
                                            )
                                        }
                                        className={`
                                            h-1.5

                                            rounded-full

                                            transition-all
                                            duration-300

                                            ${
                                                activeIndex ===
                                                index
                                                    ? "w-8 bg-purple-500"
                                                    : "w-2 bg-white/20 hover:bg-white/40"
                                            }
                                        `}
                                    />

                                )
                            )}

                    </div>

                </div>

            </div>

        </section>
    );
}


// ======================================================
// SKILL CIRCLE
// ======================================================

function SkillCircle({ skill }) {

    const radius = 50;

    const circumference =
        2 * Math.PI * radius;


    return (

        <div
            className="
                skill-card

                group

                flex
                flex-col
                items-center
                justify-center

                text-center

                min-w-0
            "
        >

            {/* =================================================
                CIRCLE
            ================================================= */}

            <div
                className="
                    relative

                    w-[175px]
                    h-[175px]

                    sm:w-[185px]
                    sm:h-[185px]

                    lg:w-[195px]
                    lg:h-[195px]

                    flex
                    items-center
                    justify-center
                "
            >

                {/* =================================================
                    HOVER GLOW
                ================================================= */}

                <div
                    className="
                        absolute
                        inset-5

                        rounded-full

                        bg-purple-600/10

                        blur-2xl

                        opacity-0

                        group-hover:opacity-100

                        transition-opacity
                        duration-500
                    "
                />


                {/* =================================================
                    SVG
                ================================================= */}

                <svg
                    viewBox="0 0 180 180"
                    className="
                        absolute
                        inset-0

                        w-full
                        h-full

                        -rotate-90
                    "
                >

                    {/* =============================================
                        BACKGROUND CIRCLE
                    ============================================= */}

                    <circle
                        cx="90"
                        cy="90"
                        r={radius}

                        fill="none"

                        stroke="rgba(255,255,255,0.07)"

                        strokeWidth="13"
                    />


                    {/* =============================================
                        PROGRESS CIRCLE
                    ============================================= */}

                    <circle
                        className="skill-progress"

                        cx="90"
                        cy="90"
                        r={radius}

                        fill="none"

                        stroke="url(#skillGradient)"

                        strokeWidth="13"

                        strokeLinecap="round"

                        strokeDasharray={
                            circumference
                        }

                        strokeDashoffset={
                            circumference
                        }

                        data-percentage={
                            skill.percentage
                        }
                    />


                    {/* =============================================
                        GRADIENT
                    ============================================= */}

                    <defs>

                        <linearGradient
                            id="skillGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >

                            <stop
                                offset="0%"
                                stopColor="#c026d3"
                            />

                            <stop
                                offset="50%"
                                stopColor="#9333ea"
                            />

                            <stop
                                offset="100%"
                                stopColor="#4f46e5"
                            />

                        </linearGradient>

                    </defs>

                </svg>


                {/* =================================================
                    PERCENTAGE
                ================================================= */}

                <div
                    className="
                        relative
                        z-10

                        text-white

                        text-3xl
                        sm:text-4xl

                        font-bold

                        tracking-tight
                    "
                >
                    {skill.percentage}%
                </div>

            </div>


            {/* =================================================
                SKILL NAME
            ================================================= */}

            <h3
                className="
                    mt-7

                    text-lg
                    sm:text-xl

                    font-semibold

                    text-white

                    transition-all
                    duration-300

                    group-hover:text-purple-400
                "
            >
                {skill.name}
            </h3>

        </div>
    );
}