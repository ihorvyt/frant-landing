'use client'
import React, {useEffect, useState} from "react";

import TechnologyStack from "@/components/TechnologyStack";
import Header from "@/components/Header";
import Glob from "../components/Glob";
import FrantSection from "@/components/FrantSection";
import SiteVariations from "@/components/SiteVariations";
import InfinitySlider from "@/components/InfinitySlider";
import CheckSection from "../components/CheckSection";
import TimeInfoSection from "@/components/TimeInfoSection";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

import './page.scss'
import BannerSection from "../components/BannerSection";
import LetsTalk from "@/components/LetsTalk";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import Language from "@/components/Language";

export default function Home() {
    const [refFrantSection, isFrantSectionVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '0px',
        threshold: 0.1
    });
    const [refSpacer, isSpacerVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '100px',
        threshold: 0.001
    });
    const [isLetsTalkHide, setLetsTalkHide] = useState<boolean>(true);
    const [showLang, setShowLang] = useState<boolean>(false);

    useEffect(() => {
        setLetsTalkHide(!isLetsTalkHide)
    }, [isSpacerVisible]);

    useEffect(() => {
        setLetsTalkHide(!isLetsTalkHide)
    }, [isFrantSectionVisible]);

    return (<>
        {/*<SplashScreen/>*/}

        <Header
            hide={isFrantSectionVisible}
            setShowLang={setShowLang}
        />

        <main>
            <BannerSection/>
            <Glob/>
            <FrantSection ref={refFrantSection}/>
            <SiteVariations/>
            <TechnologyStack/>
            <Services />
            <InfinitySlider/>
            <CheckSection/>
            <TimeInfoSection/>
        </main>
        <div id='spacer' className="spacer" ref={refSpacer}></div>
        <Footer />

        <Language showLang={showLang} setShowLang={setShowLang}/>
        <LetsTalk hide={isLetsTalkHide}/>
    </>);
}
