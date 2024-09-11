import {getRequestConfig} from 'next-intl/server';
import {notFound} from "next/navigation";

const locales = ['en', 'ua'];

export default getRequestConfig(async ({locale}) => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.

    if(!locales.includes(locale as any)) notFound();

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});