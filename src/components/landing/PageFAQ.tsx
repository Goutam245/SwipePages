import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { PageContent } from "@/config/pageContent";

interface PageFAQProps {
  content: PageContent;
}

const PageFAQ = ({ content }: PageFAQProps) => {
  const highlightWord = content.subject === 'maths' ? 'Maths Tutoring' : 'English Tutoring';

  return (
    <section id="faq" className="section-padding relative overflow-hidden bg-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">
            {content.faq.title} <span className="gradient-text">{highlightWord}</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {content.faq.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {content.faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-none shadow-sm hover:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-ink hover:text-ct-green py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default PageFAQ;
