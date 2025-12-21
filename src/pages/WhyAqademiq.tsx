import { motion, useReducedMotion } from "framer-motion";
import { 
  X, Check, Brain, Zap, Target, Heart, Sparkles, 
  ArrowRight, AlertTriangle, CheckCircle2, Lightbulb
} from "lucide-react";
import { Header, Footer, PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";

const easeOutExpo = [0.19, 1, 0.22, 1] as const;

const problems = [
  { icon: AlertTriangle, text: "Juggling 5-8 separate apps" },
  { icon: AlertTriangle, text: "Constantly missing deadlines" },
  { icon: AlertTriangle, text: "Decision fatigue before studying" },
  { icon: AlertTriangle, text: "Losing 2+ hours/week to tool switching" },
  { icon: AlertTriangle, text: "Generic tools that don't understand students" },
];

const solutions = [
  { icon: CheckCircle2, text: "One unified hub for everything" },
  { icon: CheckCircle2, text: "AI-powered deadline tracking" },
  { icon: CheckCircle2, text: "Clear daily plans, zero guesswork" },
  { icon: CheckCircle2, text: "Seamless workflow, maximum focus" },
  { icon: CheckCircle2, text: "Built specifically for student life" },
];

const philosophy = [
  {
    icon: Brain,
    title: "Protect Your Mental Bandwidth",
    description: "Every decision you don't have to make is energy saved for actual learning. We eliminate the planning overhead.",
  },
  {
    icon: Heart,
    title: "Sustainable Studying, Not Grinding",
    description: "Aqademiq helps you study smarter, not just harder. We believe in balance, not burnout.",
  },
  {
    icon: Target,
    title: "Progress Over Perfection",
    description: "Small, consistent steps beat marathon sessions. Our system celebrates momentum, not just completion.",
  },
  {
    icon: Lightbulb,
    title: "Designed for Diverse Minds",
    description: "ADHD, anxiety, neurodivergence—we build for how your brain actually works, not an idealized version.",
  },
];

const stats = [
  { value: "78%", label: "of students lose focus from app switching" },
  { value: "5-8", label: "average productivity apps used by students" },
  { value: "2.3h", label: "wasted weekly on tool management" },
  { value: "40%", label: "report chronic academic overwhelm" },
];

export default function WhyAqademiq() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <PageLayout>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container-marketing text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-body-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Why Aqademiq</span>
              </div>
              <h1 className="text-display-lg md:text-display-xl lg:text-display-2xl text-foreground mb-6">
                Academic planning is{" "}
                <span className="text-gradient">broken</span>
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                Students are drowning in app chaos—juggling separate tools for calendars, tasks, and timers. 
                This fragmentation destroys focus and creates decision fatigue.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-border bg-surface-overlay/50">
          <div className="container-marketing">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-display-md lg:text-display-lg font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <p className="text-body-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section-padding">
          <div className="container-marketing">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
                The difference is{" "}
                <span className="text-gradient">night and day</span>
              </h2>
              <p className="text-body-lg text-muted-foreground">
                See how Aqademiq transforms the chaotic student experience into clarity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Without Aqademiq */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="p-8 rounded-2xl bg-error/5 border border-error/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-error/20 flex items-center justify-center">
                    <X className="w-6 h-6 text-error" />
                  </div>
                  <h3 className="text-display-sm text-foreground">Without Aqademiq</h3>
                </div>
                <ul className="space-y-4">
                  {problems.map((problem, i) => (
                    <motion.li
                      key={problem.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 text-body-md text-muted-foreground"
                    >
                      <problem.icon className="w-5 h-5 text-error/70 flex-shrink-0" />
                      {problem.text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* With Aqademiq */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="p-8 rounded-2xl bg-success/5 border border-success/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-display-sm text-foreground">With Aqademiq</h3>
                </div>
                <ul className="space-y-4">
                  {solutions.map((solution, i) => (
                    <motion.li
                      key={solution.text}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 text-body-md text-foreground"
                    >
                      <solution.icon className="w-5 h-5 text-success flex-shrink-0" />
                      {solution.text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section-padding bg-surface-overlay/50">
          <div className="container-marketing">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-body-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Our Philosophy</span>
              </div>
              <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
                Built on principles that{" "}
                <span className="text-gradient">actually work</span>
              </h2>
              <p className="text-body-lg text-muted-foreground">
                We're not just another productivity app. We're rethinking academic planning from the ground up.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {philosophy.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="p-6 md:p-8 rounded-2xl bg-surface border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-display-sm text-foreground mb-2">{item.title}</h3>
                  <p className="text-body-md text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="section-padding">
          <div className="container-marketing">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
              >
                <p className="text-body-sm font-medium text-primary uppercase tracking-wider mb-2">
                  The Solution
                </p>
                <h2 className="text-display-md md:text-display-lg text-foreground mb-6">
                  Meet <span className="text-gradient">Aqademiq</span>
                </h2>
                <p className="text-body-lg text-muted-foreground mb-6">
                  The AI-powered student productivity platform that unifies your entire digital study ecosystem. 
                  No more app chaos—just intelligent orchestration and unified workflows.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Eliminates app fragmentation with unified design",
                    "Ada AI provides contextual recommendations",
                    "Mobile-first PWA works on any device",
                    "Designed for neurodivergent learners",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-body-md text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <Button variant="hero" size="xl" className="group">
                  Try free today
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
                className="relative"
              >
                <div className="relative rounded-2xl bg-surface border border-border shadow-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-error/80" />
                      <div className="w-3 h-3 rounded-full bg-warning/80" />
                      <div className="w-3 h-3 rounded-full bg-success/80" />
                    </div>
                  </div>
                  <div className="p-6 bg-background-subtle dark:bg-surface-elevated">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-body-lg font-semibold text-foreground">Unified Dashboard</h4>
                      <span className="text-body-xs text-success font-medium flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        All synced
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { label: "Tasks Today", value: "5" },
                        { label: "Focus Time", value: "2h" },
                        { label: "Streak", value: "7d" },
                      ].map((stat) => (
                        <div key={stat.label} className="p-3 rounded-xl bg-surface border border-border text-center">
                          <div className="text-display-sm font-bold text-primary">{stat.value}</div>
                          <div className="text-body-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-5 h-5 text-primary" />
                        <span className="text-body-sm font-medium text-foreground">Ada says</span>
                      </div>
                      <p className="text-body-sm text-muted-foreground">
                        "Great progress this week! You're on track to finish your essay by Friday."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container-marketing">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-12 lg:p-16 text-center"
            >
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-display-md md:text-display-lg text-white mb-4">
                  Ready to break free from app chaos?
                </h2>
                <p className="text-body-lg text-white/85 mb-8">
                  Join thousands of students who've transformed their academic experience with Aqademiq.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl group">
                    Try free
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    Talk to us
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageLayout>
  );
}
