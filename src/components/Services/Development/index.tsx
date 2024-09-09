import './development.scss'
import ServiceInfoContainer from "@/components/Services/ServiceInfoContainer";
import React, {forwardRef, useEffect} from "react";
import Glob3D from "@/components/Glob/Glob3D";

interface IModel {
    modelName: string;
}

interface DevelopmentProps {
    showModel: IModel;
}

const Index = forwardRef<HTMLDivElement, DevelopmentProps>((props, ref) => {
    const { showModel } = props;
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);

    return (
        <section ref={isMobile ? null : ref}  id='development'   className="development-section">
            <div className="development-container">
                <ServiceInfoContainer title="Development"
                                      description="Craft with newest tech, all the way – JQuery, not today."/>
            </div>
            <div ref={isMobile ? ref : null} className={`model-mob`}>
                {showModel.modelName !== '' && showModel.modelName !== 'none' && isMobile &&
                    <Glob3D
                        modelName={'cursor'}
                        rotate={true}
                        size={1.0}
                        color={'blue'}
                    />
                   }
            </div>
        </section>
    );
})

export default Index;