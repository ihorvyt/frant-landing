'use client'

import "@/styles/global.scss";
import "@/styles/default.scss";
import "@/styles/values.scss";
import { gsap } from "gsap";
import BannerSection from "@/components/ui/BannerSection";
import Glob from "@/components/ui/Glob";
import FrantSection from "@/components/ui/FrantSection";
import SiteVariations from "@/components/ui/SiteVariations";
import TechnologyStack from "@/components/ui/TechnologyStack";
import Services from "@/components/ui/Services";
import InfinitySlider from "@/components/ui/InfinitySlider";
import CheckSection from "@/components/ui/CheckSection";
import TimeInfoSection from "@/components/ui/TimeInfoSection";
// @ts-ignore
import React, {useEffect, useRef, useState} from "react";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import Header from "@/components/ui/Header";
// @ts-ignore
import ReactLenis from "lenis/react";
import Footer from "@/components/ui/Footer";
import LetsTalk from "@/components/ui/LetsTalk";
import SplashScreen from "@/components/ui/SplashScreen";
import './page.scss'
import NewFooter from "@/components/ui/newFooter";


export default function Home() {
    const [refFrantSection, isFrantSectionVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '0px',
        threshold: 0.1
    });

    const [isLetsTalkHide, setLetsTalkHide] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setLetsTalkHide(!isLetsTalkHide)
    }, [isFrantSectionVisible]);



    const cursorRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        const onMouseMove = (e) => {
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.2,
                    ease: 'power3.out',
                });
            }
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <ReactLenis root>
                <div
                    ref={cursorRef}
                    className="custom-cursor"
                />
                {/*<SplashScreen/>*/}
                <Header
                    hide={isFrantSectionVisible}
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
                    <InfinitySlider/>
                    <CheckSection/>
                    <TimeInfoSection setIsLoading={setIsLoading}/>
                </main>
                <div id="spacer"></div>
                {/*<Footer/>*/}
                <NewFooter/>
                <LetsTalk hide={isLetsTalkHide} setIsLoading={setIsLoading}/>
            </ReactLenis>
        </>
    );
}