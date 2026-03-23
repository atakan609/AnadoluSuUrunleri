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
            {/* Arka Plan Görseli */}
            <div
                ref={heroRef}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}images/hero.png)`,
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
                }}
            >
                <div className="absolute inset-0 bg-backgroundMain-600/20 mix-blend-multiply"></div>
            </div>

            {/* İçerik */}
            <div className="relative z-30 container mx-auto h-full pt-30 flex flex-col justify-center items-center text-center">
                {/* Metinler kaldırıldı - Şirket ismi Navbar logosunda yer alıyor */}

                {/* Kaydırma Göstergesi */}
                <div className="absolute bottom-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-sky-400 rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
