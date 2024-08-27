import React from 'react';
import './design.scss'
import ServiceInfoContainer from "@/components/Services/ServiceInfoContainer";

const Index = () => {
    return (
        <section className="design-section">
            <div className="design-container">
                <ServiceInfoContainer title="Design" description="Websites that look awesome and work even better — jealous competitors included."/>
            </div>
        </section>
    );
};

export default Index;