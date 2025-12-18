import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        id: 1,
        name: 'Atlantik Somon',
        description: 'Kuzey Atlantik in soğuk sularında sürdürülebilir şekilde yetiştirilir. Zengin lezzet, sıkı doku.',
        image: `${import.meta.env.BASE_URL}images/salmon.png`,
    },
    {
        id: 2,
        name: 'Pasifik İstiridyeleri',
        description: 'Günlük hasat edilir. Tatlı, gevrek ve tuzlu bir lezzete sahiptir.',
        image: `${import.meta.env.BASE_URL}images/oysters.png`,
    },
    {
        id: 3,
        name: 'Kral Yengeç Bacakları',
        description: 'Denizin taç mücevheri. Tatlı, yumuşak beyaz et ve narin bir lezzet.',
        image: `${import.meta.env.BASE_URL}images/salmon.png`, // Placeholder reuse until requested otherwise or additional gen
    }
];

const Products = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        );

        const cards = gsap.utils.toArray('.product-card');
        cards.forEach((card, i) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    },
                }
            );
        });
    }, []);

    return (
        <section id="products" ref={sectionRef} className="py-24 bg-navy-800 relative">
            <div className="container mx-auto px-6 relative z-30">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Seçkin <span className="text-cyan-600">Ürünler</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product-card group relative overflow-hidden rounded-xl bg-navy-900 shadow-xl border border-navy-700 hover:border-cyan-600 transition-all duration-300"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-600 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-text-dim leading-relaxed mb-6">
                                    {product.description}
                                </p>
                                <button className="text-cyan-600 font-semibold uppercase tracking-wider text-sm hover:text-white transition-colors flex items-center gap-2">
                                    Detayları Gör
                                    <span className="text-xl">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
