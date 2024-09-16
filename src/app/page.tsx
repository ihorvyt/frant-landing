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
import ReactLenis, {useLenis} from "lenis/react";

export default function Home() {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

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
            <ReactLenis root>
            <Header
                hide={isFrantSectionVisible}
                setShowLang={setShowLang}
                isLoading={isLoading}
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
                <TimeInfoSection setIsLoading={setIsLoading}/>
            </main>
            <div id='spacer' className="spacer" ref={refSpacer}></div>
            <Footer />

            <Language showLang={showLang} setShowLang={setShowLang}/>
            <LetsTalk hide={isLetsTalkHide} setIsLoading={setIsLoading}/>
        </ReactLenis>
    </>);
}
