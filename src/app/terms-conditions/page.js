import TermsConditionsClient from "./terms-conditions-client";

export const metadata = {
  title: "Terms and Conditions | Yosant Patel",
  description: "Read the terms of service and conditions for using Yosant Patel's brand consultancy website.",
  keywords: "Terms and Conditions, Brand Consultant Terms, Yosant Patel Terms of Service",
  alternates: {
    canonical: "/terms-conditions",
  },
  openGraph: {
    type: "website",
    title: "Terms and Conditions | Yosant Patel",
    description: "Read the terms of service and conditions for using Yosant Patel's brand consultancy website.",
    url: "https://yosantpatel.com/terms-conditions",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions | Yosant Patel",
    description: "Read the terms of service and conditions for using Yosant Patel's brand consultancy website.",
    images: ["/FAVICON.png"],
  },
};

export default function TermsConditions() {
  return <TermsConditionsClient />;
}
