import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

export function AdvancedFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Confiança e suporte" },
    { label: "Compatibilidade e interface" },
    { label: "Automação e extensibilidade" },
  ];

  const content = [
    {
      title: "Suporte especializado para projetos críticos.",
      text: "Nossa equipe está pronta para auxiliar sua empresa em todas as etapas, desde a implantação até o uso diário das ferramentas.",
      items: [
        "Atendimento técnico em português",
        "Implantação assistida",
        "Suporte remoto",
        "Documentação e treinamento",
        "Acompanhamento empresarial"
      ],
      metrics: [
        { value: "98%", label: "Aprovação do suporte" },
        { value: "24h", label: "Tempo de resposta" }
      ],
      image: "support-illustration"
    },
    {
      title: "Uma experiência familiar desde o primeiro projeto.",
      text: "Não perca tempo com curvas de aprendizado. Nossa interface e comandos foram desenhados para que você seja produtivo imediatamente.",
      items: [
        "Comandos intuitivos",
        "Atalhos personalizáveis",
        "Suporte a arquivos DWG",
        "Organização por camadas",
        "Ferramentas 2D e 3D",
        "Migração simplificada"
      ],
      metrics: [
        { value: "Zero", label: "Curva de aprendizado" },
        { value: "100%", label: "Leitura nativa" }
      ],
      image: "interface-illustration"
    },
    {
      title: "Personalize a solução para a rotina da sua empresa.",
      text: "Adapte o software aos seus processos com ferramentas poderosas de automação e integração.",
      items: [
        "Suporte a scripts",
        "APIs",
        "Plugins",
        "Automação de tarefas",
        "Integração com aplicações internas",
        "Ferramentas especializadas"
      ],
      metrics: [
        { value: "5+", label: "Linguagens suportadas" },
        { value: "Ilimitado", label: "Potencial de integração" }
      ],
      image: "automation-illustration"
    }
  ];

  return (
    <section className="bg-color-background-soft section-padding" id="recursos">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding">
        
        {/* Tabs */}
        <div className="flex flex-col md:flex-row border-b border-color-border mb-12 md:mb-16 overflow-x-auto hide-scrollbar">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "whitespace-nowrap px-6 py-4 text-sm md:text-base font-bold transition-colors relative border-b-2",
                activeTab === index 
                  ? "text-brand-primary border-brand-primary" 
                  : "text-color-muted border-transparent hover:text-color-black"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              {/* Text side */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {content[activeTab].title}
                </h3>
                <p className="text-lg text-color-body mb-8 leading-relaxed">
                  {content[activeTab].text}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {content[activeTab].items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-brand-primary/10 rounded-full p-1">
                        <Check className="w-4 h-4 text-brand-primary" strokeWidth={3} />
                      </div>
                      <span className="font-medium text-color-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-12 pt-8 border-t border-color-border">
                  {content[activeTab].metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="text-3xl font-bold text-color-black mb-1">{metric.value}</p>
                      <p className="text-sm font-semibold text-color-muted uppercase tracking-wider">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div 
                className="relative aspect-4/3 w-full border border-color-border/60 rounded-[var(--radius-medium)] flex items-center justify-center overflow-hidden p-4 md:p-6 shadow-sm bg-[#e43d4f]"
                style={{ backgroundColor: '#e43d4f' }}
              >
                <img 
                  src="https://web.gcdn.ntruss.com/images/main/sec2_img1.png" 
                  alt="Recursos do CADian" 
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.02]" 
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
