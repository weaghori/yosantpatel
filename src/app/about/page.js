import AboutClient from "./about-client";

export const metadata = {
  title: "Yosant Patel | Mumbai Brand Consultant and Strategist",
  description: "Meet Yosant Patel, Mumbai brand consultant crafting bold identities, clear strategies, and lasting growth for businesses. Build your brand now! Get ahead!",
  keywords: "Brand Consultant Mumbai, Brand Strategist Mumbai, Creative Branding Consultant Mumbai, Branding Consultant India, Strategic Brand Consultant, Independent Brand Consultant India, Startup Branding Consultant Mumbai, Brand Identity Consultant, Brand Positioning Consultant, Rebranding Consultant India, Corporate Branding Consultant, Brand Management Consultant, Premium Branding Services Mumbai, Business Branding Expert India, Brand Research Consultant Mumbai",
  openGraph: {
    type: "website",
    title: "Yosant Patel | Mumbai Brand Consultant and Strategist",
    description: "Meet Yosant Patel, Mumbai brand consultant crafting bold identities, clear strategies, and lasting growth for businesses. Build your brand now! Get ahead!",
    url: "https://yosantpatel.com/about",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Yosant Patel | Mumbai Brand Consultant and Strategist",
    description: "Meet Yosant Patel, Mumbai brand consultant crafting bold identities, clear strategies, and lasting growth for businesses. Build your brand now! Get ahead!",
    images: ["/FAVICON.png"],
  },
};

export default function About() {
  return <AboutClient />;
}
