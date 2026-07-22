import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { companyData } from '../data/config';

export function CTAFinal() {
  return (
    <section className="bg-brand-primary section-padding relative overflow-hidden text-center">
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg className="w-full h-full max-w-[800px]" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="30" />
          <path d="M50 10 L50 90" />
          <path d="M10 50 L90 50" />
          <rect x="20" y="20" width="60" height="60" />
        </svg>
      </div>

      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-white text-3xl md:text-[42px] lg:text-[56px] leading-[1.1] font-bold mb-6 text-balance">
            Pronto para transformar a rotina da sua equipe?
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 text-balance">
            Experimente uma solução CAD profissional, compatível com os desafios de empresas e especialistas técnicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href={companyData.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-primary hover:bg-color-background-soft px-8 py-4 rounded-[var(--radius-small)] font-bold flex items-center justify-center transition-colors"
            >
              Testar gratuitamente
            </a>
            <a 
              href="#contato"
              className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-4 rounded-[var(--radius-small)] font-bold flex items-center justify-center gap-2 transition-colors"
            >
              Solicitar orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
