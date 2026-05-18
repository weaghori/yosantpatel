"use client";
import { useEffect } from 'react';
import Link from 'next/link';

export default function Work() {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  const projects = [
    {
      title: "Mitraa's",
      description: "Identity",
      href: "/work/mitraas",
      img: "/images/work/Mitraas-Yosant-Patel-main-slider.jpg",
      className: "development large"
    },
    {
      title: "Chandan",
      description: "Re-branding, Identity",
      href: "/work/chandan",
      img: "/images/work/Chandan-jewellry-Yosant-Patel-main-slider.jpg",
      className: "grid-sizer design"
    },
    {
      title: "ELEGANT CLASSES",
      description: "Design, Brand Strategy",
      href: "/work/elegant-classes",
      img: "/images/work/Elegant-Classes-School-Yosant-Patel-main-slider.jpg",
      className: "illutration"
    },
    {
      title: "Kiya",
      description: "Identity",
      href: "/work/kiya",
      img: "/images/work/Kia-Solar-Panel-Yosant-Patel-main-slider.jpg",
      className: "design illustration"
    },
    {
      title: "Mjwel",
      description: "Re-branding",
      href: "/work/mjwel",
      img: "/images/work/Mjwel-Yosant-Patel-Main-Slider.jpg",
      className: "illustration"
    },
    {
      title: "Nirali",
      description: "Branding Solutions",
      href: "/work/nirali",
      img: "/images/work/Nirali-Yosant-Patel-Main-Slider.jpg",
      className: "design"
    },
    {
      title: "Meraki",
      description: "Brand Creative & Design",
      href: "/work/meraki",
      img: "/images/work/Meraki-Saloon-Yosant-Patel-Main-Slider.jpg",
      className: "development"
    },
    {
      title: "The My Mobile",
      description: "Social Media Strategy, Design",
      href: "/work/the-my-mobile",
      img: "/images/work/My-Mobile-Yosant-Patel-Main-Slider.jpg",
      className: "illustration"
    },
    {
      title: "Serengeti",
      description: "Social Media Strategy, Lead Generation",
      href: "/work/serengeti",
      img: "/images/work/Serengeti-Resort-Yosant-Patel-Main-Slider.jpg",
      className: "illustration"
    }
  ];

  return (
    <>
      <div className="section-block intro-title-1 pt-100 work-page">
        <div className="row">
          <div className="column width-12">
            <div className="title-container">
              <div className="title-container-inner left-on-mobile tmh-perspective">
                <h1 className="font-alt-1 color-charcoal horizon mobile-res-work"
                  data-animate-in="preset:slideInRightShort;duration:600ms;"
                  style={{ padding: '0' }}>
                  With <strong>18+ years </strong>of extensive experience in the industry, 
                  I have worked on 207+ projects. I strive to offer best results to 
                  varied brands by bringing creativity aligned with impactful strategy.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block grid-container full-width no-margins no-padding masonry masonry-set-dimensions"
        data-layout-mode="masonry" data-grid-ratio="1" data-animate-filter-duration="700"
        data-set-dimensions="" data-animate-resize="" data-animate-resize-duration="0.8">
        <div className="row">
          <div className="column width-12">
            <div className="row grid content-grid-4">
              {projects.map((project, index) => (
                <div key={index} className={`grid-item ${project.className} animate-in`}>
                  <div className="thumbnail img-scale-in" data-hover-easing="easeInOut"
                    data-hover-speed="500" data-hover-bkg-color="#ffffff"
                    data-hover-bkg-opacity="1">
                    <Link href={project.href} data-group="project-group" data-caption={project.title}>
                      <img src={project.img} alt={project.title} />
                      <span className="overlay-info">
                        <span>
                          <span>
                            <span>
                              <span className="project-title">{project.title}</span>
                              <span className="project-description">{project.description}</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
