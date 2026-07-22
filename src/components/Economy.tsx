import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/config';

export function Economy() {
  const indicators = [
    "Compatibilidade com fluxos existentes",
    "Licenciamento flexível",
    "Suporte especializado"
  ];

  return (
    <section className="bg-color-background-dark section-padding relative overflow-hidden" id="comparar">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-brand-primary font-bold tracking-wider text-xs md:text-sm mb-4 uppercase">
              Mais controle sobre o investimento
            </p>
            <h2 className="text-white text-3xl md:text-[42px] lg:text-[56px] leading-[1.1] font-bold mb-6 text-balance">
              Uma solução profissional sem complexidade desnecessária.
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Centralize projetos, reduza barreiras de adoção e escolha um modelo de licença compatível com a realidade da sua empresa.
            </p>

            <ul className="space-y-5 mb-12">
              {indicators.map((indicator, index) => (
                <li key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" strokeWidth={2} />
                  <span className="text-white font-medium text-lg">{indicator}</span>
                </li>
              ))}
            </ul>

            <a 
              href={companyData.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-[var(--radius-small)] font-bold transition-colors w-full sm:w-auto"
            >
              Testar gratuitamente
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center"
          >
            {/* Abstract Wireframe */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[var(--radius-medium)] border border-white/10 p-8 flex items-center justify-center">
              <svg className="w-full h-full text-brand-primary/40" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
                {/* Isometric Grid */}
                <pattern id="iso-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0 10 L10 5 L20 10 L10 15 Z" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#iso-grid)" opacity="0.2" />
                
                {/* Main Object */}
                <g strokeWidth="1" stroke="white" opacity="0.8">
                  {/* Top face */}
                  <path d="M100 40 L160 70 L100 100 L40 70 Z" />
                  {/* Left face */}
                  <path d="M40 70 L100 100 L100 160 L40 130 Z" />
                  {/* Right face */}
                  <path d="M160 70 L100 100 L100 160 L160 130 Z" />
                  {/* Cutout/detail */}
                  <path d="M100 60 L140 80 L100 100 L60 80 Z" stroke="#ED3A4E" strokeWidth="1.5" />
                  <path d="M100 100 L100 140" stroke="#ED3A4E" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-1/4 -left-4 md:-left-8 bg-color-charcoal border border-white/10 py-3 px-6 rounded shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-brand-primary" />
                <span className="text-white text-sm font-bold tracking-wider">DWG NATIVO</span>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-1/4 -right-4 md:-right-8 bg-color-charcoal border border-white/10 py-3 px-6 rounded shadow-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-white text-sm font-bold tracking-wider">PERFORMANCE</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
