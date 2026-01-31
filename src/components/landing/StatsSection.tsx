import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { Users, Star, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Students Helped",
    color: "ct-green",
  },
  {
    icon: Star,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    color: "ct-yellow",
  },
  {
    icon: TrendingUp,
    value: 2,
    prefix: "+",
    suffix: " Grades",
    label: "Average Improvement",
    color: "ct-blue",
  },
  {
    icon: Award,
    value: 6,
    suffix: "+ Years",
    label: "Experience",
    color: "ct-green",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-ct-mint/30 via-white to-ct-mint/30 -z-10" />

      <div className="container-tight px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                style={{ 
                  backgroundColor: stat.color === 'ct-green' ? 'rgba(79, 168, 75, 0.1)' : 
                                   stat.color === 'ct-blue' ? 'rgba(32, 92, 164, 0.1)' : 
                                   'rgba(244, 204, 35, 0.15)' 
                }}
              >
                <stat.icon 
                  className="w-7 h-7" 
                  style={{ 
                    color: stat.color === 'ct-green' ? '#4fa84b' : 
                           stat.color === 'ct-blue' ? '#205ca4' : '#d4a900' 
                  }}
                />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-ink mb-1">
                <AnimatedCounter 
                  end={stat.value} 
                  prefix={stat.prefix || ""} 
                  suffix={stat.suffix || ""} 
                />
              </div>
              <p className="text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
