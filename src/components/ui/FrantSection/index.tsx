import React, {forwardRef, useEffect, useRef, useState} from 'react';
import './frantSection.scss';
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";

const Index = forwardRef<HTMLDivElement>((props, ref) => {
    const spanRef = useRef<HTMLDivElement>(null);

    const [refDevelopment, isDevelopmentVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '0px',
        threshold: 0.2 // Елемент повинен бути видимим на 50%
    });

    useEffect(() => {
        const handleScroll = () => {
            let road: number = window.innerHeight * 3
            let userPositionFromStart: number  = 0;
            let maxPhonePercent = (835 / window.innerHeight) * 100;

            if (refDevelopment.current) {
                userPositionFromStart = window.pageYOffset - refDevelopment.current.offsetTop;
            }

            let percent: number = (userPositionFromStart / road) * 100;

            if (isDevelopmentVisible && spanRef.current) {
                if (window.innerWidth > 768) {
                    if (percent >= 0 && percent < 66) {
                        spanRef.current.style.transform = `translateX(${-percent}%)`;
                    }
                } else {
                    if (percent < 70 && userPositionFromStart > 10 && -percent - 16 >= -74) {
                        spanRef.current.style.transform = `rotate(90deg) translateX(${-percent - 16}%) translateY(-33%)`;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDevelopmentVisible]);

    return (
        <section className="frant-section" ref={refDevelopment}>
            <div ref={ref} className="frant-section-bg">
                <span ref={spanRef}>FRANT</span>
            </div>
        </section>
    );
});

export default Index;