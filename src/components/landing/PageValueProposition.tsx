import { motion } from "framer-motion";
import { 
  BarChart3, Heart, Puzzle, LayoutDashboard, 
  Layers, BookOpen, Sparkles, TrendingUp,
  Target, GraduationCap, Award, HelpCircle,
  Building2, FileText, ClipboardCheck, Calendar,
  BookMarked, Telescope, FileSearch, Briefcase
} from "lucide-react";
import type { PageContent } from "@/config/pageContent";

interface PageValuePropositionProps {
  content: PageContent;
}

const iconMap: Record<string, any> = {
  chart: BarChart3,
  heart: Heart,
  puzzle: Puzzle,
  dashboard: LayoutDashboard,
  layers: Layers,
  book: BookOpen,
  sparkles: Sparkles,
  trending: TrendingUp,
  target: Target,
  graduation: GraduationCap,
  award: Award,
  help: HelpCircle,
  structure: Building2,
  teacher: GraduationCap,
  magnify: Telescope,
  feedback: FileText,
  expert: GraduationCap,
  assignment: ClipboardCheck,
  exam: FileSearch,
  calendar: Calendar,
  academic: BookMarked,
  research: Telescope,
  field: Briefcase,
};

const gradients = [
  "from-ct-green/20 to-ct-green/5",
  "from-ct-blue/20 to-ct-blue/5",
  "from-ct-yellow/20 to-ct-yellow/5",
  "from-ct-softgreen/30 to-ct-softgreen/5",
];

const PageValueProposition = ({ content }: PageValuePropositionProps) => {
  const highlightWord = content.subject === 'maths' ? 'Excel at Maths' : 'Master English';

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
            {content.valueProps.title} <span className="gradient-text">{highlightWord}</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {content.valueProps.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {content.valueProps.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || BarChart3;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className={`h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br ${gradients[index % 4]} border border-white/50 shadow-card hover:shadow-card-hover transition-all duration-300`}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-ct-green" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ink mb-2">{feature.title}</h3>
                      <p className="text-muted leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PageValueProposition;
