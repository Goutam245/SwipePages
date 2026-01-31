import { motion } from "framer-motion";
import { ClipboardCheck, Users, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Free Assessment",
    description: "We evaluate your child's current level, learning style, and goals to create a personalized plan.",
    color: "ct-green",
  },
  {
    number: "02",
    icon: Users,
    title: "Custom Plan",
    description: "Get matched with the perfect tutor and receive a tailored curriculum designed for success.",
    color: "ct-blue",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Weekly Progress",
    description: "Track real improvements with regular updates, lesson notes, and visible grade improvements.",
    color: "ct-yellow",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ct-mint/20 to-transparent -z-10" />

      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A simple, proven process that gets results. From assessment to achievement in just 3 steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-ct-green via-ct-blue to-ct-yellow/50" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Number badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative inline-flex mb-6"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-${step.color}/10 flex items-center justify-center`}
                      style={{ backgroundColor: step.color === 'ct-green' ? 'rgba(79, 168, 75, 0.1)' : step.color === 'ct-blue' ? 'rgba(32, 92, 164, 0.1)' : 'rgba(244, 204, 35, 0.15)' }}
                    >
                      <step.icon 
                        className="w-10 h-10" 
                        style={{ color: step.color === 'ct-green' ? '#4fa84b' : step.color === 'ct-blue' ? '#205ca4' : '#f4cc23' }}
                      />
                    </div>
                    <span 
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center"
                      style={{ backgroundColor: step.color === 'ct-green' ? '#4fa84b' : step.color === 'ct-blue' ? '#205ca4' : '#d4a900' }}
                    >
                      {index + 1}
                    </span>
                  </motion.div>

                  <h3 className="text-xl font-bold text-ink mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>

                {/* Vertical connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-ct-green to-ct-blue/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
