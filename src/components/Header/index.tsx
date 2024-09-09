import React, {RefObject, useEffect, useState} from 'react';
import { Link } from 'react-scroll';
import './header.scss'

const Index = ({hide, setShowLang}: {hide: boolean, setShowLang: (b: boolean) => void}) => {
    const links = [
        { name: 'Design', link: 'design', offset: -300 },
        { name: 'Web Development', link: 'development', offset: -300 },
        { name: 'Branding & Identity', link: 'branding', offset: -200 },
        { name: 'Prices', link: 'prices', offset: -150 },
        { name: 'Time-lines', link: 'time-lines', offset: -150 },
    ];

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`header ${hide || isVisible ? 'header--hide' : ''}`}>
            <Link to={'banner'} className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="80" viewBox="0 0 52 80" fill="none">
                    <path
                        d="M51.3983 22.2477L45.5922 31.8732C45.4572 32.0977 45.2061 32.2358 44.935 32.2358H31.5572C30.6644 32.2358 30.1068 33.1571 30.5548 33.8939L37.4949 45.2966L30.3358 57.1642C30.0094 57.7039 30.2174 58.3944 30.7938 58.6875L37.0977 61.8984C37.3444 62.0238 37.4982 62.2684 37.4982 62.5351V79.277C37.4982 79.822 36.8875 80.1709 36.383 79.9137L0.900495 61.8415C0.653782 61.716 0.5 61.4715 0.5 61.2048V44.4628C0.5 43.9178 1.1107 43.5689 1.61519 43.8261L20.621 53.5053C21.6499 54.0292 22.7551 52.9392 22.1699 51.9778L7.48543 27.8558C7.34935 27.6323 7.34935 27.3572 7.48432 27.1337L13.9033 16.4953C14.3469 15.7595 13.7894 14.8413 12.8988 14.8413H9.56092C9.29098 14.8413 9.04094 14.7043 8.90486 14.4819L0.751139 1.08472C0.457959 0.602971 0.823051 0 1.4072 0H38.7517C39.0216 0 39.2717 0.137039 39.4078 0.359464L47.5615 13.7566C47.8547 14.2383 47.4896 14.8413 46.9054 14.8413H20.9695C20.0767 14.8413 19.5191 15.7626 19.9672 16.4995L25.2676 25.2078C25.7146 25.9425 26.8298 25.9404 27.2745 25.2036L29.4916 21.5278C29.6266 21.3032 29.8778 21.1651 30.1488 21.1651H50.7411C51.3241 21.1651 51.6881 21.766 51.3983 22.2467V22.2477Z"
                        fill="#EEEAE4"/>
                </svg>
            </Link>

            <nav>
                {
                    links.map((item) => (
                        <Link
                            key={item.name}
                            offset={item.offset}
                            duration={1000}
                            to={item.link}
                        >
                            {item.name}
                        </Link>
                    ))
                }
            </nav>

            <button className="burger-menu-icon">
                <svg width="68" height="32" viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="11" y1="2" x2="57" y2="2" stroke="#EEEAE4" stroke-width="3"/>
                    <line x1="1.31134e-07" y1="16" x2="68" y2="16" stroke="#EEEAE4" stroke-width="3"/>
                    <line x1="11" y1="30" x2="57" y2="30" stroke="#EEEAE4" stroke-width="3"/>
                </svg>
            </button>

            <button className="lang" onClick={() => setShowLang(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                    <path
                        d="M27.4693 3C13.9221 3 2.93872 13.9696 2.93872 27.5C2.93872 41.0304 13.9221 52 27.4693 52C41.0166 52 52 41.0304 52 27.5C52 13.9696 41.0166 3 27.4693 3Z"
                        stroke="#C3B8A3" strokeWidth="4.22415" strokeMiterlimit="10"/>
                    <path
                        d="M27.4693 3C20.6207 3 14.1815 13.9696 14.1815 27.5C14.1815 41.0304 20.6207 52 27.4693 52C34.3178 52 40.7571 41.0304 40.7571 27.5C40.7571 13.9696 34.3178 3 27.4693 3Z"
                        stroke="#C3B8A3" strokeWidth="4.22415" strokeMiterlimit="10"/>
                    <path
                        d="M11.1154 11.1665C15.6253 14.3645 21.3027 16.2715 27.4696 16.2715C33.6364 16.2715 39.3138 14.3645 43.8237 11.1665M43.8237 43.834C39.3138 40.636 33.6364 38.729 27.4696 38.729C21.3027 38.729 15.6253 40.636 11.1154 43.834"
                        stroke="#C3B8A3" strokeWidth="4.22415" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27.4693 3V52M52 27.5H2.93872" stroke="#C3B8A3" strokeWidth="4.22415"
                          strokeMiterlimit="10"/>
                </svg>
            </button>
        </header>
    );
};

export default Index;