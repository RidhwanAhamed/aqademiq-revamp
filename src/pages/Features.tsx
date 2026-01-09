import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Brain, BarChart3, Focus, Zap, Clock, Bell, Target, Sparkles, CheckCircle2, ArrowRight, Smartphone, RefreshCw, Shield } from "lucide-react";
import { Header, Footer, PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
const easeOutExpo = [0.19, 1, 0.22, 1] as const;
const features = [{
  id: "schedule",
  icon: Calendar,
  title: "Smart Schedule & Calendar",
  subtitle: "Conflict-free planning, automatically",
  description: "Aqademiq's AI transforms your courses, deadlines, and commitments into a unified, conflict-free schedule. Import your syllabus, sync your calendar, and watch as intelligent time-blocking does the rest.",
  benefits: ["Auto-sync with Google Calendar & Apple Calendar", "Intelligent conflict detection and resolution", "Energy-aware task placement based on your patterns", "LMS integration for automatic deadline import"],
  color: "primary",
  visual: "calendar"
}, {
  id: "ada",
  icon: Brain,
  title: "Ada AI Study Coach",
  subtitle: "Your personal academic advisor",
  description: "Ada learns how you work, when you're most productive, and what tends to derail you. It provides personalized nudges, smart reminders, and task breakdowns that make starting easier.",
  benefits: ["Personalized productivity insights", "Proactive reminders before you fall behind", "Smart task breakdown for complex assignments", "Adaptive suggestions based on your habits"],
  color: "accent",
  visual: "ada"
}, {
  id: "tracking",
  icon: BarChart3,
  title: "Grade Tracking & Analytics",
  subtitle: "Know exactly where you stand",
  description: "Visualize your academic progress with predictive analytics and actionable insights. Track grades across all courses, see trends, and understand what's working.",
  benefits: ["Real-time grade tracking across courses", "Predictive GPA calculations", "Performance trend analysis", "Weekly progress reports"],
  color: "success",
  visual: "analytics"
}, {
  id: "focus",
  icon: Focus,
  title: "Focus & Procrastination Tools",
  subtitle: "Beat distraction, build momentum",
  description: "Built-in focus sessions with adaptive work/break ratios, distraction blocking, and gentle accountability that helps you build consistent study habits.",
  benefits: ["Customizable Pomodoro timer", "Distraction blocking during focus sessions", "Streak tracking for habit building", "End-of-session reflection prompts"],
  color: "warning",
  visual: "focus"
}];
const additionalFeatures = [{
  icon: Smartphone,
  title: "Mobile-First PWA",
  description: "Works offline, installs on any device"
}, {
  icon: RefreshCw,
  title: "Real-time Sync",
  description: "Seamless updates across all platforms"
}, {
  icon: Shield,
  title: "Privacy First",
  description: "Your data stays yours, encrypted and secure"
}, {
  icon: Bell,
  title: "Smart Reminders",
  description: "Contextual notifications that help, not annoy"
}];
function FeatureVisual({
  type,
  color
}: {
  type: string;
  color: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const colorClasses = {
    primary: "bg-primary/10 border-primary/20 text-primary",
    accent: "bg-accent/10 border-accent/20 text-accent",
    success: "bg-success/10 border-success/20 text-success",
    warning: "bg-warning/10 border-warning/20 text-warning"
  };
  return <div className="relative rounded-2xl bg-surface border border-border shadow-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-error/80" />
          <div className="w-3 h-3 rounded-full bg-warning/80" />
          <div className="w-3 h-3 rounded-full bg-success/80" />
        </div>
      </div>

      <div className="p-6 bg-background-subtle dark:bg-surface-elevated min-h-[240px]">
        {type === "calendar" && <div className="space-y-3">
            {["Mon", "Tue", "Wed", "Thu"].map((day, i) => <motion.div key={day} initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.1,
          duration: 0.4
        }} className="flex items-center gap-3">
                <span className="text-body-xs text-muted-foreground w-8">{day}</span>
                <div className="flex-1 flex gap-2">
                  {Array.from({
              length: 3 - Math.floor(i / 2)
            }).map((_, j) => <div key={j} className={`flex-1 h-8 rounded-lg ${j === 0 ? "bg-primary/30" : j === 1 ? "bg-accent/30" : "bg-success/30"}`} />)}
                </div>
              </motion.div>)}
          </div>}

        {type === "ada" && <div className="space-y-4">
            <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-5 h-5 text-primary" />
                <span className="text-body-sm font-semibold text-foreground">Ada suggests</span>
              </div>
              <p className="text-body-sm text-muted-foreground">
                "Based on your schedule, 9 AM tomorrow is ideal for your essay. Want me to block that time?"
              </p>
            </motion.div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground text-body-sm font-medium">
                Yes, schedule it
              </button>
              <button className="flex-1 py-2 rounded-lg bg-muted text-muted-foreground text-body-sm font-medium">
                Not now
              </button>
            </div>
          </div>}

        {type === "analytics" && <div className="space-y-4">
            {[{
          course: "Computer Science",
          grade: "A-",
          progress: 87
        }, {
          course: "Mathematics",
          grade: "B+",
          progress: 78
        }, {
          course: "Physics",
          grade: "A",
          progress: 92
        }].map((item, i) => <motion.div key={item.course} initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.1,
          duration: 0.4
        }} className="space-y-2">
                <div className="flex justify-between text-body-sm">
                  <span className="font-medium text-foreground">{item.course}</span>
                  <span className="text-primary font-bold">{item.grade}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div initial={{
              width: 0
            }} whileInView={{
              width: `${item.progress}%`
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3 + i * 0.1,
              duration: 0.6
            }} className="h-full rounded-full bg-gradient-primary" />
                </div>
              </motion.div>)}
          </div>}

        {type === "focus" && <div className="text-center py-4">
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} whileInView={{
          scale: 1,
          opacity: 1
        }} viewport={{
          once: true
        }} className="w-32 h-32 mx-auto rounded-full border-8 border-warning/20 flex items-center justify-center mb-4 relative">
              <div className="absolute inset-2 rounded-full border-4 border-warning border-t-transparent animate-spin" style={{
            animationDuration: "3s"
          }} />
              <div className="text-center">
                <div className="text-display-sm font-bold text-foreground">25:00</div>
                <div className="text-body-xs text-muted-foreground">Focus</div>
              </div>
            </motion.div>
            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-success/10 text-success text-body-xs font-medium">
                3-day streak 🔥
              </span>
            </div>
          </div>}
      </div>
    </div>;
}
export default function Features() {
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: shouldReduceMotion ? 'auto' : 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash, shouldReduceMotion]);

  return <PageLayout>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container-marketing text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            ease: easeOutExpo
          }}>
              <h1 className="text-display-lg md:text-display-xl lg:text-display-2xl text-foreground mb-6">
                One hub for                                                                        <span className="text-gradient">actually finishing work.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Aqademiq combines smart scheduling, AI coaching, grade tracking, and focus tools into one unified
                platform designed specifically for students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://aqademiq.app" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="group">
                    Try free
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="https://aqademiq.app" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero-secondary" size="xl">
                    Watch demo
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Deep Dives */}
        {features.map((feature, index) => <section key={feature.id} id={feature.id} className={`section-padding scroll-mt-24 ${index % 2 === 1 ? "bg-surface-overlay/50" : ""}`}>
            <div className="container-marketing">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Content */}
                <motion.div initial={{
              opacity: 0,
              x: index % 2 === 0 ? -30 : 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.6,
              ease: easeOutExpo
            }} className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-14 h-14 rounded-2xl bg-${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <p className="text-body-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    {feature.subtitle}
                  </p>
                  <h2 className="text-display-md md:text-display-lg text-foreground mb-4">{feature.title}</h2>
                  <p className="text-body-lg text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map(benefit => <li key={benefit} className="flex items-center gap-3 text-body-md text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                        {benefit}
                      </li>)}
                  </ul>
                </motion.div>

                {/* Visual */}
                <motion.div initial={{
              opacity: 0,
              x: index % 2 === 0 ? 30 : -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.6,
              ease: easeOutExpo,
              delay: 0.1
            }} className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <FeatureVisual type={feature.visual} color={feature.color} />
                </motion.div>
              </div>
            </div>
          </section>)}

        {/* Additional Features Grid */}
        <section className="section-padding">
          <div className="container-marketing">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-display-md text-foreground mb-4">
                And so much <span className="text-gradient">more</span>
              </h2>
              <p className="text-body-lg text-muted-foreground">
                Built with students in mind, every detail is designed to help you succeed.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, i) => <motion.div key={feature.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1,
              duration: 0.5
            }} whileHover={shouldReduceMotion ? {} : {
              y: -4
            }} className="p-6 rounded-2xl bg-surface border border-border text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-body-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{feature.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container-marketing">
            <motion.div initial={{
            opacity: 0,
            scale: 0.98
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            ease: easeOutExpo
          }} className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-12 lg:p-16 text-center">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-display-md md:text-display-lg text-white mb-4">Ready to transform your studies?</h2>
                <p className="text-body-lg text-white/85 mb-8">
                  Join thousands of students already using Aqademiq to stay organized and achieve their goals.
                </p>
                <a href="https://aqademiq.app" target="_blank" rel="noopener noreferrer">
                  <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                    Start free trial
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageLayout>;
}