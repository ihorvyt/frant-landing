'use client'

import "@/styles/global.scss";
import "@/styles/default.scss";
import "@/styles/values.scss";
import BannerSection from "@/components/ui/BannerSection";
import Glob from "@/components/ui/Glob";
import FrantSection from "@/components/ui/FrantSection";
import SiteVariations from "@/components/ui/SiteVariations";
import TechnologyStack from "@/components/ui/TechnologyStack";
import Services from "@/components/ui/Services";
import InfinitySlider from "@/components/ui/InfinitySlider";
import CheckSection from "@/components/ui/CheckSection";
import TimeInfoSection from "@/components/ui/TimeInfoSection";
import React, {useEffect, useState} from "react";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import Header from "@/components/ui/Header";
import ReactLenis from "lenis/react";
import Footer from "@/components/ui/Footer";
import Language from "@/components/ui/Language";
import LetsTalk from "@/components/ui/LetsTalk";
import './page.scss'


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

    return (
        <>
            <ReactLenis root>
                {/*<SplashScreen/>*/}
                <Header
                    hide={isFrantSectionVisible}
                    setShowLang={setShowLang}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                />
                <main>
                    <BannerSection/>
                    <Glob/>
                    <FrantSection ref={refFrantSection}/>
                    <SiteVariations/>
                    <TechnologyStack/>
                    <Services setIsLoading={setIsLoading}/>
                    {/*<InfinitySlider/>*/}
                    {/*<CheckSection/>*/}
                    {/*<TimeInfoSection setIsLoading={setIsLoading}/>*/}
                </main>
                <div id="spacer"></div>
                <Footer/>

                <Language showLang={showLang} setShowLang={setShowLang}/>
                <LetsTalk hide={isLetsTalkHide} setIsLoading={setIsLoading}/>
            </ReactLenis>
        </>
    );
}