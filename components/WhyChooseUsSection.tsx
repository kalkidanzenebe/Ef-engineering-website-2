'use client';
import Image from 'next/image';
import React from 'react';

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-4 py-5 border-t border-white/10 first:border-t-0">
      <div className="w-[58px] h-[58px] flex items-center justify-center bg-white text-black">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-white text-xl font-extrabold tracking-wide">{title}</h4>
        <p className="text-white/70 text-[15px] leading-6">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-0 lg:px-4 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
        {/* Left image */}
        <div className="relative min-h-[520px] h-full">
          <Image
            src="/images/hero/industrialpark.jpg"
            alt="Construction site with engineers"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right content */}
        <div className="bg-[#141414] px-6 md:px-10 py-10 flex flex-col justify-center">
          <div className="uppercase tracking-[.2em] text-xs text-white/60 mb-1">WHATS REASONS</div>
          <h2 className="text-white text-[40px] md:text-[52px] leading-tight font-extrabold mb-6 uppercase">Why Choose Us</h2>
          <p className="text-white/80 mb-8 max-w-2xl text-[15px] leading-7">
            At EF Engineering, we believe construction is more than just building — it’s about
            creating spaces that inspire and endure. With years of expertise, a skilled team,
            and a passion for precision.
          </p>

          <div className="space-y-4">
            <FeatureItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 1.5l8.485 4.9v10.2L12 21.5l-8.485-4.9V6.4L12 1.5zm0 2.309L5.015 7.2v8.6L12 20.191 18.985 15.8V7.2L12 3.809z" />
                  <path d="M11 7h2v6h-2V7zm0 7h2v2h-2v-2z" />
                </svg>
              }
              title="Expert & Professional"
              description="Lorem is Ipsum is simply is design iomyj is text Lorem."
            />

            <FeatureItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M5 3h14a2 2 0 012 2v6.5a6.5 6.5 0 11-11.2 4.6H5a2 2 0 01-2-2V5a2 2 0 012-2zm9.5 17a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
                </svg>
              }
              title="High Quality Work"
              description="Lorem is Ipsum is simply is design iomyj is text Lorem."
            />

            <FeatureItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-9 9a9 9 0 1118 0H3z" />
                </svg>
              }
              title="Professional Approach"
              description="Lorem is Ipsum is simply is design iomyj is text Lorem."
            />
          </div>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold uppercase tracking-wide"
            >
              Lrar More
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;


