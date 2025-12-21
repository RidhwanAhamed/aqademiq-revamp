import { motion } from "framer-motion";
import { Calendar, Brain, Zap, Target, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered timetable that adapts to your energy levels and learning patterns.",
    color: "primary" as const,
  },
  {
    icon: Brain,
    title: "Intelligent Breakdowns",
    description: "Complex assignments become manageable micro-tasks with optimal time estimates.",
    color: "accent" as const,
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set academic goals and watch your progress with beautiful visualizations.",
    color: "primary" as const,
  },
  {
    icon: Clock,
    title: "Focus Sessions",
    description: "Built-in Pomodoro with adaptive work/break ratios based on your productivity data.",
    color: "accent" as const,
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Understand your study habits with detailed insights and recommendations.",
    color: "primary" as const,
  },
  {
    icon: Zap,
    title: "Ada AI Assistant",
    description: "Your personal academic advisor that learns your style and optimizes your success.",
    color: "accent" as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-surface-overlay/50">
      <div className="container-marketing">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-body-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Features</span>
          </div>
          <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
            Everything you need to{" "}
            <span className="text-gradient">excel academically</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Designed specifically for students who want to eliminate chaos and focus on what truly matters — learning and growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-surface border border-border card-interactive"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  feature.color === "primary"
                    ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                } transition-colors duration-300`}
              >
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-display-sm text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-body-md text-muted-foreground">
                {feature.description}
              </p>

              {/* Hover gradient */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${
                  feature.color === "primary"
                    ? "bg-gradient-to-br from-primary/5 to-transparent"
                    : "bg-gradient-to-br from-accent/5 to-transparent"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
