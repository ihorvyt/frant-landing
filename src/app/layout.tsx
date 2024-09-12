import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/global.scss";
import "../styles/default.scss";
import "../styles/values.scss";
import React from "react";
import GoogleAnalytic from "@/components/Custom/GoogleAnalytic";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Site development, Web Design, Custom Web Solutions, Order site development",
    description: "We offer professional site development, web design, and custom web solutions tailored to your business needs. From corporate websites to e-commerce platforms, our team provides complete development services, including SEO optimization and responsive design. Order your site development today and grow your online presence with a unique and functional website."
};

export default async function RootLayout({
                                             children,
                                           }: {
  children: React.ReactNode;
}) {

    return (
        <html lang='en'>
        <head>
            <GoogleAnalytic/>
            <link rel="canonical" href="https://frant.digital"/>

            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
            <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
            <link rel="manifest" type="image/png" sizes="180x180" href="/favicons/site.webmanifest"/>
            <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>

            <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&display=swap" rel="stylesheet"/>

            <meta name="theme-color" content="#0A0A0A"/>
            <meta name="author" content="Frant Digital"/>
        </head>
        <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MND73G6L" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        {children}
        </body>
        </html>
    );
}
