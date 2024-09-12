import React from "react";
import './letsTalk.scss'
import {animateScroll, Link} from "react-scroll";

const Index = ({hide}: {hide: boolean}) => {
    const options = {
        // Your options here, for example:
        duration: 2000,
        smooth: true,
    };




    return (
        <Link
            smooth={true}
            to='footer'
            onClick={() => {animateScroll.scrollToBottom(options);}}
            className={`lets-chat ${hide && 'lets-chat--hide'}`}>
            <span>Let’s Chat</span>
        </Link>
    );
};

export default Index;