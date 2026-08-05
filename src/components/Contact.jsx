"use client"

 import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B1220] py-24"
    >
      <div className="max-w-[1320px] mx-auto px-5 overflow-hidden">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mt-4">
            Contact Me
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Let's Work Together
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              I'm available for freelance projects, internships,
              collaborations and full-time opportunities.
              Feel free to contact me anytime.
            </p>

            {/* Email */}

            <div className="flex items-center gap-5 mt-10">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex justify-center items-center text-white text-2xl">

                <FaEnvelope />

              </div>

              <div>

                <h4 className="text-white font-semibold">
                  Email
                </h4>

                <p className="text-gray-400">
                  hemlata@example.com
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-5 mt-8">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex justify-center items-center text-white text-2xl">

                <FaPhone />

              </div>

              <div>

                <h4 className="text-white font-semibold">
                  Phone
                </h4>

                <p className="text-gray-400">
                  +91 XXXXX XXXXX
                </p>

              </div>

            </div>

            {/* Location */}

            <div className="flex items-center gap-5 mt-8">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex justify-center items-center text-white text-2xl">

                <FaLocationDot />

              </div>

              <div>

                <h4 className="text-white font-semibold">
                  Location
                </h4>

                <p className="text-gray-400">
                  Haryana, India
                </p>

              </div>

            </div>

            {/* Social */}

            <div className="flex gap-5 mt-12">

              <div className="w-14 h-14 rounded-full border border-cyan-500 flex justify-center items-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-pointer">
                <FaGithub />
              </div>

              <div className="w-14 h-14 rounded-full border border-cyan-500 flex justify-center items-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-pointer">
                <FaLinkedin />
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-[#131D2D] rounded-3xl p-10 border border-cyan-500/20">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0B1220] border border-cyan-500/20 rounded-xl p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#0B1220] border border-cyan-500/20 rounded-xl p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#0B1220] border border-cyan-500/20 rounded-xl p-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-[#0B1220] border border-cyan-500/20 rounded-xl p-4 outline-none resize-none focus:border-cyan-400"
              ></textarea>

              <button
                className="bg-cyan-500 px-8 py-4 rounded-full text-white font-semibold hover:bg-cyan-600 transition-all duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}