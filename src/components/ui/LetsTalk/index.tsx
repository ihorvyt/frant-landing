import React, {useEffect, useState} from "react";
import './letsTalk.scss'
import { Link, animateScroll } from "react-scroll";
import {useTranslations} from "next-intl";

const Index = ({hide, setIsLoading}: {hide: boolean, setIsLoading: (b: boolean) => void, isShortMobile?: boolean}) => {
    const t = useTranslations()
    const options = {
        // Your options here, for example:
        duration: 1000,
        smooth: true,
    };

    const [isBelow100vh, setIsBelow100vh] = useState(false);
    const [isNearFooter, setIsNearFooter] = useState(false);

    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);



    const checkScrollPosition = () => {
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY || window.pageYOffset;
        setIsBelow100vh(scrollTop * 3 > viewportHeight);
    };

    useEffect(() => {
        // Initial check
        checkScrollPosition();

        // Set up scroll event listener
        window.addEventListener('scroll', checkScrollPosition);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (documentHeight - scrollPosition <= window.innerHeight) {
                !isMobile && setIsNearFooter(true)
            } else {
                setIsNearFooter(false)
            }
        };

        // Додаємо обробник події скролу
        window.addEventListener('scroll', handleScroll);

        // Прибираємо обробник події при демонтажі компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <Link
            href="#"
            smooth={true}
            to={`${isMobile ? 'footer' : 'spacer'}`}
            delay={500}
            duration={0}
            offset={isMobile ? 0 : 0}
            onClick={() => {
                setIsLoading(true)
                setTimeout(() => {
                    setIsLoading(false)
                }, 3000)
            }}
            className={`lets-chat ${(hide || isNearFooter) ? 'lets-chat--hide' : ''} ${isBelow100vh ? 'lets-chat--short' : ''}`}
        >
            <span>{t("Let’s Chat")}</span>
        </Link>
    );
};


export default Index;