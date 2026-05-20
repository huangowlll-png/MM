import { motion } from 'motion/react';
import { ConceptData } from '../types';
import ShopifyFrame from './ShopifyFrame';
import { CheckCircle2, Layout, UserCircle, Target, Layers } from 'lucide-react';

interface Props {
  concept: ConceptData;
}

export default function ConceptPresentation({ concept }: Props) {
  return (
    <div className="h-full flex flex-col lg:flex-row overflow-hidden">
      {/* Strategy Sidebar */}
      <div className="w-full lg:w-96 bg-white shrink-0 border-r border-neutral-200 overflow-y-auto custom-scrollbar p-8">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
        >
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">Design Direction</span>
            <h2 className="text-3xl font-extrabold tracking-tight mb-4">{concept.name}</h2>
            <p className="text-neutral-600 leading-relaxed">{concept.uiuxExplanation}</p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-3 text-sm font-bold text-neutral-800 uppercase tracking-wide">
                <Target size={16} />
                <span>Mood & Appeal</span>
              </div>
              <p className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 text-neutral-700 italic">
                "{concept.mood}"
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3 text-sm font-bold text-neutral-800 uppercase tracking-wide">
                <Layout size={16} />
                <span>Visual Identity</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 rounded bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5">Aa</div>
                  <div>
                    <span className="font-semibold block">Typography:</span>
                    <span className="text-neutral-500">{concept.typography}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="flex items-center gap-1 shrink-0 mt-1">
                    {concept.colors.map(c => (
                      <div key={c} className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: c }}></div>
                    ))}
                  </div>
                  <div>
                    <span className="font-semibold block">Color Palette:</span>
                    <span className="text-neutral-500">{concept.colors.join(', ')}</span>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3 text-sm font-bold text-neutral-800 uppercase tracking-wide">
                <UserCircle size={16} />
                <span>CTA Strategy</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {concept.ctaStrategy}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3 text-sm font-bold text-neutral-800 uppercase tracking-wide">
                <Layers size={16} />
                <span>Shopify Sections</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {concept.shopifySections.map((section, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-lg text-sm group hover:bg-neutral-100 transition-colors">
                    <CheckCircle2 size={14} className="text-neutral-400 group-hover:text-black" />
                    <span className="text-neutral-700">{section}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 bg-neutral-100 overflow-y-auto flex justify-center p-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="max-w-[400px] w-full h-fit flex flex-col items-center">
            <div className="mb-4 text-center">
               <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Mobile-First Prototype</span>
            </div>
            <div className="w-full relative rounded-[3rem] border-[8px] border-neutral-900 shadow-2xl bg-white overflow-hidden aspect-[9/19.5]">
               {/* Phone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl z-50 flex items-center justify-center">
                  <div className="w-12 h-1 rounded-full bg-neutral-800"></div>
               </div>
               
               <div className="h-full overflow-y-auto custom-scrollbar">
                  <ShopifyFrame concept={concept} />
               </div>
            </div>
            <p className="mt-6 text-neutral-400 text-xs text-center max-w-[300px]">
               Scroll inside the device frame to explore the full homepage structure.
            </p>
        </div>
      </div>
    </div>
  );
}
