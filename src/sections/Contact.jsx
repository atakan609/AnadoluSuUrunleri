import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const formRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            formRef.current,
            { opacity: 0, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <section id="contact" className="py-24 bg-navy-800 relative">
            <div className="container mx-auto px-6 relative z-30">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-cyan-600">İletişime</span> Geçin
                    </h2>
                    <p className="text-text-dim max-w-xl mx-auto">
                        Ürünlerimizle ilgileniyor veya sürdürülebilirlikle ilgili bir sorunuz mu var? Size yardımcı olmaktan memnuniyet duyarız.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-navy-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row" ref={formRef}>
                    <div className="md:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-br from-navy-800 to-navy-900">
                        <h3 className="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h3>
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-cyan-600 text-sm uppercase tracking-wider mb-1">Merkez</h5>
                                <p className="text-text-light">123 Okyanus Caddesi, Liman Şehri</p>
                                <p className="text-text-light">HC 90210, Amerika Birleşik Devletleri</p>
                            </div>
                            <div>
                                <h5 className="text-cyan-600 text-sm uppercase tracking-wider mb-1">Satış</h5>
                                <p className="text-text-light">+1 (555) 123-4567</p>
                                <p className="text-text-light">sales@deepocean.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 p-10 bg-navy-900">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-text-dim text-sm mb-2">İsim</label>
                                <input
                                    type="text"
                                    className="w-full bg-navy-800 border border-navy-700 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors"
                                    placeholder="İsim Soyisim"
                                />
                            </div>
                            <div>
                                <label className="block text-text-dim text-sm mb-2">E-posta</label>
                                <input
                                    type="email"
                                    className="w-full bg-navy-800 border border-navy-700 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors"
                                    placeholder="isim@ornek.com"
                                />
                            </div>
                            <div>
                                <label className="block text-text-dim text-sm mb-2">Mesaj</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-navy-800 border border-navy-700 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors"
                                    placeholder="Size nasıl yardımcı olabiliriz?"
                                ></textarea>
                            </div>
                            <button className="w-full bg-cyan-600 text-navy-900 font-bold py-3 rounded hover:bg-cyan-600/90 transition-all uppercase tracking-widest">
                                Mesaj Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
