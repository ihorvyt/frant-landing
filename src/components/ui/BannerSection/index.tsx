import React, {useEffect, useState} from 'react';
import './baner.scss'

const Index = () => {
    const [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        const width = window.innerWidth;
        const videoPath = `/video/Timeline${width < 768 ? 'Mobile' : ''}.mp4`;
        setVideoSrc(videoPath);
    }, []);


    return (
        <>
            <section id='banner' className="banner-section">
                <div className="video">
                    <video width="100%" autoPlay loop muted playsInline>
                        {videoSrc && <source src={videoSrc}  type="video/mp4"/>}
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="links">
                    <div className="soc">
                        <a href="https://www.linkedin.com/company/frant-digital/" target="_blank" className="linked-in">Linked In</a>
                        <a href="https://www.behance.net/frantdigital" target="_blank" className="behance">Behance</a>
                    </div>
                    <div className="soc">
                        <a href="https://t.me/frantdigital" target="_blank" className="telegram">Telegram</a>
                        <a href="mailto:frantdigital@gmail.com" className="email">frantdigital@gmail.com</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;