import React, {useEffect, useState} from 'react';

import './timeInfoSection.scss'
import {animateScroll, Link} from "react-scroll";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import {useLocale, useTranslations} from "next-intl";


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

const Index = ({setIsLoading}: {setIsLoading: (b: boolean) => void} ) => {
    const t = useTranslations("TimeInfoSection");
    const lang = useLocale();
    const [isMobile, setIsMobile] = React.useState(false);

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

    const options = {
        duration: 1000,
        smooth: true,
    };

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);

    return (
        <section id='time-lines' className="time-info-section">
            <div className="info-container">
                <div className={`title ${lang === 'ua' ? 'ua' : ''}`}>
                    <h3>{t("Advice at the start for free!")}</h3>
                </div>

                <Link
                    smooth={true}
                    to={`${isMobile ? 'footer' : 'spacer'}`}
                    delay={500}
                    duration={0}
                    offset={isMobile ? 0 : 2000}
                    onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {
                            setIsLoading(false)
                        }, 3000)
                    }}
                    className="description"
                >
                    <p>{t("Contact us for a detailed consultation")} <br/> {t("Do you have an idea?")} </p>
                </Link>
            </div>

            <div className="time-info-container">
                <div  ref={refTime} className="respond-within card">
                    <div className="top">
                        <div className="title">
                            <h4>{t("Respond within")}</h4>
                        </div>

                        <div className="count">
                            <span>1</span>
                        </div>
                    </div>
                    <div className="center">
                        <p><NumberAnimation targetNumber={24} duration={4000} delay={500}
                                            play={isDevelopmentVisible}/><span>{t("hours")}</span></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="274" height="13" viewBox="0 0 274 13"
                             fill="none">
                            <path
                                d="M34.1242 4.55878C50.1442 7.76278 66.366 11.6887 82.5 11.001C93.8117 10.5188 106.202 5.32218 117.5 4.55878C127.894 3.8565 96.864 3.53159 86.4468 3.587C62.8047 3.71275 39.1477 3.74924 15.5069 3.43356C11.721 3.383 7.92387 3.46086 4.15244 3.12668C-6.56421 2.1771 25.6677 2.60306 36.4258 2.71751C103.982 3.43619 171.52 5.4484 239.016 8.3436C256.224 9.08172 281.985 11.4285 267.044 9.57111C248.894 7.31473 230.88 4.03792 212.727 1.79688"
                                stroke="#C3B8A3" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>

                <div ref={refMake} className="make-an-offer card">
                    <div className="top">
                        <div className="title">
                            <h4>{t("Make an offer")}</h4>
                        </div>

                        <div className="count">
                            <span>2</span>
                        </div>
                    </div>
                    <div className="center">
                        <p><NumberAnimation targetNumber={4} duration={1000} delay={15}
                                            play={isMakeVisible}/><span>{t("days")}</span></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="188" height="20" viewBox="0 0 188 20"
                             fill="none">
                            <path
                                d="M23.2204 18.0549C39.7864 15.8941 56.3083 13.2765 72.7093 10.0884C73.0746 10.0174 88.261 7.03112 91.0565 5.74302C97.455 2.79466 77.0385 4.04295 69.9935 3.9928C58.4701 3.91079 40.621 3.93245 29.2556 3.93245C20.8867 3.93245 12.2354 5.96812 4.14902 3.81175C-5.32249 1.28601 23.7399 3.03422 33.5406 2.84611C84.4188 1.86956 135.289 2.10473 186.172 1.75977"
                                stroke="#C3B8A3" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>

                <div ref={refRealization} className="project-realization card">
                    <div className="top">
                        <div className="title">
                            <h4>{t("Project realization")}</h4>
                        </div>

                        <div className="count">
                            <span>3</span>
                        </div>
                    </div>
                    <div className="center">
                        <p><NumberAnimation targetNumber={30} duration={3000} delay={50}
                                            play={isRealizationVisible}/><span>{t("days")}</span></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="354" height="350" viewBox="0 0 354 350"
                             fill="none">
                            <path
                                d="M185.124 54.9064C139.832 82.3847 92.3893 113.859 59.6841 156.408C-0.51436 234.726 45.2274 314.424 134.164 338.838C194.122 355.296 284.83 353.61 327.421 299.844C361.809 256.433 365.185 156.359 300.765 136.03C235.12 115.314 147.54 159.472 103.196 205.396C86.5092 222.678 67.7253 252.422 74.5802 279.073C82.0192 307.995 127.702 335.195 155.724 317.479C225.745 273.213 155.629 141.034 123.58 98.2114C92.4095 56.5625 48.8162 22.9494 1.66797 2"
                                stroke="#EEEAE4" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;