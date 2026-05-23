import BlogDetailClient from '@/components/BlogDetailClient';
import { notFound } from 'next/navigation';

async function getBlogs() {
  try {
    const res = await fetch("https://ams.aghorimediahouse.com/api/blogs?website=yosantpatel");
    if (res.ok) {
      const data = await res.json();
      return data.blogs || [];
    }
  } catch (error) {
    console.error("Failed to fetch blogs list", error);
  }
  return [];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const post = blogs.find((item) => item.slug === slug);
  
  if (post) {
    const cleanDesc = post.description || (post.content ? post.content.substring(0, 160).replace(/<[^>]*>/g, '') : '');
    const imgUrl = post.mainImage ? (post.mainImage.startsWith('http') ? post.mainImage : `https://ams.aghorimediahouse.com${post.mainImage}`) : "/images/slider/Blog-Learn-teach-Yosant-Patel.jpg";
    
    return {
      title: `${post.title} | Yosant Patel Blog`,
      description: cleanDesc.substring(0, 160),
      alternates: {
        canonical: `/blogs/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: cleanDesc.substring(0, 160),
        images: [imgUrl],
      }
    };
  }

  return { title: 'Blog Not Found' };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const post = blogs.find((item) => item.slug === slug);
  
  if (post) {
    return <BlogDetailClient post={post} />;
  }

  notFound();
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
