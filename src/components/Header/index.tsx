import React from 'react';

import './header.scss'

const Index = () => {
    return (
        <header className="header">
            <nav>
                <a href="">Design</a>
                <a href="">Branding & Identity</a>
                <a href="">Web Development</a>
            </nav>


            <div className="lang">
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
            </div>
        </header>
    );
};

export default Index;