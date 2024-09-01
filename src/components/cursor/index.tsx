import React, { useEffect, useRef } from 'react';

const Index: React.FC = () => {
    // Create refs for the cursor elements
    const bigBallRef = useRef<HTMLDivElement | null>(null);
    const smallBallRef = useRef<HTMLDivElement | null>(null);
    const hoverablesRef = useRef<NodeListOf<HTMLElement> | null>(null);

    return (
        <div className="cursor">
            <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
                </svg>
            </div>

            <div className="cursor__ball cursor__ball--small" ref={smallBallRef}>
                <svg height="10" width="10">
                    <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
                </svg>
            </div>
        </div>
    );
};

export default Index;
