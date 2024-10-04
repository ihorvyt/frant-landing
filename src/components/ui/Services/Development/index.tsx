import './development.scss'
import ServiceInfoContainer from "@/components/ui/Services/ServiceInfoContainer";
import React, {forwardRef, useEffect} from "react";
import Glob3D from "@/components/ui/Glob/Glob3D";
import {IServiceProps} from "@/types";
import {useTranslations} from "next-intl";


const Index = forwardRef<HTMLDivElement, IServiceProps>((props, ref) => {
    const t = useTranslations("Services")
    const { showModel, setIsLoading } = props;
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);

    return (
        <section ref={isMobile ? null : ref}  id='development'   className="development-section">
            <div className="development-container">
                <ServiceInfoContainer
                    title={t("Development.title")}
                    description={t("Development.description")}
                    setIsLoading={setIsLoading}
                />
            </div>
            <div ref={isMobile ? ref : null} className={`model-mob`}>
                {showModel.modelName !== '' && showModel.modelName !== 'none' && isMobile &&
                    <Glob3D
                        modelName={'cursor'}
                        rotate={true}
                        size={1.0}
                        color={'blue'}
                        windowSize={3}
                        initialRotationY={2}
                    />
                   }
            </div>
        </section>
    );
})

export default Index;