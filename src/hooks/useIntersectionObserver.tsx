import { RefObject, useEffect, useRef, useState } from "react";

interface IntersectionObserverHookOptions extends IntersectionObserverInit {
    once?: boolean; // опція для контролю одноразової фіксації
}

export const useIntersectionObserver = (
    options: IntersectionObserverHookOptions
): [RefObject<HTMLDivElement>, boolean] => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Якщо встановлено `once`, то isIntersecting більше не змінюється на false
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                if (options.once) {
                    observer.disconnect(); // зупиняємо спостереження після першого входу
                }
            } else if (!options.once) {
                setIsIntersecting(false); // якщо once не встановлено, то можна змінювати назад на false
            }
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
