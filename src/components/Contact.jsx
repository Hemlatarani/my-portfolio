"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FaPaperPlane,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaCommentDots,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

    const sectionRef = useRef(null);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });


    // =========================================
    // GSAP ANIMATION
    // =========================================

    useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reset",
                },
            });


            tl.from(".contact-box", {
                y: 70,
                opacity: 0,
                scale: 0.97,
                duration: 1,
                ease: "power3.out",
            });


            tl.from(
                ".contact-image",
                {
                    x: -50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.6"
            );


            tl.from(
                ".contact-content",
                {
                    x: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.8"
            );


            tl.from(
                ".contact-input",
                {
                    y: 20,
                    opacity: 0,
                    stagger: 0.08,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "-=0.5"
            );

        }, sectionRef);


        return () => ctx.revert();

    }, []);


    // =========================================
    // INPUT CHANGE
    // =========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    // =========================================
    // FORM SUBMIT
    // =========================================

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Form Data:", formData);

        alert("Thank you! Your message has been submitted.");

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });
    };


    return (

        <section
            ref={sectionRef}
            id="contact"
            className="
                relative
                bg-[#0B1220]

                py-20
                sm:py-24
                lg:py-28

                overflow-hidden
            "
        >

            {/* =====================================
                BACKGROUND GLOW
            ===================================== */}

            <div
                className="
                    absolute

                    left-0
                    top-1/2

                    -translate-y-1/2

                    w-[450px]
                    h-[450px]

                    bg-fuchsia-600/10

                    blur-[130px]

                    rounded-full

                    pointer-events-none
                "
            />

            <div
                className="
                    absolute

                    right-0
                    top-1/3

                    w-[400px]
                    h-[400px]

                    bg-indigo-600/10

                    blur-[130px]

                    rounded-full

                    pointer-events-none
                "
            />


            {/* =====================================
                MAIN CONTAINER
            ===================================== */}

            <div
                className="
                    relative
                    z-10

                    max-w-[1450px]

                    mx-auto

                    px-5
                    sm:px-8
                    lg:px-10
                "
            >

                <div
                    className="
                        contact-box

                        relative

                        overflow-hidden

                        rounded-[35px]

                        px-6
                        py-12

                        sm:px-10
                        sm:py-14

                        lg:px-16
                        lg:py-16

                        bg-gradient-to-r
                        from-[#9c187e]
                        via-[#7224a5]
                        to-[#4521bb]

                        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                    "
                >

                    {/* =================================
                        INNER GLOW
                    ================================= */}

                    <div
                        className="
                            absolute

                            inset-0

                            bg-gradient-to-br
                            from-white/5
                            via-transparent
                            to-black/10

                            pointer-events-none
                        "
                    />


                    {/* =================================
                        CONTENT GRID
                    ================================= */}

                    <div
                        className="
                            relative
                            z-10

                            grid

                            grid-cols-1

                            lg:grid-cols-2

                            gap-12
                            lg:gap-16

                            items-center
                        "
                    >


                        {/* =================================
                            LEFT SIDE
                        ================================= */}

                        <div
                            className="
                                contact-image

                                flex
                                flex-col
                                items-center
                                justify-center

                                text-center

                                lg:text-left
                            "
                        >

                            {/* IMAGE */}

                           


                            {/* OPTIONAL TEXT */}

                          <div className="relative w-full max-w-[560px] flex justify-center">

    {/* Glow */}
    <div className="absolute w-64 h-64 bg-white/10 blur-3xl rounded-full" />

    {/* SVG / Image */}
    <img
        src="/images/2761902.jpg"
        alt="Get In Touch"
        className="
            relative
            z-10
            w-full
            max-w-[520px]
            object-contain
            drop-shadow-[0_20px_30px_rgba(0,0,0,0.20)]
            rounded-2xl
        "
    />

    {/* P TEXT — image ke upar */}
    <p
        className=" absolute z-20 left-1/2  bg-white rounded-2xl bottom-1 -translate-x-1/2 w-full max-w-[500px] px-5
         text-center text-black text-[5px] text-sm sm:text-base leading-5">
        Have a project in mind or want to
        discuss an opportunity? Feel free to
        reach out. I'd love to hear from you.
    </p>

</div>

                        </div>


                        {/* =================================
                            RIGHT SIDE
                        ================================= */}

                        <div
                            className="
                                contact-content

                                w-full

                                max-w-[680px]

                                mx-auto
                            "
                        >

                            {/* HEADING */}

                            <h2
                                className="
                                    text-4xl
                                    sm:text-5xl
                                    lg:text-6xl

                                    font-bold

                                    text-white

                                    text-center
                                    lg:text-left
                                "
                            >
                                Get In Touch
                            </h2>


                            <p
                                className="
                                    mt-4

                                    text-white/70

                                    text-sm
                                    sm:text-base

                                    text-center
                                    lg:text-left
                                "
                            >
                                Let's work together and create something
                                amazing.
                            </p>


                            {/* =================================
                                FORM
                            ================================= */}

                            <form
                                onSubmit={handleSubmit}
                                className="
                                    mt-8

                                    grid
                                    grid-cols-1
                                    sm:grid-cols-2

                                    gap-3
                                    sm:gap-4
                                "
                            >


                                {/* FIRST NAME */}

                                <div className="contact-input relative">

                                    <FaUser
                                        className="
                                            absolute
                                            left-5
                                            top-1/2

                                            -translate-y-1/2

                                            text-white/60

                                            text-sm
                                        "
                                    />

                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        required
                                        className="
                                            w-full

                                            h-16

                                            rounded-2xl

                                            border
                                            border-white/25

                                            bg-white/5

                                            backdrop-blur-sm

                                            pl-12
                                            pr-5

                                            text-white

                                            placeholder:text-white/60

                                            outline-none

                                            transition-all
                                            duration-300

                                            focus:border-white/70

                                            focus:bg-white/10

                                            focus:shadow-[0_0_25px_rgba(255,255,255,0.08)]
                                        "
                                    />

                                </div>


                                {/* LAST NAME */}

                                <div className="contact-input relative">

                                    <FaUser
                                        className="
                                            absolute
                                            left-5
                                            top-1/2

                                            -translate-y-1/2

                                            text-white/60

                                            text-sm
                                        "
                                    />

                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        required
                                        className="
                                            w-full

                                            h-16

                                            rounded-2xl

                                            border
                                            border-white/25

                                            bg-white/5

                                            backdrop-blur-sm

                                            pl-12
                                            pr-5

                                            text-white

                                            placeholder:text-white/60

                                            outline-none

                                            transition-all
                                            duration-300

                                            focus:border-white/70

                                            focus:bg-white/10
                                        "
                                    />

                                </div>


                                {/* EMAIL */}

                                <div className="contact-input relative">

                                    <FaEnvelope
                                        className="
                                            absolute
                                            left-5
                                            top-1/2

                                            -translate-y-1/2

                                            text-white/60

                                            text-sm
                                        "
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        required
                                        className="
                                            w-full

                                            h-16

                                            rounded-2xl

                                            border
                                            border-white/25

                                            bg-white/5

                                            backdrop-blur-sm

                                            pl-12
                                            pr-5

                                            text-white

                                            placeholder:text-white/60

                                            outline-none

                                            transition-all
                                            duration-300

                                            focus:border-white/70

                                            focus:bg-white/10
                                        "
                                    />

                                </div>


                                {/* PHONE */}

                                <div className="contact-input relative">

                                    <FaPhone
                                        className="
                                            absolute
                                            left-5
                                            top-1/2

                                            -translate-y-1/2

                                            text-white/60

                                            text-sm
                                        "
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone No."
                                        className="
                                            w-full

                                            h-16

                                            rounded-2xl

                                            border
                                            border-white/25

                                            bg-white/5

                                            backdrop-blur-sm

                                            pl-12
                                            pr-5

                                            text-white

                                            placeholder:text-white/60

                                            outline-none

                                            transition-all
                                            duration-300

                                            focus:border-white/70

                                            focus:bg-white/10
                                        "
                                    />

                                </div>


                                {/* MESSAGE */}

                                <div
                                    className="
                                        contact-input

                                        relative

                                        sm:col-span-2
                                    "
                                >

                                    <FaCommentDots
                                        className="
                                            absolute

                                            left-5
                                            top-6

                                            text-white/60

                                            text-sm
                                        "
                                    />

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Message"
                                        required
                                        rows="7"
                                        className="
                                            w-full

                                            min-h-[220px]

                                            rounded-2xl

                                            border
                                            border-white/25

                                            bg-white/5

                                            backdrop-blur-sm

                                            pl-12
                                            pr-5
                                            pt-5

                                            text-white

                                            placeholder:text-white/60

                                            outline-none

                                            resize-none

                                            transition-all
                                            duration-300

                                            focus:border-white/70

                                            focus:bg-white/10
                                        "
                                    />

                                </div>


                                {/* =================================
                                    SEND BUTTON
                                ================================= */}

                                <div
                                    className="
                                        sm:col-span-2

                                        flex

                                        justify-center
                                        lg:justify-start

                                        mt-2
                                    "
                                >

                                    <button
                                        type="submit"
                                        className="
                                            group

                                            flex
                                            items-center
                                            justify-center

                                            gap-3

                                            px-10
                                            py-4

                                            rounded-xl

                                            bg-white

                                            text-[#24104f]

                                            font-bold

                                            shadow-[0_10px_30px_rgba(0,0,0,0.18)]

                                            transition-all
                                            duration-300

                                            hover:-translate-y-1

                                            hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
                                        "
                                    >

                                        Send Message

                                        <FaPaperPlane
                                            className="
                                                text-sm

                                                transition-transform
                                                duration-300

                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                            "
                                        />

                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}