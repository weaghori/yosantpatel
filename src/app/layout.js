import RootLayoutShell from "@/components/RootLayoutShell";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Get Best Branding Advice From The Best Brand Consultancy in Mumbai | Official Site",
  description: "I am one of the leading brand consultant and branding strategist in Mumbai providing expert branding solutions regarding all the branding needs",
  keywords: "BRAND CONSULTATION,BRAND STRATEGY,BRAND COMMUNICATION,BRAND IDENTITY,BRAND DEVELOPMENT,BRAND EXPERIENCE,REBRANDING",
  openGraph: {
    type: "website",
    title: "Get Best Branding Advice From The Best Brand Consultancy in Mumbai | Official Site",
    description: "I am one of the leading brand consultant and branding strategist in Mumbai providing expert branding solutions regarding all the branding needs",
    url: "https://yosantpatel.com",
    siteName: "Yosant Patel",
    images: ["/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Get Best Branding Advice From The Best Brand Consultancy in Mumbai | Official Site",
    description: "I am one of the leading brand consultant and branding strategist in Mumbai providing expert branding solutions regarding all the branding needs",
    images: ["/FAVICON.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700%7CLato:300,400,700' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/core.min.css" />
        <link rel="stylesheet" href="/css/skin-web-application.css" />
        
        {/* Load jQuery and Swiper before Next.js is interactive */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="beforeInteractive" />
      </head>
      <RootLayoutShell>
        {children}
      </RootLayoutShell>
    </html>
  );
}
