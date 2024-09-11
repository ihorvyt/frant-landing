import React, {useEffect, useState} from 'react';

import './timeInfoSection.scss'
import {Link} from "react-scroll";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";


interface NumberAnimationProps {
    targetNumber: number;
    duration: number;
    delay: number; // Delay in milliseconds]
    play: boolean;
}

const NumberAnimation: React.FC<NumberAnimationProps> = ({ targetNumber, duration, delay, play }) => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!play) return;
        let start = 0;
        const increment = targetNumber / (duration / 16.67); // 16.67ms is roughly 60 FPS

        const updateNumber = () => {
            start += increment;
            if (start < targetNumber) {
                setCurrentNumber(Math.round(start));
                requestAnimationFrame(updateNumber);
            } else {
                setCurrentNumber(targetNumber);
            }
        };

        const timer = setTimeout(() => {
            requestAnimationFrame(updateNumber);
        }, delay);

        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, [targetNumber, duration, delay, play]);

    return currentNumber;
};

const Index = () => {
    const [refTime, isDevelopmentVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    const [refMake, isMakeVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    const [refRealization, isRealizationVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });


    return (
        <section id='time-lines' className="time-info-section">
            <div className="info-container">
                <div className="title">
                    <h3>Advice at the start for free!</h3>
                </div>

                <Link to='spacer' className="description">
                    <p>Contact us for a detailed consultation. <br/> Do you have an idea? </p>
                </Link>
            </div>

            <div className="time-info-container">
                <div  ref={refTime} className="respond-within card">
                    <div className="top">
                        <div className="title">
                            <h4>Respond within</h4>
                        </div>

                        <div className="count">
                            <span>1</span>
                        </div>
                    </div>
                    <div className="center">
                        <p><NumberAnimation targetNumber={24} duration={4000} delay={500} play={isDevelopmentVisible}/><span>hours</span></p>
                    </div>
                </div>

                <div ref={refMake} className="make-an-offer card">
                    <div className="top">
                        <div className="title">
                            <h4>Make an offer</h4>
                        </div>

                        <div className="count">
                            <span>2</span>
                        </div>
                    </div>
                    <div className="center">
                        <p><NumberAnimation targetNumber={4} duration={1000} delay={15} play={isMakeVisible}/><span>days</span></p>
                    </div>
                </div>

                <div ref={refRealization} className="project-realization card">
                    <div className="top">
                        <div className="title">
                            <h4>Project realization</h4>
                        </div>

                        <div className="count">
                            <span>3</span>
                        </div>
                    </div>
                    <div className="center">
                        <p><NumberAnimation targetNumber={30} duration={3000} delay={50} play={isRealizationVisible}/><span>days</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;