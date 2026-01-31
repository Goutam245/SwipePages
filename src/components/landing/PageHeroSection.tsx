import { motion } from "framer-motion";
import { Star, Users, Calendar, ArrowDown, Sparkles } from "lucide-react";
import type { PageContent, AudienceLevel } from "@/config/pageContent";

// Import hero images
import heroPrimary from "@/assets/hero-primary.jpg";
import heroHighschool from "@/assets/hero-highschool.jpg";
import heroCollege from "@/assets/hero-college.jpg";
import subjectMaths from "@/assets/subject-maths.jpg";
import subjectEnglish from "@/assets/subject-english.jpg";

interface PageHeroSectionProps {
  content: PageContent;
}

const getHeroImage = (level: AudienceLevel) => {
  switch (level) {
    case 'primary':
      return heroPrimary;
    case 'highschool':
      return heroHighschool;
    case 'college':
      return heroCollege;
  }
};

const getSubjectImage = (subject: 'maths' | 'english') => {
  return subject === 'maths' ? subjectMaths : subjectEnglish;
};

const PageHeroSection = ({ content }: PageHeroSectionProps) => {
  const heroImage = getHeroImage(content.level);
  const subjectImage = getSubjectImage(content.subject);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient and image overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ct-mint via-white to-secondary" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-ct-green/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-ct-blue/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-ct-yellow/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-tight w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <span className="text-sm font-medium text-ink">{content.hero.badge}</span>
            </motion.div>

            <h1 className="heading-hero mb-6">
              {content.hero.headline}{" "}
              <span className="gradient-text">{content.hero.highlightedText}</span>
            </h1>

            <p className="text-body mb-8 max-w-xl mx-auto lg:mx-0">
              {content.hero.subheadline}
            </p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a href="#book" className="btn-primary group">
                {content.hero.ctaPrimary}
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                {content.hero.ctaSecondary}
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
                <span className="font-semibold text-ink">{content.stats.rating} Rating</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Users className="w-4 h-4" />
                <span>{content.stats.students} Students</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Calendar className="w-4 h-4" />
                <span>{content.stats.experience}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main hero image */}
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt={`${content.level} ${content.subject} tutoring`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Subject badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-8 top-1/4 glass-card p-3 rounded-2xl shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img 
                      src={subjectImage} 
                      alt={content.subject}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Expert</p>
                    <p className="text-lg font-bold text-ink capitalize">{content.subject}</p>
                    <p className="text-sm text-muted">Tutoring</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats badge */}
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
                    <p className="text-sm text-muted">{content.hero.trustBadge}</p>
                    <p className="text-xl font-bold text-ink">Verified</p>
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

export default PageHeroSection;
