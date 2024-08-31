import './brandIdentity.scss'
import ServiceInfoContainer from "@/components/Services/ServiceInfoContainer";
import {forwardRef} from "react";

const Index = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section ref={ref} className="brand-ident-section">
            <div className="brand-ident-container">
                <ServiceInfoContainer title="Branding <br/> & <br/> Identity" description="No Generic Templates Allowed."/>
            </div>
        </section>
    );
})

export default Index;