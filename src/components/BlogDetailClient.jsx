'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogDetailClient({ post }) {
  const [isMobile, setIsMobile] = useState(false);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Fetch related/recent blogs client-side
    const fetchRecentBlogs = async () => {
      try {
        const res = await fetch('https://ams.aghorimediahouse.com/api/blogs?website=yosantpatel');
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.blogs)) {
            // Filter out the current article and slice to a beautiful 3-card suggestions limit
            const filtered = data.blogs
              .filter(b => b.slug !== post.slug)
              .slice(0, 3)
              .map(blog => ({
                slug: blog.slug,
                title: blog.title,
                img: blog.mainImage ? (blog.mainImage.startsWith('http') ? blog.mainImage : `https://ams.aghorimediahouse.com${blog.mainImage}`) : "/images/slider/Blog-Learn-teach-Yosant-Patel.jpg",
                category: Array.isArray(blog.tags) && blog.tags.length > 0 ? blog.tags.join(', ') : "",
                date: blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : "18 May 2026",
                tags: Array.isArray(blog.tags) ? blog.tags : []
              }));
            setRecentBlogs(filtered);
          }
        }
      } catch (error) {
        console.error('Failed to fetch recent blogs:', error);
      }
    };
    fetchRecentBlogs();

    return () => window.removeEventListener('resize', handleResize);
  }, [post.slug]);

  return (
    <>
      {/* Majestic Solid Navy Hero Header Banner */}
      <section style={{
        position: 'relative',
        height: isMobile ? '300px' : '450px',
        backgroundColor: '#203b72',
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Abstract creative accent blur */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.08)',
          filter: 'blur(80px)',
          zIndex: 1
        }} />

        <div className="row" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="column width-12" style={{ textAlign: 'left' }}>
            {/* Category Tag */}
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <span style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: '700',
                color: '#38bdf8',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '15px'
              }}>
                {post.tags.join(', ')}
              </span>
            )}

            {/* Premium Editorial Title */}
            <h1 style={{
              fontSize: isMobile ? '24px' : '46px',
              fontWeight: '800',
              color: '#ffffff',
              margin: '0 0 20px',
              letterSpacing: '-1px',
              lineHeight: '1.2',
              fontFamily: 'inherit',
              maxWidth: '900px'
            }}>
              {post.title}
            </h1>

            {/* Metadata Indicators */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: '400'
            }}>
              <span>{post.date || (post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '18 May 2026')}</span>
              <span style={{ width: '1px', height: '10px', background: 'rgba(255, 255, 255, 0.3)' }} />
              <span>By {post.author?.name || "Yosant Patel"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Spacious Premium Content Section */}
      <section className="section-block" style={{
        padding: isMobile ? '40px 0 60px' : '80px 0 100px',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}>
        <div className="row">
          <div className="column width-12">
            <article className="creative-blog-wrapper" style={{
              maxWidth: '100%',
              margin: '0 auto',
              backgroundColor: '#ffffff'
            }}>
              
              {/* Blog Main Image Content Tag */}
              {post.mainImage && (
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  width: '100%',
                  marginBottom: isMobile ? '30px' : '50px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.03)',
                  border: '1px solid #f1f5f9'
                }}>
                  <img 
                    src={post.mainImage.startsWith('http') ? post.mainImage : `https://ams.aghorimediahouse.com${post.mainImage}`} 
                    alt={post.title} 
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '520px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              )}

              {/* Dynamic content prose */}
              <div 
                className="creative-prose" 
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    ? post.content
                        .replace(/src="\/uploads\//g, 'src="https://ams.aghorimediahouse.com/uploads/')
                        .replace(/src='\/uploads\//g, "src='https://ams.aghorimediahouse.com/uploads/")
                        .replace(/<li>\s*[●•·⁃■\-\*]\s*/g, '<li>')
                        .replace(/<li>\s*<span[^>]*>\s*[●•·⁃■\-\*]\s*<\/span>\s*/g, '<li>')
                    : '' 
                }} 
              />

              {/* Elegant Tag Block at Bottom of Content */}
              {Array.isArray(post.tags) && post.tags.length > 0 && (
                <div style={{
                  marginTop: '45px',
                  paddingTop: '25px',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Tags:
                  </span>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {post.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          backgroundColor: '#fafbfe',
                          color: '#203b72',
                          padding: '4px 12px',
                          borderRadius: '6px',
                          textTransform: 'lowercase',
                          letterSpacing: '0.3px',
                          border: '1px solid rgba(32, 59, 114, 0.12)'
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* Premium Suggested Recent Blogs Section */}
      {recentBlogs.length > 0 && (
        <section className="section-block" style={{
          padding: isMobile ? '50px 0' : '80px 0 100px',
          backgroundColor: '#fbfbfb',
          borderTop: '1px solid #e2e8f0',
          position: 'relative'
        }}>
          {/* Spotlight background accent */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'radial-gradient(circle at 50% 100%, rgba(32, 59, 114, 0.02) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div className="row" style={{ position: 'relative', zIndex: 2 }}>
            <div className="column width-12" style={{ textAlign: 'left', marginBottom: isMobile ? '30px' : '45px' }}>
              <span style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: '700',
                color: '#203b72',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>
                Continue Reading
              </span>
              <h2 style={{
                fontSize: isMobile ? '22px' : '36px',
                fontWeight: '800',
                color: '#203b72',
                margin: 0,
                letterSpacing: '-1px'
              }}>
                Recent Blogs
              </h2>
            </div>
          </div>

          <div className="row" style={{ position: 'relative', zIndex: 2 }}>
            <div className="column width-12">
              {/* Flexible Suggested Articles Grid */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '30px',
                width: '100%',
                justifyContent: 'flex-start'
              }}>
                {recentBlogs.map((suggested) => {
                  return (
                    <Link 
                      key={suggested.slug} 
                      href={`/blogs/${suggested.slug}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'block',
                        flex: '1 1 300px',
                        maxWidth: isMobile ? '100%' : '380px'
                      }}
                    >
                      <div 
                        style={{
                          background: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '24px 20px',
                          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                          height: '100%'
                        }}
                        className="suggested-blog-card"
                      >
                        {/* Suspended Gallery Image Frame */}
                        <div style={{
                          background: '#f8fafc',
                          border: '1px solid #f1f5f9',
                          borderRadius: '8px',
                          padding: '8px',
                          marginBottom: '18px',
                          overflow: 'hidden',
                          aspectRatio: '16 / 10'
                        }}>
                          <div style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '6px',
                            overflow: 'hidden'
                          }}>
                            <img 
                              src={suggested.img} 
                              alt={suggested.title}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                              }}
                              className="suggested-blog-img"
                            />
                          </div>
                        </div>

                        {/* Date Metadata */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '11px',
                          fontWeight: '600',
                          color: '#64748b',
                          marginBottom: '10px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          <span>{suggested.date}</span>
                        </div>

                        {/* Small creative title */}
                        <h4 style={{
                          fontSize: '16px',
                          fontWeight: '800',
                          color: '#0f172a',
                          lineHeight: '1.4',
                          margin: '0 0 10px',
                          letterSpacing: '-0.3px',
                          transition: 'color 0.3s'
                        }} className="suggested-blog-title">
                          {suggested.title}
                        </h4>

                        {/* Tags Pill Badges */}
                        {suggested.tags && suggested.tags.length > 0 && (
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px',
                            marginBottom: '15px'
                          }}>
                            {suggested.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex} 
                                style={{
                                  fontSize: '10px',
                                  fontWeight: '600',
                                  backgroundColor: '#fafbfe',
                                  color: '#203b72',
                                  padding: '3px 8px',
                                  borderRadius: '4px',
                                  textTransform: 'lowercase',
                                  letterSpacing: '0.3px',
                                  border: '1px solid rgba(32, 59, 114, 0.12)'
                                }}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Clean micro-arrow Link */}
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          fontWeight: '700',
                          color: '#203b72',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          <span>Read Blog</span>
                          <span style={{
                            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} className="suggested-arrow">→</span>
                        </div>

                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      <style>{`
        /* Make body background white since this is a clean layout */
        body {
          background-color: #ffffff !important;
        }

        .creative-prose {
          font-family: inherit;
          color: #334155;
          font-size: 17px;
          line-height: 1.85;
        }

        .creative-prose p {
          margin-bottom: 24px !important;
          color: #334155 !important;
          line-height: 1.85 !important;
          font-size: 17px !important;
        }

        .creative-prose h2 {
          font-size: 28px !important;
          font-weight: 800 !important;
          color: #203b72 !important;
          margin-top: 50px !important;
          margin-bottom: 20px !important;
          letter-spacing: -0.5px !important;
          line-height: 1.3 !important;
        }

        .creative-prose h3 {
          font-size: 22px !important;
          font-weight: 700 !important;
          color: #203b72 !important;
          margin-top: 40px !important;
          margin-bottom: 16px !important;
          letter-spacing: -0.5px !important;
          line-height: 1.3 !important;
        }

        .creative-prose blockquote {
          border-left: 4px solid #203b72 !important;
          padding: 16px 24px !important;
          margin: 32px 0 !important;
          background: #f8fafc !important;
          border-radius: 0 8px 8px 0 !important;
          font-style: italic !important;
          color: #475569 !important;
        }

        .creative-prose blockquote p {
          margin: 0 !important;
          font-size: 18px !important;
          color: #475569 !important;
        }

        .creative-prose ul {
          list-style-type: disc !important;
          margin: 0 0 24px 24px !important;
        }

        .creative-prose ol {
          list-style-type: decimal !important;
          margin: 0 0 24px 24px !important;
        }

        .creative-prose li {
          margin-bottom: 8px !important;
          line-height: 1.8 !important;
          color: #334155 !important;
        }

        .creative-prose img {
          border-radius: 12px !important;
          margin: 40px auto !important;
          display: block !important;
          max-width: 100% !important;
          height: auto !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03) !important;
        }

        /* Suggested Recent Articles Hover Animations */
        .suggested-blog-card:hover {
          border-color: #203b72 !important;
          background-color: #fafbfe !important;
          box-shadow: 0 15px 35px rgba(32, 59, 114, 0.05) !important;
        }

        .suggested-blog-card:hover .suggested-blog-img {
          transform: scale(1.03) !important;
        }

        .suggested-blog-card:hover .suggested-blog-title {
          color: #203b72 !important;
        }

        .suggested-blog-card:hover .suggested-arrow {
          transform: translateX(4px) !important;
        }
      `}</style>
    </>
  );
}
