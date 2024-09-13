import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, startDelay }: { text: string; delay: number; startDelay: number }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        // Delay the start of the typewriter animation
        const startTimeout = setTimeout(() => {
            setAnimationStarted(true);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (animationStarted && currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [animationStarted, currentIndex, delay, text]);

    return currentText;
};

export default Typewriter;
