import BlogDetailClient from '@/components/BlogDetailClient';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    const res = await fetch(`https://ams.aghorimediahouse.com/api/blogs/${slug}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.blog) {
        const post = data.blog;
        const cleanDesc = post.description || (post.content ? post.content.substring(0, 160).replace(/<[^>]*>/g, '') : '');
        const imgUrl = post.mainImage ? (post.mainImage.startsWith('http') ? post.mainImage : `https://ams.aghorimediahouse.com${post.mainImage}`) : "/images/slider/Blog-Learn-teach-Yosant-Patel.jpg";
        
        return {
          title: `${post.title} | Yosant Patel Blog`,
          description: cleanDesc.substring(0, 160),
          openGraph: {
            title: post.title,
            description: cleanDesc.substring(0, 160),
            images: [imgUrl],
          }
        };
      }
    }
  } catch (error) {
    console.error('Failed to fetch blog metadata from API:', error);
  }

  return { title: 'Blog Not Found' };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  
  try {
    const res = await fetch(`https://ams.aghorimediahouse.com/api/blogs/${slug}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.blog) {
        return <BlogDetailClient post={data.blog} />;
      }
    }
  } catch (error) {
    console.error('Failed to fetch blog details from API:', error);
  }

  notFound();
}

