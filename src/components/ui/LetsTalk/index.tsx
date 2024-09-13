import React from "react";
import './letsTalk.scss'
import { Link} from "react-scroll";

const Index = ({hide, setIsLoading}: {hide: boolean, setIsLoading: (b: boolean) => void}) => {
    const options = {
        // Your options here, for example:
        duration: 3000,
        smooth: true,
    };

    return (
        <Link
            smooth={true}
            to='footer'
            delay={500}
            offset={20}
            onClick={() => {
                setIsLoading(true)
                setTimeout(() => {
                    setIsLoading(false)
                }, 5000)
            }}
            className={`lets-chat ${hide && 'lets-chat--hide'}`}>
            <span>Let’s Chat</span>
        </Link>
    );
};


export default Index;