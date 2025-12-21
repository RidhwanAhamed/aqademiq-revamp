import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Brain, Zap } from "lucide-react";
import { Button } from "../ui/button";

const stats = [
  { value: "500+", label: "Student Users" },
  { value: "PWA", label: "Mobile-First" },
  { value: "Ada", label: "AI Wizard" },
];

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-200" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-marketing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-body-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Academic Planning</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-display-lg md:text-display-xl lg:text-display-2xl text-foreground mb-6">
              <span className="block">Start Focusing on</span>
              <span className="text-gradient">What Matters.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Aqademiq's AI transforms your courses, deadlines, and commitments into conflict-free schedules with intelligent task breakdowns. No more procrastination.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button variant="hero" size="xl" className="group">
                Experience Unified Learning
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-secondary" size="xl">
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-display-sm text-gradient font-bold">
                    {stat.value}
                  </div>
                  <div className="text-body-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            {/* Dashboard Preview Card */}
            <div className="relative rounded-2xl bg-surface border border-border shadow-xl overflow-hidden">
              {/* Mock Window Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-background text-body-xs text-muted-foreground">
                    app.aqademiq.com
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-background-subtle dark:bg-surface-elevated">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Calendar, label: "Schedule", value: "3 tasks today" },
                    { icon: Brain, label: "AI Insights", value: "2 suggestions" },
                    { icon: Zap, label: "Focus", value: "89% score" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-xl bg-surface border border-border"
                    >
                      <item.icon className="w-5 h-5 text-primary mb-2" />
                      <div className="text-body-xs text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="text-body-sm font-semibold text-foreground">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Progress bars */}
                <div className="space-y-3">
                  {["Computer Science", "Mathematics", "Physics"].map((course, i) => (
                    <div key={course} className="space-y-1.5">
                      <div className="flex justify-between text-body-xs">
                        <span className="text-foreground font-medium">{course}</span>
                        <span className="text-muted-foreground">{85 - i * 15}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${85 - i * 15}%` }}
                          transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                          className="h-full rounded-full bg-gradient-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-1/4 p-3 rounded-xl bg-surface border border-border shadow-lg"
            >
              <Sparkles className="w-6 h-6 text-accent" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 bottom-1/4 p-3 rounded-xl bg-surface border border-border shadow-lg"
            >
              <Calendar className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
