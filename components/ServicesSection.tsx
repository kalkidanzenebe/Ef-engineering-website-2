'use client';
import React, { useState, useEffect, useCallback } from "react";
import { FaUniversity, FaProjectDiagram, FaTools } from "react-icons/fa";
import axios from 'axios';
import Link from 'next/link';
import Reveal from './Reveal';

const ServicesSection = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const apiCall = axios.create({
    baseURL: 'https://api.efengineering-architect.com/api/',
    headers: {
      "Content-Type": "application/json"
    }
  });

  const getServiceImageUrl = useCallback((service: any) => {
    if (service.image_url) return service.image_url;
    if (service.image) return service.image;
    if (service.photo) return service.photo;
    if (service.photos?.length) return service.photos[0];
    if (service.image_urls?.length) return service.image_urls[0];
    return '/images/services/default.jpg';
  }, []);

  const getServiceIcon = useCallback((service: any) => {
    const title = (service.title || "").toLowerCase();
    const iconClass = "text-white text-[28px]";

    if (title.includes("design") && title.includes("interior")) return <FaProjectDiagram className={iconClass} />;
    if (title.includes("design")) return <FaProjectDiagram className={iconClass} />;
    if (title.includes("construction") || title.includes("contracting")) return <FaUniversity className={iconClass} />;
    if (title.includes("renovation")) return <FaTools className={iconClass} />;
    if (title.includes("architecture") || title.includes("building")) return <FaUniversity className={iconClass} />;
    if (title.includes("engineering")) return <FaProjectDiagram className={iconClass} />;
    return <FaUniversity className={iconClass} />;
  }, []);

  const createThreeLineDescription = (description: string) => {
    if (!description) return "Professional service tailored to your specific needs.";
    const stripped = description.replace(/<[^>]*>/g, '');
    return stripped.length <= 100 ? stripped : stripped.substring(0, 100) + '...';
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await apiCall.get("services");
        if (response.status === 200) {
          setServices(response.data as any[]);
        } else {
          setError(true);
        }
      } catch (err: any) {
        console.error("Error fetching services:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#f8f8f8] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#ff4c00] uppercase tracking-wide font-semibold mb-2">Our Services</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Explore Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-md shadow-md overflow-hidden text-center animate-pulse">
                <div className="w-full h-[300px] bg-gray-300"></div>
                <div className="pt-10 pb-8 px-6">
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || services.length === 0) {
    return (
      <section className="bg-[#f8f8f8] py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#ff4c00] uppercase tracking-wide font-semibold mb-2">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">Explore Our Services</h2>
          <p className="text-gray-600 text-lg">No services available at the moment. Please check back later.</p>
        </div>
      </section>
    );
  }

  const displayedServices = services.slice(0, 6);

  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#ff4c00] uppercase tracking-wide font-semibold mb-2">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Explore Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
          {displayedServices.map((service: any, i: number) => (
            <Reveal key={service.id} delay={i * 120}>
            <div className="bg-white rounded-md shadow-md overflow-hidden text-center transition-transform transform hover:-translate-y-2 duration-300 flex flex-col h-full mx-auto max-w-sm">
              <div className="relative w-full h-[300px] overflow-hidden p-4 pb-0">
                <img
                  src={getServiceImageUrl(service)}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="relative z-10 -mt-8 mb-2 flex justify-center">
                  <div className="bg-[#ff4c00] w-16 h-16 flex items-center justify-center shadow-lg">
                    {getServiceIcon(service)}
                  </div>
                </div>
              </div>

              <div className="pt-10 pb-8 px-6 flex flex-col justify-between gap-y-10">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                    {createThreeLineDescription(service.description)}
                  </p>
                </div>
                <Link 
                  href={`/services/${service.id}`}
                  className="text-sm font-semibold uppercase tracking-wide text-white bg-[#111] hover:bg-[#ff4c00] transition-colors px-5 py-3 self-center"
                >
                  READ MORE <span className="ml-1">+</span>
                </Link>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;