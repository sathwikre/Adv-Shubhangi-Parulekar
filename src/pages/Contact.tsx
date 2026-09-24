import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="bg-brand-ivory min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Discuss Your Legal Matter</h1>
            <p className="text-xl text-brand-charcoal/70 border-l-2 border-brand-gold pl-6">
              For professional consultation regarding a criminal matter, please use the contact details below or request an appointment through the secure form.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-12">
              <div className="bg-white p-10 border border-brand-gray/50 shadow-sm relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-burgundy" />
                <h3 className="text-2xl font-serif font-bold mb-8">Contact Information</h3>
                <ul className="space-y-8">
                  <li className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-ivory rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-brand-burgundy" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-1">Office Address</h4>
                      <p className="text-sm font-medium leading-relaxed">
                        308, 3rd Floor, Amit Court Condominium,<br />
                        Shivajinagar, Pune 411005
                      </p>
                      <a 
                        href="https://maps.google.com/?q=308,3rd+Floor,+Amit+Court+Condominium,+Shivajinagar,+Pune+411005"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-burgundy uppercase tracking-widest mt-3 hover:underline"
                      >
                        Get Directions <ExternalLink size={12} />
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-ivory rounded-full flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-brand-burgundy" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-1">Direct Phone</h4>
                      <a href="tel:8308825029" className="text-lg font-serif font-bold hover:text-brand-burgundy transition-colors">
                        8308825029
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-ivory rounded-full flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-brand-burgundy" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-1">Email Address</h4>
                      <a href="mailto:spparulekar@gmail.com" className="text-sm font-medium hover:text-brand-burgundy transition-colors break-all">
                        spparulekar@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-12 flex flex-col gap-4">
                  <a href="tel:8308825029" className="btn-primary flex items-center justify-center gap-2">
                    <Phone size={18} /> Call Advocate
                  </a>
                  <a href="mailto:spparulekar@gmail.com" className="btn-secondary flex items-center justify-center gap-2">
                    <Mail size={18} /> Send Email
                  </a>
                </div>
              </div>

              <div className="p-6 bg-brand-gray/20 border border-brand-gray/50 italic text-brand-charcoal/60 text-sm">
                Note: Office consultations are available by prior appointment only. Please contact the office during professional hours.
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-16 border border-brand-gray/50 shadow-xl relative">
                <h3 className="text-3xl font-serif font-bold mb-4">Request a Consultation</h3>
                <p className="text-sm text-brand-charcoal/60 mb-10">
                  Please complete the form below. Avoid submitting confidential or sensitive case information through this form.
                </p>

                {formState === 'success' ? (
                  <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={32} />
                    </div>
                    <h4 className="text-2xl font-serif font-bold mb-4">Message Sent Successfully</h4>
                    <p className="text-brand-charcoal/60 text-sm max-w-sm mx-auto">
                      Thank you for reaching out. The office will review your request and contact you regarding the next steps.
                    </p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="mt-10 text-brand-burgundy font-bold uppercase tracking-widest text-xs hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40 ml-1">Full Name</label>
                        <input required type="text" className="w-full px-6 py-4 bg-brand-ivory border border-brand-gray/50 focus:border-brand-burgundy outline-none transition-all text-sm font-medium" placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40 ml-1">Phone Number</label>
                        <input required type="tel" className="w-full px-6 py-4 bg-brand-ivory border border-brand-gray/50 focus:border-brand-burgundy outline-none transition-all text-sm font-medium" placeholder="Your Phone" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40 ml-1">Email Address</label>
                      <input required type="email" className="w-full px-6 py-4 bg-brand-ivory border border-brand-gray/50 focus:border-brand-burgundy outline-none transition-all text-sm font-medium" placeholder="yourname@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40 ml-1">Matter Type</label>
                      <select className="w-full px-6 py-4 bg-brand-ivory border border-brand-gray/50 focus:border-brand-burgundy outline-none transition-all text-sm font-medium appearance-none">
                        <option>Criminal Trial</option>
                        <option>Bail Application</option>
                        <option>High Court Appeal</option>
                        <option>POCSO / MCOCA Matter</option>
                        <option>Other Legal Matter</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40 ml-1">Your Message</label>
                      <textarea rows={5} className="w-full px-6 py-4 bg-brand-ivory border border-brand-gray/50 focus:border-brand-burgundy outline-none transition-all text-sm font-medium resize-none" placeholder="How can we assist you?"></textarea>
                    </div>
                    
                    <button 
                      disabled={formState === 'submitting'}
                      className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {formState === 'submitting' ? 'Processing...' : 'Request Consultation'} <ArrowUpRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowUpRight({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}
