import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
        { name: 'Hakkımızda', href: '#about' },
        { name: 'Ürünler', href: '#products' },
        { name: 'Sürdürülebİlİrlİk', href: '#sustainability' },
        { name: 'İletİşİm', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-400 backdrop-blur-md shadow-lg py-4' : 'py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3">
                    <div className="relative flex items-center">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-12 h-12 bg-cyan-600/20 rounded-full blur-xl" />
                        </div>
                        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Anadolu Su Ürünleri" className="w-10 h-10 object-contain relative z-10" />
                    </div>
                    <span className="text-2xl font-bold text-cyan-600 tracking-wider">Anadolu Su <span className="text-white">Ürünleri</span></span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-text-light hover:text-cyan-600 transition-colors text-sm font-medium uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="border border-cyan-600 text-cyan-600 px-6 py-2 rounded hover:bg-cyan-600/10 transition-colors uppercase text-sm tracking-widest">
                        Sipariş Ver
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-cyan-600 focus:outline-none"
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
                                className="text-text-light hover:text-cyan-600 text-lg py-2 border-b border-navy-700 last:border-0"
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
