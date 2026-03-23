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
        { name: 'Değerlerimiz', href: '#misyon-vizyon' },
        { name: 'Çiftliklerimiz', href: '#ciftlikler' },
        { name: 'İletişim', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();

        if (href === '#') {
            if (window.lenis) window.lenis.scrollTo(0);
            else window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsOpen(false);
            return;
        }

        const element = document.querySelector(href);
        if (!element) return;

        let offset = 0;
        const elemHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;

        // Element ekrana sığıyorsa ortala
        if (elemHeight < windowHeight) {
            offset = -1 * ((windowHeight - elemHeight) / 2);
        }

        if (window.lenis) {
            window.lenis.scrollTo(href, { offset });
        } else {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all overflow-hidden duration-300 ${scrolled ? 'backdrop-blur-md shadow-lg shadow-backgroundMain-400/30 py-1 bg-backgroundMain-400/30' : 'py-3'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="" onClick={(e) => handleNavClick(e, '#')}>
                    <div className="relative flex items-end">
                        <div className="relative">
                            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Resif & Anadolu Su Ürünleri" className="size-24 object-contain relative z-10" />
                            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 z-0 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                {/* Arkadaki geniş parıltı */}
                                <div className="w-20 h-20 bg-sky-500/80 rounded-full blur-2xl z-0" />
                                {/* Daha net merkez ışığı */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full blur-lg" />
                            </div>
                        </div>
                        <span className="text-sm font-bold text-sky-400 whitespace-nowrap tracking-wide text-outline-strong px-1.5 py-0.5 mb-[12px] -ml-1 relative z-20">
                            Resif & Anadolu
                            <span className="text-sm font-bold text-white whitespace-nowrap text-outline "> Su Ürünleri</span>
                        </span>

                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-sky-400 transition-colors text-lg font-normal  tracking-wide hover:text-outline"
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))}
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
                                onClick={(e) => handleNavClick(e, link.href)}
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
