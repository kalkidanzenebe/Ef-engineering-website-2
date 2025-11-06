"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type NewsPhoto = { path: string };
type NewsItem = {
  id: number;
  title: string;
  created_at?: string;
  image?: string;
  photos?: NewsPhoto[];
  category?: string;
  short_description?: string;
  description?: string;
};

const formatDate = (dateString?: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
};

const NewsSection = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.efengineering-architect.com/api/news', {
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
        });
        if (res.ok) {
          const data: NewsItem[] = await res.json();
          setItems(Array.isArray(data) ? data : []);
        }
      } catch (e) {
        console.error('Failed to fetch news', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const three = (items || []).slice(0, 3);

  const stripHtml = (html?: string) => {
    if (!html) return '';
    // Remove Outlook/MSO conditional comments and any comments
    let text = html
      .replace(/<!--\[if [\s\S]*?<!\[endif\]-->/gi, '')
      .replace(/<!--[^>]*-->/g, '');
    // Remove all tags
    text = text.replace(/<[^>]+>/g, ' ');
    // Decode a few common entities
    text = text
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    // Collapse whitespace
    return text.replace(/\s+/g, ' ').trim();
  };

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-[12px] tracking-[.2em] text-orange-500 font-semibold uppercase mb-2">News & Blog</div>
            <h2 className="text-[34px] md:text-[40px] font-extrabold text-[#111] uppercase">Latest News & Articles</h2>
          </div>
          <Link href="/news" className="inline-flex items-center gap-2 bg-[#111] text-white px-5 py-3 font-semibold uppercase tracking-wide hover:bg-black/90">
            View All News
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading && (
            <div className="col-span-3 text-center py-10 text-gray-500">Loading...</div>
          )}

          {!loading && three.map((news) => {
            const imageSrc = news.photos && news.photos.length > 0 ? news.photos[0].path : (news.image || '/images/hero/home.jpg');
            const raw = news.short_description || news.description || '';
            const excerpt = stripHtml(raw);
            return (
              <div key={news.id} className="bg-white shadow-sm">
                <div className="relative h-[220px] md:h-[240px] overflow-hidden">
                  {/* using img for external backend urls to avoid next/image domain config issues */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageSrc} alt={news.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-extrabold text-[#111] leading-snug mb-2">
                    {news.title}
                  </h3>
                  <div className="flex items-center gap-6 text-[13px] text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      {/* calendar icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M7 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 112 0v1zm13 6H4v10h16V8z" />
                      </svg>
                      {formatDate(news.created_at)}
                    </div>
                    <div className="flex items-center gap-2">
                      {/* comment icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M4 4h16a2 2 0 012 2v9a2 2 0 01-2 2H9l-5 3v-3H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                      </svg>
                      19 Comments
                    </div>
                  </div>
                  <p className="text-gray-600 text-[14px] leading-6 mb-5 line-clamp-2">
                    {excerpt}
                  </p>
                  <Link href={`/news/${news.id}`} className="inline-flex items-center gap-2 text-[#111] hover:text-orange-600 font-semibold uppercase text-[13px] group">
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;