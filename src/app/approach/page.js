import ApproachClient from "./approach-client";

export const metadata = {
  title: "Yosant Patel | Strategic Brand Approach & Process",
  description: "Explore the brand consulting process of Yosant Patel. From brand research and strategy to corporate identity execution and brand management in Mumbai, India.",
  keywords: "Brand Research, Brand Strategy, Branding Solutions, Brand Management, Brand Envision, Brand Identity, Branding Consultant Mumbai",
  alternates: {
    canonical: "/approach",
  },
  openGraph: {
    type: "website",
    title: "Yosant Patel | Strategic Brand Approach & Process",
    description: "Explore the brand consulting process of Yosant Patel. From brand research and strategy to corporate identity execution and brand management in Mumbai, India.",
    url: "https://yosantpatel.com/approach",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Yosant Patel | Strategic Brand Approach & Process",
    description: "Explore the brand consulting process of Yosant Patel. From brand research and strategy to corporate identity execution and brand management in Mumbai, India.",
    images: ["/FAVICON.png"],
  },
};

export default function Approach() {
  return <ApproachClient />;
}
