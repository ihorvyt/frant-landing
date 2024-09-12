import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/global.scss";
import "../styles/default.scss";
import "../styles/values.scss";
import React from "react";
import GoogleAnalytic from "@/components/Custom/GoogleAnalytic";
import { GoogleTagManager } from "@next/third-parties/google"

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Website development",
    description: "test",
};

export default async function RootLayout({
                                             children,
                                           }: {
  children: React.ReactNode;
}) {

    return (
        <html lang='en'>
        <head>
            <GoogleTagManager gtmId="GTM-MND73G6L"/>
            <GoogleAnalytic/>
            <link rel="canonical" href="https://frant.digital"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>

            <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&display=swap" rel="stylesheet"/>
        </head>
        <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MND73G6L" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        {children}
        </body>
        </html>
    );
}
