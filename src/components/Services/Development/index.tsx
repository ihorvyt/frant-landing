import './development.scss'
import ServiceInfoContainer from "@/components/Services/ServiceInfoContainer";

const Index = () => {
    return (
        <section className="development-section">
            <div className="development-container">
                <ServiceInfoContainer title="Development" description="Craft with newest tech, all the way – JQuery, not today."/>
            </div>
        </section>
    );
};

export default Index;