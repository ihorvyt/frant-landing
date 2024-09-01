import React from 'react';
import './baner.scss'

const Index = () => {
    return (
        <>
            <section className="banner-section">
                <div className="video">
                    <video autoPlay loop muted>
                        <source src="/frant-landing/video/Timeline3.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="links">
                    <div className="soc">
                        <a>Linked In</a>
                        <a>Behance</a>
                    </div>

                    <a href="">frant.digital@gmail.com</a>
                </div>
            </section>
        </>
    );
};

export default Index;