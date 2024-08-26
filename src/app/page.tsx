'use client'
import React from "react";

import TechnologyStack from "@/components/TechnologyStack";
import Header from "@/components/Header/";
import Globus from "../components/Glob";
import FrantSection from "@/components/FrantSection";
import SiteVariations from "@/components/SiteVariations";
import InfinitySlider from "@/components/InfinitySlider";

export default function Home() {
    return (<>
        <Header/>
        <main>
            <InfinitySlider />
            {/*<Globus/>*/}
            {/*<TechnologyStack/>*/}
            {/*<SiteVariations/>*/}
            {/*<FrantSection/>*/}

            <div className="text">

            </div>
        </main>
    </>);
}
