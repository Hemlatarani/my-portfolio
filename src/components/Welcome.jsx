import Image from "next/image";



export default function Welcome() {
  return (
    <section className="min-h-screen bg-[#0B1220] text-white flex items-center">
      <div className="max-w-[1320px] mx-auto px-5 grid lg:grid-cols-2 items-center gap-10 animate-zoomIn overflow-hidden">

        {/* Left Part */}
        <div className="lg:mr-16">
          <p className="text-cyan-400 text-lg tracking-[8px] uppercase mb-5">
            Welcome To My Portfolio
          </p>

          <h1 className="text-6xl font-bold  leading-tight">
            Hi, I'm  <span className=" inline-block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent animate-slideFromRight">Hemlata</span>

          </h1>
          <h2 className="text-4xl font-bold leading-tight inline-block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent animate-slideFromLeft">
            Full stuck
            <span className="text-cyan-400"> Developer</span>
          </h2>

          <p className="text-gray-400 mt-8 max-w-xl leading-8">
             Building modern and responsive web applications.

          </p>
          

        </div>

        {/* Right Part */}
        <div className="flex justify-center items-center relative">

          {/* Glow Effect */}
          <div className="absolute w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

          {/* Blob Shape */}
          <div className="relative w-[420px] h-[420px] border-2 border-cyan-500 bg-cyan-600 rounded-[55%_55%_60%_40%/40%_35%_65%_60%] overflow-hidden">

            <Image
              src="/images/my.jpg"
              alt="Profile"
              height={650}
              width={650}
              className="object-contain "
            />

          </div>

        </div>

      </div>
    </section>
  );
}