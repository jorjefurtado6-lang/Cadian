import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { companyData } from '../data/config';
import { cn } from '../lib/utils';

const formSchema = z.object({
  firstName: z.string().min(2, "Nome é obrigatório"),
  lastName: z.string().min(2, "Sobrenome é obrigatório"),
  email: z.string().email("E-mail profissional inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  company: z.string().min(2, "Empresa é obrigatória"),
  role: z.string().min(2, "Cargo é obrigatório"),
  state: z.string().min(2, "Estado é obrigatório"),
  city: z.string().min(2, "Cidade é obrigatória"),
  licenses: z.string().min(1, "Quantidade é obrigatória"),
  product: z.string().min(1, "Selecione um produto"),
  licenseType: z.string().min(1, "Selecione o tipo de licença"),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "Você deve aceitar a Política de Privacidade")
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    const messageText = `Olá! Vim pelo site e gostaria de atendimento sobre o CADian.

*Dados da Solicitação:*
• *Nome:* ${data.firstName} ${data.lastName}
• *E-mail:* ${data.email}
• *Telefone:* ${data.phone}
• *Empresa:* ${data.company}
• *Cargo:* ${data.role}
• *Localização:* ${data.city}/${data.state}

*Detalhes do Licenciamento:*
• *Qtd. Licenças:* ${data.licenses}
• *Produto:* ${data.product}
• *Tipo de Licença:* ${data.licenseType}
${data.message ? `\n*Mensagem Adicional:*\n${data.message}` : ''}`;

    const whatsappPhone = companyData.whatsapp || "5531999551840";
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappPhone}&text=${encodeURIComponent(messageText)}&type=phone_number&app_absent=0`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 6000);
    }, 500);
  };

  return (
    <section className="bg-white section-padding" id="contato">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Form Side */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-[42px] lg:text-[56px] leading-[1.1] font-bold mb-6">
              Fale com um consultor.
            </h2>
            <p className="text-lg text-color-body leading-relaxed mb-10 max-w-2xl">
              Informe seus dados para receber orientação sobre versões, licenciamento, implantação e teste gratuito.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="firstName">Nome *</label>
                  <input 
                    id="firstName"
                    type="text" 
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors",
                      errors.firstName ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("firstName")}
                  />
                  {errors.firstName && <span className="text-brand-primary text-xs mt-1 block">{errors.firstName.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="lastName">Sobrenome *</label>
                  <input 
                    id="lastName"
                    type="text" 
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors",
                      errors.lastName ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("lastName")}
                  />
                  {errors.lastName && <span className="text-brand-primary text-xs mt-1 block">{errors.lastName.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="email">E-mail Profissional *</label>
                  <input 
                    id="email"
                    type="email" 
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors",
                      errors.email ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("email")}
                  />
                  {errors.email && <span className="text-brand-primary text-xs mt-1 block">{errors.email.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="phone">Telefone *</label>
                  <input 
                    id="phone"
                    type="tel" 
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors",
                      errors.phone ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("phone")}
                  />
                  {errors.phone && <span className="text-brand-primary text-xs mt-1 block">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="company">Empresa *</label>
                  <input 
                    id="company"
                    type="text" 
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors",
                      errors.company ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("company")}
                  />
                  {errors.company && <span className="text-brand-primary text-xs mt-1 block">{errors.company.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="role">Cargo *</label>
                  <input 
                    id="role"
                    type="text" 
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors",
                      errors.role ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("role")}
                  />
                  {errors.role && <span className="text-brand-primary text-xs mt-1 block">{errors.role.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="state">Estado *</label>
                  <input 
                    id="state"
                    type="text" 
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors",
                      errors.state ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("state")}
                  />
                  {errors.state && <span className="text-brand-primary text-xs mt-1 block">{errors.state.message}</span>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="city">Cidade *</label>
                  <input 
                    id="city"
                    type="text" 
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors",
                      errors.city ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("city")}
                  />
                  {errors.city && <span className="text-brand-primary text-xs mt-1 block">{errors.city.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="licenses">Licenças *</label>
                  <select 
                    id="licenses"
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors appearance-none",
                      errors.licenses ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("licenses")}
                  >
                    <option value="">Selecione...</option>
                    <option value="1-4">1 a 4</option>
                    <option value="5-9">5 a 9</option>
                    <option value="10-19">10 a 19</option>
                    <option value="20+">20 ou mais</option>
                  </select>
                  {errors.licenses && <span className="text-brand-primary text-xs mt-1 block">{errors.licenses.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="product">Produto *</label>
                  <select 
                    id="product"
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors appearance-none",
                      errors.product ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("product")}
                  >
                    <option value="">Selecione...</option>
                    <option value="professional">Professional</option>
                    <option value="classic">Classic</option>
                    <option value="network">Network</option>
                  </select>
                  {errors.product && <span className="text-brand-primary text-xs mt-1 block">{errors.product.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="licenseType">Tipo *</label>
                  <select 
                    id="licenseType"
                    className={cn(
                      "w-full px-4 py-3 rounded-[var(--radius-small)] border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors appearance-none",
                      errors.licenseType ? "border-brand-primary" : "border-color-border focus:border-brand-primary"
                    )}
                    {...register("licenseType")}
                  >
                    <option value="">Selecione...</option>
                    <option value="nova">Nova aquisição</option>
                    <option value="atualizacao">Atualização</option>
                    <option value="migracao">Migração</option>
                  </select>
                  {errors.licenseType && <span className="text-brand-primary text-xs mt-1 block">{errors.licenseType.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-color-charcoal mb-2" htmlFor="message">Mensagem Adicional</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-[var(--radius-small)] border border-color-border bg-color-background-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors resize-none"
                  {...register("message")}
                />
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center h-5 mt-0.5">
                  <input
                    id="consent"
                    type="checkbox"
                    className="w-4 h-4 border-color-border rounded focus:ring-brand-primary text-brand-primary"
                    {...register("consent")}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="consent" className="text-sm text-color-body cursor-pointer">
                    Concordo com o tratamento dos meus dados para atendimento desta solicitação, de acordo com a Política de Privacidade.
                  </label>
                  {errors.consent && <span className="text-brand-primary text-xs mt-1">{errors.consent.message}</span>}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-w-[200px] bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-[var(--radius-small)] font-bold transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar solicitação"
                  )}
                </button>
                
                {isSuccess && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-green-600 font-medium text-sm flex items-center gap-2"
                  >
                    <span>✓</span> Solicitação enviada! Redirecionando para o WhatsApp...
                  </motion.p>
                )}
              </div>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4">
            <div className="bg-color-background-soft rounded-[var(--radius-medium)] p-8 sticky top-[calc(var(--header-height)+32px)]">
              <h3 className="text-xl font-bold mb-8">Informações de contato</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-brand-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold text-color-black mb-1">Atendimento comercial</p>
                    <p className="text-color-body text-sm">{companyData.phone}</p>
                  </div>
                </div>

                <a href={companyData.whatsappLink} target="_blank" rel="noreferrer" className="flex gap-4 group">
                  <MessageCircle className="w-6 h-6 text-brand-primary shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold text-color-black mb-1 group-hover:text-brand-primary transition-colors">WhatsApp</p>
                    <p className="text-color-body text-sm group-hover:text-brand-primary transition-colors">+55 31 99955-1840</p>
                  </div>
                </a>
                
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-brand-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold text-color-black mb-1">E-mail comercial</p>
                    <p className="text-color-body text-sm">{companyData.emails.commercial}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-brand-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold text-color-black mb-1">Horário de atendimento</p>
                    <p className="text-color-body text-sm">{companyData.businessHours}</p>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
