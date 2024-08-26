'use client';

import React from "react";
import './TechnologyStack.scss'

const Index = () => {
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

    const [active, setActive] = React.useState<string | null>(null);
    const chunkSize = 11;

    const chunkedTechnologies = [];
    for (let i = 0; i < technologies.length; i += chunkSize) {
        chunkedTechnologies.push(technologies.slice(i, i + chunkSize));
    }

    return (
        <>
            <section className="stack-technologies">
                <div className="stack-technologies-title">
                    <h4>Stack technology</h4>
                </div>
                <div className="stack-technologies-container">
                    {chunkedTechnologies.map((techChunk, index) => (
                        <div key={index} className="stack-technologies-row">
                            {techChunk.map(technologie => (
                                <div
                                    key={technologie}
                                    className={`technology-circle 
                                    ${active === technologie ? 'active' : ''}
                                `}
                                    onMouseOver={() => setActive(technologie)}
                                    onMouseLeave={() => setActive(null)}
                                >
                                    <span>{active === technologie ? technologie : ''}</span>
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