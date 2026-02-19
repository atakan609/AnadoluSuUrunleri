import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useForm, ValidationError } from '@formspree/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const formRef = useRef(null);
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

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
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6 relative z-30">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-sky-400">İletişime</span> Geçin
                    </h2>
                    <p className="text-text-light max-w-xl mx-auto">
                        Ürünlerimizle ilgileniyor veya sürdürülebilirlikle ilgili bir sorunuz mu var? Size yardımcı olmaktan memnuniyet duyarız.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row" ref={formRef}>
                    <div className="md:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-l from-backgroundMain-600 to-backgroundMain-700">
                        <h3 className="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h3>
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-cyan-600 text-sm uppercase tracking-wider mb-1">Merkez</h5>
                                <span >Mersinli Mah. 1201/1 Sk. No:2/20 <br /> Su Plaza Kat: 5 D: 503 Konak/İzmir, Türkiye</span>
                            </div>
                            <div>
                                <h5 className="text-cyan-600 text-sm uppercase tracking-wider mb-1">İletişim</h5>
                                <p className="text-text-light">+90 (542) 740 4903</p>
                                <p className="text-text-light">anadolumidye@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 p-10 bg-backgroundMain-700">
                        {state.succeeded ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white">Teşekkürler!</h3>
                                <p className="text-text-light">Mesajınız başarıyla iletildi. En kısa sürede size geri dönüş yapacağız.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-text-light text-sm mb-2">İsim</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        className="w-full bg-backgroundMain-800 border border-navy-700 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors"
                                        placeholder="İsim Soyisim"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        errors={state.errors}
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-text-light text-sm mb-2">E-posta</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="w-full bg-backgroundMain-800 border border-navy-700 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors"
                                        placeholder="isim@ornek.com"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-text-light text-sm mb-2">Mesaj</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="w-full bg-backgroundMain-800 border border-navy-700 rounded px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors"
                                        placeholder="Size nasıl yardımcı olabiliriz?"
                                        required
                                    ></textarea>
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full bg-sky-400 text-backgroundMain-900 font-bold py-3 rounded hover:bg-sky-600/80 transition-all uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {state.submitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
