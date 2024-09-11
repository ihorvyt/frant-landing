import React, {useEffect, useState} from 'react';

interface LetterAnimatorProps {
    word: string;
    interval: number; // Optional interval to control animation speed
    delay: number;
    play: boolean;
}

const LetterAnimator: React.FC<LetterAnimatorProps> = ({ word, interval, delay, play }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (word.length === 0) return;
        if (!play) return

        setHasAnimated(true);

        const timeout = setTimeout(() => {
            setIsAnimating(true);
        }, delay);

        const timer = setInterval(() => {
            if (currentIndex < word.length && isAnimating) {
                setDisplayedText((prev) => prev + word[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            } else {
                clearInterval(timer);
            }
        }, interval);

        return () => {
            clearTimeout(timeout);
            clearInterval(timer);
        };
    }, [currentIndex, isAnimating, play]);

    return displayedText;
};

export default LetterAnimator