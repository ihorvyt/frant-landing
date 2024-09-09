import React, { forwardRef, Ref } from 'react';
import './design.scss';
import ServiceInfoContainer from "@/components/Services/ServiceInfoContainer";
import Glob3D from "@/components/Glob/Glob3D";

interface IModel {
    modelName: string;
}

interface DesignProps {
    showModel: IModel;
}

const Design = forwardRef<HTMLDivElement, DesignProps>((props, ref) => {
    const { showModel } = props;

    return (
        <section id='design' ref={ref} className="design-section">
            <div className="design-container">
                <ServiceInfoContainer title="Design" description="Websites that look awesome and work even better — jealous competitors included."/>
            </div>
            <div className={`model-mob`}>
            {showModel.modelName !== '' && showModel.modelName !== 'none' &&
                <Glob3D
                    modelName={'head'}
                    rotate={true}
                    size={1.20}
                    color={'green'}
                />
            }
            </div>
        </section>
    );
});

export default Design;
