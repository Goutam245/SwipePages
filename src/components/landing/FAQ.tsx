import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Clock, DollarSign, User, Calendar, BookOpen, Award } from "lucide-react";

const faqs = [
  {
    icon: Clock,
    question: "How long does each tutoring session last?",
    answer: "Each session is 1 hour long, which is the optimal duration for focused learning without fatigue. We also include time for homework review and planning for the next session.",
  },
  {
    icon: DollarSign,
    question: "What's included in the $55/lesson price?",
    answer: "Everything! This includes 1-on-1 tutoring, personalized lesson planning, detailed session notes, progress tracking, and parent updates. No hidden fees or extra charges.",
  },
  {
    icon: User,
    question: "How are tutors selected and matched?",
    answer: "All our tutors are qualified educators with experience and background checks. We match tutors based on your child's learning style, personality, and academic needs for the best fit.",
  },
  {
    icon: Calendar,
    question: "Can I reschedule or cancel lessons?",
    answer: "Yes! We offer flexible scheduling with free rescheduling up to 24 hours before the lesson. We understand life happens and work with families to find convenient times.",
  },
  {
    icon: BookOpen,
    question: "What subjects and grade levels do you cover?",
    answer: "We offer Maths and English tutoring for all levels: Primary (Years 1-6), High School (Years 7-12), and College/University. We cover curriculum from ACT schools and exam preparation.",
  },
  {
    icon: Award,
    question: "What results can I expect to see?",
    answer: "Most students see noticeable improvement within 4-6 weeks. On average, students improve by 1-2 grade levels over a term. We track progress with regular assessments and reports.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-ct-mint/20 to-white -z-10" />

      <div className="container-tight max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ct-blue/10 text-ct-blue mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Common Questions</span>
          </div>
          <h2 className="heading-section mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-body">
            Everything you need to know about our tutoring services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-none shadow-sm hover:shadow-card transition-shadow duration-300"
              >
                <AccordionTrigger className="py-5 hover:no-underline text-left">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-ct-green/10 flex items-center justify-center">
                      <faq.icon className="w-5 h-5 text-ct-green" />
                    </div>
                    <span className="font-semibold text-ink text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-14 text-muted leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
