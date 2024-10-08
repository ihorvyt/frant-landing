import type { Metadata } from 'next';
import GoogleAnalytic from "@/components/Custom/GoogleAnalytic";
import {NextIntlClientProvider, useTranslations} from "next-intl";
import {getMessages, getTranslations} from "next-intl/server";




export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('metadata')

    return {
        title: t('main_title'),
        description: t('description'),
        applicationName: "Frant",
        generator: "Next js",
        keywords: [t('keywords')],
        creator: "Frant team",
        publisher: "Frant",
        alternates: { canonical: "https://frant.digital" },
        openGraph: {
            type: "website",
            url: "https://frant.digital",
            title: t("main_title"),
            description: t('openGraph.description'),
            siteName: "Frant website",
            images: [
                {
                    url: "https://frant.digital/og_image.png",
                    secureUrl: "https://frant.digital/og_image.png",
                    alt: "Site development, Web Design, Custom Web Solutions, Order site development",
                    type: "website",
                    width: "1200px",
                    height: "768px"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            site: "@site",
            creator: "Frant team",
            title: t('main_title'),
            description: t('twitter.description'),
            images: "https://frant.digital/og_image.png"
        }
    }
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
                                     children,
                                     params: { locale },
                                   }: Readonly<RootLayoutProps>) {
    const messages = await getMessages();

  return (
      <html lang={locale}>
      <head>
          <GoogleAnalytic/>
          <link rel="canonical" href="https://frant.digital"/>


          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="/favicons/site.webmanifest"/>
          <link rel="canonical" href="https://frant.digial/en"/>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&display=swap" rel="stylesheet"/>
          <meta name='freelancehunt' content='667f8b68ad9a7f7'/>
      </head>
      <body>
      <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MND73G6L" height="0" width="0"
                      style={{display: 'none', visibility: 'hidden'}}></iframe>
          </noscript>
          <NextIntlClientProvider locale={locale} messages={messages}>
               {children}
          </NextIntlClientProvider>
      </body>
      </html>
  );
}