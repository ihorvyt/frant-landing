import React from 'react';
import './baner.scss'

const Index = () => {
    return (
        <>
            <section id='banner' className="banner-section">
                <div className="video">
                    <video autoPlay loop muted>
                        <source src={`/frant-landing/video/Timeline${window.innerWidth < 768 ? 'Mobile' : ''}.mp4`} type="video/mp4"/>
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