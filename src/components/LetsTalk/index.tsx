import React from "react";
import './letsTalk.scss'
import {Link} from "react-scroll";

const Index = ({hide}: {hide: boolean}) => {

    return (
        <Link to='spacer' smooth={true} className={`lets-chat ${hide && 'lets-chat--hide'}`}>
            <span>Let’s Chat</span>
        </Link>
    );
};

export default Index;