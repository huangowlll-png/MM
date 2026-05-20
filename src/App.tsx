import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { CONCEPTS, ConceptId } from './types';
import ConceptPresentation from './components/ConceptPresentation';
import ViralLandingPage from './components/ViralLandingPage';
import { Sparkles, Crown, Leaf, Zap, Heart, LayoutTemplate, MonitorCheck } from 'lucide-react';

export default function App() {
  const [activeConcept, setActiveConcept] = useState<ConceptId>('tiktok');
  const [view, setView] = useState<'lab' | 'viral'>('viral');

  const icons = {
    tiktok: Zap,
    luxury: Crown,
    minimal: Leaf,
    genz: Sparkles,
    premium: Heart,
  };

  if (view === 'viral') {
    return (
      <div className="relative">
        <ViralLandingPage />
        <button 
          onClick={() => setView('lab')}
          className="fixed bottom-6 right-6 z-[200] bg-black text-white px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-transform"
        >
          <LayoutTemplate size={14} /> Back to Design Lab
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col font-sans">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-[800] tracking-[-0.05em] font-bricolage text-black">
              ModMingle<span className="text-[10px] align-top ml-0.5">®</span>
            </div>
            <div className="h-6 w-px bg-neutral-200 mx-2"></div>
            <h1 className="text-sm font-bold tracking-tight text-neutral-400 uppercase">Design Lab</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="flex bg-neutral-100 p-1 rounded-2xl overflow-x-auto max-w-full">
              {(Object.keys(CONCEPTS) as ConceptId[]).map((id) => {
                const Icon = icons[id];
                const isActive = activeConcept === id;
                return (
                  <button
                    key={id}
                    id={`nav-btn-${id}`}
                    onClick={() => setActiveConcept(id)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap
                      ${isActive 
                        ? 'bg-white text-black shadow-sm' 
                        : 'text-neutral-500 hover:text-neutral-800'
                      }
                    `}
                  >
                    <Icon size={16} />
                    {CONCEPTS[id].name.split(' ')[0]}
                  </button>
                );
              })}
            </nav>
            <button 
              onClick={() => setView('viral')}
              className="bg-pink-hot text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm whitespace-nowrap"
            >
              <MonitorCheck size={16} /> Viral Showcase
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConcept}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="h-full"
          >
            <ConceptPresentation concept={CONCEPTS[activeConcept]} />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-neutral-200 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© 2026 MODMINGLE. Concept exploration only.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Live Preview </span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Shopify Sections </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
