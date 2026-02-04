import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const farms = [
    { name: 'Ege Açık Deniz Çiftliği', desc: 'Doğal akıntı bölgelerinde sürdürülebilir üretim.', image: 'farm1.png' },
    { name: 'Marmara İç Körfez', desc: 'Kıyı dostu, düşük etki yetiştiricilik.', image: 'farm2.png' },
    { name: 'Karadeniz Fidanlığı', desc: 'Genetik çeşitliliğe önem veren alan.', image: 'farm3.png' }
];

const Farms = () => {
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
        <section id="ciftlikler" className="py-32 relative">
            <div className="container mx-auto px-6 relative z-30" ref={ref}>
                <h4 className="text-sky-400 font-bold uppercase tracking-widest mb-2">Saha Ağı</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Çiftliklerimiz</h2>

                <div className="grid md:grid-cols-3 gap-6 overflow-hidden">
                    {farms.map((f, i) => (
                        <div key={i} className="farm-card backdrop-blur-sm bg-backgroundMain-700 rounded-lg border border-navy-700 overflow-hidden relative group cursor-pointer h-96">
                            <img
                                src={`${import.meta.env.BASE_URL}images/${f.image}`}
                                alt={f.name}
                                className="w-full h-64 object-cover transition-all duration-500 ease-out group-hover:h-full group-hover:absolute group-hover:inset-0 group-hover:z-0"
                            />
                            <div className="p-5 relative z-10 transition-all duration-300">
                                <h3 className="text-lg font-semibold text-white tracking-wide text-outline-strong mb-2">{f.name}</h3>
                                <p className="text-text-light text-sm group-hover:hidden">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Farms;
