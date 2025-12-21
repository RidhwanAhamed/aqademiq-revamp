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
  { icon: Star, text: "4.9/5 rating" },
  { icon: Star, text: "10K+ students" },
  { icon: Star, text: "50+ universities" },
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

        {/* Logos - Desktop static, Mobile marquee */}
        <div className="relative overflow-hidden">
          {/* Desktop - Static Grid */}
          <div className="hidden md:flex justify-center items-center gap-12 flex-wrap">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="text-display-sm font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-300"
              >
                {logo.text}
              </motion.div>
            ))}
          </div>

          {/* Mobile - Marquee */}
          <div className="md:hidden relative">
            <div className="flex gap-12 animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="text-display-sm font-bold text-muted-foreground/40 whitespace-nowrap"
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
