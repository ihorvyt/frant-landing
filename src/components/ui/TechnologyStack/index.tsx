'use client';

import React from "react";
import './TechnologyStack.scss'
import Typewriter from "@/components/Typewriter";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import {useTranslations} from "next-intl";

const Index = () => {
    const t = useTranslations('');
    const [refTechnologies, isTechnologiesVisible] = useIntersectionObserver({
        root: null, // використовувати viewport
        rootMargin: '100px',
        threshold: 0.001
    });
    const technologies = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "jQuery",
        "Bootstrap",
        "Sass",
        "Webpack",
        "Gulp",
        "Babel",
        "npm",
        "Yarn",
        "Node.js",
        "Java",
        "Python",
        "PHP",
        "Express.js",
        "Spring Boot",
        "Django",
        "Laravel",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "REST",
        "GraphQL",
        "SOAP",
        "JWT",
        "OAuth",
        "Passport.js",
        "Sql"
    ]

    const chunkSize = 11;

    const chunkedTechnologies = [];
    for (let i = 0; i < technologies.length; i += chunkSize) {
        chunkedTechnologies.push(technologies.slice(i, i + chunkSize));
    }

    return (
        <>
            <section className="stack-technologies">
                <div ref={refTechnologies} className="stack-technologies-title">
                    <h4>{isTechnologiesVisible ? <Typewriter text={t('Stack technology')} delay={50} startDelay={0} /> : 'Stack technology'} </h4>
                </div>
                <div className="stack-technologies-container">
                    {chunkedTechnologies.map((techChunk, index) => (
                        <div key={index} className="stack-technologies-row">
                            {techChunk.map(technologie => (
                                <div
                                    key={technologie}
                                    className={`technology-circle`}
                                    style={{ animation: `fade-out 0.8s forwards ${index * 0.2}s` }}
                                >
                                    <span>{technologie}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </>

    );
};

export default Index;