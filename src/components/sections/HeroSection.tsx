import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Calendar, CheckCircle2, MessageSquare, Sparkles, Clock, Brain, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
const easeOutExpo = [0.19, 1, 0.22, 1] as const;
export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOutExpo
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: shouldReduceMotion ? 0 : -10
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.7,
        ease: easeOutExpo
      }
    })
  };
  return <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <motion.div animate={shouldReduceMotion ? {} : {
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.25, 0.15]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-20 left-[15%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <motion.div animate={shouldReduceMotion ? {} : {
        scale: [1, 1.15, 1],
        opacity: [0.1, 0.2, 0.1]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container-marketing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-left">
            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-display-lg md:text-display-xl lg:text-display-2xl text-foreground mb-6 leading-tight">
              Stop procrastination.   <span className="text-gradient">smarter with Ada.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-body-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Aqademiq uses procrastination psychology to build a study plan you'll actually follow—set up in 5 minutes,
              trust it for a semester.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <div className="flex flex-col items-center lg:items-start">
                <Button variant="hero" size="xl" className="group shadow-lg shadow-primary/25">
                  Try free
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <span className="text-body-xs text-muted-foreground mt-2">No card, 5-min setup</span>
              </div>
              <Button variant="hero-secondary" size="xl" className="group">
                <Play className="w-4 h-4 mr-1" />
                Watch Ada build a plan
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-6 text-body-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>5-min setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Research-backed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>ADHD-friendly</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Layered Product Cards */}
          <div className="relative perspective-1000">
            {/* Calendar Card - Back Layer */}
            <motion.div custom={0} variants={cardVariants} initial="hidden" animate="visible" className="absolute -top-4 -left-4 lg:-left-8 w-[280px] z-10">
              <div className="rounded-2xl bg-surface border border-border shadow-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-body-sm font-semibold text-foreground">Weekly Schedule</span>
                </div>
                <div className="space-y-2">
                  {["Mon", "Tue", "Wed", "Thu"].map((day, i) => <div key={day} className="flex items-center gap-3">
                      <span className="text-body-xs text-muted-foreground w-8">{day}</span>
                      <div className="flex-1 h-6 rounded-md bg-muted overflow-hidden">
                        <motion.div initial={{
                      width: 0
                    }} animate={{
                      width: `${65 + i * 10}%`
                    }} transition={{
                      delay: 1.2 + i * 0.1,
                      duration: 0.6,
                      ease: easeOutExpo
                    }} className={`h-full rounded-md ${i % 2 === 0 ? "bg-primary/70" : "bg-accent/70"}`} />
                      </div>
                    </div>)}
                </div>
              </div>
            </motion.div>

            {/* To-Do Card - Middle Layer */}
            <motion.div custom={1} variants={cardVariants} initial="hidden" animate="visible" className="relative z-20 mx-auto w-full max-w-[340px] lg:ml-16">
              <div className="rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden">
                {/* Window chrome */}
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

                {/* Dashboard content */}
                <div className="p-5 bg-background-subtle dark:bg-surface-elevated">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-body-md font-semibold text-foreground">Today's Tasks</h4>
                    <span className="text-body-xs text-primary font-medium">3 remaining</span>
                  </div>
                  <div className="space-y-3">
                    {[{
                    task: "Review Chapter 5 notes",
                    time: "9:00 AM",
                    done: true
                  }, {
                    task: "Complete Math Problem Set",
                    time: "2:00 PM",
                    done: false
                  }, {
                    task: "Submit Essay Draft",
                    time: "5:00 PM",
                    done: false
                  }].map((item, i) => <motion.div key={item.task} initial={{
                    opacity: 0,
                    x: -10
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: 1.4 + i * 0.1,
                    duration: 0.4
                  }} className={`flex items-center gap-3 p-3 rounded-xl ${item.done ? "bg-success/5 border border-success/20" : "bg-surface border border-border"}`}>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.done ? "bg-success border-success" : "border-border"}`}>
                          {item.done && <CheckCircle2 className="w-3 h-3 text-success-foreground" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-body-sm font-medium truncate ${item.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                            {item.task}
                          </p>
                        </div>
                        <span className="text-body-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </span>
                      </motion.div>)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Assistant Card - Top Layer */}
            <motion.div custom={2} variants={cardVariants} initial="hidden" animate="visible" className="absolute -bottom-6 -right-4 lg:-right-8 w-[260px] z-30">
              <div className="rounded-2xl bg-surface border border-border shadow-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Brain className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-body-sm font-semibold text-foreground block">Ada</span>
                    <span className="text-body-xs text-muted-foreground">AI Study Coach</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-body-xs text-foreground">
                      "I noticed you're most productive in the morning. Want me to reschedule your essay draft to 9 AM?"
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 text-body-xs font-medium py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-colors">
                      Yes, update
                    </button>
                    <button className="flex-1 text-body-xs font-medium py-2 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
                      Keep as is
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating accent elements */}
            <motion.div animate={shouldReduceMotion ? {} : {
            y: [0, -8, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="absolute top-1/3 -right-2 lg:right-0 p-2 rounded-xl bg-accent/10 border border-accent/20 shadow-lg z-40">
              <MessageSquare className="w-5 h-5 text-accent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}