import './sevices.scss'
import Design from "@/components/Services/Design";
import Development from "@/components/Services/Development";
import BrandIdentity from "@/components/Services/BrandingIdentity";
import React from "react";

const Index = () => {
    return (
        <section className="services">
            <Design/>
            <Development/>
            <BrandIdentity/>
        </section>
    );
};

export default Index;