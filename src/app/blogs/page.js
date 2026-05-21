import BlogsClient from "./blogs-client";

export const metadata = {
  title: "Yosant Patel Blog | Branding Insights & Market Strategy",
  description: "Read the latest articles on brand strategy, corporate identity, graphic design, rebranding, and startup marketing from leading consultant Yosant Patel.",
  keywords: "Branding Blog, Brand Strategy Insights, Corporate Identity Design Blog, Yosant Patel Blog",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    type: "website",
    title: "Yosant Patel Blog | Branding Insights & Market Strategy",
    description: "Read the latest articles on brand strategy, corporate identity, graphic design, rebranding, and startup marketing from leading consultant Yosant Patel.",
    url: "https://yosantpatel.com/blogs",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Yosant Patel Blog | Branding Insights & Market Strategy",
    description: "Read the latest articles on brand strategy, corporate identity, graphic design, rebranding, and startup marketing from leading consultant Yosant Patel.",
    images: ["/FAVICON.png"],
  },
};

export default function Blogs() {
  return <BlogsClient />;
}
