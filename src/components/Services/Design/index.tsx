import React, { forwardRef, Ref } from 'react';
import './design.scss';
import ServiceInfoContainer from "@/components/Services/ServiceInfoContainer";

interface DesignProps {
    // Add any other props if needed
}

const Design = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section ref={ref} className="design-section">
            <div className="design-container">
                <ServiceInfoContainer title="Design" description="Websites that look awesome and work even better — jealous competitors included."/>
            </div>
        </section>
    );
});

export default Design;
