import React from 'react';
import Reveal from './Reveal';

const ContactSection = () => {
  return (
    <section id="contact" className="py-0 relative">
      {/* half background behind the section */}
      <div className="absolute inset-x-0 top-0" style={{height: '50%', background: '#f5f5f5', zIndex: 0}}></div>
      <div className="relative container mx-auto px-0 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left - Orange CTA panel */}
          <div className="bg-orange-500 px-6 md:px-12 py-12 md:py-16 text-white">
            <Reveal delay={0} variant="up">
              <div className="text-[12px] tracking-[.2em] font-semibold uppercase mb-4">Start Today!</div>
            </Reveal>
            <Reveal delay={120} variant="up">
              <h2 className="text-[34px] md:text-[42px] font-extrabold leading-tight mb-5">Join Us Today</h2>
            </Reveal>
            <Reveal delay={240} variant="up">
              <p className="max-w-md text-white/90 mb-8">
                After more than twenty success in the wood products industry, the Bilder family founded.
              </p>
            </Reveal>
            <Reveal delay={360} variant="up">
              <a href="/contact" className="inline-flex items-center gap-3 bg-black/90 hover:bg-black text-white px-6 py-4 uppercase font-semibold tracking-wide transition-colors">
                Free Quote
                <span>→</span>
              </a>
            </Reveal>
          </div>

          {/* Right - Image side */}
          <div className="relative min-h-[340px] md:min-h-[460px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero/house.jpg" alt="contact visual" className="absolute inset-0 w-full h-full object-cover z-[1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;