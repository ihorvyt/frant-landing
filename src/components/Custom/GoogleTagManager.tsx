import React from 'react';
import Script from 'next/script';

const GoogleTagManager = () => {
    return (
        <>
            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-6T5VGF2YFF');
                    `,
                }}
            />
            <Script
                id="google-tag-manager-gtag-js"
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-6T5VGF2YFF"
                async
            />
        </>
    );
};

export default GoogleTagManager;
