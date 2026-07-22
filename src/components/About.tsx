import { motion } from 'motion/react';

export function About() {
  return (
    <section className="bg-color-background-soft section-padding" id="sobre">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-brand-primary font-bold tracking-wider text-xs md:text-sm mb-4 uppercase">
              Sobre o Cadian: Quem Somos
            </p>
            <h2 className="text-3xl md:text-[42px] lg:text-[56px] leading-[1.1] font-bold mb-6 text-balance">
              Conheça a Cadian
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-color-body leading-relaxed mb-10">
              <p>
                A Cadian nasceu para transformar a maneira como profissionais de engenharia e arquitetura trabalham. Com 33 anos de expertise, oferecemos soluções CAD que aliam inovação, eficiência e economia – sempre com foco na experiência do usuário e na qualidade dos projetos.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[var(--radius-medium)] shadow-sm border border-color-border/60">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">✦</span>
                Missão
              </h3>
              <p className="text-color-body leading-relaxed">
                Oferecer ferramentas que potencializem a criatividade e a produtividade dos nossos clientes, mantendo um equilíbrio perfeito entre custo e desempenho.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 rounded-[var(--radius-medium)] overflow-hidden h-64 md:h-80"
            >
              <img 
                src="https://cadian.com.br/wp-content/uploads/2025/12/Gemini_Generated_Image_1e5m551e5m551e5m.png" 
                alt="Profissionais trabalhando com Cadian" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[var(--radius-medium)] overflow-hidden h-64 md:h-80"
            >
              <img 
                src="https://cadian.com.br/wp-content/uploads/2025/12/Gemini_Generated_Image_1e5m551e5m551e5m-1.png" 
                alt="Projeto de engenharia e arquitetura" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
