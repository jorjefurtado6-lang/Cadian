import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, MessageCircle, FileText, HeadphonesIcon, Download } from 'lucide-react';
import { companyData } from '../data/config';
import { cn } from '../lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-color-background-dark pt-20 pb-8 border-t border-white/10">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          <div className="col-span-2 lg:col-span-1">
            <img 
              src={companyData.logoUrl} 
              alt={companyData.name} 
              className="h-9 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-color-muted text-sm leading-relaxed mb-6">
              Ferramenta de alta performance para profissionais de engenharia e arquitetura, unindo tecnologia de ponta e excelente custo-benefício
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Produtos</h4>
            <ul className="space-y-4">
              <li><a href="#produtos" className="text-color-muted hover:text-white transition-colors text-sm">Professional</a></li>
              <li><a href="#produtos" className="text-color-muted hover:text-white transition-colors text-sm">Classic</a></li>
              <li><a href="#produtos" className="text-color-muted hover:text-white transition-colors text-sm">Network</a></li>
              <li><a href="#comparar" className="text-color-muted hover:text-white transition-colors text-sm">Comparar versões</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Soluções</h4>
            <ul className="space-y-4">
              <li><a href="#solucoes" className="text-color-muted hover:text-white transition-colors text-sm">Arquitetura</a></li>
              <li><a href="#solucoes" className="text-color-muted hover:text-white transition-colors text-sm">Engenharia</a></li>
              <li><a href="#solucoes" className="text-color-muted hover:text-white transition-colors text-sm">Indústria</a></li>
              <li><a href="#solucoes" className="text-color-muted hover:text-white transition-colors text-sm">Educação</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Recursos</h4>
            <ul className="space-y-4">
              <li><a href="#suporte" className="text-color-muted hover:text-white transition-colors text-sm">Downloads</a></li>
              <li><a href="#suporte" className="text-color-muted hover:text-white transition-colors text-sm">Documentação</a></li>
              <li><a href="#suporte" className="text-color-muted hover:text-white transition-colors text-sm">Central de ajuda</a></li>
              <li><a href="#suporte" className="text-color-muted hover:text-white transition-colors text-sm">Tutoriais</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-color-muted hover:text-white transition-colors text-sm">Sobre nós</a></li>
              <li><a href="#" className="text-color-muted hover:text-white transition-colors text-sm">Parceiros</a></li>
              <li><a href="#" className="text-color-muted hover:text-white transition-colors text-sm">Carreiras</a></li>
              <li><a href="#contato" className="text-color-muted hover:text-white transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 border-t border-white/10 mb-8">
          <div>
            <p className="text-color-muted text-sm">{companyData.phone}</p>
            <p className="text-color-muted text-sm">{companyData.emails.commercial}</p>
          </div>
          <div>
            <p className="text-color-muted text-sm">{companyData.emails.support}</p>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <a href={companyData.social.linkedin} target="_blank" rel="noreferrer" className="text-color-muted hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href={companyData.social.youtube} target="_blank" rel="noreferrer" className="text-color-muted hover:text-white transition-colors text-sm">YouTube</a>
            <a href={companyData.social.instagram} target="_blank" rel="noreferrer" className="text-color-muted hover:text-white transition-colors text-sm">Instagram</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-color-muted text-xs">
            © {currentYear} {companyData.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="https://cadian.com.br/politica-de-privacidade/" target="_blank" rel="noreferrer" className="text-color-muted hover:text-white transition-colors text-xs">Política de privacidade</a>
            <a href="https://cadian.com.br/termos-de-uso/" target="_blank" rel="noreferrer" className="text-color-muted hover:text-white transition-colors text-xs">Termos de uso</a>
            <a href="#" className="text-color-muted hover:text-white transition-colors text-xs">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3 mb-4"
          >
            <a href={companyData.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-end group">
              <span className="bg-white text-color-black text-xs font-bold px-3 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Teste gratuito
              </span>
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-color-charcoal hover:text-brand-primary transition-colors">
                <Download className="w-5 h-5" />
              </div>
            </a>
            
            <a href="#suporte" className="flex items-center gap-3 justify-end group">
              <span className="bg-white text-color-black text-xs font-bold px-3 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Suporte
              </span>
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-color-charcoal hover:text-brand-primary transition-colors">
                <HeadphonesIcon className="w-5 h-5" />
              </div>
            </a>
            
            <a href="#contato" className="flex items-center gap-3 justify-end group">
              <span className="bg-white text-color-black text-xs font-bold px-3 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Solicitar orçamento
              </span>
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-color-charcoal hover:text-brand-primary transition-colors">
                <FileText className="w-5 h-5" />
              </div>
            </a>

            <a href={companyData.whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 justify-end group">
              <span className="bg-white text-color-black text-xs font-bold px-3 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                WhatsApp
              </span>
              <div className="w-12 h-12 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#20bd5a] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full shadow-xl flex items-center justify-center transition-transform duration-300",
          isOpen && "rotate-45"
        )}
        aria-label="Opções de contato"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
