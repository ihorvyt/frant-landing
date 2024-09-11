import React, {useEffect, useState} from 'react';
import './glob.scss'
import Glob3D from "@/components/Glob/Glob3D";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import LetterAnimator from "@/components/LetterAnimator";

const DateTime: React.FC = () => {
    const [dateTime, setDateTime] = useState<{ date: string, time: string }>({
        date: '',
        time: '',
    });

    useEffect(() => {
        const updateDateTime = () => {
            const currentTime = new Date();
            const formattedDate = currentTime.toLocaleDateString();
            const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
            setDateTime({ date: formattedDate, time: formattedTime });
        };

        updateDateTime(); // Зразу відображаємо дату та час при завантаженні
        const intervalId = setInterval(updateDateTime, 1000); // Оновлюємо кожну секунду

        return () => clearInterval(intervalId); // Очищуємо інтервал при розмонтуванні компонента
    }, []);

    return (
        <>
            <div className="time">
                <span>{dateTime.time}</span>
            </div>
            <div className="date">
                <span>{dateTime.date}</span>
            </div>
        </>
    );
};

const Index = () => {
    const [refBranding, isBrandingVisible] = useIntersectionObserver({
        root: null, // using viewport
        rootMargin: '0px',
        threshold: 0.1 // Element should be visible at 50%
    });

    const [isPhone, setIsPhone] = useState<boolean>(false)

    useEffect(() => {
        if(window.innerWidth < 768) {
            setIsPhone(true)
        }
    }, []);

    return (
        <div className="glob" >
            <div className="glob-bg">
                <div className="glob-info">
                    <div className="glob-text-code" ref={refBranding}>
                        <div className="glob-text">
                            <h1><LetterAnimator word="We are frant" interval={50} delay={0} play={isBrandingVisible} /></h1>
                            <div>
                                <p>
                                    <LetterAnimator word="An international web development and design studio specializing in practical and vibrant solutions." interval={10} delay={0} play={isBrandingVisible} />
                                    <br/>
                                    <LetterAnimator word="At Frant, powerful technical expertise combines with modern and bold creative vision to ensure your project is both effective and visually compelling." interval={10} delay={2000} play={isBrandingVisible} />
                                </p>
                                <div className="space-text">
                                    <span><LetterAnimator word="We bring ideas to life." interval={50} delay={6000} play={isBrandingVisible} /></span>
                                </div>
                            </div>
                        </div>
                        <div className={`glob-code ${isBrandingVisible ? 'active' : ''}`}>
                            <img src="/frant-landing/images/componets/glob/barCode.svg" alt=""/>
                        </div>
                    </div>
                    <div className={`glob-time ${isBrandingVisible ? 'active' : ''}`}>
                        <div className="time-n-date">
                            <DateTime/>
                        </div>
                    </div>
                </div>
                <div className="glob3d-container">
                    {isBrandingVisible && <Glob3D
                        modelName='globe'
                        rotate={true}
                        size={isPhone ? 1.5 : 1.32}
                        color='black'
                        windowSize={2.5}
                    />}
                </div>
            </div>
        </div>
    );
};

export default Index;