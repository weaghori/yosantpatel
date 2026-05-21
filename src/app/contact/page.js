import ContactClient from "./contact-client";

export const metadata = {
  title: "Contact Yosant Patel | Hire Independent Brand Consultant in Mumbai",
  description: "Get in touch with Yosant Patel for expert branding consulting, brand strategy, design, and identity services in Mumbai, India. Schedule your consultation.",
  keywords: "Contact Brand Consultant, Hire Branding Strategist, Brand Identity Agency Mumbai, Yosant Patel Contact, Branding Agency Office",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact Yosant Patel | Hire Independent Brand Consultant in Mumbai",
    description: "Get in touch with Yosant Patel for expert branding consulting, brand strategy, design, and identity services in Mumbai, India. Schedule your consultation.",
    url: "https://yosantpatel.com/contact",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Contact Yosant Patel | Hire Independent Brand Consultant in Mumbai",
    description: "Get in touch with Yosant Patel for expert branding consulting, brand strategy, design, and identity services in Mumbai, India. Schedule your consultation.",
    images: ["/FAVICON.png"],
  },
};

export default function Contact() {
  return <ContactClient />;
}
