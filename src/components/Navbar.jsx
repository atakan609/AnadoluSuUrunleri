import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Products', href: '#products' },
        { name: 'Sustainability', href: '#sustainability' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 text-2xl font-bold text-cyan tracking-wider">
                    <Anchor className="w-8 h-8" />
                    <span>DEEP<span className="text-white">OCEAN</span></span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-text-light hover:text-cyan transition-colors text-sm font-medium uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="border border-cyan text-cyan px-6 py-2 rounded hover:bg-cyan/10 transition-colors uppercase text-sm tracking-widest">
                        Order Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-cyan focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-navy-800 shadow-xl border-t border-navy-700">
                    <div className="flex flex-col py-6 px-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-text-light hover:text-cyan text-lg py-2 border-b border-navy-700 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
