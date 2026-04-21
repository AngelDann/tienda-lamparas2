/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, ArrowRight, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Aura Pendant",
    price: "€280",
    category: "Techo",
    image: "https://picsum.photos/seed/lamp1/800/1000",
  },
  {
    id: 2,
    name: "Lunar Table Lamp",
    price: "€145",
    category: "Mesa",
    image: "https://picsum.photos/seed/lamp2/800/1000",
  },
  {
    id: 3,
    name: "Solstice Wall Sconce",
    price: "€190",
    category: "Pared",
    image: "https://picsum.photos/seed/lamp3/800/1000",
  },
  {
    id: 4,
    name: "Ethereal Floor Lamp",
    price: "€420",
    category: "Pie",
    image: "https://picsum.photos/seed/lamp4/800/1000",
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-paper">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 py-8 px-12 flex justify-between items-center border-b border-white/10 ${
          isScrolled ? "bg-brand-paper/95 backdrop-blur-md py-6 shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-12">
          <h1 className="text-2xl font-serif tracking-[0.2em] text-brand-gold uppercase">
            Lumina Luxe
          </h1>
          <div className="hidden lg:flex gap-10 uppercase text-[10px] tracking-[0.25em] font-medium opacity-80">
            <a href="#" className="hover:text-brand-gold transition-colors">Colecciones</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Proyectos</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Nosotros</a>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden sm:block text-[10px] border border-white/20 px-6 py-2 uppercase tracking-[0.2em] cursor-pointer hover:bg-white hover:text-black transition-all">
            Tienda Online
          </div>
          <div className="flex items-center gap-6">
            <Search className="w-4 h-4 cursor-pointer hover:text-brand-gold transition-colors opacity-70" />
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-4 h-4 group-hover:text-brand-gold transition-colors opacity-70" />
              <span className="absolute -top-1 -right-1 bg-brand-gold text-black text-[7px] font-bold w-3 h-3 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <Menu className="w-5 h-5 cursor-pointer lg:hidden hover:text-brand-gold transition-colors" />
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden border-b border-white/5">
        <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 pt-32 lg:pt-0 space-y-10 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
              Colección Invierno 2024
            </span>
            <h2 className="text-6xl md:text-8xl font-serif leading-tight text-white italic mb-8">
              Esculpiendo <br />la luz.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed font-light max-w-md mb-10">
              Diseños minimalistas y materiales nobles que transforman cada rincón en una atmósfera de serenidad y distinción contemporánea.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-brand-gold text-black px-12 py-5 font-semibold uppercase tracking-widest text-[10px] hover:bg-white transition-all duration-500 shadow-xl shadow-brand-gold/10">
                Explorar Diseños
              </button>
              <button className="border-b border-brand-gold/40 hover:border-brand-gold py-4 text-[10px] uppercase tracking-widest text-brand-gold transition-all duration-300">
                Ver Catálogo
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative bg-brand-surface flex items-center justify-center py-20 lg:py-0 overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#c5a059_0%,transparent_70%)] blur-[120px]"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1200"
              alt="Hero Showcase"
              className="w-[380px] md:w-[480px] h-[550px] md:h-[650px] object-cover border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Floating Info Card */}
            <div className="absolute bottom-10 -right-10 md:-right-20 bg-brand-paper/90 backdrop-blur-xl border border-white/10 p-8 w-64 md:w-72 shadow-3xl">
              <div className="text-[10px] text-brand-gold uppercase tracking-[0.25em] font-bold mb-2 text-glow">Destacado</div>
              <div className="text-lg font-serif italic text-white mb-4">Pendant No. 04</div>
              <div className="text-xs text-white/40 mb-6 leading-relaxed">Latón cepillado y cristal templado artesanal soplado a mano en nuestro taller.</div>
              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <span className="text-base text-white tracking-widest font-light">€1,240</span>
                <span className="text-[10px] uppercase border-b border-brand-gold/40 text-brand-gold pb-1 cursor-pointer hover:border-brand-gold transition-colors">Detalles</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-10 flex flex-col items-center gap-4"
        >
          <span className="writing-mode-vertical text-[9px] uppercase tracking-[0.4em] opacity-50">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20"></div>
        </motion.div>
      </section>

      {/* Info Bar */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/10 bg-black/60 relative z-20">
        {[
          { label: "Sostenibilidad", desc: "Materiales certificados", icon: "01" },
          { label: "Artesanía", desc: "Hecho a mano en España", icon: "02" },
          { label: "Envío Global", desc: "Cobertura en 40 países", icon: "03" },
          { label: "Garantía", desc: "5 años de cobertura", icon: "04" },
        ].map((item, i) => (
          <div key={i} className={`p-10 flex flex-col items-center text-center group transition-colors duration-500 hover:bg-white/5 ${i !== 3 ? "border-r border-white/10" : ""}`}>
            <span className="text-[9px] text-brand-gold/40 mb-3 group-hover:text-brand-gold transition-colors">{item.icon}</span>
            <div className="text-white text-[11px] uppercase tracking-[0.2em] mb-2 font-bold">{item.label}</div>
            <div className="text-white/40 text-[9px] uppercase tracking-[0.1em]">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="uppercase text-[10px] tracking-[0.4em] font-bold text-brand-gold mb-6 block">Selección Curator</span>
            <h3 className="text-5xl md:text-6xl font-serif italic text-white leading-tight">Piezas <br /> <span className="not-italic">Destacadas.</span></h3>
          </div>
          <a href="#" className="uppercase text-[10px] tracking-[0.3em] font-bold border-b border-brand-gold pb-2 text-brand-gold flex items-center gap-3 group transition-all">
            Ver todo el catálogo <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 border border-white/5 bg-brand-surface">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-gold/10 opacity-30 group-hover:opacity-0 transition-opacity"></div>
                <button className="absolute bottom-0 left-0 right-0 py-5 bg-brand-gold text-black text-[9px] tracking-[0.3em] font-bold uppercase opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Añadir al Carrito
                </button>
              </div>
              <div className="space-y-4 px-2">
                <div className="flex justify-between items-baseline">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-brand-gold font-bold">{product.category}</p>
                  <p className="text-white text-base tracking-widest font-light">{product.price}</p>
                </div>
                <h4 className="text-xl font-serif text-white/90 group-hover:text-brand-gold transition-colors">{product.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-brand-surface relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <span className="uppercase text-[10px] tracking-[0.5em] font-bold text-brand-gold mb-10 block">El Taller</span>
            <h3 className="text-5xl md:text-7xl font-serif leading-tight text-white mb-10 italic">
              Esculpiendo con <br /> <span className="not-italic">la oscuridad.</span>
            </h3>
            <p className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-12 max-w-lg">
              Creemos que la iluminación no es solo una necesidad funcional, sino el alma de cada habitación. 
              Nuestras piezas son diseñadas para crear sombras que bailan y atmósferas que inspiran distinción profunda.
            </p>
            <div className="flex gap-16">
              <div>
                <p className="text-4xl font-serif text-brand-gold mb-3">15+</p>
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">Años de Maestría</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-brand-gold mb-3">120</p>
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">Obras de Autor</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] rounded-t-full overflow-hidden border border-white/10 shadow-3xl bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1542728928-1413d1894ed1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Process" 
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000 grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <div className="absolute -bottom-10 -right-10 bg-brand-gold px-12 py-16 hidden lg:block z-20 shadow-2xl backdrop-blur-sm">
              <p className="text-black italic text-2xl font-serif leading-tight">"La luz es el <br />lenguaje de <br />la forma."</p>
            </div>
            {/* Background geometric element */}
            <div className="absolute -top-10 -left-10 w-full h-full border border-brand-gold/10 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-48 px-8 text-center bg-brand-paper relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <span className="uppercase text-[9px] tracking-[0.5em] font-bold text-brand-gold mb-10 block">Exclusividad</span>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-10 italic">Únete al <span className="not-italic">círculo.</span></h3>
          <p className="text-white/40 font-light text-lg mb-16 max-w-xl mx-auto">
            Suscríbete para recibir lanzamientos exclusivos, historias de diseño y acceso anticipado a nuestras ediciones limitadas.
          </p>
          <form className="flex flex-col md:flex-row gap-6 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Tu dirección de email" 
              className="flex-1 bg-transparent border-b border-white/20 py-5 px-4 focus:outline-none focus:border-brand-gold transition-all text-sm text-white placeholder:text-white/20"
              required
            />
            <button className="uppercase text-[9px] tracking-[0.4em] font-bold bg-brand-gold text-black px-12 py-5 hover:bg-white transition-all duration-500 whitespace-nowrap">
              Suscribirse
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-brand-ink py-32 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div className="space-y-10">
              <h4 className="text-3xl font-serif text-brand-gold tracking-widest italic">Lumina Luxe</h4>
              <p className="text-sm text-white/40 leading-relaxed font-light">
                Transformando espacios a través del diseño de iluminación honesto y la elegancia técnica. Cada pieza cuenta una historia de luz y sombra.
              </p>
              <div className="flex gap-8">
                <Instagram className="w-5 h-5 text-white/30 hover:text-brand-gold cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-white/30 hover:text-brand-gold cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-white/30 hover:text-brand-gold cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h5 className="uppercase text-[10px] tracking-[0.3em] font-bold text-white mb-10">Menú de Navegación</h5>
              <ul className="space-y-6 text-xs text-white/30 tracking-[0.1em] font-medium uppercase">
                <li className="hover:text-brand-gold cursor-pointer transition-all hover:translate-x-2">Colección Actual</li>
                <li className="hover:text-brand-gold cursor-pointer transition-all hover:translate-x-2">Ediciones de Autor</li>
                <li className="hover:text-brand-gold cursor-pointer transition-all hover:translate-x-2">Sistemas de Techo</li>
                <li className="hover:text-brand-gold cursor-pointer transition-all hover:translate-x-2">Galería Lumínica</li>
              </ul>
            </div>

            <div>
              <h5 className="uppercase text-[10px] tracking-[0.3em] font-bold text-white mb-10">Compañía</h5>
              <ul className="space-y-6 text-xs text-white/30 tracking-[0.1em] font-medium uppercase">
                <li className="hover:text-brand-gold cursor-pointer transition-all hover:translate-x-2">Manifiesto</li>
                <li className="hover:text-brand-gold cursor-pointer transition-all hover:translate-x-2">El Atelier</li>
                <li className="hover:text-brand-gold cursor-pointer transition-all hover:translate-x-2">Proyectos Contract</li>
                <li className="hover:text-brand-gold cursor-pointer transition-all hover:translate-x-2">Prensa</li>
              </ul>
            </div>

            <div>
              <h5 className="uppercase text-[10px] tracking-[0.3em] font-bold text-white mb-10">Taller Central</h5>
              <ul className="space-y-8 text-xs text-white/30 font-light tracking-[0.05em]">
                <li className="flex gap-6 items-start">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0 opacity-50" />
                  <span className="leading-relaxed">Calle del Diseño 42, <br /> 28001 Madrid, España</span>
                </li>
                <li className="flex gap-6 items-center">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0 opacity-50" />
                  <span className="tracking-widest">+34 912 345 678</span>
                </li>
                <li className="flex gap-6 items-center">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0 opacity-50" />
                  <span className="lowercase">atelier@luminaluxe.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/20">
              © MMXXVI Lumina Luxe Studio. Precision in Light.
            </p>
            <div className="flex gap-12 text-[9px] uppercase tracking-[0.3em] text-white/20">
              <a href="#" className="hover:text-brand-gold transition-colors">Privacidad</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Sostenibilidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
