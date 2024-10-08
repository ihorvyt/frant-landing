import React, {useEffect, useState} from 'react';
import './SiteVariation.scss'
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import {useTranslations} from "next-intl";

type ServiceCategoryProps = {
    title: string;
    services: string[];
};

const ServiceCategory = ({ title, services }: ServiceCategoryProps) => {
    const t = useTranslations('Variations');

    return (
        <div className="site-variation-column">
            {services.map((service, index) => (
                <div
                    key={service}
                    className={`site-variation-element`}
                    style={{animation: `fade-out 0.8s forwards ${index * 0.2}s`}} // Adjust the delay per element
                >
                    <span>{t(`${title}.${index}`)}</span>
                </div>
            ))}
        </div>
    )
}


const Index = () => {
    const servicesData = {
        "services": {
            "website_types": [
                "Corporate Websites",
                "E-commerce Websites",
                "Landing Pages",
                "Web Applications (CRM)",
                "Blogs & Content Websites",
                "Portfolio Websites"
            ],
            "specialized_websites": [
                "Healthcare & Medical Websites",
                "Educational Websites",
                "Customer Support Websites",
                "Custom Development"
            ],
            "design_services": [
                "Website Design",
                "UI/UX Design",
                "Graphic Design",
                "Digital Design",
                "Motion Graphics & Animation"
            ]
        }
    }


    const [refSiteVariations, isSiteVariationsVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '-100px',
        threshold: 0.001
    });

    const [stayShown, setStayShown] = useState<boolean>(false);

    useEffect(() => {
        if (isSiteVariationsVisible) {
            setStayShown(true)
        }
    }, [isSiteVariationsVisible]);

    return (
        <section ref={refSiteVariations} className="site-variations">
            {
                (isSiteVariationsVisible || stayShown) && <div className="site-variation-container">
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
            }
        </section>
    );
};

export default Index;