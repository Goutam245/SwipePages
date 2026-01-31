import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, ArrowRight, Clock } from "lucide-react";
import type { PageContent } from "@/config/pageContent";

interface PageFinalCTAProps {
  content: PageContent;
}

const PageFinalCTA = ({ content }: PageFinalCTAProps) => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ct-green via-ct-green-dark to-ct-blue -z-10" />
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6"
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{content.finalCta.urgency}</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.finalCta.headline}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            {content.finalCta.subheadline}
          </p>

          {/* Main CTA */}
          <motion.a
            href="#book"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-ct-green font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mb-10"
          >
            {content.finalCta.ctaText}
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <p className="text-white/60 text-sm mb-10">No credit card required</p>

          {/* Contact options */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <motion.a
              href="tel:+61261234567"
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(02) 6123 4567</span>
            </motion.a>

            <motion.a
              href="mailto:hello@canberratutoring.com.au"
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </motion.a>

            <motion.a
              href="sms:+61400123456"
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>SMS Us</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageFinalCTA;
