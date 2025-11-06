"use client";
import React, { useEffect, useRef, useState } from 'react';

type Client = {
  id: number | string;
  name?: string;
  title?: string;
  logo?: string;
  logo_url?: string;
  category?: string;
};

const formatImageUrl = (imagePath?: string) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  if (imagePath.startsWith('/api/')) return `https://api.efengineering-architect.com${imagePath}`;
  if (imagePath.startsWith('/')) return `https://api.efengineering-architect.com${imagePath}`;
  return `https://api.efengineering-architect.com/api/${imagePath}`;
};

const ClientsSection = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const autoScrollId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.efengineering-architect.com/api/clients', { cache: 'no-store' });
        if (res.ok) {
          const data: Client[] = await res.json();
          // Prefer only category Client if exists; else use all
          const onlyClients = (data || []).filter((c) => (c.category || '').toLowerCase() === 'client');
          setClients(onlyClients.length ? onlyClients : data || []);
        }
      } catch (e) {
        console.error('Failed fetching clients', e);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollId.current = setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const next = el.scrollLeft + 2; // smooth slow scroll
      el.scrollLeft = next >= el.scrollWidth - el.clientWidth ? 0 : next;
    }, 20);
  };

  const stopAutoScroll = () => {
    if (autoScrollId.current) {
      clearInterval(autoScrollId.current);
      autoScrollId.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, [clients.length]);

  const updateActiveOnScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const centerX = el.getBoundingClientRect().left + el.clientWidth / 2;
    const children = Array.from(el.querySelectorAll('[data-client-item="1"]')) as HTMLElement[];
    let minDist = Number.MAX_VALUE;
    let idx = 0;
    children.forEach((child, i) => {
      const rect = child.getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const dist = Math.abs(centerX - childCenter);
      if (dist < minDist) {
        minDist = dist;
        idx = i;
      }
    });
    setActiveIdx(idx);
  };

  const scrollByAmount = (amount: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const items = clients.length ? clients : [];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[12px] tracking-[.2em] text-orange-500 font-semibold uppercase">Our Clients</div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scrollByAmount(-300)} className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100">‹</button>
            <button onClick={() => scrollByAmount(300)} className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100">›</button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onScroll={updateActiveOnScroll}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          className="relative overflow-x-auto scrollbar-hide"
        >
          <div className="flex items-center gap-14 py-4">
            {(loading ? Array.from({ length: 12 }) : items).map((item: any, idx: number) => {
              const src = item ? formatImageUrl(item.logo_url || item.logo) : '';
              const name = item ? (item.name || item.title || 'Client') : 'Client';
              const isActive = idx === activeIdx;
              return (
                <div key={item?.id ?? idx} data-client-item="1" className="flex-none">
                  <div className={`h-[70px] w-[140px] md:w-[180px] flex items-center justify-center transition-all duration-300 ${isActive ? '' : 'opacity-30 grayscale'}`}>
                    {src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={src} alt={name} className="max-h-[60px] w-auto object-contain" onError={(e:any)=>{(e.target as HTMLImageElement).src='/images/logo/newlogo.png'}} />
                    ) : (
                      <div className="text-gray-400">{name}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;