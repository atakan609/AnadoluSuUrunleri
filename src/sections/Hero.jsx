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
        <section className="relative z-0 h-screen w-full overflow-hidden">
            {/* Arka Plan Görseli */}
            <div
                ref={heroRef}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}images/hero.png)`,
                }}
            >
                <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
                {/* Temel renge geçiş gradyanı */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900"></div>
            </div>

            {/* İçerik */}
            <div className="relative z-30 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                <h1
                    ref={textRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase tracking-wider"
                >
                    Anadolu Su<span className="text-cyan-900 block md:inline"> Ürünlerİ</span>
                </h1>
                <p
                    ref={subRef}
                    className="text-lg md:text-2xl text-text-light max-w-2xl font-light tracking-wide leading-relaxed"
                >
                    Sürdürülebilir deniz ürünlerinin saf kalitesini keşfedin; en soğuk ve en temiz sulardan hasat edilir.
                </p>

                {/* Kaydırma Göstergesi */}
                <div className="absolute bottom-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-cyan-600 rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-cyan-600 rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
