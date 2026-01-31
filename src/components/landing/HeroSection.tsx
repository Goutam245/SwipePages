import { motion } from "framer-motion";
import { Star, Users, Calendar, ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient with animated blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-ct-mint via-white to-secondary -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ct-green/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-ct-blue/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-ct-yellow/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container-tight w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-ct-yellow" />
              <span className="text-sm font-medium text-ink">Canberra's #1 Tutoring Service</span>
            </motion.div>

            <h1 className="heading-hero mb-6">
              See Real Results in{" "}
              <span className="gradient-text">8 Weeks</span>
            </h1>

            <p className="text-body mb-8 max-w-xl mx-auto lg:mx-0">
              Transform your child's confidence and grades with personalized 1-on-1 tutoring. 
              Expert tutors, proven methods, real progress you can see.
            </p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a href="#book" className="btn-primary group">
                Book Free Assessment
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See How It Works
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-ct-yellow text-ct-yellow" />
                  ))}
                </div>
                <span className="font-semibold text-ink">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Users className="w-4 h-4" />
                <span>500+ Students</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Calendar className="w-4 h-4" />
                <span>Since 2018</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-ct-green/20 to-ct-blue/20 rounded-3xl" />
                <div className="absolute inset-4 glass-card rounded-3xl overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-ct-green to-ct-blue rounded-full flex items-center justify-center">
                      <span className="text-5xl">🎓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-ink mb-2">Student Success</h3>
                    <p className="text-muted">Grades improved in 8 weeks</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-4 top-1/4 glass-card p-4 rounded-2xl shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-ct-green/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Average Improvement</p>
                    <p className="text-xl font-bold text-ct-green">+2 Grades</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-4 bottom-1/4 glass-card p-4 rounded-2xl shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-ct-yellow/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Parent Satisfaction</p>
                    <p className="text-xl font-bold text-ink">98%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
