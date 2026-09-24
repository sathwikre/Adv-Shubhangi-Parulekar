import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Shield, Scale, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

const CREDIBILITY_ITEMS = [
  { label: 'Criminal Defence', icon: Shield },
  { label: 'District & Sessions Courts', icon: Scale },
  { label: 'Bombay High Court – Appellate Side', icon: Gavel },
  { label: 'Legal Aid & Panel Advocacy', icon: Award },
];

const EXPERIENCE_HIGHLIGHTS = [
  {
    year: '2008 – Present',
    title: 'Trial Practice',
    description: 'Practising as a criminal lawyer in District & Sessions Courts at Pune, Khed and Baramati since 2008.'
  },
  {
    year: '2008 – Present',
    title: 'Appellate Practice',
    description: 'Practising as a defence counsel on the appellate side at the Bombay High Court since 2008.'
  },
  {
    title: 'Special Legislation',
    description: 'Conducted criminal trials involving special legislation and serious criminal offences including POCSO, MCOCA, and NDPS.'
  },
  {
    title: 'Panel Advocacy',
    description: 'Served as Panel Advocate for Pune District Legal Aid, Maharashtra State Legal Services Authority, and Yerawada Central Prison.'
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-brand-ivory relative">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-brand-burgundy font-bold mb-6 block">Maharashtra State Advocate</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-charcoal leading-tight mb-8">
              ADV. SHUBHANGI PRASAD PARULEKAR
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-brand-charcoal/80 mb-10 max-w-xl border-l-2 border-brand-gold pl-6">
              "Practising in criminal defence and trial matters across District & Sessions Courts in Pune, Khed and Baramati, with appellate-side practice at the Bombay High Court."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                Schedule a Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/experience" className="btn-secondary flex items-center justify-center">
                View Professional Experience
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 p-4 border border-brand-gray bg-white shadow-2xl">
              <img
                src="/assets/aistudio/Image 2.png"
                alt="Adv. Shubhangi Prasad Parulekar"
                className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-brand-gold -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-brand-gold -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-12 bg-brand-charcoal border-y border-brand-gold/20">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {CREDIBILITY_ITEMS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <item.icon className="text-brand-gold" size={24} />
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-ivory font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Experience Built in Criminal Defence</h2>
            <div className="w-20 h-1 bg-brand-burgundy mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {EXPERIENCE_HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l border-brand-gray"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-brand-burgundy rounded-full" />
                {item.year && (
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-2 block">
                    {item.year}
                  </span>
                )}
                <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-brand-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-burgundy font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all group">
              Explore Full Professional Profile <ArrowRight size={18} className="transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
