import React from 'react';
import { motion } from 'framer-motion';

const TIMELINE_DATA = [
  {
    period: '2008',
    event: 'Established Practice',
    description: 'Started practice in criminal law, handling matters across District & Sessions Courts in Pune, Khed and Baramati.'
  },
  {
    period: '2008 – Present',
    event: 'Appellate Side Practice',
    description: 'Appointed as defence counsel on the appellate-side jurisdiction at the Bombay High Court.'
  },
  {
    period: 'Continuing',
    event: 'Institutional Roles',
    description: 'Served in key institutional capacities for Pune District Legal Aid, Maharashtra State Legal Services Authority, and Yerawada Central Prison.'
  }
];

const ROLES = [
  'Pune District Legal Aid Committee',
  'Maharashtra State Legal Services Authority, Bombay High Court',
  'Yerawada Central Prison, Pune',
  'Amicus Curiae assignments',
  'Public legal education through All India Radio'
];

export default function About() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      {/* About Hero */}
      <section className="section-padding border-b border-brand-gray/30">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Adv. Shubhangi Prasad Parulekar</h1>
            <p className="text-xl uppercase tracking-[0.2em] text-brand-gold font-bold mb-10">Criminal Defence Advocate</p>
            <div className="space-y-6 text-brand-charcoal/80">
              <p>
                With over a decade of dedicated practice in criminal law, Adv. Shubhangi Prasad Parulekar has established a reputation for meticulous defence preparation and steadfast advocacy. 
              </p>
              <p>
                Her practice spans the full spectrum of criminal litigation, from complex trials in the District and Sessions Courts of Pune district to critical appellate challenges before the Bombay High Court.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-brand-gray shadow-2xl border border-white p-4">
            <img 
              src="/assets/aistudio/Image 2.png" 
              alt="Adv. Shubhangi Prasad Parulekar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-serif font-bold mb-8">Professional Profile</h2>
              <div className="space-y-6 text-brand-charcoal/80">
                <p>
                  Since establishing her practice in 2008, Adv. Parulekar has focused exclusively on criminal defence. This specialization allows for a deep understanding of criminal procedure and the nuances of trial advocacy.
                </p>
                <p>
                  Beyond private practice, she has been a dedicated contributor to the legal aid system, ensuring that the right to a fair trial is upheld for all sections of society through her work with Legal Aid Committees and the Maharashtra State Legal Services Authority.
                </p>
              </div>

              <div className="mt-12">
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6">Additional Professional Roles</h4>
                <ul className="space-y-4">
                  {ROLES.map((role, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-brand-burgundy rounded-full" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-4xl font-serif font-bold mb-12">Professional Timeline</h2>
              <div className="space-y-12">
                {TIMELINE_DATA.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-8 md:gap-12"
                  >
                    <div className="shrink-0 w-24 md:w-32">
                      <span className="text-sm font-bold text-brand-burgundy tracking-widest uppercase">
                        {item.period}
                      </span>
                    </div>
                    <div className="pb-12 border-l border-brand-gray pl-8 relative">
                      <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 bg-brand-gold rounded-full" />
                      <h3 className="text-xl font-serif font-bold mb-3">{item.event}</h3>
                      <p className="text-brand-charcoal/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
