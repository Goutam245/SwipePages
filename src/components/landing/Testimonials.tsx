import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Parent of Year 5 Student",
    quote: "My daughter went from dreading maths to actually enjoying it. Her confidence has skyrocketed and her grades improved from a C to an A- in just 8 weeks!",
    rating: 5,
    outcome: "C → A- in 8 weeks",
    avatar: "👩",
  },
  {
    name: "David Chen",
    role: "Parent of Year 10 Student",
    quote: "The personalized approach made all the difference. The tutor understood exactly where my son was struggling and built a plan that worked. Highly recommend!",
    rating: 5,
    outcome: "Top 10% in class",
    avatar: "👨",
  },
  {
    name: "Emma Thompson",
    role: "Year 12 Student",
    quote: "I was stressed about my ATAR but my tutor helped me develop study strategies that actually work. My exam anxiety is gone and I'm getting my best results ever.",
    rating: 5,
    outcome: "ATAR score +15 points",
    avatar: "👩‍🎓",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ct-mint/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-ct-yellow/10 rounded-full blur-3xl -z-10" />

      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4">
            Real <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Join hundreds of Canberra families who've seen real academic improvements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="h-full glass-card rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-ct-green/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-ct-yellow text-ct-yellow" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-ink leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Outcome badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-ct-green/10 text-ct-green text-sm font-medium mb-6">
                  📈 {testimonial.outcome}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ct-green/20 to-ct-blue/20 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
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

export default Testimonials;
