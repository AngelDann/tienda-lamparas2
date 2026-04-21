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
    <div className="min-h-screen bg-brand-paper selection:bg-brand-accent selection:text-black">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 py-6 px-10 flex justify-between items-center border-b border-white/10 ${
          isScrolled ? "bg-black/90 backdrop-blur-xl py-4 border-brand-accent/30" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-serif tracking-tighter text-brand-accent uppercase font-bold drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
            LUMINA.FLR
          </h1>
          <div className="hidden lg:flex gap-8 uppercase text-[10px] tracking-[0.3em] font-bold">
            <a href="#" className="text-white hover:text-brand-accent transition-colors">Drops</a>
            <a href="#" className="text-white hover:text-neon-cyan transition-colors">Archive</a>
            <a href="#" className="text-white hover:text-neon-magenta transition-colors">Studio</a>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden sm:block text-[10px] border-2 border-brand-accent text-brand-accent px-6 py-2 uppercase tracking-[0.2em] font-black cursor-pointer hover:bg-brand-accent hover:text-black transition-all box-glow">
            Live Shop
          </div>
          <div className="flex items-center gap-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-neon-cyan transition-colors" />
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-5 h-5 group-hover:text-neon-magenta transition-colors" />
              <span className="absolute -top-1 -right-1 bg-brand-accent text-black text-[7px] font-black w-3.5 h-3.5 rounded-none flex items-center justify-center">
                0
              </span>
            </div>
            <Menu className="w-6 h-6 cursor-pointer lg:hidden hover:text-brand-accent transition-colors" />
          </div>
        </div>
      </nav>

      {/* Hero Section - Cyber Split */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden border-b-2 border-brand-accent/20">
        <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 pt-32 lg:pt-0 space-y-12 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block bg-brand-accent text-black px-4 py-1 uppercase tracking-[0.4em] text-[9px] font-black mb-6">
              NEW RELEASE /// 2026
            </div>
            <h2 className="text-7xl md:text-9xl font-serif font-black leading-[0.9] text-white uppercase mb-10">
              LIGHT <br />
              <span className="text-brand-accent text-glow">REVOLUTION.</span>
            </h2>
            <p className="text-xl text-white/50 leading-tight font-medium max-w-md mb-12 border-l-2 border-neon-cyan pl-6 uppercase tracking-wider italic">
              Hyper-aesthetic lighting systems for the contemporary digital space. Crafted for high-performance atmospheres.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <button className="bg-brand-accent text-black px-12 py-5 font-black uppercase tracking-[0.3em] text-xs hover:bg-neon-cyan transition-all duration-300">
                Execute Order
              </button>
              <button className="text-neon-cyan border-b-2 border-neon-cyan py-4 text-xs uppercase tracking-[0.4em] font-bold hover:text-neon-magenta hover:border-neon-magenta transition-colors">
                System Log
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative bg-brand-surface flex items-center justify-center py-20 lg:py-0 overflow-hidden border-l-0 lg:border-l-2 border-brand-accent/20">
          {/* Neon Grid Layer */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="border-4 border-neon-magenta p-2 box-glow">
              <img
                src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1200"
                alt="Cyber Showcase"
                className="w-[400px] md:w-[500px] h-[600px] md:h-[700px] object-cover contrast-150 brightness-75 hover:brightness-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* HUD Card */}
            <div className="absolute top-10 -right-10 md:-right-20 bg-black border-2 border-neon-cyan p-8 w-72 shadow-[0_0_30px_rgba(0,243,255,0.2)]">
              <div className="text-[10px] text-neon-cyan uppercase tracking-[0.3em] font-black mb-3">PRODUCT_ID: P-04</div>
              <div className="text-2xl font-serif font-bold text-white mb-4 uppercase italic">Pendant Hyper</div>
              <div className="text-xs text-brand-accent mb-6 leading-tight font-black uppercase">Vibrant Ionized Brass / Laser Cut Crystal.</div>
              <div className="flex justify-between items-center border-t-2 border-white/10 pt-4">
                <span className="text-xl text-neon-magenta tracking-[0.2em] font-black italic">€1,240</span>
                <span className="text-[10px] bg-white text-black px-4 py-2 font-black uppercase cursor-pointer hover:bg-neon-cyan transition-colors">Access</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
          <div className="w-12 h-0.5 bg-brand-accent"></div>
          <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-accent">Status: Active</span>
          <div className="w-12 h-0.5 bg-brand-accent"></div>
        </div>
      </section>

      {/* Grid Stats Bar */}
      <section className="grid grid-cols-2 lg:grid-cols-4 bg-brand-surface border-b-2 border-brand-accent/20 h-32">
        {[
          { label: "Net-Zero", desc: "Eco-Verified", color: "text-brand-accent" },
          { label: "Crafted", desc: "Local Workshop", color: "text-neon-cyan" },
          { label: "Express", desc: "Global Node", color: "text-neon-magenta" },
          { label: "Security", desc: "5Y Guarantee", color: "text-white" },
        ].map((item, i) => (
          <div key={i} className={`flex flex-col items-center justify-center border-r-2 border-white/5 group hover:bg-brand-accent transition-all duration-300`}>
            <div className={`text-base font-black uppercase tracking-[0.2em] mb-1 group-hover:text-black transition-colors ${item.color}`}>{item.label}</div>
            <div className="text-white/30 text-[9px] uppercase tracking-[0.3em] group-hover:text-black transition-colors font-bold">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* High-Contrast Product Grid */}
      <section className="py-40 px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl border-l-[12px] border-neon-magenta pl-10">
            <span className="uppercase text-[11px] tracking-[0.6em] font-black text-neon-magenta mb-6 block">COLLECTION_MANIFESTO</span>
            <h3 className="text-6xl md:text-8xl font-serif font-black text-white uppercase leading-[0.8]">The <br /> <span className="text-transparent border-t-2 border-b-2 border-white py-1">Selection.</span></h3>
          </div>
          <button className="self-end bg-transparent border-4 border-white text-white px-10 py-5 uppercase text-xs font-black tracking-[0.4em] hover:bg-white hover:text-black transition-all">
            Unlock Full Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 border-2 border-white/10 group-hover:border-neon-cyan transition-all">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover saturate-200 group-hover:scale-125 transition-all duration-700 brightness-75 group-hover:brightness-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-brand-accent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
                  <span className="text-[10px] font-black text-black tracking-widest uppercase">Select Unit</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-neon-cyan">{product.category}</p>
                  <p className="text-neon-magenta text-lg font-black italic">{product.price}</p>
                </div>
                <h4 className="text-2xl font-serif font-bold text-white uppercase group-hover:text-brand-accent transition-colors">{product.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cyber Workshop Section */}
      <section className="py-40 bg-brand-surface relative border-y-4 border-neon-cyan/20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-1 bg-neon-cyan"></div>
              <span className="uppercase text-[11px] tracking-[0.6em] font-black text-neon-cyan">CORE_VALUE</span>
            </div>
            <h3 className="text-6xl md:text-8xl font-serif font-black uppercase text-white leading-[0.85] mb-12">
              BEYOND <br /> <span className="text-brand-accent text-glow">DARKNESS.</span>
            </h3>
            <p className="text-lg text-white/70 font-medium leading-relaxed mb-16 uppercase tracking-wider max-w-lg border-l-4 border-neon-magenta pl-8 italic">
              Our lab manipulates photon flow to calibrate your reality. We don't build lamps; we engineer atmosphere nodes.
            </p>
            <div className="grid grid-cols-2 gap-20">
              <div className="border-t-2 border-white/10 pt-6">
                <p className="text-5xl font-serif font-black text-neon-magenta mb-2">15+</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40">Lab Cycles</p>
              </div>
              <div className="border-t-2 border-white/10 pt-6">
                <p className="text-5xl font-serif font-black text-neon-cyan mb-2">120K</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40">Active Nodes</p>
              </div>
            </div>
          </motion.div>

          <div className="relative group">
            <div className="aspect-square bg-gradient-to-br from-neon-magenta via-transparent to-neon-cyan p-1 box-glow">
              <div className="w-full h-full bg-black overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1542728928-1413d1894ed1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Lab" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100 saturate-200"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white border-4 border-brand-accent px-10 py-6 font-serif font-black italic text-4xl uppercase bg-black/60 backdrop-blur-md">
                  Purity.
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-accent text-black px-8 py-4 font-black uppercase text-xs tracking-widest translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
              System Verified
            </div>
          </div>
        </div>
      </section>

      {/* Neon Newsletter */}
      <section className="py-48 px-8 text-center bg-black relative overflow-hidden">
        {/* Glow behind newsletter */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h3 className="text-5xl md:text-8xl font-serif font-black text-white italic uppercase mb-12 leading-[0.85]">
            Link Your <br /> <span className="text-neon-cyan">Presence.</span>
          </h3>
          <p className="text-white/40 font-bold text-xl mb-20 max-w-2xl mx-auto uppercase tracking-extra-widest">
            Join the decentralized lighting collective. Zero noise. Pure signal.
          </p>
          <form className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="IDENTITY@NETWORK.COM" 
              className="flex-1 bg-brand-surface border-4 border-white/10 py-6 px-8 focus:outline-none focus:border-brand-accent transition-all text-sm text-white font-black uppercase tracking-widest placeholder:text-white/10"
              required
            />
            <button className="uppercase text-xs tracking-[0.5em] font-black bg-white text-black px-12 py-6 hover:bg-brand-accent transition-all duration-300">
              Transmit
            </button>
          </form>
        </motion.div>
      </section>

      {/* Tech Footer */}
      <footer className="bg-brand-surface text-brand-ink py-40 px-8 border-t-8 border-brand-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
            <div className="space-y-12">
              <h4 className="text-4xl font-serif text-brand-accent font-black tracking-tighter uppercase italic">LUMINA.FLR</h4>
              <p className="text-sm text-white/30 leading-snug font-bold uppercase tracking-widest">
                Photon calibration studio based in Madrid. Designing the future of high-frequency illumination. Signal established 2026.
              </p>
              <div className="flex gap-8">
                <Instagram className="w-6 h-6 text-neon-cyan hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-neon-magenta hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-white hover:text-brand-accent cursor-pointer transition-colors" />
              </div>
            </div>

            {[
              { title: "Protocol", links: ["Drops", "Auth Nodes", "Archive", "Raw Data"] },
              { title: "Network", links: ["Nodes", "Manifesto", "Contact", "Source"] },
            ].map((col, i) => (
              <div key={i}>
                <h5 className="uppercase text-[11px] tracking-[0.5em] font-black text-brand-accent mb-12 border-b border-brand-accent/20 pb-4 inline-block">{col.title}</h5>
                <ul className="space-y-8 text-xs text-white/30 tracking-[0.2em] font-black uppercase">
                  {col.links.map(link => (
                    <li key={link} className="hover:text-white cursor-pointer transition-all hover:translate-x-4 flex items-center gap-4 group">
                      <span className="w-0 h-[2px] bg-brand-accent group-hover:w-4 transition-all"></span>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h5 className="uppercase text-[11px] tracking-[0.5em] font-black text-white mb-12 border-b border-white/20 pb-4 inline-block">Location</h5>
              <ul className="space-y-10 text-[10px] text-white/40 font-black uppercase tracking-extra-widest leading-loose">
                <li className="flex gap-8 items-start">
                  <MapPin className="w-6 h-6 text-brand-accent shrink-0" />
                  <span>Design Block 42 <br /> 28001 Madrid, EU</span>
                </li>
                <li className="flex gap-8 items-center">
                  <Phone className="w-6 h-6 text-neon-cyan shrink-0" />
                  <span>+34 912 345 678</span>
                </li>
                <li className="flex gap-8 items-center border-2 border-brand-accent p-4 box-glow">
                  <Mail className="w-6 h-6 text-neon-magenta shrink-0" />
                  <span className="lowercase">system@lumina.flr</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-20 border-t-2 border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
            <p className="text-[10px] uppercase tracking-[0.8em] text-white/20 font-black">
              [ 2026_SYSTEM_CORE_SECURED ]
            </p>
            <div className="flex gap-16 text-[9px] uppercase tracking-[0.5em] text-white/20 font-black">
              <a href="#" className="hover:text-brand-accent transition-colors">Data_Policy</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Term_Log</a>
              <a href="#" className="hover:text-neon-magenta transition-colors">Nodes_Config</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
