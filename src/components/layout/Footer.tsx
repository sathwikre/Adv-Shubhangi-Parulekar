import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-ivory pt-20 pb-10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="font-serif text-2xl font-bold mb-4">
            ADV. SHUBHANGI PRASAD PARULEKAR
          </h3>
          <p className="text-brand-gray/60 text-sm leading-relaxed max-w-xs">
            Practising in criminal defence and trial matters across District & Sessions Courts and Bombay High Court.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold mb-6">Navigation</h4>
          <ul className="grid grid-cols-2 gap-4">
            <li><Link to="/" className="text-brand-gray/80 hover:text-brand-gold transition-colors text-sm">Home</Link></li>
            <li><Link to="/about" className="text-brand-gray/80 hover:text-brand-gold transition-colors text-sm">About</Link></li>
            <li><Link to="/practice-areas" className="text-brand-gray/80 hover:text-brand-gold transition-colors text-sm">Practice Areas</Link></li>
            <li><Link to="/experience" className="text-brand-gray/80 hover:text-brand-gold transition-colors text-sm">Experience</Link></li>
            <li><Link to="/cases" className="text-brand-gray/80 hover:text-brand-gold transition-colors text-sm">Cases</Link></li>
            <li><Link to="/contact" className="text-brand-gray/80 hover:text-brand-gold transition-colors text-sm">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold mb-6">Contact Details</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-gold shrink-0 mt-1" />
              <span className="text-sm text-brand-gray/80 leading-relaxed">
                308, 3rd Floor, Amit Court Condominium, Shivajinagar, Pune 411005
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-gold shrink-0" />
              <a href="tel:8308825029" className="text-sm text-brand-gray/80 hover:text-brand-gold transition-colors">
                8308825029
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-gold shrink-0" />
              <a href="mailto:spparulekar@gmail.com" className="text-sm text-brand-gray/80 hover:text-brand-gold transition-colors">
                spparulekar@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom pt-8 border-t border-brand-gray/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-brand-gray/40">
        <p>© {currentYear} Adv. Shubhangi Prasad Parulekar. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-brand-gold">Privacy Policy</Link>
          <Link to="/legal-disclaimer" className="hover:text-brand-gold">Legal Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
