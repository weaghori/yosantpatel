import ConsultationClient from "./consultation-client";

export const metadata = {
  title: "Schedule Free Brand Consultation | Yosant Patel",
  description: "Book a free 30-minute strategic brand audit and growth consultation session with Yosant Patel, leading independent brand consultant in Mumbai.",
  keywords: "Free Brand Consultation, Brand Strategy Call, Business Brand Audit, Yosant Patel Consultation",
  alternates: {
    canonical: "/consultation",
  },
  openGraph: {
    type: "website",
    title: "Schedule Free Brand Consultation | Yosant Patel",
    description: "Book a free 30-minute strategic brand audit and growth consultation session with Yosant Patel, leading independent brand consultant in Mumbai.",
    url: "https://yosantpatel.com/consultation",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Schedule Free Brand Consultation | Yosant Patel",
    description: "Book a free 30-minute strategic brand audit and growth consultation session with Yosant Patel, leading independent brand consultant in Mumbai.",
    images: ["/FAVICON.png"],
  },
};

export default function Consultation() {
  return <ConsultationClient />;
}
