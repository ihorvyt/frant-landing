import './brandIdentity.scss'
import ServiceInfoContainer from "@/components/Services/ServiceInfoContainer";

const Index = () => {
    return (
        <section className="brand-ident-section">
            <div className="brand-ident-container">
                <ServiceInfoContainer title="Branding <br/> & <br/> Identity" description="No Generic Templates Allowed."/>
            </div>
        </section>
    );
};

export default Index;