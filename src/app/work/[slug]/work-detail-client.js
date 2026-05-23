"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { WORK_DATA } from '@/data/work-data';

export default function WorkDetailClient({ slug }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener('resize', handleResize);

    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init();
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [slug]);

  const project = WORK_DATA[slug] || {
    title: slug,
    description: "Project details coming soon...",
    images: [],
    prev: "/work",
    next: "/work"
  };

  return (
    <>
      <Script 
        src="https://unpkg.com/aos@2.3.1/dist/aos.js" 
        onLoad={() => {
          if (window.AOS) window.AOS.init();
        }}
      />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

      <section style={{ 
        backgroundColor: '#1f3d73', 
        minHeight: isMobile ? 'auto' : '550px',
        paddingTop: isMobile ? '140px' : '220px',
        paddingBottom: isMobile ? '60px' : '100px',
        display: 'flex',
        alignItems: 'flex-start',
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden',
        width: '100%'
      }}>
        {/* Subtle background glow matching the brand theme */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '0',
          transform: 'translateX(-30%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(32, 59, 114, 0.4) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        
        <div className="row" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="column width-12">
            <h1 style={{
              fontSize: isMobile ? '36px' : '72px',
              fontWeight: '800',
              color: '#ffffff',
              margin: '0 0 30px 0',
              lineHeight: '1.1',
              letterSpacing: '-2px',
              textShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              {project.title}
            </h1>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#3b82f6', margin: '0 0 30px 0', borderRadius: '2px' }} />
            <p style={{
              fontSize: isMobile ? '16px' : '18px',
              color: '#94a3b8',
              fontWeight: '300',
              maxWidth: '750px',
              margin: '0',
              lineHeight: '1.7'
            }}>
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <div 
        className={`section-block replicable-content work-image-section-block-1 work-image-${slug}`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container ">
          {project.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${project.title} Artboard ${idx + 1}`} data-aos="fade-up"
              data-aos-duration="1000" data-aos-easing="ease-in-sine" />
          ))}
        </div>
      </div>

      <div className={`section-block pagination-3 portfolio no-padding-top work-pagination-3 work-pagination-${slug}`}>
        <div className="row">
          <div className="column width-12">
            <ul>
              <li><Link className="pagination-previous" href={project.prev}><span className="icon-left-open-mini"></span> Prev</Link></li>
              <li><Link className="back-to-grid fade-location" href="/work">Work</Link></li>
              <li><Link className="pagination-next" href={project.next}> Next <span className="icon-right-open-mini"></span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
