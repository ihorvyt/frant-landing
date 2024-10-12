'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './[locale]/page.scss'

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 0)

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <html>
        <body className='not-found'>
        </body>
        </html>
    );
}
