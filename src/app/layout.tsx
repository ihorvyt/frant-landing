import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/global.scss";
import "../styles/default.scss";
import "../styles/values.scss";
import React from "react";
import GoogleTagManager from "@/components/Custom/GoogleTagManager";

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
            <GoogleTagManager/>
            {/*<link rel="canonical" href="https://frant.digital"/>*/}
            {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
            {/*<link rel="preconnect" href="https://fonts.gstatic.com"/>*/}

            {/*<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&display=swap" rel="stylesheet"/>*/}
        </head>
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
