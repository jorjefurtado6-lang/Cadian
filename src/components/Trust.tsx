import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { clientLogos, testimonials } from '../data/config';

export function Trust() {
  const extendedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-white section-padding" id="clientes">
      <div className="w-full max-w-[var(--container-max)] mx-auto container-padding overflow-hidden">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-brand-primary font-bold tracking-wider text-xs md:text-sm mb-4 uppercase">
            Principais clientes
          </p>
          <h2 className="text-3xl md:text-[42px] lg:text-[56px] leading-[1.1] font-bold mb-6 text-balance">
            Muitas empresas já estão em parceria com a CADian
          </h2>
        </div>

        {/* Infinite Scroll Logos Carousel */}
        <div className="relative w-full overflow-hidden mb-24 py-4">
          {/* Gradient overlay edges for smooth visual fade */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-8 md:gap-12">
            {extendedLogos.map((logoUrl, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center min-w-[140px] md:min-w-[180px] h-20 md:h-24 px-6 py-3 bg-color-background-soft border border-color-border/60 rounded-[var(--radius-medium)] grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:border-brand-primary/40 transition-all duration-300 shrink-0"
              >
                <img 
                  src={logoUrl} 
                  alt={`Logo cliente ${index + 1}`} 
                  className="max-h-12 md:max-h-14 w-auto object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-color-background-soft p-8 rounded-[var(--radius-medium)] flex flex-col relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-color-border" fill="currentColor" />
              <p className="text-color-charcoal font-medium text-lg leading-relaxed mb-8 relative z-10 flex-grow pt-2">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-color-black">{testimonial.author}</p>
                <p className="text-sm text-color-muted">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
