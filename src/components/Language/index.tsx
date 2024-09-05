import React from 'react';
import './langPopup.scss'

const Index = ({ showLang, setShowLang }: {showLang: boolean, setShowLang: (b: boolean) => boolean}) => {
    const languages = ['Ukrainian', 'English', 'Polish', 'Spanish', 'German'];

    return (
        <div className={`lang-popup ${showLang ? 'active' : ''}`}>
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="65" viewBox="0 0 41 65" fill="none">
                    <path
                        d="M40.9182 18.0763L36.2506 25.8969C36.1421 26.0794 35.9402 26.1916 35.7223 26.1916H24.9675C24.2498 26.1916 23.8015 26.9401 24.1617 27.5388L29.741 36.8035L23.9856 46.4459C23.7232 46.8844 23.8905 47.4454 24.3538 47.6836L29.4217 50.2924C29.62 50.3944 29.7437 50.5931 29.7437 50.8098V64.4126C29.7437 64.8554 29.2527 65.1389 28.8471 64.9299L0.321967 50.2462C0.123628 50.1443 0 49.9456 0 49.7289V36.126C0 35.6832 0.490955 35.3997 0.896526 35.6087L16.1757 43.473C17.0029 43.8987 17.8914 43.0131 17.4209 42.232L5.61574 22.6328C5.50634 22.4513 5.50634 22.2277 5.61485 22.0461L10.7752 13.4024C11.1319 12.8046 10.6836 12.0586 9.96762 12.0586H7.28427C7.06726 12.0586 6.86625 11.9472 6.75685 11.7665L0.201896 0.881331C-0.0337976 0.489914 0.259708 0 0.729317 0H30.7514C30.9684 0 31.1694 0.111344 31.2788 0.292064L37.8337 11.1772C38.0694 11.5687 37.7759 12.0586 37.3063 12.0586H16.4559C15.7381 12.0586 15.2899 12.8071 15.6501 13.4058L19.9112 20.4813C20.2706 21.0783 21.1671 21.0766 21.5246 20.4779L23.307 17.4913C23.4155 17.3089 23.6174 17.1967 23.8353 17.1967H40.3899C40.8586 17.1967 41.1512 17.6849 40.9182 18.0754V18.0763Z"
                        fill="#EEEAE4"/>
                </svg>
            </div>

            <div className="lang-world">
                <div className="lang-list">
                    <ul>
                        {
                            languages.map(lan =>
                                <li>{lan}</li>
                            )
                        }
                    </ul>
                </div>
                <div className="world">
                    <img src="frant-landing/images/svg/world.svg" alt=""/>
                </div>
            </div>


            <div onClick={() => setShowLang(!showLang)} className="close">
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="40" viewBox="0 0 66 40" fill="none">
                    <line x1="5.05469" y1="2.90192" x2="63.9444" y2="36.9019" stroke="#EEEAE4" strokeWidth="6"/>
                    <line y1="-3" x2="68" y2="-3" transform="matrix(-0.866025 0.5 0.5 0.866025 62.4453 5.5)"
                          stroke="#EEEAE4" strokeWidth="6"/>
                </svg>
            </div>
        </div>
    );
};

export default Index;