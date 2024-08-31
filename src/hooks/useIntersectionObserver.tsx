import {useEffect, useRef, useState} from "react";

export const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef, options]);

    return [elementRef, isIntersecting];
};