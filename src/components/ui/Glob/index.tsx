import React, {forwardRef, useEffect, useState} from 'react';
import './glob.scss'
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import Glob3D from "@/components/ui/Glob/Glob3D";
import Typewriter from "@/components/Typewriter";
import {useLocale, useTranslations} from "next-intl";

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
    const t = useTranslations('Glob');
    const lang = useLocale();
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
                                            text= {t("We are frant")}
                                            delay={50}
                                            startDelay={50}
                                        />}
                                    </h1>
                                <div>
                                    <p>
                                        {isGlobeVisible && <Typewriter
                                            text={t("An international web development")}
                                            delay={10}
                                            startDelay={1000}
                                        />}
                                        <br/>
                                        {isGlobeVisible && <Typewriter
                                            text={t("At Frant, powerful technical")}
                                            delay={10}
                                            startDelay={3000}
                                        />}
                                    </p>
                                    <div className={`space-text ${lang === 'ua' ? 'ua' : ''}`}>
                                        <span>
                                            {isGlobeVisible && <Typewriter
                                                text={t("We bring ideas to life")}
                                                delay={40}
                                                startDelay={isPhone ? 5800 : 6800}
                                            />}
                                        </span>
                                    </div>
                                </div>
                            </div>
                                : <div>
                                    <h1>
                                        {t("Frant: Website development, Design, Branding")}
                                    </h1>
                                    <div>
                                        <p>
                                            {t("An international web development")}
                                            <br/>
                                            {t("At Frant, powerful technical")}
                                        </p>
                                        <div>
                                            <span>{t("We bring ideas to life")}</span>
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