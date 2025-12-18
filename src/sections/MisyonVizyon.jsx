import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MisyonVizyon = () => {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ref.current.children,
            { opacity: 0, y: 24 },
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 85%'
                }
            }
        );
    }, []);

    return (
        <section id="misyon-vizyon" className="py-32 bg-navy-900 relative">
            <div className="container mx-auto px-6 relative z-30" ref={ref}>
                <h4 className="text-cyan-600 font-bold uppercase tracking-widest mb-2">Değerlerimiz</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Misyonumuz & Vizyonumuz</h2>

                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div className="bg-navy-800 p-6 rounded-xl bg-navy-800/50 backdrop-blur-sm border border-navy-700">
                        <h3 className="text-xl font-semibold text-white mb-3">Misyonumuz</h3>
                        <p className="text-text-light leading-relaxed">
                            Anadolu Su Ürünleri olarak, kaliteli ve sürdürülebilir deniz ürünleri üretimini
                            sağlarken deniz ekosistemini korumayı, yerel toplulukları güçlendirmeyi ve
                            şeffaf tedarik zinciri sunmayı hedefliyoruz.
                        </p>
                    </div>

                    <div className="bg-navy-800 p-6 rounded-xl bg-navy-800/50 backdrop-blur-sm border border-navy-700">
                        <h3 className="text-xl font-semibold text-white mb-3">Vizyonumuz</h3>
                        <p className="text-text-light leading-relaxed">
                            Bölgesel ölçekte lider bir sürdürülebilir su ürünleri markası olmak; inovasyon,
                            eğitim ve çevresel sorumlulukla sektöre örnek teşkil etmek.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MisyonVizyon;
