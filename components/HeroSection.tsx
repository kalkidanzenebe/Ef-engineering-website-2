'use client';
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const heroImages = [
    '/images/hero/roofing-banner.jpg',
    '/images/hero/home.jpg',
    '/images/hero/home2.jpg',
    '/images/hero/house.jpg',
    '/images/hero/all.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out ${
            index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 z-20"></div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center items-start pt-[180px]">
        <div className="max-w-5xl text-left text-white -ml-6 md:-ml-12">
          {/* Headings */}
          <h4
            className="uppercase text-[34px] font-bold mb-2 opacity-0 animate-slideInRight"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            High-quality
          </h4>

          <h1
            className="uppercase text-[60px] md:text-[70px] font-extrabold leading-tight opacity-0 animate-slideInRight text-transparent stroke-white stroke-2"
            style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
          >
            Roofing Services
          </h1>

          <h3
            className="uppercase text-[36px] md:text-[42px] font-extrabold mt-[-10px] opacity-0 animate-slideInRight"
            style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
          >
            Trusted by Professionals
          </h3>

          {/* Divider line */}
          <div className="w-full h-px bg-white/20 my-8"></div>

          {/* Hero Item (Worker + Content) */}
          <div
            className="flex flex-col sm:flex-row items-start gap-6 mt-6 opacity-0 animate-slideInRight"
            style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
          >
            {/* Worker Image */}
            <div className="hero-image w-full sm:w-[400px] h-[250px] rounded-md overflow-hidden border border-white/10 shadow-lg bg-white/5 backdrop-blur-sm flex-shrink-0">
              <img
                src="/images/hero/home.jpg"
                alt="Worker"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Text + Buttons */}
            <div className="content flex-1 max-w-[600px]">
              <p className="text-gray-200 text-[17px] leading-relaxed mb-8">
                Conztra combines solid design with advanced features to build
                stunning construction websites. Perfect for contractors,
                architecture studios, and renovation companies.
              </p>

              <div className="flex flex-wrap gap-4 hero-button">
                <a
                  href="#projects"
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase px-8 py-3 rounded-sm flex items-center justify-center gap-2 text-[16px] transition-all duration-300"
                >
                  Our Projects <i className="fa-solid fa-arrow-right text-base"></i>
                </a>

                <a
                  href="#service"
                  className="bg-white text-orange-600 font-bold uppercase px-8 py-3 rounded-sm flex items-center justify-center gap-2 text-[16px] border-2 border-white hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  Our Service <i className="fa-solid fa-arrow-right text-base"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-[72px] z-30 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          ></button>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        .stroke-white {
          -webkit-text-stroke: 2px white;
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
