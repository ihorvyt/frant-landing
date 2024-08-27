import React from 'react';

import './timeInfoSection.scss'

const Index = () => {
    return (
        <div className="time-info-section">
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
                        <p>48<span>hours</span></p>
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
                        <p>7<span>days</span></p>
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
                        <p>45<span>days</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;