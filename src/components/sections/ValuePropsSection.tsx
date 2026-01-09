import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, Brain, BarChart3, Focus, Sparkles, ArrowUpRight } from "lucide-react";

const valueProps = [
  {
    id: "schedule",
    icon: Calendar,
    title: "Workload Distribution, Not Task Avalanche",
    description: "Ada analyzes your course load, upcoming deadlines, and focus style—then spreads work evenly throughout the week. For ADHD-prone students: no decision fatigue. For perfectionists: proof you're on track.",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary",
  },
  {
    id: "ada",
    icon: Brain,
    title: "Your Study Coach Built on Behavioral Psychology",
    description: "Ada is trained on procrastination research and adaptive learning. Ask why you're procrastinating on organic chem—get a micro-strategy. Ask how to break a 20-page essay into sensory-friendly tasks.",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent",
  },
  {
    id: "tracking",
    icon: BarChart3,
    title: "See Your Progress. End the Anxiety Loop.",
    description: "Procrastination thrives on uncertainty. Aqademiq centralizes grades, deadlines, and progress in one distraction-free view. Neurodivergent students appreciate the clarity; anxious students get peace of mind.",
    gradient: "from-success/20 to-success/5",
    iconBg: "bg-success",
  },
  {
    id: "focus",
    icon: Focus,
    title: "Built for How You Actually Study",
    description: "Pomodoro burns you out? Deep focus works better? Aqademiq supports multiple focus modes and sensory preferences. For students with ADHD, autism, or sensory sensitivities: customize your study environment.",
    gradient: "from-warning/20 to-warning/5",
    iconBg: "bg-warning",
  },
];

export function ValuePropsSection() {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const handleFeatureClick = (featureId: string) => {
    navigate(`/features#${featureId}`);
  };

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
          <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
            Core features designed for{" "}
            <span className="text-gradient">how your brain works</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Built on procrastination research and designed with neurodivergent students in mind. Accessibility isn't an afterthought.
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
              onClick={() => handleFeatureClick(prop.id)}
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
