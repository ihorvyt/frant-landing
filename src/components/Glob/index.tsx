import React, {useEffect, useState} from 'react';
import './glob.scss'
import Glob3D from "@/components/Glob/Glob3D";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";

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
    const [showGlobal, setSowGlobal] = React.useState(false);

    const [refBranding, isBrandingVisible] = useIntersectionObserver({
        root: null, // using viewport
        rootMargin: '180px',
        threshold: 0.1 // Element should be visible at 50%
    });


    return (
        <div className="glob" ref={typeof refBranding === 'boolean' ? undefined : refBranding}>
            <div className="glob-bg">
                <div className="glob-info">
                    <div className="glob-text-code">
                        <div className="glob-text">
                            <h1>We are frant</h1>
                            <p>An international web development and design studio specializing in practical and vibrant
                                solutions. At Frant, powerful technical expertise combines with modern and bold creative
                                vision to ensure your project is both </p>
                            <div className="space-text">
                                <span>effective</span>
                                <span>and</span>
                                <span>visually</span>
                                <span>compelling.</span>
                            </div>
                            <div className="space-text">
                                <span>We</span>
                                <span>bring</span>
                                <span>ideas to</span>
                                <span>life.</span>
                            </div>
                        </div>
                        <div className="glob-code">
                            <img src="/frant-landing/images/componets/glob/barCode.svg" alt=""/>
                        </div>
                    </div>
                    <div className="glob-time">
                        <div className="time-n-date">
                            <DateTime/>
                        </div>
                    </div>
                </div>
                <div className="glob3d-container">
                    {isBrandingVisible && <Glob3D
                        modelName='globe'
                        rotate={true}
                        size={1.32}
                        color='black'
                    />}
                </div>
            </div>
        </div>
    );
};

export default Index;