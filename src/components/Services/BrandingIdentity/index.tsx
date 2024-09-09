import './brandIdentity.scss'
import ServiceInfoContainer from "@/components/Services/ServiceInfoContainer";
import React, {forwardRef, useEffect} from "react";
import Glob3D from "@/components/Glob/Glob3D";


interface IModel {
    modelName: string;
}

interface BrantProps {
    showModel: IModel;
}

const Index = forwardRef<HTMLDivElement, BrantProps>((props, ref) => {
    const { showModel } = props;
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);
    return (
        <section id='branding' ref={ref} className="brand-ident-section">
            <div className="brand-ident-container">
                <ServiceInfoContainer title="Branding <br/> & <br/> Identity"
                                      description="No Generic Templates Allowed."/>
            </div>

            <div className={`model-mob`}>
                {showModel.modelName !== '' && isMobile &&  showModel.modelName !== 'none' &&
                    <Glob3D
                        modelName={'eye'}
                        rotate={true}
                        size={1.40}
                        color={'red'}
                    />
                }
            </div>
        </section>
);
})

export default Index;