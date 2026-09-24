import React from 'react';

export default function LegalDisclaimer() {
  return (
    <div className="bg-brand-ivory min-h-screen section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12">Legal Disclaimer</h1>
        
        <div className="bg-white p-10 md:p-16 border border-brand-gray/50 shadow-sm space-y-8 text-brand-charcoal/70 text-sm leading-relaxed">
          <div className="bg-brand-burgundy/5 border-l-4 border-brand-burgundy p-6 mb-8 italic">
            "The information provided on this website is for general informational purposes only and should not be construed as legal advice."
          </div>

          <section>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal mb-4">No Advocate-Client Relationship</h2>
            <p>
              Viewing this website or contacting Adv. Shubhangi Prasad Parulekar through the contact form does not create an advocate-client relationship. Such a relationship is only established through a formal, written agreement and professional consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal mb-4">No Guarantee of Outcomes</h2>
            <p>
              Case outcomes listed on this website are factual records of past proceedings. However, past results do not guarantee similar outcomes in future cases. Each legal matter is unique and depends on its specific facts, evidence, and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal mb-4">Jurisdiction</h2>
            <p>
              The legal services described on this website are provided in accordance with the laws of India and the rules of the Bar Council of India. Our practice is primarily focused on the courts in Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal mb-4">Professional Conduct</h2>
            <p>
              This website is intended to provide information and is not an advertisement or solicitation of work, in compliance with the rules of the Bar Council of India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal mb-4">External Links</h2>
            <p>
              This website may contain links to external websites for information purposes. We are not responsible for the content or privacy practices of these external sites.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
