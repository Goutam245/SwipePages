import { motion } from "framer-motion";
import { Check, Gift, FileText } from "lucide-react";
import { useState } from "react";
import type { PageContent } from "@/config/pageContent";

interface PageOfferCardProps {
  content: PageContent;
}

const PageOfferCard = ({ content }: PageOfferCardProps) => {
  const [includeReport, setIncludeReport] = useState(false);
  const basePrice = content.level === 'college' ? 715 : 605;
  const lessonPrice = content.level === 'college' ? 65 : 55;
  const originalPrice = content.level === 'college' ? 880 : 770;

  return (
    <section id="book" className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-ct-mint/30 to-white -z-10" />

      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">
            {content.offer.title} <span className="gradient-text">Success Journey</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {content.offer.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-card-hover transition-shadow duration-500">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="badge-free">
                <Gift className="w-4 h-4 mr-2" />
                FREE Assessment Included
              </span>
            </div>

            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-muted line-through">${originalPrice}</span>
                <span className="text-5xl md:text-6xl font-bold text-ink">${basePrice}</span>
              </div>
              <p className="text-lg text-muted">
                11 Lessons × <span className="font-semibold text-ct-green">${lessonPrice}</span>/lesson
              </p>
              <p className="text-sm text-ct-green font-medium mt-2">
                Save ${originalPrice - basePrice} with term package
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {content.offer.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-ct-green/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-ct-green" />
                  </div>
                  <span className="text-ink">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Optional report upsell */}
            <div className="border-t border-border pt-6 mb-8">
              <label className="flex items-start gap-4 cursor-pointer group">
                <div className="relative mt-1">
                  <input
                    type="checkbox"
                    checked={includeReport}
                    onChange={(e) => setIncludeReport(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-6 h-6 border-2 border-border rounded-lg peer-checked:bg-ct-green peer-checked:border-ct-green transition-all group-hover:border-ct-green/50">
                    {includeReport && <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-ct-blue" />
                    <span className="font-semibold text-ink">{content.offer.reportTitle}</span>
                    <span className="text-sm font-medium text-ct-blue">+${lessonPrice}</span>
                  </div>
                  <p className="text-sm text-muted">
                    {content.offer.reportDescription}
                  </p>
                </div>
              </label>
            </div>

            {/* Total */}
            <div className="bg-secondary/50 rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-medium text-ink">Total:</span>
                <span className="text-2xl font-bold text-ink">
                  ${includeReport ? basePrice + lessonPrice : basePrice}
                </span>
              </div>
            </div>

            {/* CTA */}
            <button className="btn-primary w-full text-center">
              {content.hero.ctaPrimary}
            </button>

            <p className="text-center text-sm text-muted mt-4">
              No credit card required • Free cancellation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageOfferCard;
