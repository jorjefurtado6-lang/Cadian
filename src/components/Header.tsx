import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { navigation, companyData } from '../data/config';
import { cn } from '../lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-[var(--transition-default)] h-[var(--header-height)] flex items-center",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-color-border" 
            : "bg-transparent"
        )}
      >
        <div className="w-full max-w-[var(--container-max)] mx-auto container-padding flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-2 z-50">
            <img 
              src={companyData.logoUrl} 
              alt={companyData.name} 
              className="h-auto w-[134px] object-contain"
              style={{ width: '133.7px' }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-brand-primary",
                      isScrolled ? "text-color-black" : "text-color-black md:text-white/90"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a 
                href="#contato" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-primary",
                  isScrolled ? "text-color-black" : "text-color-black md:text-white/90"
                )}
              >
                Solicitar orçamento
              </a>
              <a 
                href={companyData.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-2.5 rounded-[var(--radius-small)] font-bold text-sm transition-colors"
              >
                Testar gratuitamente
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-color-black" />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-color-black" : "text-color-black")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-[var(--header-height)] pb-8 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-2xl font-bold text-color-black border-b border-color-border pb-4"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <a 
                  href="#contato" 
                  onClick={closeMenu}
                  className="text-center text-lg font-bold text-color-black py-4 border border-color-border rounded-[var(--radius-small)]"
                >
                  Solicitar orçamento
                </a>
                <a 
                  href={companyData.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="text-center text-lg font-bold text-white bg-brand-primary py-4 rounded-[var(--radius-small)]"
                >
                  Testar gratuitamente
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
