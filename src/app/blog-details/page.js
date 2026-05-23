'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import BlogDetailClient from '@/components/BlogDetailClient';
import Link from 'next/link';

function BlogDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://ams.aghorimediahouse.com/api/blogs/${slug}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.blog) {
            setPost(data.blog);
          }
        }
      } catch (error) {
        console.error('Failed to fetch blog details from API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '24px', color: '#203b72', fontWeight: '600' }}>Loading blog...</h2>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '36px', color: '#203b72', marginBottom: '20px', fontWeight: '800' }}>Blog Not Found</h1>
        <p style={{ color: '#64748b', marginBottom: '30px', fontSize: '18px' }}>The blog you are looking for does not exist or has been removed.</p>
        <Link href="/blogs" style={{ 
          color: '#ffffff', 
          backgroundColor: '#203b72',
          textDecoration: 'none', 
          fontWeight: 'bold',
          padding: '12px 24px',
          borderRadius: '50px',
          transition: 'all 0.3s'
        }}>
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return <BlogDetailClient post={post} />;
}

export default function BlogDetailsPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '24px', color: '#203b72', fontWeight: '600' }}>Loading...</h2>
      </div>
    }>
      <BlogDetailContent />
    </Suspense>
  );
}
