'use client';
import React, { useState, useEffect } from 'react';

const StatsSection = () => {
  const stats = [
    { value: '10+', label: 'YEARS OF EXPERIENCE' },
    { value: '39+', label: 'EXPERIENCED SPECIALISTS' },
    { value: '27+', label: 'SUCCESSFUL PROJECTS' },
    { value: '210+', label: 'HAPPY CUSTOMERS' },
  ];

  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('stats-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75 && !hasScrolled) {
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  useEffect(() => {
    if (hasScrolled) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 frames per second
      const increment = duration / steps;

      stats.forEach((stat, index) => {
        const target = parseInt(stat.value);
        const step = target / steps;

        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            clearInterval(timer);
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = target;
              return newCounters;
            });
          } else {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }
        }, increment);
      });
    }
  }, [hasScrolled]);

  return (
    <section id="stats-section" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center h-[120px] max-w-[300px]"
            >
              {/* Outlined number with transparent fill and visible edges */}
              <div className="mr-4">
                <span 
                  className="text-transparent font-extrabold text-[60px] leading-none"
                  style={{ WebkitTextStroke: '2px black' }}
                >
                  {hasScrolled ? counters[index] + '+' : '0+'}
                </span>
              </div>

              {/* Label next to the number, in two lines */}
              <div className="text-left font-normal">
                <div className="text-lg text-gray-600 uppercase tracking-wide">
                  {stat.label.split(' ')[0]}
                </div>
                <div className="text-lg text-gray-600 uppercase tracking-wide">
                  {stat.label.split(' ').slice(1).join(' ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;