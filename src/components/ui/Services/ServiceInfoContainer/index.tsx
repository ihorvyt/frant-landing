import './serviceInfoContainer.scss'
import {animateScroll, Link} from "react-scroll";
import React, {useEffect} from "react";
import {useLocale, useTranslations} from "next-intl";

interface IServiceInfoContainer {
    title: string;
    description?: string;
    show?: boolean;
    setIsLoading: (b: boolean) => void;
}

const options = {
    // Your options here, for example:
    duration: 2000,
    smooth: true
};




const ServiceInfoContainer = ({title, description, setIsLoading}: IServiceInfoContainer) => {
    const t = useTranslations("Services")
    const [isMobile, setIsMobile] = React.useState(false);
    const lang = useLocale();

    console.log(title)
    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);

    return (<div className="service-info-container">
        <div className="service-info">
            <div className={`title ${lang === 'ua' && title === 'Розробка' ? 'ua-dev' : ''}`}>
                <h2 dangerouslySetInnerHTML={{__html: title || ''}}/>
            </div>
            <div className="description">
                <p dangerouslySetInnerHTML={{__html: description || ''}}/>
            </div>
        </div>
        <Link
            smooth={true}
            to={`${isMobile ? 'spacer' : 'footer'} spacer`}
            delay={isMobile ? 500 : 2000}
            duration={isMobile ? 0 : 2000}
            offset={isMobile ? 50 : 2000}
            onClick={() => {
                setIsLoading(true)
                setTimeout(() => {
                    setIsLoading(false)
                }, 3000)

                !isMobile && animateScroll.scrollToBottom(options)
            }}
            className="service-ident-button"
        >
            <span>{t("Get in touch")}</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="38" viewBox="0 0 33 38" fill="none">
                <g clipPath="url(#clip0_126_576)">
                    <path
                        d="M11.3345 24.7349C10.8925 25.1769 10.8925 25.8934 11.3345 26.3354C11.7765 26.7774 12.4931 26.7774 12.935 26.3354L11.3345 24.7349ZM24.4701 14.3315C24.4701 13.7065 23.9634 13.1998 23.3384 13.1998L13.1528 13.1998C12.5277 13.1998 12.021 13.7065 12.021 14.3315C12.021 14.9566 12.5277 15.4633 13.1528 15.4633L22.2066 15.4633L22.2066 24.5172C22.2066 25.1422 22.7133 25.6489 23.3384 25.6489C23.9634 25.6489 24.4701 25.1422 24.4701 24.5172L24.4701 14.3315ZM12.935 26.3354L24.1386 15.1318L22.5381 13.5313L11.3345 24.7349L12.935 26.3354Z"
                        fill="#C3B8A3"/>
                </g>
                <defs>
                    <clipPath id="clip0_126_576">
                        <rect width="31.6886" height="36.9701" fill="white" transform="translate(0.759766 0.316406)"/>
                    </clipPath>
                </defs>
            </svg>
        </Link>
    </div>);
}

export default ServiceInfoContainer