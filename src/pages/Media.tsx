import React from 'react';
import { Radio, Mic2 } from 'lucide-react';

export default function Media() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Legal Awareness & Public Engagement</h1>
            <p className="text-xl text-brand-charcoal/70 border-l-2 border-brand-gold pl-6">
              Commitment to public legal education and dissemination of information regarding statutory rights and welfare acts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white border border-brand-gray/50 p-10 md:p-16 shadow-sm relative overflow-hidden group hover:border-brand-burgundy transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:text-brand-burgundy transition-colors">
                <Radio size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-ivory border border-brand-gray text-brand-burgundy text-[10px] uppercase tracking-widest font-bold mb-8">
                  <Mic2 size={14} /> Public Lecture
                </div>
                
                <h3 className="text-3xl font-serif font-bold mb-6">All India Radio Broadcast</h3>
                <p className="text-brand-charcoal/70 mb-8 leading-relaxed">
                  Delivered authoritative lectures on the "Maintenance and Welfare of Senior Citizens under the Senior Citizens Act, 2007" on All India Radio.
                </p>
                <div className="space-y-4 text-sm text-brand-charcoal/60">
                  <p>Key topics covered include:</p>
                  <ul className="space-y-3 pl-4 border-l-2 border-brand-gold">
                    <li>Statutory maintenance provisions for parents and elders.</li>
                    <li>The role of the Maintenance Tribunal and procedure for applications.</li>
                    <li>Legal protections against elder abandonment and abuse.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-brand-gray/20 border border-brand-gray/50 p-10 md:p-16 shadow-inner flex flex-col items-center justify-center text-center">
              <p className="italic text-brand-charcoal/40 font-serif text-lg">
                "Additional media resources, publications and recordings can be added here as they become available for public distribution."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
