import React, {ChangeEvent, startTransition, useEffect, useState} from 'react';
import {Link} from 'react-scroll';
import './header.scss'
import {useLocale, useTranslations} from "next-intl";
import {useRouter} from "next/navigation";

const Index = ({hide, setIsLoading, isLoading}: { hide: boolean,  setIsLoading: (b: boolean) => void, isLoading: boolean }) => {
    const t = useTranslations('Navigation')

    const links = [
        {name: 'Design', link: 'design', offset: -300},
        {name: 'Web Development', link: 'development', offset: -300},
        {name: 'Branding & Identity', link: 'branding', offset: -200},
        {name: 'Prices', link: 'prices', offset: -150},
        {name: 'Time-lines', link: 'time-lines', offset: -150},
    ];
    const languages = [
        {name: 'Ukrainian', country: 'ukraine', short: 'ua'},
        {name: 'English', country: 'united-kingdom', short: 'en'},
        {name: 'Polish', country: 'poland', short: 'pl'},
        {name: 'Spanish', country: 'spain', short: 'sp'},
        {name: 'German', country: 'germany', short: 'gm'},
        {name: 'French', country: 'france', short: 'fr'}
    ];

    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showBurger, setShowBurger] = useState<boolean>(false);
    const [showLangMob, setShowLangMob] = useState<boolean>(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [pageHeight, setPageHeight] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;


        if (currentScrollY > lastScrollY) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        if (currentScrollY + 400 > pageHeight - window.innerHeight - window.innerHeight) {
            setIsVisible(false);
        }

        setLastScrollY(currentScrollY);
    };


    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);

    useEffect(() => {
        const height = document.documentElement.scrollHeight || document.body.scrollHeight;
        setPageHeight(height);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    // for translate
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (language: string) => {
        startTransition(() => {
            router.replace(`/${language}`);
        });
    };

    const headerStyles = `${hide && (isVisible && !showBurger && !isLoading) ? 'header--hide' : ''} ${showBurger && !isLoading ? 'header--show' : ''} ${isLoading ? 'header--loading' : ''}`

    return (
        <>
            <header
                className={`header ${headerStyles}`}
            >
                <Link
                    to={'banner'} smooth={true}
                    duration={0} className="logo"

                    delay={500}
                    onClick={() => {
                        setShowBurger(false)
                        setIsLoading(true)
                        setTimeout(() => {
                            setIsLoading(false)
                        }, 3000)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="80" viewBox="0 0 52 80" fill="none">
                        <path
                            d="M51.3983 22.2477L45.5922 31.8732C45.4572 32.0977 45.2061 32.2358 44.935 32.2358H31.5572C30.6644 32.2358 30.1068 33.1571 30.5548 33.8939L37.4949 45.2966L30.3358 57.1642C30.0094 57.7039 30.2174 58.3944 30.7938 58.6875L37.0977 61.8984C37.3444 62.0238 37.4982 62.2684 37.4982 62.5351V79.277C37.4982 79.822 36.8875 80.1709 36.383 79.9137L0.900495 61.8415C0.653782 61.716 0.5 61.4715 0.5 61.2048V44.4628C0.5 43.9178 1.1107 43.5689 1.61519 43.8261L20.621 53.5053C21.6499 54.0292 22.7551 52.9392 22.1699 51.9778L7.48543 27.8558C7.34935 27.6323 7.34935 27.3572 7.48432 27.1337L13.9033 16.4953C14.3469 15.7595 13.7894 14.8413 12.8988 14.8413H9.56092C9.29098 14.8413 9.04094 14.7043 8.90486 14.4819L0.751139 1.08472C0.457959 0.602971 0.823051 0 1.4072 0H38.7517C39.0216 0 39.2717 0.137039 39.4078 0.359464L47.5615 13.7566C47.8547 14.2383 47.4896 14.8413 46.9054 14.8413H20.9695C20.0767 14.8413 19.5191 15.7626 19.9672 16.4995L25.2676 25.2078C25.7146 25.9425 26.8298 25.9404 27.2745 25.2036L29.4916 21.5278C29.6266 21.3032 29.8778 21.1651 30.1488 21.1651H50.7411C51.3241 21.1651 51.6881 21.766 51.3983 22.2467V22.2477Z"
                            fill="#EEEAE4"/>
                    </svg>
                </Link>

                <nav>
                    <ul>
                        {showLangMob
                            ?
                            languages.map(lan =>
                                <li
                                    className={`${localActive === lan.short? '' : ''}`}
                                    key={lan.name}
                                    onClick={() => onSelectChange(lan.name)}
                                >
                                    <a href={`#${lan.name}`}>
                                        {lan.name}
                                    </a>
                                </li>
                            )
                            :
                            links.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={`#${item.link}`}
                                        offset={isMobile ? -80 : item.offset}
                                        smooth={true}
                                        to={item.link}

                                        delay={500}
                                        duration={0}
                                        onClick={() => {
                                            setShowBurger(false)
                                            setIsLoading(true)
                                            setTimeout(() => {
                                                setIsLoading(false)
                                            }, 3000)
                                        }}
                                    >
                                        {t(item.name)}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <button className={`burger-menu-icon ${showBurger ? 'active' : ''}`}
                        onClick={() => setShowBurger(!showBurger)}>
                    <svg viewBox="0 0 55 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3H52" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                        <path d="M3 20H52" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                        <path d="M22 37L52 37" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                    </svg>


                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#fff"
                         viewBox="0 0 50 50">
                        <path
                            d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                    </svg>
                </button>

                <button className="lang" onClick={() => onSelectChange(localActive === 'ua' ? 'en' : 'ua')}>
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


                <div className="links">
                    <div><a href="https://www.linkedin.com/company/frant-digital/" rel="noopener" target="_blank">Linked
                        In</a></div>
                    <div><a href="https://www.behance.net/frantdigital" rel="noopener" target="_blank">Behance</a></div>
                    <div><a href="https://t.me/frantdigital" target="_blank" className="telegram">Telegram</a></div>
                    <div><a href="mailto:frantdigital@gmail.com">frantdigital@gmail.com</a></div>
                </div>
            </header>

            <div className={`${isLoading ? 'black-header' : ''} `}>

            </div>
        </>

    );
};

export default Index;