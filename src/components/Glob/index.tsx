import React, {useEffect, useState} from 'react';
import './glob.scss'
import Glob3D from "@/components/Glob/Glob3D";


const getCurrentDateTime = (): { time: string; date: string } => {
    const now = new Date();

    // Format time as HH:mm
    const time = now.toTimeString().slice(0, 5);

    // Format date as DD.MM.YYYY
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = now.getFullYear();
    const date = `${day}.${month}.${year}`;

    return { time, date };
};


const Index = () => {
    const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(getCurrentDateTime());
        }, 60000); // Update every 60 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const [name, setName] = useState('globe');

    useEffect(() => {
        setTimeout(() => {
            setName('eye')
        }, 3000)
    }, []);


    return (
        <div className="glob">
            <div className="glob-bg">
                <div className="glob-info">
                    <div className="glob-text-code">
                        <div className="glob-text">
                            <h1>We are frant</h1>
                            <p>An international web development and design studio specializing in practical and vibrant
                                solutions. At Frant, powerful technical expertise combines with modern and bold creative
                                vision to ensure your project is both </p>
                            <div className="space-text">
                                <span>effective</span>
                                <span>and</span>
                                <span>visually</span>
                                <span>compelling.</span>
                            </div>
                            <div className="space-text">
                                <span>We</span>
                                <span>bring</span>
                                <span>ideas to</span>
                                <span>life.</span>
                            </div>
                        </div>
                        <div className="glob-code">
                            <img src="/frant-landing/images/componets/glob/barCode.svg" alt=""/>
                        </div>
                    </div>
                    <div className="glob-time">
                        <div className="time-n-date">
                            <div className="time">
                                <span>{currentDateTime.time}</span>
                            </div>
                            <div className="date">
                                <span>{currentDateTime.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="glob3d-container">
                    <Glob3D modelName={name}/>
                </div>
            </div>
        </div>
    );
};

export default Index;