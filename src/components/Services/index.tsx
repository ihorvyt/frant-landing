import './sevices.scss'
import Design from "@/components/Services/Design";
import Development from "@/components/Services/Development";
import BrandIdentity from "@/components/Services/BrandingIdentity";
import React from "react";
import Glob3D from "@/components/Glob/Glob3D";

const Index = () => {
    return (
        <section className="services">
            <Design/>
            <Glob3D modelName='head'/>
            <Development/>
            <Glob3D modelName='cursor'/>
            <BrandIdentity/>
            <Glob3D modelName='aye'/>
        </section>
    );
};

export default Index;