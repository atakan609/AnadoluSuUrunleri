import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const farms = [
    { name: 'Ege Açık Deniz Çiftliği', desc: 'Doğal akıntı bölgelerinde sürdürülebilir üretim.' },
    { name: 'Marmara İç Körfez', desc: 'Kıyı dostu, düşük etki yetiştiricilik.' },
    { name: 'Karadeniz Fidanlığı', desc: 'Genetik çeşitliliğe önem veren alan.' }
];

const Ciftlikler = () => {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ref.current.querySelectorAll('.farm-card'),
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                scrollTrigger: { trigger: ref.current, start: 'top 85%' }
            }
        );
    }, []);

    return (
        <section id="ciftlikler" className="py-32 bg-navy-950 relative">
            <div className="container mx-auto px-6 relative z-30" ref={ref}>
                <h4 className="text-cyan-600 font-bold uppercase tracking-widest mb-2">Saha Ağı</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Çiftliklerimiz</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {farms.map((f, i) => (
                        <div key={i} className="farm-card bg-navy-800/50 backdrop-blur-sm bg-navy-800 p-5 rounded-lg border border-navy-700">
                            <h3 className="text-lg font-semibold text-white mb-2">{f.name}</h3>
                            <p className="text-text-light text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ciftlikler;
