import React, { forwardRef, Ref } from 'react';
import './design.scss';
import ServiceInfoContainer from "@/components/Services/ServiceInfoContainer";
import Glob3D from "@/components/Glob/Glob3D";

const Design = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='design' ref={ref} className="design-section">
            <div className="design-container">
                <ServiceInfoContainer title="Design" description="Websites that look awesome and work even better — jealous competitors included."/>
            </div>
            {/*<Glob3D*/}
            {/*    modelName={'head'}*/}
            {/*    rotate={true}*/}
            {/*    size={1.10}*/}
            {/*    color={'green'}*/}
            {/*/>*/}
        </section>
    );
});

export default Design;
