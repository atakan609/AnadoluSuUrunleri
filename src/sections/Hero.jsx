import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const subRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            heroRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: 'power2.out' }
        )
            .fromTo(
                textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.5'
            )
            .fromTo(
                subRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.7'
            );
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                ref={heroRef}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                }}
            >
                <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
                {/* Gradient transition to base color */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                <h1
                    ref={textRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase tracking-wider"
                >
                    Taste the <span className="text-cyan block md:inline">Deep Ocean</span>
                </h1>
                <p
                    ref={subRef}
                    className="text-lg md:text-2xl text-text-light max-w-2xl font-light tracking-wide leading-relaxed"
                >
                    Discover the pristine quality of sustainable seafood, harvested from the coldest, purest waters.
                </p>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-cyan rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-cyan rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
