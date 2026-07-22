import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { companyData } from '../data/config';

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center bg-color-charcoal overflow-hidden pt-[var(--header-height)]">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Abstract geometric shapes representing CAD models */}
          <g stroke="white" strokeWidth="1" fill="none" className="opacity-50">
            <path d="M200,200 L400,100 L600,200 L400,300 Z" />
            <path d="M200,200 L200,400 L400,500 L600,400 L600,200" />
            <path d="M400,300 L400,500" />
            
            <circle cx="800" cy="400" r="150" />
            <ellipse cx="800" cy="400" rx="150" ry="50" transform="rotate(30 800 400)" />
            <ellipse cx="800" cy="400" rx="150" ry="50" transform="rotate(-30 800 400)" />
          </g>
        </svg>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-color-charcoal/80 z-10" />

      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding relative z-20 flex flex-col items-center">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-brand-primary font-bold tracking-wider text-sm mb-4 uppercase">
              Tecnologia para projetos profissionais
            </p>
            <h1 className="text-white text-4xl md:text-[64px] lg:text-[82px] leading-[0.98] font-bold mb-6 text-balance">
              Revolucione seus Projetos com Soluções CAD Vitalícias de Baixo Custo
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Ferramenta de alta performance para profissionais de engenharia e arquitetura, unindo tecnologia de ponta e excelente custo-benefício.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={companyData.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-[var(--radius-small)] font-bold flex items-center justify-center gap-2 transition-colors mb-[60px]"
              >
                Testar gratuitamente
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-8 md:left-16 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-white/50 text-xs font-bold tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Role para explorar
        </span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden mt-4">
          <motion.div 
            className="w-full h-full bg-brand-primary origin-top"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
        <span className="text-white font-bold text-sm mt-2">01 / 12</span>
      </motion.div>
    </section>
  );
}
