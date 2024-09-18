import React, {forwardRef, Ref, useEffect} from 'react';
import './design.scss';
import ServiceInfoContainer from "@/components/ui/Services/ServiceInfoContainer";
import Glob3D from "@/components/ui/Glob/Glob3D";
import {IServiceProps} from "@/types";
import {useTranslations} from "next-intl";


const Design = forwardRef<HTMLDivElement, IServiceProps>((props, ref) => {
    const t = useTranslations("Services")
    const { showModel, setIsLoading } = props;
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);

    return (
        <section id='design' ref={ref} className="design-section">
            <div className="design-container">
                <ServiceInfoContainer title={t("Design.title")} description={t("Design.description")} setIsLoading={setIsLoading}/>
            </div>
            <div className={`model-mob`}>
            {showModel.modelName !== '' && isMobile && showModel.modelName !== 'none' &&
                <Glob3D
                    modelName={'head'}
                    rotate={true}
                    size={1.20}
                    color={'green'}
                    windowSize={3}
                />
            }
            </div>
        </section>
    );
});

export default Design;
