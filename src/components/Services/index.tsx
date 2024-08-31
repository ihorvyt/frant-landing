'use client'

import './sevices.scss'
import Design from "@/components/Services/Design";
import Development from "@/components/Services/Development";
import BrandIdentity from "@/components/Services/BrandingIdentity";
import React, {useEffect, useRef, useState} from "react";
import Glob3D from "@/components/Glob/Glob3D";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";


const Index = () => {
    const [refDevelopment, isDevelopmentVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '22px',
        threshold: 0.5 // Елемент повинен бути видимим на 50%
    });

    const [refBranding, isBrandingVisible] = useIntersectionObserver({
        root: null, // using viewport
        rootMargin: '20px',
        threshold: 0.5 // Element should be visible at 50%
    });

    const [showModel, setShowModel] = useState('head');

    useEffect(() => {
        isDevelopmentVisible ? setShowModel('cursor') : setShowModel('head')
        isBrandingVisible && setShowModel('eye')
    }, [isDevelopmentVisible, isBrandingVisible]);

    const [index, setIndex] = useState(0);

    const array = ['cursor', 'globe', 'head']
    const showModelHead = showModel === 'head' ? 'active' : '';
    const showModelCursor = showModel === 'cursor' ? 'active' : '';
    const showModelEye = showModel === 'eye' ? 'active' : '';

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setIndex(prevIndex => {
    //             const newIndex = (prevIndex + 1) % comst.length;
    //             setShowModel(comst[newIndex]);
    //             return newIndex;
    //         });
    //     }, 200); // Change name every second
    //
    //     return () => clearInterval(intervalId); // Cleanup on component unmount
    // }, []);

    return (
        <section className="services-models">
            <div className="services-container">
                <Design/>
                <Development ref={typeof refDevelopment === 'boolean' ? undefined : refDevelopment}/>
                <BrandIdentity  ref={typeof refBranding === 'boolean' ? undefined : refBranding}/>
            </div>
            <div className="model-container">
                <div className={`model`}><Glob3D modelName={showModel}  rotate={true} /></div>
            </div>
        </section>
    );
};

export default Index;