'use client'
import React from "react";

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

export default function Home() {
    return (<>
        <Header/>
        <main>
            <TimeInfoSection/>
            <CheckSection/>
            <InfinitySlider />
            <Globus/>
            <TechnologyStack/>
            <SiteVariations/>
            <FrantSection/>
            <Design/>
            <Development/>
            <BrandIdentity/>
        </main>
    </>);
}
