import { Monitor, Box, Settings } from 'lucide-react';
import { motion } from 'motion/react';

export function Differentiators() {
  const items = [
    {
      number: "01",
      icon: Monitor,
      title: "Experiência consolidada",
      text: "Tecnologia construída com foco contínuo em projetos técnicos, engenharia e produtividade profissional."
    },
    {
      number: "02",
      icon: Box,
      title: "Compatibilidade de arquivos",
      text: "Abra, edite, compartilhe e preserve desenhos técnicos com segurança durante todo o fluxo de trabalho."
    },
    {
      number: "03",
      icon: Settings,
      title: "Recursos e integrações",
      text: "Automatize tarefas, conecte aplicações e adapte a plataforma às necessidades de cada departamento."
    }
  ];

  return (
    <section className="bg-white section-padding" id="diferenciais">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding">
        
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-brand-primary font-bold tracking-wider text-xs md:text-sm mb-4 uppercase">
            Por que escolher nossa plataforma
          </p>
          <h2 className="text-3xl md:text-[42px] lg:text-[56px] leading-[1.1] font-bold mb-6 text-balance">
            Tecnologia desenvolvida para quem não pode parar.
          </h2>
          <p className="text-lg md:text-xl text-color-body leading-[1.6]">
            Reunimos desempenho, familiaridade e recursos profissionais em uma solução criada para os desafios reais de equipes técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="flex items-end justify-between mb-8 border-b-2 border-color-border pb-4 group-hover:border-brand-primary transition-colors duration-[var(--transition-default)]">
                  <Icon className="w-10 h-10 text-color-black" strokeWidth={1.5} />
                  <span className="text-4xl font-bold text-[#fe6262]">{item.number}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-color-body leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
