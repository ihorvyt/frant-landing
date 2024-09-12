'use client'

// src/app/not-found.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the homepage after 3 seconds
        const timer = setTimeout(() => {
            router.push('/');
        }, 3000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Redirecting to the homepage...</p>
        </div>
    );
};

export default NotFoundPage;
