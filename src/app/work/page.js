import WorkClient from "./work-client";

export const metadata = {
  title: "Yosant Patel Portfolio | Brand Consulting & Rebranding Projects",
  description: "Explore selected brand identity, strategy, package design, and social media campaigns executed by independent brand consultant Yosant Patel in India.",
  keywords: "Branding Portfolio, Brand Identity Design Projects, Rebranding Case Studies, Yosant Patel Work Portfolio",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    type: "website",
    title: "Yosant Patel Portfolio | Brand Consulting & Rebranding Projects",
    description: "Explore selected brand identity, strategy, package design, and social media campaigns executed by independent brand consultant Yosant Patel in India.",
    url: "https://yosantpatel.com/work",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Yosant Patel Portfolio | Brand Consulting & Rebranding Projects",
    description: "Explore selected brand identity, strategy, package design, and social media campaigns executed by independent brand consultant Yosant Patel in India.",
    images: ["/FAVICON.png"],
  },
};

export default function Work() {
  return <WorkClient />;
}
