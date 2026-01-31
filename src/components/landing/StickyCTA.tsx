import { motion, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface StickyCTAProps {
  ctaText?: string;
}

const StickyCTA = ({ ctaText = "Book Free Assessment" }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="bg-white/95 backdrop-blur-lg border-t border-border shadow-xl p-4">
        <a
          href="#book"
          className="btn-primary w-full flex items-center justify-center gap-2 py-4"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="text-center text-xs text-muted mt-2">No credit card required</p>
      </div>
    </motion.div>
  );
};

export default StickyCTA;
