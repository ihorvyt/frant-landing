import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';

const Index: React.FC = () => {
    // Create refs for the cursor elements
    const bigBallRef = useRef<HTMLDivElement | null>(null);
    const smallBallRef = useRef<HTMLDivElement | null>(null);
    const hoverablesRef = useRef<NodeListOf<HTMLElement> | null>(null);

    useEffect(() => {
        const $bigBall = bigBallRef.current;
        const $smallBall = smallBallRef.current;

        if ($bigBall && $smallBall) {
            // Function to handle cursor movement
            const onMouseMove = (e: MouseEvent) => {
                TweenMax.to($bigBall, 0.4, {
                    x: e.pageX - 15,
                    y: e.pageY - 15
                });
                TweenMax.to($smallBall, 0.1, {
                    x: e.pageX - 5,
                    y: e.pageY - 7
                });
            };

            // Function to handle hover effect
            const onMouseHover = () => {
                TweenMax.to($bigBall, 0.3, {
                    scale: 3,
                    top: 20,
                    left: 20
                });
            };

            const onMouseHoverOut = () => {
                TweenMax.to($bigBall, 0.3, {
                    scale: 1,
                    top: 0,
                    left: 0
                });
            };

            // Attach event listeners
            document.body.addEventListener('mousemove', onMouseMove);

            // Apply hover effects to hoverable elements
            const hoverables = document.querySelectorAll<HTMLElement>('.hoverable');
            hoverables.forEach((hoverable) => {
                hoverable.addEventListener('mouseenter', onMouseHover);
                hoverable.addEventListener('mouseleave', onMouseHoverOut);
            });

            // Clean up event listeners on component unmount
            return () => {
                document.body.removeEventListener('mousemove', onMouseMove);
                hoverables.forEach((hoverable) => {
                    hoverable.removeEventListener('mouseenter', onMouseHover);
                    hoverable.removeEventListener('mouseleave', onMouseHoverOut);
                });
            };
        }
    }, []);

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
