'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ArrowRight, Mail, Phone, Linkedin } from 'lucide-react'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {

    setIsMenuOpen(false)

    const element = document.getElementById(id)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      })
    }

  }

  return (

    <div className="min-h-screen bg-white">

      {/* Navigation */}

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">

          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2">

            <Image
              src="/logo.png"
              alt="Hiredin Placements"
              width={120}
              height={40}
              className="h-10 w-auto"
            />

          </button>

          <div className="hidden md:flex gap-8 items-center">

            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 font-medium">
              Home
            </button>

            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 font-medium">
              About Us
            </button>

            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-600 font-medium">
              Our Services
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Contact Us
            </button>

          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>

        </div>

        {isMenuOpen && (

          <div className="md:hidden bg-white border-t border-gray-200">

            <div className="px-4 py-4 space-y-3">

              <button onClick={() => scrollToSection('home')} className="block w-full text-left">
                Home
              </button>

              <button onClick={() => scrollToSection('about')} className="block w-full text-left">
                About Us
              </button>

              <button onClick={() => scrollToSection('services')} className="block w-full text-left">
                Our Services
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Contact Us
              </button>

            </div>

          </div>

        )}

      </nav>

      {/* HERO */}

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">

        {/* Background Animation */}

        <div className="absolute top-20 -left-40 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-20 animate-float will-change-transform"></div>
        <div className="absolute -bottom-8 -right-40 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-20 animate-float will-change-transform" style={{animationDelay:'2s'}}></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="animate-slide-in-left">

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">

              Connecting <span className="text-red-600">Talent</span> with <span className="text-red-600">Opportunity</span>

            </h1>

            <p className="text-xl text-gray-600 mb-8">

              Hiredin Placements connects talented candidates with leading companies across India.

            </p>

            <div className="flex gap-4 flex-wrap">

              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
              >

                Our Services <ArrowRight size={20}/>

              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white"
              >

                Contact Us

              </button>

            </div>

          </div>

          {/* FIXED MOBILE ANIMATION */}

          <div className="flex justify-center animate-pop-in transform-gpu">

            <Image
              src="/logo.png"
              alt="Hiredin Placements"
              width={400}
              height={200}
              className="w-full max-w-md drop-shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <AnimatedCounter target={1000} duration={2500} label="Successful Placements"/>

          <div>
            <h2 className="text-5xl font-bold text-red-600">20+</h2>
            <p>Partner Companies</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-red-600">5+</h2>
            <p>Years Experience</p>
          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="py-20">

        <div className="max-w-xl mx-auto space-y-6">

          <div className="flex gap-4 items-center">

            <Mail className="text-red-600"/>

            <a href="mailto:hr@hiredinplacements.com">
              hr@hiredinplacements.com
            </a>

          </div>

          <div className="flex gap-4 items-center">

            <Phone className="text-red-600"/>

            <a href="tel:+917976717132">
              +91 7976717132
            </a>

          </div>

          <a href="https://www.linkedin.com/company/hiredin-placements/" target="_blank">

            <div className="flex gap-4 items-center">

              <Linkedin className="text-red-600"/>

              Visit our LinkedIn

            </div>

          </a>

        </div>

      </section>

    </div>

  )

}
