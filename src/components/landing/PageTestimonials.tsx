import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { PageContent } from "@/config/pageContent";

interface PageTestimonialsProps {
  content: PageContent;
}

const PageTestimonials = ({ content }: PageTestimonialsProps) => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-ct-mint/20 to-white -z-10" />

      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4">
            {content.testimonials.title} <span className="gradient-text">Say</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {content.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {content.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full glass-card rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-ct-green/30" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-ct-yellow text-ct-yellow" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-ink leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Outcome badge */}
                <div className="inline-flex items-center px-3 py-1.5 bg-ct-green/10 rounded-full mb-6">
                  <span className="text-sm font-semibold text-ct-green">{testimonial.outcome}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-to-br from-ct-green to-ct-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageTestimonials;
