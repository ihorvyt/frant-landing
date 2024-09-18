import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',        // Забезпечує статичний експорт
    trailingSlash: true,     // Додає слеш в кінці URL для коректної роботи на GitHub Pages
    images: {
        unoptimized: true      // Забороняє оптимізацію зображень
    },
};

export default withNextIntl(nextConfig);
