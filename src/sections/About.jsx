import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            contentRef.current.children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <section id="about" className="py-64 bg-navy-900 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-30 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2" ref={contentRef}>
                    <h4 className="text-cyan-600 font-bold uppercase tracking-widest mb-2">Hikayemiz</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Denizin <br />Hakkımızda, misyonumuz ve vizyonumuz, çiftliklerimiz, iletişim, merak edilenler? 
                    </h2>
                    <p className="text-text-light text-lg mb-6 leading-relaxed">
                        2020 yılında kurulan Anadolu Su Ürünleri, sürdürülebilir midye uygulamalarında öncü olmuştur. En iyi deniz ürünlerinin okyanusa saygılı bir ilişkiyle elde edildiğine inanıyoruz.
                    </p>
                    <p className="text-text-dim leading-relaxed mb-8">
                        Filomuz deniz ekosistemi üzerinde en az etkiyi yaratacak şekilde çalışır; böylece gelecek nesiller de aynı zenginlikten faydalanmaya devam edebilir.
                    </p>
                    <div className="flex gap-8">
                        <div>
                            <span className="block text-4xl font-bold text-white mb-1">6.000+</span>
                            <span className="text-text-dim text-sm uppercase tracking-wider">Ton Üretim</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold text-white mb-1">100%</span>
                            <span className="text-text-dim text-sm uppercase tracking-wider">Sürdürülebilir</span>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2">
                    {/* Abstract visual representation instead of another image to save gen costs and add variety */}
                    <div className="border border-navy-700 p-8 rounded-2xl bg-navy-800/50 backdrop-blur-sm relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyan-600 rounded-tl-3xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyan-600 rounded-br-3xl"></div>

                        <h3 className="text-2xl text-white font-bold mb-6 text-center">Taahhüdümüz</h3>
                        <ul className="space-y-4">
                            {[
                                'Deniz Yönetimi Konseyi (MSC) Sertifikalı',
                                'Sıfır Atık İşleme Tesisleri',
                                'Karbon Nötr Lojistik Zinciri',
                                'Yerel Balıkçı Topluluklarını Destekleme'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-text-light">
                                    <div className="w-2 h-2 bg-cyan-600 rounded-full shadow-[0_0_10px_rgba(100,255,218,0.5)]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
