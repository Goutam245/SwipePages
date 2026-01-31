import { motion } from "framer-motion";
import { FileText, Users, BookOpen, BarChart3 } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Individual Learning Plan",
    description: "Customized curriculum targeting your child's specific needs and learning style.",
    gradient: "from-ct-green/20 to-ct-green/5",
  },
  {
    icon: Users,
    title: "Expert Tutor Matching",
    description: "Hand-picked tutors matched to your child's personality and academic goals.",
    gradient: "from-ct-blue/20 to-ct-blue/5",
  },
  {
    icon: BookOpen,
    title: "Lesson Notes & Resources",
    description: "Comprehensive materials and summaries after every session for continued learning.",
    gradient: "from-ct-yellow/20 to-ct-yellow/5",
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description: "Track improvements with clear metrics and regular progress updates.",
    gradient: "from-ct-softgreen/30 to-ct-softgreen/5",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-white to-ct-mint/20 -z-10" />

      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4">
            What You <span className="gradient-text">Get</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A complete tutoring experience designed for measurable success 
            and lasting confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className={`h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} border border-white/50 shadow-card hover:shadow-card-hover transition-all duration-300`}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-ct-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">{feature.title}</h3>
                    <p className="text-muted leading-relaxed">{feature.description}</p>
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

export default ValueProposition;
