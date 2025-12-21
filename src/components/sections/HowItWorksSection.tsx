import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, MessageSquare, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Plug in your courses",
    description: "Import your syllabus, sync your calendar, and add your commitments. Takes 2 minutes.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Tell Ada your goals",
    description: "Share how you like to study, your ideal work hours, and what grades you're aiming for.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Get a live plan",
    description: "Receive a personalized schedule that adapts every week based on your progress and habits.",
  },
];

export function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-surface-overlay/50">
      <div className="container-marketing">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-body-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Simple Setup</span>
          </div>
          <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
            Get started in{" "}
            <span className="text-gradient">3 easy steps</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            From signup to your first personalized schedule in under 5 minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Progress Line - Desktop */}
          <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
              className="w-full bg-gradient-to-b from-primary via-accent to-success"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-1 gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.19, 1, 0.22, 1],
                  delay: index * 0.2,
                }}
                className={`relative flex items-center gap-6 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { y: -4 }}
                    className="inline-block p-6 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-display-sm font-bold text-primary">{step.number}</span>
                    </div>
                    <h3 className="text-display-sm text-foreground mb-2">{step.title}</h3>
                    <p className="text-body-md text-muted-foreground max-w-sm">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Dot - Desktop */}
                <div className="hidden lg:flex absolute left-[50%] -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-lg z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
