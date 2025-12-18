import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Diver = () => {
    const containerRef = useRef(null);
    const diverRef = useRef(null);

    const bubbleRef = useRef(null);

    useEffect(() => {


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
            y: '-25vh',
            rotation: 40,
            ease: 'sine.inOut',
            opacity: 1,
            duration: 1.4
        })
            .to(diverRef.current, {
                rotation: 70,
                ease: 'sine.inOut',
                duration: .8
            })
            // 2. Sola geri sallanma
            .to(diverRef.current, {
                x: '-30vw',
                ease: 'sine.inOut',
                duration: .8
            },"-=.6")
            // 3. Yeniden sağa sallanma
            .to(diverRef.current, {
                x: '-30vw',
                rotation: 30,
                ease: 'sine.in',
                duration: 1
            })
            // 4. Son olarak uzağa sola kayma
            .to(diverRef.current, {
                x: '0vw',
                rotation: -60,
                ease: 'sine.in',
                duration: 1
            });

        // Kabarcıklar
        /* gsap.to(bubbleRef.current, {
            y: -80,
            opacity: 0,
            duration: 2.5,
            repeat: -1,
            stagger: 0.2,
            ease: "power1.out",
        }); */

    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">


            {/* Dalgıç görünüm penceresine göre hareket eder ancak kaydırma ile kontrol edilir */}
            <div
                ref={diverRef}
                className="absolute top-[60%] left-[37vw] w-[32rem] md:w-[40rem] opacity-0 mix-blend-normal pointer-events-none"
            >
                <img src={`${import.meta.env.BASE_URL}images/diver.png`} alt="Dalgıç" className="w-full brightness-90 contrast-110 transform rotate-90" />

                {/* Bubbles 
                <div ref={bubbleRef} className="absolute -top-10 right-10 flex flex-col gap-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`w-${i === 1 ? '3' : '2'} h-${i === 1 ? '3' : '2'} rounded-full border border-white/60`}></div>
                    ))}
                </div> */}
                
            </div>
        </div>
    );
};

export default Diver;
