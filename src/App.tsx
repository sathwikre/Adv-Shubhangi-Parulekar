import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Phone, Search, Info, Mic2, MapPin, Send, ExternalLink, ChevronDown } from 'lucide-react';

// Case dataset strictly from reference
const CASES_DATA = [
  { id: "a", title: "State v/s Mahesh Gawade and others", act: "u/s 302 of IPC", category: "ipc" },
  { id: "b", title: "State v/s Balasaheb Galphade and others", act: "u/s 302 of IPC", category: "ipc" },
  { id: "c", title: "State v/s Motilal Chavan and others", act: "u/s 302 of IPC", category: "ipc" },
  { id: "d", title: "State v/s Rahul Kumbare", act: "u/s 302 of IPC", category: "ipc" },
  { id: "e", title: "State v/s Kunal Balu Londhe", act: "POCSO", category: "pocso" },
  { id: "f", title: "State v/s Vishal Salve", act: "u/s 376 of IPC", category: "ipc" },
  { id: "g", title: "State v/s Usha Dukre", act: "u/s 302 of IPC", category: "ipc" },
  { id: "h", title: "State v/s Jagdish Hirarugi", act: "POCSO", category: "pocso" },
  { id: "i", title: "State v/s Deepak Amale", act: "MCOCA", category: "mcoc" },
  { id: "j", title: "State v/s Harish Garad", act: "POCSO", category: "pocso" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState<null | typeof CASES_DATA[0]>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredCases = useMemo(() => {
    return CASES_DATA.filter(item => {
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.act.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [searchQuery, activeFilter]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-brandIvory/95 backdrop-blur-md border-b border-brandBorder" id="top-navbar">
        <div className="mx-auto px-4 flex items-center justify-between" style={{minHeight: '64px', maxHeight: '76px'}}>
          <a href="#hero" className="group block focus:outline-none" aria-label="Go to top">
            <span className="block font-sans text-sm tracking-wider uppercase font-semibold text-brandWine group-hover:text-brandWineHover transition-colors">
              Adv. Shubhangi Prasad Parulekar
            </span>
            <span className="block text-xs tracking-wide text-brandMuted uppercase font-medium mt-0.5">
              Criminal Defence · Pune & Bombay High Court
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a onClick={() => setIsMenuOpen(false)} className="text-base text-brandCharcoal hover:text-brandWine transition-colors font-medium" href="#hero">Home</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-base text-brandCharcoal hover:text-brandWine transition-colors font-medium" href="#experience">Background</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-base text-brandCharcoal hover:text-brandWine transition-colors font-medium" href="#practice-areas">Practice</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-base text-brandCharcoal hover:text-brandWine transition-colors font-medium" href="#case-outcomes">Cases</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-base text-brandCharcoal hover:text-brandWine transition-colors font-medium" href="#public-lectures">Media</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-base text-brandCharcoal hover:text-brandWine transition-colors font-medium" href="#contact">Contact</a>
            <a href="tel:8308825029" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brandWine text-white text-sm font-semibold tracking-wide hover:bg-brandWineHover transition-colors">
              <Phone size={14} />
              <span>Call Chamber</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a href="tel:8308825029" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brandWine text-white text-sm font-semibold tracking-wide hover:bg-brandWineHover transition-colors">
              <Phone size={14} />
              <span>Call</span>
            </a>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded border border-brandBorder text-brandCharcoal hover:bg-white transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav - Hidden by default */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden border-t border-brandBorder bg-white px-4 py-4 shadow-lg transition-all`}>
          <ul className="flex flex-col space-y-3 font-medium text-base">
            <li><a onClick={() => setIsMenuOpen(false)} className="nav-link" href="#hero">Home</a></li>
            <li><a onClick={() => setIsMenuOpen(false)} className="nav-link" href="#experience">Professional Background</a></li>
            <li><a onClick={() => setIsMenuOpen(false)} className="nav-link" href="#practice-areas">Practice Areas</a></li>
            <li><a onClick={() => setIsMenuOpen(false)} className="nav-link" href="#case-outcomes">Selected Acquittals</a></li>
            <li><a onClick={() => setIsMenuOpen(false)} className="nav-link" href="#public-lectures">Media & Public Lectures</a></li>
            <li><a onClick={() => setIsMenuOpen(false)} className="nav-link" href="#contact">Chamber Contact</a></li>
            <li><a onClick={() => setIsMenuOpen(false)} className="nav-link block py-1.5 text-xs text-brandMuted uppercase tracking-wider border-none" href="#disclaimer">Statutory Disclaimer</a></li>
          </ul>
          <div className="pt-4 mt-2 border-t border-brandBorder flex flex-col gap-2">
            <a href="tel:8308825029" className="w-full py-2.5 text-center bg-brandWine text-white font-semibold rounded text-sm tracking-wide">
              Direct Line: 8308825029
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative px-4 mx-auto" style={{minHeight: 'calc(100svh - 76px)', maxWidth: 'min(92vw, 1400px)'}} id="hero">
          <div className="flex flex-col justify-center min-h-full py-6 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] gap-6 md:gap-8 items-center">
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                <span className="inline-block text-sm uppercase tracking-widest font-semibold text-brandWine bg-brandWine/10 px-3 py-1 rounded-sm mb-3">
                  Criminal Defence Advocate · Maharashtra
                </span>
                <h1 className="font-serif font-bold text-brandCharcoal leading-tight mb-2" style={{fontSize: 'clamp(48px, 5vw, 78px)'}}>
                  Adv. Shubhangi Prasad Parulekar
                </h1>
                <p className="font-sans text-brandGold font-semibold uppercase mb-4" style={{fontSize: 'clamp(14px, 1.2vw, 20px)'}}>
                  District & Sessions Courts & Bombay High Court Appellate Side
                </p>
                
                <p className="text-brandCharcoal font-serif italic mb-4" style={{fontSize: 'clamp(19px, 1.5vw, 26px)', lineHeight: '1.6', maxWidth: '720px'}}>
                  "Result-driven Criminal Lawyer with 14+ years of proven court experience in trial defence and appellate-side jurisdiction."
                </p>
                <p className="text-brandMuted mb-5" style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.65', maxWidth: '720px'}}>
                  Conducting defence across District & Sessions Courts in Pune, Khed, and Baramati, alongside extensive criminal appeals before the Bombay High Court Appellate Side.
                </p>
                
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 bg-brandWine hover:bg-brandWineHover text-white text-base font-semibold rounded shadow-sm transition-colors" style={{minHeight: '52px'}}>
                    Schedule Consultation
                  </a>
                  <a href="tel:8308825029" className="inline-flex items-center justify-center px-5 py-3 bg-white border border-brandBorder text-brandCharcoal hover:bg-brandIvory text-base font-semibold rounded transition-colors" style={{minHeight: '52px'}}>
                    <Phone size={18} className="mr-1.5 text-brandWine" />
                    Call: 8308825029
                  </a>
                  <a href="#case-outcomes" className="inline-flex items-center text-base font-semibold text-brandWine hover:underline underline-offset-4 py-3">
                    <span>View Acquittals</span>
                    <span className="ml-1">↓</span>
                  </a>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-sm font-medium text-brandCharcoal">
                  <div className="bg-brandIvory p-2 rounded border border-brandBorder/60">
                    <span className="block text-brandWine font-bold" style={{fontSize: 'clamp(18px, 2vw, 20px)'}}>14+ Years</span>
                    <span className="text-xs">Trial Experience</span>
                  </div>
                  <div className="bg-brandIvory p-2 rounded border border-brandBorder/60">
                    <span className="block text-brandWine font-bold" style={{fontSize: 'clamp(18px, 2vw, 20px)'}}>Appellate Side</span>
                    <span className="text-xs">Bombay High Court</span>
                  </div>
                  <div className="bg-brandIvory p-2 rounded border border-brandBorder/60">
                    <span className="block text-brandWine font-bold" style={{fontSize: 'clamp(18px, 2vw, 20px)'}}>Sessions Courts</span>
                    <span className="text-xs">Pune, Khed, Baramati</span>
                  </div>
                  <div className="bg-brandIvory p-2 rounded border border-brandBorder/60">
                    <span className="block text-brandWine font-bold" style={{fontSize: 'clamp(18px, 2vw, 20px)'}}>Legal Aid</span>
                    <span className="text-xs">High Court & Prison Panel</span>
                  </div>
                </div>
              </div>

              {/* Right - Portrait */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative inline-block portrait-frame p-1 rounded bg-white">
                  <img 
                    src="/portrait.png" 
                    alt="Advocate Shubhangi Prasad Parulekar portrait" 
                    className="rounded object-cover lg:portrait-desktop"
                    style={{width: 'clamp(240px, 75vw, 300px)', height: 'auto'}}
                    loading="eager"
                  />
                  <div className="mt-2 text-xs uppercase tracking-wider font-semibold text-brandWine bg-brandIvory py-0.5 px-2 border border-brandBorder rounded text-center">
                    Practising Since 2008
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-10 px-4 mx-auto border-t border-brandBorder" style={{maxWidth: 'min(92vw, 1400px)'}} id="experience">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-widest font-semibold text-brandGold block mb-1">Professional Record</span>
            <h2 className="font-serif font-bold text-brandCharcoal" style={{fontSize: 'clamp(36px, 4vw, 60px)'}}>Experience Built in Criminal Defence</h2>
            <p className="text-base text-brandMuted mt-1">Practising continuously across Maharashtra trial courts and appellate jurisdictions since 2008.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-l-4 border-l-brandWine border border-brandBorder p-4 rounded-r-lg shadow-sm">
              <div className="flex items-center justify-between text-xs text-brandWine font-semibold tracking-wider uppercase mb-1">
                <span>Core Practice · 2008 – Present</span>
                <span>Trials</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brandCharcoal">Criminal Defence at District & Sessions Courts</h3>
              <p className="text-base text-brandMuted mt-1">
                Practising in criminal defence across District & Sessions Courts in <strong>Pune</strong>, <strong>Khed</strong>, and <strong>Baramati</strong> since the year 2008.
              </p>
            </div>

            <div className="bg-white border-l-4 border-l-brandGold border border-brandBorder p-4 rounded-r-lg shadow-sm">
              <div className="flex items-center justify-between text-xs text-brandGold font-semibold tracking-wider uppercase mb-1">
                <span>Appellate Practice · 2008 – Present</span>
                <span>Appeals</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brandCharcoal">Defence Counsel for Appellate Side Jurisdiction</h3>
              <p className="text-base text-brandMuted mt-1">
                Appearing as defence counsel for Appellate side jurisdiction at the <strong>Bombay High Court</strong> continuously since the year 2008.
              </p>
            </div>

            <div className="bg-white border-l-4 border-l-brandCharcoal border border-brandBorder p-4 rounded-r-lg shadow-sm">
              <div className="flex items-center justify-between text-xs text-brandCharcoal font-semibold tracking-wider uppercase mb-1">
                <span>Special Acts Prosecution Defence</span>
                <span>Substantive Law</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brandCharcoal">Conducted Trials Under Special Criminal Enactments</h3>
              <p className="text-base text-brandMuted mt-1 mb-2">
                Regularly conducted comprehensive trials under specialized penal enactments:
              </p>
              <div className="flex flex-wrap gap-1.5 text-sm">
                {['POCSO Act', 'MCOCA', 'NDPS Act', 'Body Offences (IPC 302, 376)', 'Economic Offences'].map(act => (
                  <span key={act} className="px-2.5 py-1 bg-brandIvory text-brandCharcoal border border-brandBorder rounded">{act}</span>
                ))}
              </div>
            </div>

            <div className="bg-brandCard border border-brandBorder p-4 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold text-brandWine mb-3">Institutional Appointments & Legal Aid Roles</h3>
              <ul className="space-y-2 text-base text-brandCharcoal">
                {[
                  { label: "Panel Advocate", text: "at Pune District Legal Aid Committee." },
                  { label: "Serving Panel Advocate", text: "for Maharashtra State Legal Services Authority, Bombay High Court." },
                  { label: "Panel Advocate", text: "at Yerawada Central Prison, Pune." },
                  { label: "Amicus Curiae", text: "in Criminal Trials at Sessions Court, Pune." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brandGold font-bold mt-0.5">▪</span>
                    <span><strong>{item.label}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="py-10 px-4 mx-auto border-t border-brandBorder" style={{maxWidth: 'min(92vw, 1400px)'}} id="practice-areas">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-widest font-semibold text-brandGold block mb-1">Focus Areas</span>
            <h2 className="font-serif font-bold text-brandCharcoal" style={{fontSize: 'clamp(36px, 4vw, 60px)'}}>Criminal Practice Areas</h2>
            <p className="text-base text-brandMuted mt-1">Detailed statutory representation in trials, cross-examinations, bail and appellate challenges.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              { id: "01", title: "Criminal Trials & Trial Defence", desc: "Preparation of defence strategies, witness cross-examination, and full trial procedure in Sessions courts." },
              { id: "02", title: "Criminal Defence & Regular Bail", desc: "Bail applications, anticipatory bail proceedings, and remand hearings across trial and appellate courts." },
              { id: "03", title: "Appellate Criminal Matters (Bombay High Court)", desc: "Appellate Side representation challenging conviction orders and petitioning before the High Court." },
              { id: "04", title: "POCSO Matters", desc: "Defence under Protection of Children from Sexual Offences Act before designated Special POCSO Courts." },
              { id: "05", title: "MCOCA Matters", desc: "Special trial representation in allegations framed under Maharashtra Control of Organised Crime Act." },
              { id: "06", title: "NDPS Act Matters", desc: "Procedural compliance and trial defence under the Narcotic Drugs and Psychotropic Substances Act." },
              { id: "07", title: "Body Offences (IPC 302, 307 & Allied)", desc: "Sessions court trial conduct in grave offences including homicide, assault, and grievous hurt." },
              { id: "08", title: "Economic Offences & Financial Crime", desc: "Criminal breach of trust, cheating, and allied financial criminal trials under statutory frameworks." },
              { id: "09", title: "Sessions Court Matters (Pune, Khed, Baramati)", desc: "Direct representation across regional taluka and district judicial centers in Pune district." },
              { id: "10", title: "Legal Aid & Panel Advocacy", desc: "Institutional representation through Yerawada Prison, State Legal Services, and Amicus assignments." }
            ].map(area => (
              <div key={area.id} className="p-4 bg-white border border-brandBorder rounded-lg shadow-sm hover:border-brandGold transition-colors">
                <span className="text-sm font-sans font-bold text-brandWine">{area.id}</span>
                <h3 className="font-serif text-xl font-bold text-brandCharcoal mt-0.5">{area.title}</h3>
                <p className="text-sm text-brandMuted mt-1 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-brandMuted italic">* Each matter is evaluated strictly on its individual statutory provisions, evidentiary record, and criminal procedure.</p>
        </section>

        {/* Case Outcomes */}
        <section className="py-10 px-4 mx-auto border-t border-brandBorder" style={{maxWidth: 'min(92vw, 1400px)'}} id="case-outcomes">
          <div className="mb-4">
            <span className="text-sm uppercase tracking-widest font-semibold text-brandGold block mb-1">Factual Court Records</span>
            <h2 className="font-serif font-bold text-brandCharcoal" style={{fontSize: 'clamp(36px, 4vw, 60px)'}}>Selected Criminal Cases Resulting in Acquittal</h2>
            <p className="text-base text-brandMuted mt-1">Verified matters from trial records conducted by Adv. Shubhangi Prasad Parulekar.</p>
          </div>

          <div className="bg-brandWine/5 border-l-4 border-brandWine p-3.5 rounded-r text-sm text-brandCharcoal mb-5">
            <strong className="font-semibold text-brandWine">Mandatory Legal Disclaimer:</strong> Past case outcomes depend on the facts, evidence, applicable law, and circumstances of each individual matter. Past outcomes do not guarantee or predict a similar result in future cases.
          </div>

          <div className="space-y-3 mb-5">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search cases by party name, act (e.g. 302, POCSO, MCOC)..." 
                className="w-full text-base bg-white border border-brandBorder rounded-md px-3.5 py-2.5 pr-9 text-brandCharcoal placeholder-brandMuted focus:border-brandWine focus:ring-1 focus:ring-brandWine outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={18} className="text-brandMuted absolute right-3 top-3 pointer-events-none" />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { label: 'All Cases (10)', id: 'all' },
                { label: 'IPC Matters (6)', id: 'ipc' },
                { label: 'POCSO Matters (3)', id: 'pocso' },
                { label: 'MCOCA (1)', id: 'mcoc' }
              ].map(filter => (
                <button 
                  key={filter.id}
                  className={`text-sm font-semibold px-3 py-1.5 rounded border transition-colors ${activeFilter === filter.id ? 'bg-brandWine text-white border-brandWine' : 'bg-white text-brandCharcoal border-brandBorder hover:bg-brandIvory'}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2.5">
            {filteredCases.map((item, idx) => (
              <div key={item.id} className="bg-white border border-brandBorder rounded-lg p-3.5 transition-all shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-brandGold bg-brandIvory px-2 py-0.5 rounded border border-brandBorder">Case {item.id}</span>
                      <span className="inline-block text-xs font-semibold text-brandWine bg-brandWine/10 px-2 py-0.5 rounded">{item.act}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brandCharcoal">{item.title}</h3>
                    <p className="text-sm text-brandMuted mt-0.5">Offence: {item.category === 'ipc' ? 'Indian Penal Code matter' : item.category.toUpperCase() + ' Special Act matter'}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="inline-flex items-center px-2 py-1 bg-green-50 text-green-800 border border-green-200 text-sm font-bold rounded">Acquittal</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCase(item)}
                  className="mt-2 text-sm font-semibold text-brandWine hover:underline inline-flex items-center"
                >
                  <span>View Record Verification</span>
                  <span className="ml-1">→</span>
                </button>
              </div>
            ))}
            {filteredCases.length === 0 && (
              <div className="text-center py-8 bg-white border border-brandBorder rounded-lg text-base text-brandMuted">
                No case records match your search filter.
              </div>
            )}
          </div>
        </section>

        {/* Media Section */}
        <section className="py-10 px-4 mx-auto border-t border-brandBorder" style={{maxWidth: 'min(92vw, 1400px)'}} id="public-lectures">
          <div className="mb-5">
            <span className="text-sm uppercase tracking-widest font-semibold text-brandGold block mb-1">Public Legal Awareness</span>
            <h2 className="font-serif font-bold text-brandCharcoal" style={{fontSize: 'clamp(36px, 4vw, 60px)'}}>Legal Awareness & Public Lectures</h2>
            <p className="text-base text-brandMuted mt-1">Disseminating legal education on rights of senior citizens and criminal justice procedure.</p>
          </div>

          <div className="bg-white border border-brandBorder p-5 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brandWine/10 text-brandWine flex items-center justify-center flex-shrink-0">
                <Mic2 size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brandWine bg-brandWine/10 px-2 py-0.5 rounded">All India Radio Broadcast</span>
                <h3 className="font-serif text-xl font-bold text-brandCharcoal mt-1">Maintenance and Welfare of Senior Citizens Act (2007)</h3>
                <p className="text-base text-brandMuted mt-2 leading-relaxed">
                  Delivered educational broadcast lectures on the Maintenance and Welfare of Parents and Senior Citizens Act of 2007 on <strong>All India Radio</strong>, elucidating the statutory protections, tribunal processes, and maintenance provisions available to elders under Indian law.
                </p>
                <div className="mt-3 text-sm text-brandMuted bg-brandIvory p-2.5 rounded border border-brandBorder">
                  Archived educational topics and statutory notes can be referenced during chamber legal consultations.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-10 px-4 mx-auto border-t border-brandBorder" style={{maxWidth: 'min(92vw, 1400px)'}} id="contact">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-widest font-semibold text-brandGold block mb-1">Chamber Office</span>
            <h2 className="font-serif font-bold text-brandCharcoal" style={{fontSize: 'clamp(36px, 4vw, 60px)'}}>Discuss Your Legal Matter</h2>
            <p className="text-base text-brandMuted mt-1">For professional legal representation or consultation in criminal trials and appeals.</p>
          </div>

          <div className="mb-6 p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-md text-sm leading-relaxed">
            <strong>Important Confidentiality Notice:</strong> Please do not submit confidential trial records or sensitive case evidence through web forms. Chamber consultations can be arranged in person or by direct telephone.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="bg-white p-5 border border-brandBorder rounded-lg shadow-sm">
                <h3 className="font-sans text-base uppercase tracking-wider text-brandWine font-bold mb-3">Chamber Office</h3>
                <div className="space-y-3.5 text-base text-brandCharcoal">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-brandMuted font-medium">Advocate Name</span>
                    <span className="font-semibold text-brandCharcoal">Adv. Shubhangi Prasad Parulekar</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-brandMuted font-medium">Chamber Address</span>
                    <p className="mt-0.5 leading-snug">
                      308, 3rd Floor, Amit Court Condominium,<br />
                      Shivajinagar, Pune – 411005,<br />
                      Maharashtra, India.
                    </p>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-brandMuted font-medium">Direct Telephone</span>
                    <a href="tel:8308825029" className="font-semibold text-brandWine hover:underline">+91 8308825029</a>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-brandMuted font-medium">Electronic Mail</span>
                    <a href="mailto:spparulekar@gmail.com" className="font-semibold text-brandWine hover:underline break-all">spparulekar@gmail.com</a>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-brandBorder flex flex-col gap-2">
                  <a href="tel:8308825029" className="w-full text-center py-2 px-3 bg-brandWine hover:bg-brandWineHover text-white text-sm font-semibold rounded transition-colors">Call Chamber: 8308825029</a>
                  <a href="mailto:spparulekar@gmail.com" className="w-full text-center py-2 px-3 bg-brandIvory hover:bg-brandBorder text-brandCharcoal text-sm font-semibold rounded border border-brandBorder transition-colors">Send Direct Email</a>
                  <a href="https://maps.google.com/?q=Amit+Court+Condominium+Shivajinagar+Pune+411005" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2 px-3 bg-white text-brandWine hover:bg-brandIvory text-sm font-semibold rounded border border-brandWine/30 transition-colors inline-flex items-center justify-center gap-1">Directions to Amit Court <ExternalLink size={12} /></a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="bg-white p-5 sm:p-6 border border-brandBorder rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-bold text-brandCharcoal mb-1">Request a Consultation</h3>
                <p className="text-sm text-brandMuted mb-4">Complete the form below to receive consultation scheduling details from the chamber office.</p>
                <form className="space-y-3.5" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block text-xs font-semibold text-brandCharcoal uppercase tracking-wider mb-1">Full Name <span className="text-red-700">*</span></label>
                    <input required type="text" className="w-full text-base bg-white border border-brandBorder rounded px-3 py-2 text-brandCharcoal focus:border-brandWine focus:ring-1 focus:ring-brandWine outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brandCharcoal uppercase tracking-wider mb-1">Phone Number <span className="text-red-700">*</span></label>
                    <input required type="tel" className="w-full text-base bg-white border border-brandBorder rounded px-3 py-2 text-brandCharcoal focus:border-brandWine focus:ring-1 focus:ring-brandWine outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brandCharcoal uppercase tracking-wider mb-1">Email Address</label>
                    <input type="email" className="w-full text-base bg-white border border-brandBorder rounded px-3 py-2 text-brandCharcoal focus:border-brandWine focus:ring-1 focus:ring-brandWine outline-none" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-brandCharcoal uppercase tracking-wider mb-1">Matter Category</label>
                      <select className="w-full text-sm bg-white border border-brandBorder rounded px-2.5 py-2 text-brandCharcoal outline-none">
                        <option>Criminal Trial Defence</option>
                        <option>Bail / Anticipatory Bail</option>
                        <option>POCSO Act Matter</option>
                        <option>MCOCA Special Act</option>
                        <option>NDPS Act Matter</option>
                        <option>Bombay High Court Appeal</option>
                        <option>Legal Advisory / Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brandCharcoal uppercase tracking-wider mb-1">Jurisdiction</label>
                      <select className="w-full text-sm bg-white border border-brandBorder rounded px-2.5 py-2 text-brandCharcoal outline-none">
                        <option>Pune Sessions Court</option>
                        <option>Khed Court</option>
                        <option>Baramati Court</option>
                        <option>Bombay High Court (Appellate)</option>
                        <option>Other Maharashtra Court</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brandCharcoal uppercase tracking-wider mb-1">Brief Inquiry (Non-confidential)</label>
                    <textarea rows={3} className="w-full text-base bg-white border border-brandBorder rounded px-3 py-2 text-brandCharcoal focus:border-brandWine focus:ring-1 focus:ring-brandWine outline-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-brandWine hover:bg-brandWineHover text-white text-base font-semibold rounded shadow transition-colors" style={{minHeight: '48px'}}>Submit Consultation Request</button>
                </form>
                {isSubmitted && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-900 rounded text-sm leading-relaxed" role="alert">
                    <strong>Request Received:</strong> Your inquiry has been documented. For urgent bail or court hearing dates, please call the chamber directly at <strong>+91 8308825029</strong>.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-8 px-4 mx-auto border-t border-brandBorder bg-brandIvory pb-20 md:pb-8" style={{maxWidth: 'min(92vw, 1400px)'}} id="disclaimer">
          <div className="p-4 bg-white/70 border border-brandBorder rounded-md text-sm text-brandMuted leading-relaxed">
            <h4 className="font-sans text-sm uppercase tracking-wider font-bold text-brandWine mb-1.5">Bar Council of India Professional Regulation & Statutory Disclaimer</h4>
            <p className="mb-2">As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising. By accessing this website (or any linked content), the user acknowledges that the information provided herein is solely for informational purposes at the user's voluntary request.</p>
            <p>No material provided on this profile should be construed as legal advice or solicitation. Transmission, receipt or use of this website does not form or constitute an advocate-client relationship. Prior outcomes, acquittals, or court representations do not guarantee identical results in future proceedings.</p>
          </div>
        </section>

        {/* Mobile Bottom Action Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-brandCharcoal border-t border-brandWine z-50" style={{paddingBottom: 'env(safe-area-inset-bottom)'}}>
          <div className="flex">
            <a href="tel:8308825029" className="flex-1 flex items-center justify-center py-4 text-white font-semibold text-base border-r border-white/10 hover:bg-brandWine transition-colors">
              <Phone size={18} className="mr-2" />
              CALL
            </a>
            <a href="#contact" className="flex-1 flex items-center justify-center py-4 text-white font-semibold text-base hover:bg-brandWine transition-colors">
              CONSULT
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-brandCharcoal text-white pt-8 pb-12 border-t border-brandWine">
          <div className="mx-auto px-4" style={{maxWidth: 'min(92vw, 1400px)'}}>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b border-white/10 text-sm">
              <div>
                <span className="block font-sans text-base uppercase tracking-wider font-bold text-brandGoldLight">Adv. Shubhangi Prasad Parulekar</span>
                <span className="block text-white/70 mt-1">Criminal Defence Advocate · Enrolled & Practising Since 2008</span>
                <span className="block text-white/60 mt-0.5">District & Sessions Courts Pune, Khed, Baramati · Bombay High Court</span>
              </div>
              <div className="text-left sm:text-right space-y-1 text-white/80">
                <div>308, 3rd Floor, Amit Court Condominium</div>
                <div>Shivajinagar, Pune – 411005</div>
                <div>Phone: <a href="tel:8308825029" className="text-brandGoldLight hover:underline font-semibold">+91 8308825029</a></div>
                <div>Email: <a href="mailto:spparulekar@gmail.com" className="text-brandGoldLight hover:underline">spparulekar@gmail.com</a></div>
              </div>
            </div>
            <div className="pt-6 text-center text-white/50 text-sm">
              <p>© 2024 Adv. Shubhangi Prasad Parulekar. All rights reserved.</p>
              <p className="mt-1">Official profile of a practising criminal defence advocate in Maharashtra, India.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Case Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-5 border border-brandBorder shadow-2xl relative text-brandCharcoal">
            <button 
              onClick={() => setSelectedCase(null)}
              className="absolute top-3.5 right-3.5 p-1 rounded-full text-brandMuted hover:text-brandCharcoal hover:bg-brandIvory"
            >
              <X size={20} />
            </button>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brandWine bg-brandWine/10 px-2 py-0.5 rounded mb-2">
              Verified Case {selectedCase.id.toUpperCase()} Record
            </span>
            <h3 className="font-serif text-xl font-bold text-brandCharcoal pr-6">
              {selectedCase.title}
            </h3>
            <div className="mt-3 space-y-2.5 text-sm text-brandCharcoal border-t border-b border-brandBorder py-3">
              <div>
                <span className="text-brandMuted uppercase tracking-wider block">Statutory Section / Offence:</span>
                <span className="font-semibold text-brandWine">{selectedCase.act}</span>
              </div>
              <div>
                <span className="text-brandMuted uppercase tracking-wider block">Court Proceeding Result:</span>
                <span className="inline-flex items-center px-2 py-0.5 bg-green-100 text-green-900 font-bold rounded">Acquittal Confirmed</span>
              </div>
              <div>
                <span className="text-brandMuted uppercase tracking-wider block">Appearing Defence Counsel:</span>
                <span className="font-medium text-brandCharcoal">Adv. Shubhangi Prasad Parulekar</span>
              </div>
              <div>
                <span className="text-brandMuted uppercase tracking-wider block">Jurisdiction:</span>
                <span className="font-medium text-brandCharcoal">District & Sessions Courts / Special Designated Court (Maharashtra)</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-brandMuted italic leading-normal">
              * Listed strictly as certified in professional court documentation. In compliance with privacy guidelines, further judicial transcripts and certified judgment copies may be inspected at chamber consultations.
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => setSelectedCase(null)}
                className="px-4 py-2 bg-brandIvory hover:bg-brandBorder border border-brandBorder rounded text-sm font-semibold text-brandCharcoal"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
