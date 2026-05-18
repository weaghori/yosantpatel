import Link from 'next/link';
import MasonryTrigger from '@/components/MasonryTrigger';

export const dynamic = 'force-dynamic';

async function fetchBlogs() {
  try {
    const res = await fetch('https://ams.aghorimediahouse.com/api/blogs?website=yosantpatel', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.blogs)) {
        return data.blogs.map(blog => ({
          slug: blog.slug,
          title: blog.title,
          img: blog.mainImage ? (blog.mainImage.startsWith('http') ? blog.mainImage : `https://ams.aghorimediahouse.com${blog.mainImage}`) : "/images/slider/Blog-Learn-teach-Yosant-Patel.jpg",
          category: "Branding",
          date: blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : "18 May 2026",
          likes: 150,
          excerpt: blog.description || "",
          content: blog.content
        }));
      }
    }
  } catch (error) {
    console.error('Failed to fetch blogs from API:', error);
  }

  return [];
}

export default async function Blogs() {
  const blogs = await fetchBlogs();

  return (
    <>
      <MasonryTrigger />

      {/* Full Width Slider Section */}
      <section className="section-block featured-media page-intro tm-slider-parallax-container">
        <div className="tm-slider-container full-width-slider" data-parallax data-parallax-fade-out
          data-animation="slide" data-scale-under="1140">
          <ul className="tms-slides">
            <li className="tms-slide" data-image data-as-bkg-image data-force-fit style={{ backgroundImage: "url('/images/slider/Blog-Learn-teach-Yosant-Patel.jpg')" }}>
              <div className="tms-content">
                <div className="tms-content-inner left">
                  <div className="row">
                    <div className="column width-12">
                      <h1 className="tms-caption color-white inline"
                        data-animate-in="preset:slideInUpShort;duration:1000ms;delay:100ms;"
                        data-no-scale>
                        Blog
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img src="/images/slider/Blog-Learn-teach-Yosant-Patel.jpg" data-retina alt="" />
            </li>
          </ul>
        </div>
      </section>

      <div className="section-block content-inner">
        <div className="blog-masonry grid-container fade-in-progressively" data-layout-mode="masonry"
          data-grid-ratio="1.5" data-animate-resize data-animate-resize-duration="0">
          <div className="row">
            <div className="column width-12">
              <div className="row grid content-grid-3 clearfix">
                 {blogs.map((post, index) => (
                   <div key={index} className={`grid-item${index === 0 ? ' grid-sizer' : ''}`}>
                     <article className="post">
                       <div className="post-media">
                         <div className="thumbnail img-scale-in" data-hover-easing="easeInOut"
                           data-hover-speed="700" data-hover-bkg-color="#ffffff"
                           data-hover-bkg-opacity="0.9">
                           <Link className="overlay-link" href={`/blogs/${post.slug}`}>
                             <img src={post.img || "/images/slider/Blog-Learn-teach-Yosant-Patel.jpg"} alt={post.category || "Branding"} />
                             <span className="overlay-info">
                               <span>
                                 <span>
                                   {post.category || "Branding"}
                                 </span>
                               </span>
                             </span>
                           </Link>
                         </div>
                       </div>
                       <div className="post-content with-background">
                         <h2 className="post-title">
                           <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                         </h2>
                         <div className="post-info">
                           <span className="post-date">{post.date}</span>/
                           <span className="post-love">
                             <a href="#" className="post-love">
                               <span className="icon-heart"></span>{post.likes || 150}
                             </a>
                           </span>
                         </div>
                         <p>{post.excerpt || (post.content ? post.content.substring(0, 150).replace(/<[^>]*>/g, '') + '...' : '')}</p>
                       </div>
                     </article>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


