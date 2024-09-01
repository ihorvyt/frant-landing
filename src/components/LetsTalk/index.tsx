import React, {RefObject} from "react";
import './letsTalk.scss'

const Index = ({hide}: {hide: boolean | RefObject<HTMLDivElement>}) => {

    console.log(hide)
    return (
        <button className={`lets-chat ${hide && 'lets-chat--hide'}`}>
            <span>Let’s Chat</span>
        </button>
    );
};

export default Index;