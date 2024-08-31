'use client'

import './sevices.scss'
import Design from "@/components/Services/Design";
import Development from "@/components/Services/Development";
import BrandIdentity from "@/components/Services/BrandingIdentity";
import React, {useEffect, useRef, useState} from "react";
import Glob3D from "@/components/Glob/Glob3D";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import {string} from "prop-types";


const Index = () => {
    const [refDesign, isDesigbVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '0px',
        threshold: 0.1 // Елемент повинен бути видимим на 50%
    });

    const [refDevelopment, isDevelopmentVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '0px',
        threshold: 0.6 // Елемент повинен бути видимим на 50%
    });

    const [refBranding, isBrandingVisible] = useIntersectionObserver({
        root: null, // using viewport
        rootMargin: '0px',
        threshold: 0.2 // Element should be visible at 50%
    });

    interface IModel {
        modelName: string,
        size: number,
        color: string
    }

    const [showModel, setShowModel] = useState<IModel>({
        modelName: 'none',
        size: 1,
        color: 'none'
    });

    useEffect(() => {
        isDesigbVisible && setShowModel({
            modelName: 'head',
            size: 1.3,
            color: 'green'
        });
        isDevelopmentVisible && setShowModel({
            modelName: 'cursor',
            size: 0.8,
            color: 'blue'
        });
        isBrandingVisible && setShowModel({
            modelName: 'eye',
            size: 1.3,
            color: 'red'
        });

        !isDesigbVisible && !isBrandingVisible && !isDevelopmentVisible && setShowModel({
            modelName: '',
            color: 'red'
        })
    }, [isDevelopmentVisible, isBrandingVisible, isDesigbVisible]);

    return (
        <section className="services-models">
            <div className="services-container">
                <Design ref={typeof refDesign === 'boolean' ? undefined : refDesign}/>
                <Development ref={typeof refDevelopment === 'boolean' ? undefined : refDevelopment}/>
                <BrandIdentity ref={typeof refBranding === 'boolean' ? undefined : refBranding}/>
            </div>
            <div className="model-container">
                {showModel?.modelName !== 'none' && <div className={`model`}>
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