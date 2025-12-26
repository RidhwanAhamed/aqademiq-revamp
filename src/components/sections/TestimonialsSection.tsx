import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "I have ADHD and I was constantly juggling five apps. Now everything's in one place and Ada's suggestions actually make sense. I stopped procrastinating because I don't have decision paralysis anymore.",
    name: "Alex",
    role: "CS Student",
    avatar: "A",
    rating: 5,
  },
  {
    quote: "I used to refresh my grades portal every hour out of anxiety. Now I check Aqademiq once and I trust the plan. My stress dropped so much.",
    name: "Jordan",
    role: "Pre-med",
    avatar: "J",
    rating: 5,
  },
  {
    quote: "The low-distraction mode saved me. No notifications I didn't ask for, no overwhelming colors. I can actually focus for more than 5 minutes.",
    name: "Casey",
    role: "Design Student",
    avatar: "C",
    rating: 5,
  },
  {
    quote: "Used to procrastinate until midnight. Now Aqademiq breaks assignments into bite-sized tasks. I actually start early.",
    name: "Sam",
    role: "Business Student",
    avatar: "S",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as const },
    },
  };

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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-warning/10 border border-warning/20 text-warning text-body-sm font-medium">
            <Star className="w-4 h-4 fill-warning" />
            <span>Student Stories</span>
          </div>
          <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
            Real students, real{" "}
            <span className="text-gradient">behavior change</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            From ADHD spirals to anxiety loops to sensory overload—see how Aqademiq helps students actually finish what they start.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-surface border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-body-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-body-md font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-body-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
