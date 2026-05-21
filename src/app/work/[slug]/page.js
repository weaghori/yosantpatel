import WorkDetailClient from "./work-detail-client";
import { WORK_DATA } from '@/data/work-data';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = WORK_DATA[slug] || { title: slug, description: "Branding and design solutions by Yosant Patel." };
  
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
  return <WorkDetailClient slug={slug} />;
}
