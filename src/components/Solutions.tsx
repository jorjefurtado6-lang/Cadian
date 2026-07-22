import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { solutions } from '../data/config';
import { cn } from '../lib/utils';
import architectureImg from '../assets/images/architecture_model_1784661995902.jpg';
import mechanicsImg from '../assets/images/mechanics_model_1784661808649.jpg';

export function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-color-background-soft section-padding" id="solucoes">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding">
        
        <div className="mb-16 md:mb-20">
          <p className="text-brand-primary font-bold tracking-wider text-xs md:text-sm mb-4 uppercase">
            Soluções Especializadas
          </p>
          <h2 className="text-3xl md:text-[42px] lg:text-[56px] leading-[1.1] font-bold mb-6 max-w-2xl text-balance">
            Ferramentas criadas para diferentes áreas de projeto.
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-12">
          {/* Tabs Sidebar */}
          <div className="col-span-3 flex flex-col border-l border-color-border/60 pl-6 space-y-6">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "text-left font-bold text-lg transition-all relative",
                  activeTab === index 
                    ? "text-brand-primary" 
                    : "text-color-muted hover:text-color-black"
                )}
              >
                {activeTab === index && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-[2px] h-full bg-brand-primary rounded-r"
                    initial={false}
                  />
                )}
                {solution.segment}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-6">{solutions[activeTab].title}</h3>
                  <p className="text-lg text-color-body mb-8 leading-relaxed">
                    {solutions[activeTab].description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {solutions[activeTab].benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-brand-primary" strokeWidth={2} />
                        <span className="font-medium text-color-charcoal">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contato"
                    className="inline-flex items-center gap-2 text-color-black font-bold border-b-2 border-brand-primary pb-1 hover:text-brand-primary transition-colors"
                  >
                    Conhecer solução
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="aspect-[4/3] bg-white border border-color-border rounded-[var(--radius-medium)] flex items-center justify-center p-0 overflow-hidden relative">
                  {solutions[activeTab].segment === "Arquitetura" ? (
                    <img src={architectureImg} alt="Modelo de arquitetura" className="w-full h-full object-cover" />
                  ) : solutions[activeTab].segment === "Engenharia Civil" ? (
                    <img src="https://i.postimg.cc/507Grb6S/Civil-engineering-realistic-image-202607211633.jpg" alt="Engenharia Civil" className="w-full h-full object-cover" />
                  ) : solutions[activeTab].segment === "Mecânica" ? (
                    <img src={mechanicsImg} alt="Modelo de peça mecânica" className="w-full h-full object-cover" />
                  ) : solutions[activeTab].segment === "Indústria" ? (
                    <img src="https://i.postimg.cc/HLLF9rL2/Create-realistic-image-Industry-202607211638.jpg" alt="Indústria" className="w-full h-full object-cover" />
                  ) : solutions[activeTab].segment === "Elétrica" ? (
                    <img src="https://i.postimg.cc/G2X2S8FZ/Electrical-diagrams-distribution-202607211646.jpg" alt="Elétrica" className="w-full h-full object-cover" />
                  ) : solutions[activeTab].segment === "Tubulação e HVAC" ? (
                    <img src="https://i.postimg.cc/3NCHbPQR/Ducts-and-fluids-project-tools-202607211653.jpg" alt="Tubulação e HVAC" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full border-2 border-dashed border-color-border/60 rounded flex flex-col items-center justify-center text-color-muted m-8">
                      <span className="font-bold text-sm uppercase tracking-widest">{solutions[activeTab].segment}</span>
                      <span className="text-xs mt-2">Imagem técnica ilustrativa</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col">
          <div className="flex overflow-x-auto hide-scrollbar border-b border-color-border mb-8">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "whitespace-nowrap px-4 py-4 text-sm font-bold border-b-2 transition-colors",
                  activeTab === index 
                    ? "text-brand-primary border-brand-primary" 
                    : "text-color-muted border-transparent"
                )}
              >
                {solution.segment}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
              <div className="aspect-video bg-white border border-color-border rounded-[var(--radius-medium)] flex items-center justify-center p-0 overflow-hidden relative">
                {solutions[activeTab].segment === "Arquitetura" ? (
                  <img src={architectureImg} alt="Modelo de arquitetura" className="w-full h-full object-cover" />
                ) : solutions[activeTab].segment === "Engenharia Civil" ? (
                  <img src="https://i.postimg.cc/507Grb6S/Civil-engineering-realistic-image-202607211633.jpg" alt="Engenharia Civil" className="w-full h-full object-cover" />
                ) : solutions[activeTab].segment === "Mecânica" ? (
                  <img src={mechanicsImg} alt="Modelo de peça mecânica" className="w-full h-full object-cover" />
                ) : solutions[activeTab].segment === "Indústria" ? (
                  <img src="https://i.postimg.cc/HLLF9rL2/Create-realistic-image-Industry-202607211638.jpg" alt="Indústria" className="w-full h-full object-cover" />
                ) : solutions[activeTab].segment === "Elétrica" ? (
                  <img src="https://i.postimg.cc/G2X2S8FZ/Electrical-diagrams-distribution-202607211646.jpg" alt="Elétrica" className="w-full h-full object-cover" />
                ) : solutions[activeTab].segment === "Tubulação e HVAC" ? (
                  <img src="https://i.postimg.cc/3NCHbPQR/Ducts-and-fluids-project-tools-202607211653.jpg" alt="Tubulação e HVAC" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full border-2 border-dashed border-color-border/60 rounded flex items-center justify-center text-color-muted text-xs font-bold uppercase tracking-widest m-4">
                    {solutions[activeTab].segment}
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">{solutions[activeTab].title}</h3>
                <p className="text-color-body mb-6 leading-relaxed">
                  {solutions[activeTab].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {solutions[activeTab].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-primary" strokeWidth={2} />
                      <span className="font-medium text-color-charcoal text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contato"
                  className="inline-flex items-center gap-2 text-color-black font-bold border-b-2 border-brand-primary pb-1 text-sm"
                >
                  Conhecer solução
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
