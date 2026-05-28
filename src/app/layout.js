import RootLayoutShell from "@/components/RootLayoutShell";
import "./globals.css";
import Script from "next/script";
import { Open_Sans, Lato } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-open-sans',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata = {
  metadataBase: new URL("https://yosantpatel.com"),
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
  icons: {
    icon: "/images/YOSANT LOGO-02.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${lato.variable}`} suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/core.min.css" />
        <link rel="stylesheet" href="/css/skin-web-application.css" />
        
        <style dangerouslySetInnerHTML={{__html: `
          body { font-family: var(--font-open-sans), sans-serif !important; }
          h1, h2, h3, h4, h5, h6, .font-alt { font-family: var(--font-lato), sans-serif !important; }
        `}} />

        {/* Load jQuery without blocking initial hydration */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" strategy="afterInteractive" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K2SNGWC9');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <RootLayoutShell>
        {children}
      </RootLayoutShell>
    </html>
  );
}
