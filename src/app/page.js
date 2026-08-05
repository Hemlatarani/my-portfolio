
import About from '@/components/About'
import Certificates from '@/components/Certification'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Welcome from '@/components/Welcome'

import React from 'react'

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <main className="bg-[#0B1220] text-white">
      <div className="max-w-[1320px] mx-auto px-5">
    <Welcome/>
  <About/>
    <Education/>
    <Skills/>
    <Certificates/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    </main>
    </>  
  )
}
