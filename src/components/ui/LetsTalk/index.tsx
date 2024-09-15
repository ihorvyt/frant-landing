import React, {useEffect, useState} from "react";
import './letsTalk.scss'
import { Link, animateScroll } from "react-scroll";

const Index = ({hide, setIsLoading, isShortMobile}: {hide: boolean, setIsLoading: (b: boolean) => void, isShortMobile?: boolean}) => {
    const options = {
        // Your options here, for example:
        duration: 1000,
        smooth: true,
    };

    const [isBelow100vh, setIsBelow100vh] = useState(false);

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


    return (
        <Link
            smooth={true}
            to={`${isMobile ? 'spacer' : 'footer'} spacer`}
            delay={isMobile ? 500 : 2000}
            duration={isMobile ? 0 : 2000}
            offset={!isMobile ? 2000 : 0}
            onClick={() => {
                setIsLoading(true)
                setTimeout(() => {
                    setIsLoading(false)
                }, 3000)

                !isMobile && animateScroll.scrollToBottom(options)
            }}
            className={`lets-chat ${hide ? 'lets-chat--hide' : ''} ${isBelow100vh ? 'lets-chat--short' : ''}`}
        >
            <span>Let’s Chat</span>
        </Link>
    );
};


export default Index;