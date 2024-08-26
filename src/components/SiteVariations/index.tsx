import React from 'react';
import './SiteVariation.scss'

type ServiceCategoryProps = {
    title: string;
    services: string[];
};

const ServiceCategory = ({ title, services }: ServiceCategoryProps) => (
    <div className="site-variation-column">
        {services.map((service) => (
            <div key={service} className="site-variation-element">
                <span>{service}</span>
            </div>
        ))}
    </div>
);


const Index = () => {
    const servicesData  = {
        "services": {
            "website_types": [
                "Corporate Websites",
                "E-commerce Websites",
                "Landing Pages",
                "Web Applications (CRM)",
                "Blogs and Content Websites",
                "Portfolio Websites"
            ],
            "specialized_websites": [
                "Healthcare and Medical Websites",
                "Educational Websites",
                "Customer Support Websites",
                "Custom Development"
            ],
            "design_services": [
                "Website Design",
                "UI/UX Design",
                "Graphic Design",
                "Digital Design",
                "Motion Graphics and Animation"
            ]
        }
    }


    return (
        <section className="site-variations">
            <div className="site-variation-container">
                <ServiceCategory
                    title="Website Types"
                    services={servicesData.services.website_types}
                />
                <ServiceCategory
                    title="Specialized Websites"
                    services={servicesData.services.specialized_websites}
                />
                <ServiceCategory
                    title="Design Services"
                    services={servicesData.services.design_services}
                />
            </div>
        </section>
    );
};

export default Index;