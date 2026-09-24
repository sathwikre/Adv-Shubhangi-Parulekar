import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Info, AlertTriangle } from 'lucide-react';
import { CASE_OUTCOMES, CaseOutcome } from '../data/cases';

export default function Cases() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'IPC' | 'POCSO' | 'MCOCA'>('All');
  const [selectedCase, setSelectedCase] = useState<CaseOutcome | null>(null);

  const filteredCases = useMemo(() => {
    return CASE_OUTCOMES.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           c.offence.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'All' || c.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="bg-brand-ivory min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Selected Case Outcomes</h1>
            <p className="text-xl text-brand-charcoal/70 border-l-2 border-brand-gold pl-6">
              A selection of criminal matters in which the accused were acquitted. These records highlight factual trial outcomes.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-6 flex gap-4 items-start mb-16">
            <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={24} />
            <p className="text-sm text-amber-900 leading-relaxed italic">
              <strong>Disclaimer:</strong> Past case outcomes depend on the facts, evidence, applicable law and circumstances of each matter. Past outcomes do not guarantee a similar result in future cases.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
            <div className="flex flex-wrap gap-4">
              {(['All', 'IPC', 'POCSO', 'MCOCA'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 text-xs uppercase tracking-widest font-bold border transition-all ${
                    activeFilter === filter 
                      ? 'bg-brand-burgundy border-brand-burgundy text-white' 
                      : 'bg-white border-brand-gray text-brand-charcoal hover:border-brand-burgundy'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
              <input
                type="text"
                placeholder="Search selected cases..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-brand-gray focus:border-brand-burgundy outline-none transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Case List */}
          <div className="grid grid-cols-1 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredCases.map((c) => (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  onClick={() => setSelectedCase(c)}
                  className="group bg-white p-6 md:p-8 border border-brand-gray/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-brand-burgundy hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold">{c.category}</span>
                    <h3 className="text-xl font-serif font-bold group-hover:text-brand-burgundy transition-colors">{c.name}</h3>
                    <p className="text-sm text-brand-charcoal/60">{c.offence}</p>
                  </div>
                  <div className="flex items-center gap-6 self-end md:self-auto">
                    <span className="px-4 py-1.5 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest border border-green-100">
                      {c.outcome}
                    </span>
                    <Info size={20} className="text-brand-gray group-hover:text-brand-burgundy transition-colors" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredCases.length === 0 && (
              <div className="text-center py-20 bg-white border border-brand-gray/50 italic text-brand-charcoal/40">
                No cases matching your criteria.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-xl bg-brand-ivory p-10 md:p-12 shadow-2xl border border-brand-gold/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-brand-gold/20 -z-0 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest mb-4 block">Case Details</span>
                <h2 className="text-3xl font-serif font-bold mb-8">{selectedCase.name}</h2>
                
                <div className="space-y-8 border-y border-brand-gray/20 py-8 mb-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-2">Offence / Act</h4>
                      <p className="text-sm font-medium">{selectedCase.offence}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-2">Category</h4>
                      <p className="text-sm font-medium">{selectedCase.category}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-2">Trial Outcome</h4>
                    <p className="text-lg font-serif font-bold text-green-700">{selectedCase.outcome}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[11px] text-brand-charcoal/40 max-w-[200px] italic">
                    Historical outcome based on trial evidence and procedure.
                  </p>
                  <button 
                    onClick={() => setSelectedCase(null)}
                    className="px-8 py-2 bg-brand-charcoal text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-burgundy transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
