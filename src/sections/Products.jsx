import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        id: 1,
        name: 'Atlantic Salmon',
        description: 'Sustainably raised in the icy waters of the North Atlantic. Rich flavor, firm texture.',
        image: `${import.meta.env.BASE_URL}images/salmon.png`,
    },
    {
        id: 2,
        name: 'Pacific Oysters',
        description: 'Harvested daily. Sweet, crisp, and briny flavor with a clean finish.',
        image: `${import.meta.env.BASE_URL}images/oysters.png`,
    },
    {
        id: 3,
        name: 'King Crab Legs',
        description: 'The crowning jewel of the sea. Sweet, tender white meat with a delicate flavor.',
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
        <section id="products" ref={sectionRef} className="py-24 bg-navy-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Premium <span className="text-cyan">Selection</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product-card group relative overflow-hidden rounded-xl bg-navy-900 shadow-xl border border-navy-700 hover:border-cyan transition-all duration-300"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-text-dim leading-relaxed mb-6">
                                    {product.description}
                                </p>
                                <button className="text-cyan font-semibold uppercase tracking-wider text-sm hover:text-white transition-colors flex items-center gap-2">
                                    View Details
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
