import PrivacyPolicyClient from "./privacy-policy-client";

export const metadata = {
  title: "Privacy Policy | Yosant Patel",
  description: "Read the privacy policy of Yosant Patel's independent brand consultancy website.",
  keywords: "Privacy Policy, Brand Consultant Privacy, Yosant Patel Privacy Policy",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    type: "website",
    title: "Privacy Policy | Yosant Patel",
    description: "Read the privacy policy of Yosant Patel's independent brand consultancy website.",
    url: "https://yosantpatel.com/privacy-policy",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Yosant Patel",
    description: "Read the privacy policy of Yosant Patel's independent brand consultancy website.",
    images: ["/FAVICON.png"],
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />;
}
