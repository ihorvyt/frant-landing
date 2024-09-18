import './InfinitySlider.scss'
import {useTranslations} from "next-intl";

const Items = () => {
    const t = useTranslations('InfinitySlider')
    return (<>
        <div className="item">
            <span>{t("Streamlined Solutions for Modern Businesses")}</span>
        </div>
        <div className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="16" viewBox="0 0 80 16" fill="none">
                <path
                    d="M0.226497 8L6 13.7735L11.7735 8L6 2.2265L0.226497 8ZM79.7071 8.70711C80.0976 8.31658 80.0976 7.68342 79.7071 7.29289L73.3431 0.928932C72.9526 0.538408 72.3195 0.538408 71.9289 0.928932C71.5384 1.31946 71.5384 1.95262 71.9289 2.34315L77.5858 8L71.9289 13.6569C71.5384 14.0474 71.5384 14.6805 71.9289 15.0711C72.3195 15.4616 72.9526 15.4616 73.3431 15.0711L79.7071 8.70711ZM6 9H79V7H6V9Z"
                    fill="#EEEAE4"/>
            </svg>
        </div>
        <div className="item mob">
            <span>{t("Streamlined Solutions for Modern Businesses")}</span>
        </div>
        <div className="item mob">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="16" viewBox="0 0 80 16" fill="none">
                <path
                    d="M0.226497 8L6 13.7735L11.7735 8L6 2.2265L0.226497 8ZM79.7071 8.70711C80.0976 8.31658 80.0976 7.68342 79.7071 7.29289L73.3431 0.928932C72.9526 0.538408 72.3195 0.538408 71.9289 0.928932C71.5384 1.31946 71.5384 1.95262 71.9289 2.34315L77.5858 8L71.9289 13.6569C71.5384 14.0474 71.5384 14.6805 71.9289 15.0711C72.3195 15.4616 72.9526 15.4616 73.3431 15.0711L79.7071 8.70711ZM6 9H79V7H6V9Z"
                    fill="#EEEAE4"/>
            </svg>
        </div>
    </>)
}

const Index = () => {
    return (
        <div className="container">
            <div className="horizontal-scrolling-items">
                <Items/>
            </div>

            <div className="horizontal-scrolling-items second">
                <Items/>
            </div>
        </div>
    );
};

export default Index;