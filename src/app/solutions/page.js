import SolutionsClient from "./solutions-client";

export const metadata = {
  title: "Yosant Patel | Brand Development Consultant Mumbai India",
  description: "Strategic branding and creative business solutions by Yosant Patel in Mumbai. Elevate your identity today and turn vision into growth. Call today & Act now!",
  keywords: "Branding Services Mumbai, Brand Strategy Consultant Mumbai, Creative Branding Services Mumbai, Brand Development Services India, Brand Consultation Services Mumbai, Strategic Branding Agency Mumbai, Corporate Branding Services India, Brand Identity Design Services, Rebranding Services Mumbai, Business Branding Solutions India, Brand Research Services Mumbai, Marketing & Branding Consultant, Brand Management Services India, Website Branding Services Mumbai, Integrated Branding Solutions Mumbai",
  openGraph: {
    type: "website",
    title: "Yosant Patel | Brand Development Consultant Mumbai India",
    description: "Strategic branding and creative business solutions by Yosant Patel in Mumbai. Elevate your identity today and turn vision into growth. Call today & Act now!",
    url: "https://yosantpatel.com/solutions",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Yosant Patel | Brand Development Consultant Mumbai India",
    description: "Strategic branding and creative business solutions by Yosant Patel in Mumbai. Elevate your identity today and turn vision into growth. Call today & Act now!",
    images: ["/FAVICON.png"],
  },
};

export default function Solutions() {
  return <SolutionsClient />;
}
