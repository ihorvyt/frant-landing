'use client'
import React, {useEffect, useState} from "react";

import TechnologyStack from "../components/ui/TechnologyStack";
import FrantSection from "../components/ui/FrantSection";
import SiteVariations from "../components/ui/SiteVariations";
import TimeInfoSection from "../components/ui/TimeInfoSection";

import './page.scss'
import BannerSection from "../components/ui/BannerSection";
import LetsTalk from "../components/ui/LetsTalk";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import Language from "../components/ui/Language";
import Glob from "@/components/ui/Glob";
import Services from "@/components/ui/Services";
import InfinitySlider from "@/components/ui/InfinitySlider";
import CheckSection from "@/components/ui/CheckSection";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import SplashScreen from "@/components/ui/SplashScreen";

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
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
            isLoading={isLoading}
        />

        <main>
            <BannerSection/>
            <Glob/>
            <div>
                <div className="s400 s">400</div>
                <div className="s500 s">500</div>
                <div className="s600 s">600</div>
                <div className="s700 s">700</div>
                <div className="s800 s">800</div>
            </div>
            <FrantSection ref={refFrantSection}/>
            <SiteVariations/>
            <TechnologyStack/>
            <Services />
            <InfinitySlider/>
            <CheckSection/>
            <TimeInfoSection setIsLoading={setIsLoading}/>
        </main>
        <div id='spacer' className="spacer" ref={refSpacer}></div>
        <Footer />

        <Language showLang={showLang} setShowLang={setShowLang}/>
        <LetsTalk hide={isLetsTalkHide} setIsLoading={setIsLoading}/>
    </>);
}
