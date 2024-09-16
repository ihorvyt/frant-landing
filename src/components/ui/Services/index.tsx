'use client'

import './sevices.scss'
import Design from "@/components/ui/Services/Design";
import Development from "@/components/ui/Services/Development";
import BrandIdentity from "@/components/ui/Services/BrandingIdentity";
import React, {useEffect, useState} from "react";
import Glob3D from "@/components/ui/Glob/Glob3D";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";

interface IModel {
    modelName: string,
    size: number,
    color: string,
    state?: string
}

const Index = ({setIsLoading}: {setIsLoading: (b: boolean) => void}) => {
    const [refDesign, isDesigbVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '0px',
        threshold: 0.1 // Елемент повинен бути видимим на 50%
    });
    const [refDevelopment, isDevelopmentVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '0px',
        threshold: 0.1 // Елемент повинен бути видимим на 50%
    });
    const [refBranding, isBrandingVisible] = useIntersectionObserver({
        root: null, // using viewport
        rootMargin: '-50px',
        threshold: 0.2 // Element should be visible at 50%
    });
    const [showModel, setShowModel] = useState<IModel>({
        modelName: 'none',
        size: 1,
        color: 'none'
    });

    useEffect(() => {
        isDesigbVisible && setShowModel({
            modelName: 'head',
            size: 1.10,
            color: 'green'
        });
        isDevelopmentVisible && !isDesigbVisible && setShowModel({
            modelName: 'cursor',
            size: 0.8,
            color: 'blue'
        });
        isBrandingVisible && !isDevelopmentVisible && setShowModel({
            modelName: 'eye',
            size: 1.2,
            color: 'red'
        });
        !isDesigbVisible && !isBrandingVisible && !isDevelopmentVisible && setShowModel({
            modelName: '',
            size: 1.2,
            color: 'red'
        })
    }, [isDevelopmentVisible, isBrandingVisible, isDesigbVisible]);

    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);

    return (
        <section className="services-models">
            <div className="services-container">
                <Design ref={refDesign} showModel={showModel} setIsLoading={setIsLoading}/>
                <Development ref={refDevelopment} showModel={showModel} setIsLoading={setIsLoading}/>
                <BrandIdentity ref={refBranding} showModel={showModel} setIsLoading={setIsLoading}/>
            </div>
            <div className="model-container">
                {showModel.modelName !== '' && !isMobile && showModel.modelName !== 'none' && <div className={`model`}>
                    <Glob3D
                        modelName={showModel.modelName}
                        rotate={true}
                        size={showModel.size}
                        color={showModel.color}
                    />
                </div>}
            </div>
        </section>
    );
};

export default Index;