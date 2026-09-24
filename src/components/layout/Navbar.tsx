import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'Experience', href: '/experience' },
  { name: 'Cases', href: '/cases' },
  { name: 'Media', href: '/media' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-brand-ivory/95 backdrop-blur-md py-4 border-brand-gray' 
          : 'bg-brand-ivory py-6 border-transparent'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex flex-col group">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-brand-charcoal">
            ADV. SHUBHANGI PRASAD PARULEKAR
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-burgundy font-semibold">
            Criminal Defence Advocate
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm uppercase tracking-widest font-medium transition-colors hover:text-brand-burgundy',
                location.pathname === link.href ? 'text-brand-burgundy' : 'text-brand-charcoal'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 bg-brand-burgundy text-white text-xs uppercase tracking-widest font-bold hover:bg-opacity-90 transition-all"
          >
            Schedule
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <a href="tel:8308825029" className="p-2 text-brand-burgundy">
            <Phone size={20} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 text-brand-charcoal">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'fixed inset-0 top-[88px] bg-brand-ivory z-40 lg:hidden transition-transform duration-500 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col p-8 gap-6 h-full">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-2xl font-serif border-b border-brand-gray pb-4',
                location.pathname === link.href ? 'text-brand-burgundy' : 'text-brand-charcoal'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-auto w-full py-4 bg-brand-burgundy text-white text-center font-bold uppercase tracking-widest"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
