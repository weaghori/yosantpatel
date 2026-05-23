import WorkDetailClient from "./work-detail-client";
import { WORK_DATA } from '@/data/work-data';

async function getWorks() {
  return Object.keys(WORK_DATA).map(slug => ({
    slug,
    ...WORK_DATA[slug]
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const works = await getWorks();
  const project = works.find(item => item.slug === slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }
  
  return {
    title: `${project.title} | Brand Consultation Case Study`,
    description: project.description.substring(0, 160),
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      type: "website",
      title: `${project.title} | Brand Consultation Case Study`,
      description: project.description.substring(0, 160),
      url: `https://yosantpatel.com/work/${slug}`,
      siteName: "Yosant Patel",
      images: ["/FAVICON.png"],
    },
    twitter: {
      card: "summary",
      title: `${project.title} | Brand Consultation Case Study`,
      description: project.description.substring(0, 160),
      images: ["/FAVICON.png"],
    },
  };
}

export default async function WorkDetail({ params }) {
  const { slug } = await params;
  const works = await getWorks();
  const project = works.find(item => item.slug === slug);

  if (project) {
    return <WorkDetailClient slug={slug} />;
  }

  return <div>Project not found</div>;
}

export async function generateStaticParams() {
  const works = await getWorks();
  return works.map((item) => ({
    slug: item.slug,
  }));
}
