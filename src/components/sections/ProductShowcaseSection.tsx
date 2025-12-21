import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Calendar, Focus, BarChart3, BookOpen, CheckCircle2, Clock, Brain, TrendingUp, FileText, ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "plan",
    label: "Plan",
    icon: Calendar,
    title: "Smart Weekly Planning",
    description: "AI-generated schedules that respect your energy levels, deadlines, and life commitments.",
    features: ["Auto-scheduling", "Conflict detection", "Calendar sync"],
  },
  {
    id: "focus",
    label: "Focus",
    icon: Focus,
    title: "Deep Work Sessions",
    description: "Built-in focus timer with adaptive work/break ratios based on your productivity patterns.",
    features: ["Pomodoro timer", "Distraction blocking", "Progress tracking"],
  },
  {
    id: "track",
    label: "Track",
    icon: BarChart3,
    title: "Grade Analytics",
    description: "Visualize your academic progress with predictions and actionable insights.",
    features: ["Grade predictions", "Course analytics", "Performance trends"],
  },
  {
    id: "reflect",
    label: "Reflect",
    icon: BookOpen,
    title: "Weekly Reviews",
    description: "End-of-week summaries that help you understand what worked and what needs adjustment.",
    features: ["Weekly insights", "Habit patterns", "Goal tracking"],
  },
];

const mockUI = {
  plan: (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-body-lg font-semibold text-foreground">This Week</h4>
        <span className="text-body-sm text-primary font-medium">Dec 16 - 22</span>
      </div>
      {["Monday", "Tuesday", "Wednesday"].map((day, i) => (
        <div key={day} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
          <div className="w-16 text-body-sm font-medium text-muted-foreground">{day}</div>
          <div className="flex-1 flex gap-2">
            {Array.from({ length: 3 - i }).map((_, j) => (
              <div
                key={j}
                className={`flex-1 h-8 rounded-lg ${j === 0 ? 'bg-primary/20 border border-primary/30' : 'bg-accent/20 border border-accent/30'}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  focus: (
    <div className="text-center py-8">
      <div className="w-40 h-40 mx-auto rounded-full border-8 border-primary/20 flex items-center justify-center mb-6 relative">
        <div className="absolute inset-2 rounded-full border-4 border-primary border-t-transparent animate-spin" style={{ animationDuration: '3s' }} />
        <div className="text-center">
          <div className="text-display-md font-bold text-foreground">25:00</div>
          <div className="text-body-xs text-muted-foreground">Deep Focus</div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium">Pause</button>
        <button className="px-6 py-2 rounded-lg bg-muted text-muted-foreground font-medium">Reset</button>
      </div>
    </div>
  ),
  track: (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-body-lg font-semibold text-foreground">Course Progress</h4>
        <TrendingUp className="w-5 h-5 text-success" />
      </div>
      {[
        { course: "Computer Science", grade: "A-", progress: 87 },
        { course: "Mathematics", grade: "B+", progress: 78 },
        { course: "Physics", grade: "A", progress: 92 },
      ].map((item) => (
        <div key={item.course} className="p-4 rounded-xl bg-muted/50 border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-body-sm font-medium text-foreground">{item.course}</span>
            <span className="text-body-sm font-bold text-primary">{item.grade}</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.progress}%` }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="h-full rounded-full bg-gradient-primary"
            />
          </div>
        </div>
      ))}
    </div>
  ),
  reflect: (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-success/10 border border-success/20">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-5 h-5 text-success" />
          <span className="text-body-sm font-semibold text-foreground">Great Week!</span>
        </div>
        <p className="text-body-sm text-muted-foreground">
          You completed 12 of 15 tasks and maintained a 3-day streak.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Tasks Done", value: "12" },
          { label: "Focus Hours", value: "18h" },
          { label: "Streak", value: "3 days" },
        ].map((stat) => (
          <div key={stat.label} className="p-3 rounded-lg bg-muted/50 border border-border text-center">
            <div className="text-display-sm font-bold text-primary">{stat.value}</div>
            <div className="text-body-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState("plan");
  const shouldReduceMotion = useReducedMotion();
  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="section-padding">
      <div className="container-marketing">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
            See <span className="text-gradient">Aqademiq</span> in action
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Explore the key features that help thousands of students stay organized and achieve their goals.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-muted/50 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-body-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-gradient-primary shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <tab.icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Info */}
          <motion.div
            key={activeTab + "-info"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg">
              <currentTab.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-display-md text-foreground mb-4">{currentTab.title}</h3>
            <p className="text-body-lg text-muted-foreground mb-6">{currentTab.description}</p>
            <ul className="space-y-3 mb-8">
              {currentTab.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-body-md text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300">
              Learn more <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right - Mock UI */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-ui"}
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-surface border border-border shadow-xl overflow-hidden"
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-background text-body-xs text-muted-foreground">
                    app.aqademiq.com/{activeTab}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-background-subtle dark:bg-surface-elevated min-h-[320px]">
                {mockUI[activeTab as keyof typeof mockUI]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
