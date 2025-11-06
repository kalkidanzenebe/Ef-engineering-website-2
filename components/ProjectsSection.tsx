'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Reveal from './Reveal';

interface Project {
  id: number;
  title: string;
  category?: string;
  year?: string | number;
  description?: string;
  short_description?: string;
  image_url?: string;
  image?: string;
  photos?: Array<string | { path?: string; url?: string; src?: string }>;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const apiCall = axios.create({
    baseURL: 'https://api.efengineering-architect.com/api/',
    headers: { 'Content-Type': 'application/json' },
  });

  const getProjectImageUrl = (project: Project) => {
    if (project.photos && project.photos.length > 0) {
      const first = project.photos[0];
      if (typeof first === 'string') return first;
      return first?.path || first?.url || first?.src || '';
    }
    return project.image_url || project.image || '/placeholder.jpg';
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await apiCall.get<Project[]>('projects');
        if (response.status === 200 && Array.isArray(response.data)) {
          setProjects(response.data);
        } else setError(true);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const scrollContainer = (dir: 'left' | 'right') => {
    const container = document.getElementById('projects-scroll');
    if (container) {
      container.scrollBy({
        left: dir === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-lg text-gray-500">Loading projects...</p>
      </section>
    );
  }

  if (error || projects.length === 0) {
    return (
      <section className="py-20 text-center">
        <p className="text-lg text-gray-500">No projects found.</p>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Header */}
      <Reveal>
      <div className="text-center mb-16">
        <p className="uppercase text-xs text-orange-500 font-semibold tracking-[0.3em] mb-3 border border-orange-500 px-3 py-1 rounded-full inline-block">
          OUR PROJECT
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          BUILDING LANDMARKS THAT INSPIRE
        </h2>
      </div>
      </Reveal>

      {/* Left Controls */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-8 pl-4 z-20">
        <button
          onClick={() => scrollContainer('left')}
          className="p-2 bg-gray-100 rounded shadow hover:bg-gray-200 transition"
        >
          <FaArrowLeft />
        </button>
        <div className="rotate-[-90deg] tracking-widest text-gray-600 text-xs">
          07 / {projects.length.toString().padStart(2, '0')}
        </div>
        <p className="rotate-[-90deg] text-[10px] tracking-[0.2em] uppercase text-gray-400">
          All Projects
        </p>
        <button
          onClick={() => scrollContainer('right')}
          className="p-2 bg-gray-100 rounded shadow hover:bg-gray-200 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Scrollable Project List */}
      <div
        id="projects-scroll"
        className="
          flex gap-6 
          overflow-x-auto 
          scrollbar-hide 
          scroll-smooth 
          pl-8 md:pl-20 lg:pl-32 
          pr-8 md:pr-20
          transition-all
        "
      >
        {projects.slice(0, 7).map((project) => (
          <Reveal key={project.id}>
          <div
            key={project.id}
            onMouseEnter={() => setActive(project.id)}
            onMouseLeave={() => setActive(null)}
            className={`relative flex-shrink-0 cursor-pointer transition-all duration-700 ease-in-out rounded-lg overflow-hidden group ${
              active === project.id
                ? 'w-[600px] md:w-[700px]'
                : 'w-[200px] md:w-[250px]'
            }`}
          >
            {/* Project Image */}
            <img
              src={getProjectImageUrl(project)}
              alt={project.title || 'Project'}
              className={`w-full h-[500px] object-cover transition-transform duration-700 ${
                active === project.id ? 'scale-105' : 'scale-100'
              }`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.jpg';
              }}
            />

            {/* Hover Overlay */}
            {active === project.id && (
              <>
                {/* Top-right icon */}
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition">
                  <FiExternalLink className="w-4 h-4" />
                </div>

                {/* Bottom white info card */}
                <div className="absolute bottom-6 left-6 bg-white p-4 pr-8 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {project.title || 'Untitled Project'}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {project.category || 'development'} – {project.year || '2024'}
                  </p>
                </div>
              </>
            )}
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
