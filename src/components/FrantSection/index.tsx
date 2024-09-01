import React, {forwardRef, useEffect, useRef, useState} from 'react';
import './frantSection.scss';

const Index = forwardRef<HTMLDivElement>((props, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const spanRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            let road: number = window.innerHeight * 4
            let userPositionFromStart: number  = 0;

            if (sectionRef.current) {
                userPositionFromStart = window.pageYOffset - sectionRef.current.offsetTop;
            }

            let procent: number = (userPositionFromStart / road) * 100;

            if (isVisible) {
                if (procent >= 0 && procent < 67 && spanRef) {
                    if (spanRef.current) {
                        spanRef.current.style.transform = `translateX(${-procent}%)`;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust as needed
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="frant-section" ref={sectionRef}>
            <div ref={ref} className="frant-section-bg">
                <span ref={spanRef}>FRANT</span>
            </div>
        </section>
    );
});

export default Index;