'use client'
import React, { useEffect, useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";

const AboutSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Trigger animation when section is 80% visible
        if (sectionTop < windowHeight * 0.8) {
          setAnimate(true);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check on initial load
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f8f8f8] py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT SIDE - Images */}
          <div className="relative flex justify-start items-center">
            <div className="relative h-[560px] flex items-center">
              {/* Large image - animate from left to right */}
              <img
                src="/images/about/3d4.jpg"
                alt="EF Architect and Engineering Consulting Project"
                className={`w-[380px] sm:w-[420px] md:w-[450px] h-[560px] object-cover shadow-md ml-[20px] transition-all duration-1000 ease-out ${
                  animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
              />

              {/* Overlayed smaller image - animate from right to left */}
              <img
                src="/images/about/bonga.jpg"
                alt="EF Architect and Engineering Consulting Team"
                className={`absolute right-[-140px] top-[100px] w-[230px] sm:w-[250px] md:w-[270px] h-[300px] object-cover shadow-lg transition-all duration-1000 ease-out ${
                  animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
              />

              {/* Orange badge - aligned right of image group */}
              <div className="absolute -bottom-4 right-[-100px] bg-[#ff4c00] px-8 py-6 flex items-center gap-4 rounded-sm shadow-lg">
                <h3 className="text-white text-4xl font-extrabold">10</h3>
                <span className="text-white text-base font-medium leading-tight">
                  Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Text + Cards + Video */}
          <div className="flex flex-col justify-center h-full">
            <p className={`text-[#ff4c00] font-semibold uppercase mb-2 transition-all duration-700 delay-300 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              About Us
            </p>
            <h2 className={`text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-500 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Architectural & Engineering Experts
            </h2>
            <p className={`text-gray-600 mb-8 leading-relaxed transition-all duration-700 delay-700 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              EF Architect and Engineering Consulting delivers innovative architectural 
              and engineering solutions. 
            </p>

            {/* Info Cards + Video */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Info Cards */}
              <div className="flex-1 space-y-6">
                <div className={`bg-white p-6 rounded-md shadow-sm transition-all duration-700 delay-900 ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Certified Professionals
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Licensed architects and engineers with recognized certifications.
                  </p>
                </div>

                <div className={`bg-white p-6 rounded-md shadow-sm relative transition-all duration-700 delay-1100 ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Quality Services
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive architectural design and structural engineering.
                  </p>
                </div>
              </div>

              {/* Video Thumbnail - animate from bottom to top */}
              <div className={`w-full sm:w-[200px] transition-all duration-700 delay-1300 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="relative shadow-md">
                  <img
                    src="/images/about/commertial_complex_meto.jpg"
                    alt="EF Architect and Engineering Consulting Projects"
                    className="w-full h-[260px] object-cover"
                  />
                  {/* Gradient overlay from orange to black with play button */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-orange-500/70 flex flex-col items-center justify-center text-white">
                    <div className="bg-[#ff4c00] w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <FaPlay className="text-white text-sm ml-1" />
                    </div>
                    <div className="text-sm font-semibold text-center leading-tight">
                      Watch Our <br /> Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discover Button */}
            <div className={`mt-8 transition-all duration-700 delay-1500 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <button className="bg-black text-white px-6 py-3 rounded-sm font-medium hover:bg-gray-900 transition inline-flex items-center gap-2">
                DISCOVER MORE
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;