import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Anchor } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy-800 pt-20 pb-10 border-t border-navy-700">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-2xl font-bold text-cyan-600 tracking-wider">
                            <Anchor className="w-8 h-8" />
                            <span>DERİN<span className="text-white">OKYANUS</span></span>
                        </div>
                        <p className="text-text-dim leading-relaxed">
                            En taze ve sürdürülebilir deniz ürünlerini derin okyanustan doğrudan sofranıza getiriyoruz. Tadına varabileceğiniz kalite, güvenebileceğiniz dürüstlük.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest">Hızlı Bağlantılar</h4>
                        <ul className="space-y-4">
                            {['Hakkımızda', 'Ürünlerimiz', 'Sürdürülebilirlik', 'Haberler ve Etkinlikler', 'İletişim'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-dim hover:text-cyan-600 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest">İletişim</h4>
                        <ul className="space-y-4 text-text-dim">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-cyan-600 w-5 h-5 mt-1" />
                                <span>123 Okyanus Caddesi,<br />Liman Şehri, HC 90210</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-cyan-600 w-5 h-5" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-cyan-600 w-5 h-5" />
                                <span>hello@deepocean.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest">Bizi Takip Edin</h4>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="bg-navy-700 p-3 rounded-full hover:bg-cyan-600 hover:text-navy-900 transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-dim text-sm">
                        © {new Date().getFullYear()} Derin Okyanus Deniz Ürünleri. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-8 text-sm text-text-dim">
                        <a href="#" className="hover:text-cyan-600">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-cyan-600">Hizmet Şartları</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
