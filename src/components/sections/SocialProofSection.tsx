import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

const logos = [
  { name: "Stanford", text: "Stanford" },
  { name: "MIT", text: "MIT" },
  { name: "Oxford", text: "Oxford" },
  { name: "Harvard", text: "Harvard" },
  { name: "Cambridge", text: "Cambridge" },
  { name: "Yale", text: "Yale" },
  { name: "Princeton", text: "Princeton" },
  { name: "Berkeley", text: "UC Berkeley" },
];

const badges = [
  { icon: Star, text: "4.2/5 rating" },
  { icon: Star, text: "500+ students" },
  { icon: Star, text: "10+ universities" },
];

export function SocialProofSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-12 border-y border-border bg-surface-overlay/30">
      <div className="container-marketing">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-body-sm text-muted-foreground font-medium uppercase tracking-wider">
            Trusted by students at top universities
          </p>
        </motion.div>

        {/* Badges - Desktop */}
        <div className="hidden md:flex justify-center gap-8 mb-8">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20"
            >
              <badge.icon className="w-4 h-4 text-warning fill-warning" />
              <span className="text-body-sm font-medium text-foreground">{badge.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Logos - Desktop and Mobile marquee */}
        <div className="relative overflow-hidden">
          {/* Desktop - Animated Marquee (left to right) */}
          {!shouldReduceMotion ? (
            <div className="hidden md:block marquee-row relative overflow-hidden py-2">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling content wrapper */}
              <div className="flex animate-marquee-right">
                {/* Render logos 4 times for seamless infinite loop */}
                {[...Array(4)].map((_, setIndex) => (
                  <div key={setIndex} className="flex shrink-0 items-center">
                    {logos.map((logo, index) => (
                      <div
                        key={`set-${setIndex}-${logo.name}-${index}`}
                        className="text-display-sm font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-300 whitespace-nowrap px-6"
                      >
                        {logo.text}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="hidden md:flex overflow-x-auto py-4 scrollbar-hide">
              <div className="flex px-4">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="text-display-sm font-bold text-muted-foreground/40 whitespace-nowrap px-6"
                  >
                    {logo.text}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile - Marquee */}
          <div className="md:hidden relative">
            <div className="flex animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="text-display-sm font-bold text-muted-foreground/40 whitespace-nowrap px-6"
                >
                  {logo.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
