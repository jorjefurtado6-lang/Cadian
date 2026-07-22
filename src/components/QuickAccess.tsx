import { FileText, Download, MessageSquare, HeadphonesIcon } from 'lucide-react';
import { companyData } from '../data/config';

export function QuickAccess() {
  const actions = [
    { icon: FileText, label: "Solicitar orçamento", href: "#contato" },
    { icon: Download, label: "Testar gratuitamente", href: companyData.downloadUrl, external: true },
    { icon: MessageSquare, label: "Falar com consultor", href: "#contato" },
    { icon: HeadphonesIcon, label: "Suporte remoto", href: "#suporte" },
  ];

  return (
    <section className="bg-white border-b border-color-border">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-color-border">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <a 
                key={index}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center justify-center gap-3 py-8 px-4 group hover:bg-color-background-soft transition-colors"
              >
                <Icon className="w-6 h-6 text-color-body group-hover:text-brand-primary transition-colors" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-color-black text-center">
                  {action.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
