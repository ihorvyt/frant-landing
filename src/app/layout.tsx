import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "../styles/global.scss";
import "../styles/default.scss";
import "../styles/values.scss";
import React from "react";
import GoogleAnalytic from "@/components/Custom/GoogleAnalytic";
import {ReactLenis, useLenis} from "lenis/react";

const inter = Inter({subsets: ["latin"]});

const title = "Site development, Web Design, Custom Web Solutions"

export const metadata: Metadata = {
    title: title,
    description: "We offer professional site development, web design, and custom web solutions tailored to your business needs. From corporate websites to e-commerce platforms, our team provides complete development services, including SEO optimization and responsive design. Order your site development today and grow your online presence with a unique and functional website.",
    applicationName: "Frant",
    generator: "Next js",
    keywords: ["site development"],
    creator: "Frant team",
    publisher: "Frant",
    alternates: { canonical: "https://frant.digital" },
    openGraph: {
        type: "website",
        url: "https://frant.digital",
        title: title,
        description: "We offer professional site development, web design, and custom web solutions tailored to your business needs. From corporate websites to e-commerce platforms, our team provides complete development services, including SEO optimization and responsive design. Order your site development today and grow your online presence with a unique and functional website.",
        siteName: "Frant website",
        images: [{     url: "https://frant.digital/og_image.png", secureUrl: "https://frant.digital/og_image.png", alt: "Site development, Web Design, Custom Web Solutions, Order site development", type: "website", width: "1200px", height: "768px"  }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@site",
        creator: "Frant team",
        title: "Site development, Web Design, Custom Web Solutions, Order site development",
        description: "We offer professional site development, web design, and custom web solutions tailored to your business needs. From corporate websites to e-commerce platforms, our team provides complete development services, including SEO optimization and responsive design. Order your site development today and grow your online presence with a unique and functional website.",
        images: "https://frant.digital/og_image.png"}
};


export default async function RootLayout({
                                             children,
                                           }: {
  children: React.ReactNode;
}) {

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    return (
        <ReactLenis root>
            <html lang='en'>
            <head>
                <GoogleAnalytic/>
                <link rel="canonical" href="https://frant.digital"/>


                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/favicons/site.webmanifest"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap"
                      rel="stylesheet"/>


                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&display=swap" rel="stylesheet"/>
            </head>
            <body className={inter.className}>
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MND73G6L" height="0" width="0"
                        style={{display: 'none', visibility: 'hidden'}}></iframe>
            </noscript>
            {children}
            </body>
            </html>
        </ReactLenis>
    );
}
