import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts'); // Assuming your locale configuration is in i18n.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/frant-landing',
};

export default withNextIntl(nextConfig);
