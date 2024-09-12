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
                    <video autoPlay loop muted>
                        {videoSrc && <source src={videoSrc} type="video/mp4"/>}
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="links">
                    <div className="soc">
                        <a>Linked In</a>
                        <a href="https://www.behance.net/frantdigital" target="_blank" >Behance</a>
                    </div>

                    <a href="mailto:frantdigital@gmail.com">frantdigital@gmail.com</a>
                </div>
            </section>
        </>
    );
};

export default Index;