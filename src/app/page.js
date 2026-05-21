import HomeClient from "./page-client";

export const metadata = {
  title: "Yosant Patel | Independent Brand Consultant in Mumbai",
  description: "Yosant Patel delivers strategic branding and identity consulting in India for businesses ready to grow. Build your brand with confidence for tomorrow too!",
  keywords: "brand consultant in mumbai, branding consultant india, brand strategist, independent brand consultant india, startup branding consultant mumbai, strategic branding consultant, founder branding consultant, branding agency, brand positioning consultant, premium branding services, business branding expert, creative branding consultant india, rebranding consultant india, brand identity consultant",
  alternates: {
    canonical: "https://yosantpatel.com/",
  },
  openGraph: {
    type: "website",
    title: "Yosant Patel | Independent Brand Consultant in Mumbai",
    description: "Yosant Patel delivers strategic branding and identity consulting in India for businesses ready to grow. Build your brand with confidence for tomorrow too!",
    url: "https://yosantpatel.com",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Yosant Patel | Independent Brand Consultant in Mumbai",
    description: "Yosant Patel delivers strategic branding and identity consulting in India for businesses ready to grow. Build your brand with confidence for tomorrow too!",
    images: ["/FAVICON.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
