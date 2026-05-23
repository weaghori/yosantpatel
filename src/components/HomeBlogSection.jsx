"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeBlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Hydration-safe screen observer
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Fetch blogs from API client-side
    const getBlogs = async () => {
      try {
        const res = await fetch('https://ams.aghorimediahouse.com/api/blogs?website=yosantpatel');
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.blogs)) {
            const mapped = data.blogs.map(blog => ({
              slug: blog.slug,
              title: blog.title,
              img: blog.mainImage ? (blog.mainImage.startsWith('http') ? blog.mainImage : `https://ams.aghorimediahouse.com${blog.mainImage}`) : "/images/slider/Blog-Learn-teach-Yosant-Patel.jpg",
              category: Array.isArray(blog.tags) && blog.tags.length > 0 ? blog.tags.join(', ') : "",
              date: blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : "18 May 2026",
              excerpt: blog.description || "",
              content: blog.content,
              tags: Array.isArray(blog.tags) ? blog.tags : []
            }));
            // Slice to show only the 3 most recent articles on the homepage
            setBlogs(mapped.slice(0, 3));
          }
        }
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="section-block" style={{
      padding: isMobile ? '60px 0' : '120px 0',
      backgroundColor: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid #f1f5f9'
    }}>
      <div className="row">
        
        {/* Editorial Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: isMobile ? '40px' : '60px',
          flexWrap: 'wrap',
          gap: '20px',
          width: '100%'
        }}>
          <div>
            <span style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#203b72',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px'
            }}>
              Insights & Strategy
            </span>
            <h2 style={{
              fontSize: isMobile ? '30px' : '42px',
              fontWeight: '800',
              color: '#0f172a',
              margin: 0,
              lineHeight: '1.15',
              fontFamily: 'inherit'
            }}>
              Latest Blogs
            </h2>
          </div>
          <div>
            <Link href="/blogs" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: '700',
              color: '#203b72',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              borderBottom: '2px solid transparent',
              paddingBottom: '4px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.borderBottomColor = '#203b72';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#203b72';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
            >
              View All Articles
              <span style={{ display: 'inline-block', fontWeight: 'bold' }}>→</span>
            </Link>
          </div>
        </div>

        {loading ? (
          /* Elegant Loader */
          <div style={{ 
            width: '100%', 
            textAlign: 'center', 
            padding: '80px 0',
            fontSize: '18px',
            fontWeight: '300',
            color: '#475569'
          }}>
            <span style={{ display: 'block', marginBottom: '15px', color: '#203b72', fontWeight: '500' }}>Fetching Insights...</span>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid rgba(32, 59, 114, 0.1)',
              borderTopColor: '#203b72',
              borderRadius: '50%',
              margin: '0 auto',
              animation: 'spin 1s linear infinite'
            }} />
            <style jsx>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : blogs.length === 0 ? (
          /* Empty State */
          <div style={{ 
            width: '100%', 
            textAlign: 'center', 
            padding: '80px 0',
            fontSize: '18px',
            color: '#475569',
            fontWeight: '300' 
          }}>
            No published posts found at the moment. Please check back later!
          </div>
        ) : (
          /* Premium 3-Column Typographic Grid matching the blogs index page exactly */
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
            gap: isMobile ? '40px 20px' : '80px 40px',
            width: '100%'
          }}>
            {blogs.map((post, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'default',
                  position: 'relative',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: isMobile ? '8px' : '12px',
                  padding: isMobile ? '20px 15px' : '30px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.01)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  justifyContent: 'space-between',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(32, 59, 114, 0.06)';
                  e.currentTarget.style.background = '#fafbfe';
                  const img = e.currentTarget.querySelector('.blog-img');
                  if (img) img.style.transform = 'scale(1.03)';
                  const arrow = e.currentTarget.querySelector('.blog-arrow');
                  if (arrow) arrow.style.transform = 'translateX(6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.01)';
                  e.currentTarget.style.background = '#ffffff';
                  const img = e.currentTarget.querySelector('.blog-img');
                  if (img) img.style.transform = 'scale(1)';
                  const arrow = e.currentTarget.querySelector('.blog-arrow');
                  if (arrow) arrow.style.transform = 'translateX(0)';
                }}
              >
                {/* Clean Framed Gallery Image */}
                <div style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  width: '100%',
                  marginBottom: '20px',
                  padding: isMobile ? '8px' : '12px',
                  background: '#f8fafc',
                  border: '1px solid #f1f5f9',
                  transition: 'all 0.4s ease'
                }}>
                  <div style={{ borderRadius: '6px', overflow: 'hidden', aspectRatio: '16/10' }}>
                    <Link href={`/blog-details?slug=${post.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                      <Image 
                        src={post.img} 
                        alt={post.title}
                        width={600}
                        height={400}
                        className="blog-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                        }}
                      />
                    </Link>
                  </div>
                </div>

                {/* Date Metadata */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#64748b',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  <span>{post.date}</span>
                </div>

                {/* Clean, Elegant Heading */}
                <h3 style={{
                  fontSize: isMobile ? '16px' : '20px',
                  fontWeight: '700',
                  lineHeight: '1.35',
                  margin: '0 0 12px',
                  letterSpacing: '-0.5px',
                  fontFamily: 'inherit'
                }}>
                  <Link href={`/blog-details?slug=${post.slug}`} style={{ color: '#203b72', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#203b72'}
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Description Excerpt */}
                <p style={{
                  fontSize: '13px',
                  lineHeight: '1.65',
                  color: '#64748b',
                  fontWeight: '300',
                  margin: '0 0 14px',
                  fontFamily: 'inherit'
                }}>
                  {post.excerpt || (post.content ? post.content.substring(0, 130).replace(/<[^>]*>/g, '') + '...' : '')}
                </p>

                {/* Tags Pill Badges */}
                {post.tags && post.tags.length > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '20px'
                  }}>
                    {post.tags.map((tag, tagIndex) => (
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

                {/* Simple Creative Slide-Arrow CTA */}
                <div>
                  <Link href={`/blog-details?slug=${post.slug}`} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#203b72',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#203b72'}
                  >
                    Read Article 
                    <span className="blog-arrow" style={{ 
                      transition: 'transform 0.3s ease', 
                      display: 'inline-block',
                      fontWeight: 'bold'
                    }}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
