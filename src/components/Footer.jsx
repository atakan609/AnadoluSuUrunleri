import React from 'react';
import { Instagram, Mail, Phone, MapPin, Anchor } from 'lucide-react';

const Footer = () => {
    const handleFooterLinkClick = (e, href) => {
        e.preventDefault();
        if (href === '#') {
            if (window.lenis) window.lenis.scrollTo(0);
            else window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.querySelector(href);
        if (!element) return;

        let offset = 0;
        const elemHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;

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
    };

    return (
        <footer className="bg-backgroundMain-700 pt-20 pb-10 border-t border-navy-700">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-lg font-bold text-cyan-600 tracking-wider">
                            <span>RESİF & ANADOLU SU ÜRÜNLERİ<span className="text-white"> ORTAKLIĞI</span></span>
                        </div>
                        <p className="text-text-light leading-relaxed">
                            En taze ve sürdürülebilir deniz ürünlerini derin okyanustan doğrudan sofranıza getiriyoruz. Tadına varabileceğiniz kalite, güvenebileceğiniz dürüstlük.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 tracking-widest">HIZLI BAĞLANTILAR</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Hakkımızda', href: '#about' },
                                { name: 'Değerlerimiz', href: '#misyon-vizyon' },
                                { name: 'Çiftliklerimiz', href: '#ciftlikler' },
                                { name: 'İletişim', href: '#contact' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-text-light hover:text-sky-400 transition-colors"
                                        onClick={(e) => handleFooterLinkClick(e, item.href)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 tracking-widest">İLETİŞİM</h4>
                        <ul className="space-y-4 text-text-light">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-sky-400 w-5 h-5 mt-1" />
                                <span >Mersinli Mah. 1201/1 Sk. No:2/20 <br /> Su Plaza No: 2 İç Kapı No: 20 Konak/İzmir, Türkiye</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-sky-400 w-5 h-5" />
                                <span>+90 (542) 740 4903</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-sky-400 w-5 h-5" />
                                <span>anadolumidye@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 tracking-widest">BİZİ TAKİP EDİN</h4>
                        <div className="flex gap-6">
                            {[Instagram].map((Icon, idx) => (
                                <span
                                    key={idx}
                                    href="#"
                                    className="bg-sky-800 p-3 px-4 flex gap-2 items-center rounded-full hover:bg-sky-400 hover:text-sky-950 transition-all duration-300"
                                >
                                    <Icon size={20} /> @anadolumidye
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-light text-xs text-center md:text-left opacity-60">
                        ©2026 Resif Su Ürünleri San. ve Tic. A.Ş. ve Anadolu Midye ve Su Ürün. Endüstri A.Ş Adi Ortaklığı. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
