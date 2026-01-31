import { motion } from "framer-motion";
import { FileSearch, Target, TrendingUp } from "lucide-react";
import type { PageContent } from "@/config/pageContent";

interface PageHowItWorksProps {
  content: PageContent;
}

const icons = [FileSearch, Target, TrendingUp];

const PageHowItWorks = ({ content }: PageHowItWorksProps) => {
  const highlightWord = content.subject === 'maths' ? 'Maths Confidence' : 'Literacy Skills';

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4">
            {content.howItWorks.title} <span className="gradient-text">{highlightWord}</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {content.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-ct-green via-ct-blue to-ct-green-dark -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {content.howItWorks.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-ct-green text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-ct-mint to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-ct-green" />
                    </div>

                    <h3 className="text-xl font-bold text-ink mb-3">{step.title}</h3>
                    <p className="text-muted leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHowItWorks;
