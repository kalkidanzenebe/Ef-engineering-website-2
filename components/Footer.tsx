import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Us */}
          <div>
            <h4 className="text-[18px] font-extrabold uppercase tracking-wide mb-4">Contact Us</h4>
            <div className="w-10 h-[2px] bg-orange-500 mb-6"></div>
            <div className="space-y-4 text-white/80">
              <p>
                Addis Ababa, Ethiopia<br/>
                Bole Sub-City, Commercial District
              </p>
              <p>info@efengineering.com</p>
              <p>+006 1579 000 852</p>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-[18px] font-extrabold uppercase tracking-wide mb-4">Our Services</h4>
            <div className="w-10 h-[2px] bg-orange-500 mb-6"></div>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white">Shield & Shine Roofing</a></li>
              <li><a href="#" className="hover:text-white">Home Guard Roofing</a></li>
              <li><a href="#" className="hover:text-white">Peak Protection</a></li>
              <li><a href="#" className="hover:text-white">Rain Proof Roofers</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-[18px] font-extrabold uppercase tracking-wide mb-4">Useful Links</h4>
            <div className="w-10 h-[2px] bg-orange-500 mb-6"></div>
            <ul className="space-y-3 text-white/80">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Our Service</a></li>
              <li><a href="/" className="hover:text-white">Pages</a></li>
              <li><a href="/news" className="hover:text-white">Latest News</a></li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-[18px] font-extrabold uppercase tracking-wide mb-4">Gallery</h4>
            <div className="w-10 h-[2px] bg-orange-500 mb-6"></div>
            <div className="grid grid-cols-3 gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero/home2.jpg" alt="g1" className="h-16 w-full object-cover" />
              <img src="/images/hero/ksf.jpg" alt="g2" className="h-16 w-full object-cover" />
              <img src="/images/hero/house.jpg" alt="g3" className="h-16 w-full object-cover" />
              <img src="/images/hero/mettu.jpg" alt="g4" className="h-16 w-full object-cover" />
              <img src="/images/hero/industrialpark.jpg" alt="g5" className="h-16 w-full object-cover" />
              <img src="/images/hero/3d4.jpg" alt="g6" className="h-16 w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white/80">
          <div>
            © {new Date().getFullYear()} <span className="text-orange-500 font-semibold">EF Engineering & Architecture</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="/contact" className="hover:text-white">Contact Us</a>
          </div>
          <div className="flex items-center gap-3">
            <a className="w-10 h-10 bg-[#222] hover:bg-[#2a2a2a] flex items-center justify-center" href="#" aria-label="facebook">f</a>
            <a className="w-10 h-10 bg-[#222] hover:bg-[#2a2a2a] flex items-center justify-center" href="#" aria-label="twitter">t</a>
            <a className="w-10 h-10 bg-[#222] hover:bg-[#2a2a2a] flex items-center justify-center" href="#" aria-label="vimeo">v</a>
            <a className="w-10 h-10 bg-[#222] hover:bg-[#2a2a2a] flex items-center justify-center" href="#" aria-label="pinterest">p</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;