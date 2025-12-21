import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Brain, BarChart3, Shield, Sparkles, ArrowUpRight } from "lucide-react";

const valueProps = [
  {
    icon: Calendar,
    title: "Smart Schedule",
    description: "AI builds conflict-free timetables around your classes, energy levels, and commitments. No more chaos.",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary",
  },
  {
    icon: Brain,
    title: "AI Study Coach",
    description: "Ada learns how you work and nudges you before you fall behind. It's like having a tutor in your pocket.",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent",
  },
  {
    icon: BarChart3,
    title: "Grade Tracking",
    description: "See exactly where you stand in every course with predictive analytics and actionable insights.",
    gradient: "from-success/20 to-success/5",
    iconBg: "bg-success",
  },
  {
    icon: Shield,
    title: "Procrastination Support",
    description: "Gentle accountability, smart reminders, and micro-task breakdowns that make starting easy.",
    gradient: "from-warning/20 to-warning/5",
    iconBg: "bg-warning",
  },
];

export function ValuePropsSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as const },
    },
  };

  return (
    <section className="section-padding">
      <div className="container-marketing">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-body-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Core Features</span>
          </div>
          <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
            Everything you need to{" "}
            <span className="text-gradient">study smarter</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Built for students who want to eliminate chaos and finally feel in control of their academic life.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-surface border border-border overflow-hidden cursor-pointer"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${prop.iconBg} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <prop.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-display-sm text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {prop.title}
                    </h3>
                    <p className="text-body-md text-muted-foreground leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
