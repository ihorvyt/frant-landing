import React, {forwardRef, useEffect, useState} from 'react';
import './glob.scss'
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import Glob3D from "@/components/ui/Glob/Glob3D";
import Typewriter from "@/components/Typewriter";

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

interface IndexProps {
    isBrandingVisible: boolean;
}

const Index = () => {
    const [isPhone, setIsPhone] = useState<boolean>(false)

    const [refGlobe, isGlobeVisible] = useIntersectionObserver({
        root: null, // using viewport
        rootMargin: isPhone ? '350px' : '0px',
        threshold: 0.5,
        once: true
    });

    const [refGlobeContainer, isGlobeContainerVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });


    const [contentLoaded, setContentLoaded] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 768) {
            setIsPhone(true)
        }

        setTimeout(() => {
            setContentLoaded(true);
        }, 1);
    }, []);

    return (
        <div className="glob"  ref={refGlobeContainer}>
            <div className="glob-bg" ref={refGlobe}>
                <div className="glob-info">
                    <div className="glob-text-code" >
                        {
                            contentLoaded
                                ? <div className="glob-text">
                                    <h1>
                                        {isGlobeVisible && <Typewriter
                                            text="We are frant"
                                            delay={50}
                                            startDelay={50}
                                        />}
                                    </h1>
                                <div>
                                    <p>
                                        {isGlobeVisible && <Typewriter
                                            text="An international web development and design studio specializing in practical and vibrant solutions."
                                            delay={10}
                                            startDelay={1000}
                                        />}
                                        <br/>
                                        {isGlobeVisible && <Typewriter
                                            text="At Frant, powerful technical expertise combines with modern and bold creative vision to ensure your project is both effective and visually compelling."
                                            delay={10}
                                            startDelay={3000}
                                        />}
                                    </p>
                                    <div className="space-text">
                                        <span>
                                            {isGlobeVisible && <Typewriter
                                                text="We bring ideas to life."
                                                delay={40}
                                                startDelay={isPhone ? 5800 : 6800}
                                            />}
                                        </span>
                                    </div>
                                </div>
                            </div>
                                : <div>
                                    <h1>
                                        Frant: Website development
                                    </h1>
                                    <div>
                                        <p>
                                            An international web development and design studio specializing in practical and vibrant solutions.
                                            <br/>
                                            At Frant, powerful technical expertise combines with modern and bold creative vision to ensure your project is both effective and visually compelling.
                                        </p>
                                        <div>
                                            <span>We bring ideas to life.</span>
                                        </div>
                                    </div>
                                </div>
                        }
                        <div className={`glob-code ${isGlobeVisible ? 'active' : ''}`}>
                            <img src="/images/componets/glob/barCode.svg" alt="Barcode"/>
                        </div>
                    </div>
                    <div className={`glob-time ${isGlobeVisible ? 'active' : ''}`}>
                        <div className="time-n-date">
                            <DateTime/>
                        </div>
                    </div>
                </div>
                <div className="glob3d-container">
                    {isGlobeContainerVisible && <Glob3D
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
}

export default Index;