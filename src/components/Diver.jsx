import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Diver = () => {
    const containerRef = useRef(null);
    const diverRef = useRef(null);

    const bubbleRef = useRef(null);

    useEffect(() => {


        // Diver Animation path
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top ",
                end: "bottom bottom",
                scrub: true,
            }
        });

        // Animate the diver down
        // 1. Initial dip to right
        tl.to(diverRef.current, {
            x: '30vw',
            y: '-25vh',
            rotation: 40,
            ease: 'sine.inOut',
            duration: .8
        })
            .to(diverRef.current, {
                rotation: 70,
                ease: 'sine.inOut',
                duration: .8
            })
            // 2. Swing back to left
            .to(diverRef.current, {
                x: '-30vw',
                ease: 'sine.inOut',
                duration: .8
            },"-=.6")
            // 3. Swing to right again
            .to(diverRef.current, {
                x: '-30vw',
                rotation: 30,
                ease: 'sine.in',
                duration: 0
            })
            // 4. Final glid to far left
            .to(diverRef.current, {
                x: '0vw',
                rotation: -60,
                ease: 'sine.in',
                duration: 1
            });

        // Bubbles
        gsap.to(bubbleRef.current, {
            y: -80,
            opacity: 0,
            duration: 2.5,
            repeat: -1,
            stagger: 0.2,
            ease: "power1.out",
        });

    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-40 overflow-hidden">


            {/* Diver moves relative to viewport but controlled by scroll */}
            <div
                ref={diverRef}
                className="absolute top-[60%] left-[32%] w-[32rem] md:w-[40rem] mix-blend-screen"
            >
                <img src="/images/diver.png" alt="Diver" className="w-full opacity-90 brightness-75 contrast-125 transform rotate-90" />

                {/* Bubbles */}
                <div ref={bubbleRef} className="absolute -top-10 right-10 flex flex-col gap-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`w-${i === 1 ? '3' : '2'} h-${i === 1 ? '3' : '2'} rounded-full border border-white/60`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Diver;
