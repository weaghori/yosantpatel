"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { WORK_DATA } from '@/data/work-data';

export default function WorkDetailClient({ slug }) {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init();
    }
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

      <section className="section-block featured-media page-intro tm-slider-parallax-container">
        <div className="tm-slider-container full-width-slider" data-parallax data-parallax-fade-out
          data-animation="slide" data-scale-under="1140">
          <ul className="tms-slides">
            <li className="tms-slide" data-image data-as-bkg-image data-force-fit>
              <div className={`tms-content work-tms-content work-${slug}`}>
                <div className="tms-content-inner left">
                  <div className="row">
                    <div className="column width-6">
                      <h1 className="tms-caption color-white inline"
                        data-animate-in="preset:slideInUpShort;duration:1000ms;delay:100ms;"
                        data-no-scale>
                        {project.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="section-block pt-70 work-section-block">
        <div className="row">
          <div className="column width-12 ">
            <p className="mb-50">{project.description}</p>
          </div>
        </div>
      </div>

      <div className={`section-block replicable-content bkg-grey-ultralight work-image-section-block-1 work-image-${slug}`}>
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
