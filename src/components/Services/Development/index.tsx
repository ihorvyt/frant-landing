import './development.scss'
import ServiceInfoContainer from "@/components/Services/ServiceInfoContainer";
import {forwardRef} from "react";

const Index = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section ref={ref} className="development-section">
            <div className="development-container">
                <ServiceInfoContainer title="Development" description="Craft with newest tech, all the way – JQuery, not today."/>
            </div>
        </section>
    );
})

export default Index;