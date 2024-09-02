import React from 'react';

import './timeInfoSection.scss'

const Index = () => {
    return (
        <section id='time-lines' className="time-info-section">
            <div className="info-container">
                <div className="title">
                    <h3>Advice at the start for free!</h3>
                </div>

                <div className="description">
                    <p>Contact us for a detailed consultation. Do you have an idea? </p>
                </div>
            </div>
            <div className="time-info-container">
                <div className="respond-within card">
                    <div className="top">
                        <div className="title">
                            <h4>Respond within</h4>
                        </div>

                        <div className="count">
                            <span>1</span>
                        </div>
                    </div>
                    <div className="center">
                        <p>24<span>hours</span></p>
                    </div>
                </div>

                <div className="make-an-offer card">
                    <div className="top">
                        <div className="title">
                            <h4>Make an offer</h4>
                        </div>

                        <div className="count">
                            <span>2</span>
                        </div>
                    </div>
                    <div className="center">
                        <p>4<span>days</span></p>
                    </div>
                </div>

                <div className="project-realization card">
                    <div className="top">
                        <div className="title">
                            <h4>Project realization</h4>
                        </div>

                        <div className="count">
                            <span>3</span>
                        </div>
                    </div>
                    <div className="center">
                        <p>30<span>days</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;