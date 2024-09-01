'use client'
import React, {useEffect, useState} from "react";

import TechnologyStack from "@/components/TechnologyStack";
import Header from "@/components/Header/";
import Globus from "../components/Glob";
import FrantSection from "@/components/FrantSection";
import SiteVariations from "@/components/SiteVariations";
import InfinitySlider from "@/components/InfinitySlider";
import Design from "../components/Services/Design";
import Development from "../components/Services/Development";
import BrandIdentity from "../components/Services/BrandingIdentity";
import CheckSection from "../components/CheckSection/";
import TimeInfoSection from "@/components/TimeInfoSection";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Glob3D from "../components/Glob/Glob3D/";

import './page.scss'
import BanerSection from "../components/BannerSection";
import LetsTalk from "@/components/LetsTalk";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";

export default function Home() {
    const [refFrantSection, isFrantSectionVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '0px',
        threshold: 0.1
    });

    const [refSpacer, isSpacerVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '0px',
        threshold: 0.1
    });

    const [isLetsTalkHide, setLetsTalkHide] = useState<boolean>(false);


    useEffect(() => {
        setLetsTalkHide(!isLetsTalkHide)
    }, [isSpacerVisible]);

    useEffect(() => {
        setLetsTalkHide(!isLetsTalkHide)
    }, [isFrantSectionVisible]);

    return (<>
        <Header
            hide={isFrantSectionVisible}
        />
        <main>
            <BanerSection/>
            <Globus/>
            <FrantSection
                ref={refFrantSection}
            />
            <SiteVariations/>
            <TechnologyStack/>
            <Services />
            <InfinitySlider/>
            <CheckSection/>
            <TimeInfoSection/>
        </main>
        <div className="spacer" ref={refSpacer}></div>
        <Footer/>

        <LetsTalk
            hide={isLetsTalkHide}
        />
    </>);
}
