import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE_ITEMS = [
  {
    title: 'Criminal Lawyer – District & Sessions Courts',
    location: 'Pune, Khed and Baramati',
    date: 'Since 2008',
    desc: 'Extensive experience in conducting criminal trials, handleing cross-examinations, and legal arguments at the trial court level.'
  },
  {
    title: 'Defence Counsel – Appellate Side',
    location: 'Bombay High Court',
    date: 'Since 2008',
    desc: 'Regularly representing clients in criminal appeals, revisions, and writ petitions before the Honourable High Court.'
  },
  {
    title: 'Panel Advocate',
    location: 'Pune District Legal Aid Committee',
    desc: 'Appointed as Panel Advocate to provide legal representation to those in need of institutional legal aid.'
  },
  {
    title: 'Panel Advocate',
    location: 'Maharashtra State Legal Services Authority, Bombay High Court',
    desc: 'Serving as a panel advocate for state-mandated legal services at the High Court level.'
  },
  {
    title: 'Panel Advocate',
    location: 'Yerawada Central Prison, Pune',
    desc: 'Providing legal defence and advisory services within the prison system for inmates requiring legal representation.'
  },
  {
    title: 'Amicus Curiae',
    location: 'Sessions Court Pune',
    desc: 'Assisting the court in criminal trials as a friend of the court (Amicus Curiae) to ensure justice is served.'
  },
  {
    title: 'Legal Education / Public Awareness',
    location: 'All India Radio',
    desc: 'Delivered informative lectures on Maintenance and Welfare of Senior Citizens under the Senior Citizens Act, 2007.'
  }
];

export default function Experience() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Professional Experience</h1>
            <p className="text-xl text-brand-charcoal/70 border-l-2 border-brand-gold pl-6">
              A chronological overview of professional engagements, institutional roles, and legal contributions spanning over 14 years.
            </p>
          </div>

          <div className="space-y-12">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-brand-gray/50 p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-brand-gold transition-colors duration-500"
              >
                <div className="md:w-1/4">
                  <div className="text-xs font-bold text-brand-burgundy uppercase tracking-[0.2em] mb-2">
                    {item.date || 'Professional Role'}
                  </div>
                  <div className="text-sm font-medium text-brand-gold uppercase tracking-widest">
                    {item.location}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                  <p className="text-brand-charcoal/70 text-sm leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
