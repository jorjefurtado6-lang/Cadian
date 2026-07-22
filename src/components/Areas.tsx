import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { companyData } from '../data/config';

export function Areas() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    {
      id: "01",
      title: "Desenvolvimento de soluções CAD",
      desc: "Criação e evolução de ferramentas técnicas para desenho, documentação e engenharia."
    },
    {
      id: "02",
      title: "Automação e inteligência",
      desc: "Recursos que reduzem tarefas manuais e aumentam a produtividade das equipes."
    },
    {
      id: "03",
      title: "Desenvolvimento de plugins",
      desc: "Extensões personalizadas para necessidades específicas de projeto e operação."
    },
    {
      id: "04",
      title: "Soluções sob medida",
      desc: "Projetos de software personalizados para processos técnicos e ambientes corporativos."
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <section className="bg-color-charcoal section-padding relative overflow-hidden" id="atuacao">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding relative z-10">
        
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-brand-primary font-bold tracking-wider text-xs md:text-sm mb-4 uppercase">
              Nossa atuação
            </p>
            <h2 className="text-white text-3xl md:text-[42px] lg:text-[56px] leading-[1.1] font-bold text-balance">
              Tecnologia e serviços para transformar operações técnicas.
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {items.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4 first:pl-0 last:pr-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div>
                      <span className="text-brand-primary font-bold text-6xl md:text-8xl mb-6 block opacity-50">
                        {item.id}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed mb-10">
                        {item.desc}
                      </p>
                      <a 
                        href={companyData.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-[var(--radius-small)] font-bold transition-colors"
                      >
                        Testar gratuitamente
                      </a>
                    </div>
                    <div className="aspect-[4/3] bg-color-background-dark border border-white/10 rounded-[var(--radius-medium)] relative overflow-hidden flex items-center justify-center p-8">
                       <svg className="w-full h-full text-brand-primary/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                         {/* Abstract geometric background based on index */}
                         {index === 0 && (
                            <>
                              <rect x="20" y="20" width="60" height="60" rx="4" />
                              <circle cx="50" cy="50" r="15" />
                              <line x1="20" y1="20" x2="80" y2="80" />
                              <line x1="80" y1="20" x2="20" y2="80" />
                            </>
                         )}
                         {index === 1 && (
                            <>
                              <path d="M50 10 L90 50 L50 90 L10 50 Z" />
                              <rect x="40" y="40" width="20" height="20" />
                              <circle cx="50" cy="25" r="5" fill="currentColor" />
                              <circle cx="50" cy="75" r="5" fill="currentColor" />
                              <circle cx="25" cy="50" r="5" fill="currentColor" />
                              <circle cx="75" cy="50" r="5" fill="currentColor" />
                            </>
                         )}
                         {index === 2 && (
                            <>
                              <rect x="30" y="30" width="40" height="40" rx="4" />
                              <path d="M40 30 L40 10" />
                              <path d="M60 30 L60 10" />
                              <path d="M30 40 L10 40" />
                              <path d="M30 60 L10 60" />
                            </>
                         )}
                         {index === 3 && (
                            <>
                              <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                              <circle cx="50" cy="50" r="30" />
                              <circle cx="50" cy="50" r="20" strokeDasharray="4 4" />
                              <path d="M50 10 L50 90" />
                              <path d="M10 50 L90 50" />
                            </>
                         )}
                       </svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
            {items.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentIndex === idx ? "w-8 bg-brand-primary" : "bg-white/20"
                )}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
