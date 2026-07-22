import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { cn } from '../lib/utils';
import { companyData } from '../data/config';

export function Products() {
  return (
    <section className="bg-white section-padding" id="produtos">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-color-charcoal rounded-[var(--radius-medium)] md:rounded-[24px] overflow-hidden relative"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <pattern id="grid-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
                 <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid-pattern)" />
             </svg>
          </div>

          <div className="relative p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-block bg-brand-primary/20 text-brand-primary font-bold tracking-wider text-xs md:text-sm mb-6 uppercase px-4 py-1.5 rounded-full">
                Experimente sem compromisso
              </span>
              <h2 className="text-white text-3xl md:text-4xl lg:text-[48px] leading-[1.1] font-bold mb-6 text-balance">
                Transforme seus projetos agora. Teste o Cadian por 30 dias grátis.
              </h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-0">
                Tenha acesso completo a todas as ferramentas profissionais, alto desempenho em arquivos pesados e compatibilidade nativa com DWG. Comece hoje mesmo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 justify-center lg:justify-start">
              <a 
                href={companyData.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-[var(--radius-small)] font-bold transition-colors shadow-lg"
              >
                <Download className="w-5 h-5" />
                Baixar versão de teste
              </a>
              <a 
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-[var(--radius-small)] font-bold transition-colors"
              >
                Falar com consultor
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
