import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Diver = () => {
    const containerRef = useRef(null);
    const diverRef = useRef(null);

    const bubbleRef = useRef(null);

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Dalgıç animasyon yolu
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top ",
                    end: "bottom bottom",
                    scrub: true,
                }
            });

            // Dalgıcı aşağı hareketlendir
            // 1. İlk sağa dalış
            tl.to(diverRef.current, {
                x: '30vw',
                y: '-50vh',
                ease: 'sine.inOut',
                opacity: 1,
                duration: .5
            })
                .to(diverRef.current, {
                    rotation: -30,
                    ease: 'sine.inOut',
                    duration: .25
                }, "<")
                .to(diverRef.current, {
                    rotation: 40,
                    ease: 'sine.inOut',
                    duration: .25
                }, "<.25")
                .to(diverRef.current, {
                    rotation: 100,
                    ease: 'sine.inOut',
                    duration: .2
                }, "+=.03")
                // 2. Sola geri sallanma
                .to(diverRef.current, {
                    x: '1.2vw',
                    ease: 'sine.inOut',
                    duration: .3
                }, "<.05")
                .to(diverRef.current, {
                    rotation: 50,
                    ease: 'sine.inOut',
                    duration: .15
                }, "<.15")
                // 4. Son olarak uzağa sola kayma
                .to(diverRef.current, {
                    x: '1.2vw',
                    rotation: -60,
                    ease: 'sine.in',
                    duration: 1
                });
        });

        return () => mm.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">


            {/* Dalgıç görünüm penceresine göre hareket eder ancak kaydırma ile kontrol edilir */}
            <div
                ref={diverRef}
                className="hidden md:block absolute top-[81vh] left-[32vw] w-[32rem] md:w-[40rem] opacity-0 mix-blend-normal pointer-events-none"
            >
                <img src={`${import.meta.env.BASE_URL}images/diver.png`} alt="Dalgıç" className="w-full brightness-90 contrast-110 transform rotate-90" />

            </div>
        </div>
    );
};

export default Diver;
