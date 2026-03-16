'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Hiredin Placements Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-medium py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-medium py-2"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden"
      >
        {/* Animated background circles */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-8 -right-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-slide-in-left">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              Connecting <span className="text-red-600 animate-pulse-subtle">Talent</span> with <span className="text-red-600">Opportunity</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hiredin Placements is a recruitment consultancy focused on connecting talented candidates with leading companies across India. We specialize in hiring for the BPO, customer support, sales, and technical support sectors.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/50 transition-all hover:scale-110 font-semibold flex items-center gap-2 group"
              >
                Our Services <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white hover:shadow-lg transition-all font-semibold hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center animate-pop-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <Image
                src="/logo.png"
                alt="Hiredin Placements Logo Large"
                width={400}
                height={200}
                className="w-full max-w-md h-auto drop-shadow-2xl relative transition-transform group-hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-red-50 hover:to-white animate-pop-in">
              <AnimatedCounter target={1000} duration={2500} label="Successful Placements" />
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-red-50 hover:to-white animate-pop-in" style={{ animationDelay: '0.15s' }}>
              <div className="text-5xl sm:text-6xl font-bold text-red-600 mb-2">20+</div>
              <p className="text-lg sm:text-xl text-gray-700 font-semibold">Partner Companies</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-red-50 hover:to-white animate-pop-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl sm:text-6xl font-bold text-red-600 mb-2">5+</div>
              <p className="text-lg sm:text-xl text-gray-700 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Hiredin Placements</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hiredin Placements is a recruitment consultancy focused on connecting talented candidates with leading companies across India. We specialize in hiring for the BPO, customer support, sales, and technical support sectors.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our goal is to help organizations find the right talent quickly while helping job seekers build successful careers. With a strong understanding of the hiring market and client requirements, we ensure quality candidates and smooth recruitment processes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Hiredin Placements, we believe in building long-term relationships with both clients and candidates by providing reliable, efficient, and result-driven recruitment solutions.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                {[
                  { title: 'Quality Candidates', desc: 'We ensure rigorous screening and evaluation' },
                  { title: 'Fast Hiring', desc: 'Quick turnaround without compromising quality' },
                  { title: 'Long-term Support', desc: 'We support you beyond the placement' },
                  { title: 'Industry Expertise', desc: 'Deep understanding of BPO and customer support sectors' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-pop-in"
                    style={{ animationDelay: `${idx * 0.12}s` }}
                  >
                    <h3 className="font-bold text-lg text-red-600 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Permanent Recruitment',
                desc: 'We help companies hire skilled candidates for full-time positions.',
                icon: '👔',
              },
              {
                title: 'Bulk Hiring',
                desc: 'Specialized support for large-scale hiring requirements, especially for BPO and customer service roles.',
                icon: '📋',
              },
              {
                title: 'Screening & Shortlisting',
                desc: 'We carefully evaluate candidates before presenting them to clients.',
                icon: '✅',
              },
              {
                title: 'End-to-End Support',
                desc: 'From sourcing candidates to final joining, we assist throughout the hiring process.',
                icon: '🤝',
              },
              {
                title: 'Candidate Placement',
                desc: 'Helping job seekers find suitable opportunities based on their skills and experience.',
                icon: '🎯',
              },
              {
                title: 'Recruitment Consulting',
                desc: 'Strategic guidance on talent acquisition and workforce planning.',
                icon: '💡',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white border-2 border-gray-100 rounded-xl hover:border-red-600 hover:bg-gradient-to-br hover:from-red-50 hover:to-white hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-pop-in"
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{service.desc}</p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Roles We Hire For</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Customer Support Executive (Voice Process)',
              'Chat & Email Support Executive',
              'Sales & Tele-Sales Executive',
              'Technical Support Executive',
              'Back Office Executive',
              'International & Domestic Process Associates',
            ].map((role, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white border-2 border-gray-200 rounded-lg hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:border-red-700 hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-pop-in cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">🎪</div>
                <p className="font-semibold text-gray-900 group-hover:text-white transition-colors">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Clients</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Tech Mahindra',
              'Teleperformance',
              'Globiva',
              'IGT Solutions',
              'Concentrix',
              'Woodrock',
              'Wishup',
              'Transcom',
              'Frankfinn',
            ].map((company, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600/30 rounded-lg hover:border-red-600 hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300 transform hover:scale-110 flex items-center justify-center min-h-32 group animate-pop-in"
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                <p className="font-bold text-2xl text-center group-hover:text-red-400 transition-colors">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md animate-slide-up">
              <div className="space-y-8">
                <div className="flex gap-4 items-start group cursor-pointer p-6 bg-white rounded-lg border-2 border-gray-100 hover:border-red-600 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-red-600/50">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                    <a
                      href="mailto:hr@hiredinplacements.com"
                      className="text-red-600 hover:text-red-700 font-medium text-base"
                    >
                      hr@hiredinplacements.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start group cursor-pointer p-6 bg-white rounded-lg border-2 border-gray-100 hover:border-red-600 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-red-600/50">
                    <Phone className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                    <a
                      href="tel:+917976717132"
                      className="text-red-600 hover:text-red-700 font-medium text-base"
                    >
                      +91 7976717132
                    </a>
                  </div>
                </div>

                <a href="https://www.linkedin.com/company/hiredin-placements/" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start group cursor-pointer p-6 bg-white rounded-lg border-2 border-gray-100 hover:border-red-600 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-red-600/50">
                    <Linkedin className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">LinkedIn</h3>
                    <span className="text-red-600 group-hover:text-red-700 font-medium text-base block">Visit our page</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
            <div className="animate-fade-in-up">
              <h3 className="font-bold text-lg mb-4 text-red-400">Hiredin Placements</h3>
              <p className="text-gray-400">Connecting talented candidates with leading companies.</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-bold text-lg mb-4 text-red-400">Contact</h3>
              <p className="text-gray-400 mb-2">Email: hr@hiredinplacements.com</p>
              <p className="text-gray-400">Phone: +91 7976717132</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-bold text-lg mb-4 text-red-400">Quick Links</h3>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-red-600 hover:translate-x-1 transition-all block mb-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-400 hover:text-red-600 hover:translate-x-1 transition-all block"
              >
                Services
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4 justify-center animate-pop-in">
              <a
                href="https://www.linkedin.com/company/hiredin-placements/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50 transition-all transform hover:scale-125 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-white group-hover:animate-float" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2026 Hiredin Placements. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
