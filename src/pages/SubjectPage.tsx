import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { getPageBySlug, type PageContent } from "@/config/pageContent";
import Header from "@/components/landing/Header";
import PageHeroSection from "@/components/landing/PageHeroSection";
import StatsSection from "@/components/landing/StatsSection";
import PageOfferCard from "@/components/landing/PageOfferCard";
import PageHowItWorks from "@/components/landing/PageHowItWorks";
import PageValueProposition from "@/components/landing/PageValueProposition";
import PageTestimonials from "@/components/landing/PageTestimonials";
import PageFAQ from "@/components/landing/PageFAQ";
import PageFinalCTA from "@/components/landing/PageFinalCTA";
import Footer from "@/components/landing/Footer";
import StickyCTA from "@/components/landing/StickyCTA";

const SubjectPage = () => {
  const location = useLocation();
  // Get slug from pathname (remove leading slash)
  const slug = location.pathname.slice(1);
  const content = getPageBySlug(slug);

  // Update document title
  useEffect(() => {
    if (content) {
      document.title = content.meta.title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', content.meta.description);
      }
    }
  }, [content]);

  // Redirect to home if invalid slug
  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      <main>
        <PageHeroSection content={content} />
        <StatsSection />
        <PageOfferCard content={content} />
        <PageHowItWorks content={content} />
        <PageValueProposition content={content} />
        <section id="testimonials">
          <PageTestimonials content={content} />
        </section>
        <section id="faq">
          <PageFAQ content={content} />
        </section>
        <PageFinalCTA content={content} />
      </main>
      
      <Footer />
      <StickyCTA ctaText={content.hero.ctaPrimary} />
    </div>
  );
};

export default SubjectPage;
