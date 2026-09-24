import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Shield, FileText, Gavel, Users, Lock, Landmark, Briefcase, HelpCircle, UserCheck } from 'lucide-react';

const PRACTICE_AREAS = [
  { id: '01', title: 'Criminal Trials', icon: Gavel, desc: 'Full trial advocacy including witness examination and defence strategy in criminal courts.' },
  { id: '02', title: 'Criminal Defence', icon: Shield, desc: 'Strategic defence for individuals facing a wide range of criminal accusations.' },
  { id: '03', title: 'Appellate Criminal Matters', icon: Landmark, desc: 'Representation in criminal appeals and revisions before the Bombay High Court.' },
  { id: '04', title: 'POCSO Matters', icon: Lock, desc: 'Sensitive handling and defence in cases under the Protection of Children from Sexual Offences Act.' },
  { id: '05', title: 'MCOCA Matters', icon: Scale, desc: 'Defending serious allegations under the Maharashtra Control of Organised Crime Act.' },
  { id: '06', title: 'NDPS Matters', icon: FileText, desc: 'Expert defence in matters related to the Narcotic Drugs and Psychotropic Substances Act.' },
  { id: '07', title: 'Body Offences', icon: UserCheck, desc: 'Defence in cases involving physical harm or threat to the person.' },
  { id: '08', title: 'Economic Offences', icon: Briefcase, desc: 'Addressing white-collar crime allegations and financial misconduct charges.' },
  { id: '09', title: 'Sessions Court Matters', icon: Landmark, desc: 'Direct trial experience in Sessions Courts across Pune, Khed and Baramati.' },
  { id: '10', title: 'Legal Aid / Panel Advocacy', icon: HelpCircle, desc: 'Providing institutional legal representation and amicus curiae services.' },
];

export default function PracticeAreas() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Practice Areas</h1>
            <p className="text-xl text-brand-charcoal/70 border-l-2 border-brand-gold pl-6">
              Expert legal representation focused exclusively on criminal law and trial defence across multiple jurisdictions and special legislations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area, idx) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-10 border border-brand-gray/50 hover:border-brand-burgundy transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-5xl font-bold group-hover:text-brand-burgundy transition-colors">
                  {area.id}
                </div>
                <div className="w-14 h-14 bg-brand-ivory flex items-center justify-center mb-8 group-hover:bg-brand-burgundy transition-colors duration-500">
                  <area.icon size={24} className="text-brand-burgundy group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-brand-burgundy transition-colors">
                  {area.title}
                </h3>
                <p className="text-brand-charcoal/60 text-sm leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-10 bg-brand-charcoal text-brand-ivory">
            <div className="max-w-2xl">
              <h4 className="text-xl font-serif font-bold mb-4">A Professional Standard of Conduct</h4>
              <p className="text-brand-gray/60 text-sm leading-relaxed italic">
                "Each matter is approached with independence, diligence and a strict adherence to the facts and the rule of law. We do not make exaggerated claims regarding outcomes, focusing instead on professional excellence and procedural rigour."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
