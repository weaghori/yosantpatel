export const dynamic = 'force-static';

export default async function sitemap() {
  const baseUrl = 'https://yosantpatel.com';

  // 1. Static Pages
  const staticPaths = [
    '',
    '/about',
    '/approach',
    '/contact',
    '/blogs',
    '/consultation',
    '/privacy-policy',
    '/solutions',
    '/terms-conditions',
    '/work',
  ];

  const staticRoutes = staticPaths.map((path) => ({
    url: `${baseUrl}${path}/`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));

  // 2. Fetch Dynamic Blog Pages
  let blogRoutes = [];
  try {
    const res = await fetch('https://ams.aghorimediahouse.com/api/blogs?website=yosantpatel', {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.blogs)) {
        blogRoutes = data.blogs.map((blog) => ({
          url: `${baseUrl}/blog-details/?slug=${blog.slug}`,
          lastModified: new Date(blog.updatedAt || blog.createdAt || Date.now()),
          changeFrequency: 'weekly',
          priority: 0.6,
        }));
      }
    }
  } catch (error) {
    console.error('Failed to fetch blogs for sitemap generation:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
