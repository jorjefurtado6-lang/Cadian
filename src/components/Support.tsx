import { motion } from 'motion/react';
import { HelpCircle, DownloadCloud, PlayCircle, ArrowRight } from 'lucide-react';

export function Support() {
  const cards = [
    {
      icon: HelpCircle,
      title: "Central de ajuda",
      desc: "Encontre respostas, guias e orientações para utilizar todos os recursos da plataforma."
    },
    {
      icon: DownloadCloud,
      title: "Downloads e atualizações",
      desc: "Acesse instaladores, manuais, arquivos complementares e versões recentes."
    },
    {
      icon: PlayCircle,
      title: "Tutoriais em vídeo",
      desc: "Aprenda através de conteúdos rápidos produzidos para diferentes níveis de experiência."
    }
  ];

  return (
    <section className="bg-color-background-soft section-padding" id="suporte">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-[42px] lg:text-[56px] leading-[1.1] font-bold text-balance mb-4">
              Suporte e conteúdo
            </h2>
            <p className="text-lg text-color-body leading-relaxed">
              Recursos completos para garantir o máximo de aproveitamento e estabilidade na sua operação.
            </p>
          </div>
          <div>
            <a 
              href="#contato"
              className="inline-flex items-center gap-2 bg-white border border-color-border hover:border-color-charcoal text-color-black px-6 py-3 rounded-[var(--radius-small)] font-bold transition-colors"
            >
              Acessar suporte
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-color-border rounded-[var(--radius-medium)] p-8 hover:shadow-lg hover:border-brand-primary/30 transition-all duration-[var(--transition-default)] group cursor-pointer"
              >
                <div className="w-14 h-14 bg-color-background-soft rounded-[var(--radius-small)] flex items-center justify-center mb-8 group-hover:bg-brand-primary/10 transition-colors">
                  <Icon className="w-7 h-7 text-color-charcoal group-hover:text-brand-primary transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-color-body leading-relaxed mb-8">
                  {card.desc}
                </p>
                <div className="text-brand-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explorar
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
