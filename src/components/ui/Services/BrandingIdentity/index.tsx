import './brandIdentity.scss'
import ServiceInfoContainer from "@/components/ui/Services/ServiceInfoContainer";
import React, {forwardRef, useEffect} from "react";
import Glob3D from "@/components/ui/Glob/Glob3D";
import {IServiceProps} from "@/types";



const Index = forwardRef<HTMLDivElement, IServiceProps>((props, ref) => {
    const { showModel, setIsLoading } = props;
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);
    return (
        <section id='branding' ref={ref} className="brand-ident-section">
            <div className="brand-ident-container">
                <ServiceInfoContainer
                    title="Branding <br/> & <br/> Identity"
                    description="No Generic Templates Allowed."
                    setIsLoading={setIsLoading}
                />
            </div>

            <div className={`model-mob`}>
                {showModel.modelName !== '' && isMobile &&  showModel.modelName !== 'none' &&
                    <Glob3D
                        modelName={'eye'}
                        rotate={true}
                        size={1.40}
                        color={'red'}
                        windowSize={3}
                    />
                }
            </div>
        </section>
);
})

export default Index;