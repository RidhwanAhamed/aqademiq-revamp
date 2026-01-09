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
  {
    quote: "Finally, an app that doesn't make me feel bad about needing reminders. Ada feels like a supportive friend, not a nagging parent.",
    name: "Morgan",
    role: "Psychology Major",
    avatar: "M",
    rating: 5,
  },
  {
    quote: "The weekly review feature helped me understand my patterns. Turns out I'm most productive at 10 PM—and Aqademiq adjusted my schedule accordingly.",
    name: "Riley",
    role: "Engineering Student",
    avatar: "R",
    rating: 5,
  },
];

// Split testimonials into two rows
const row1Testimonials = testimonials.slice(0, 3);
const row2Testimonials = testimonials.slice(3, 6);

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] p-6 rounded-2xl bg-surface border border-border hover:shadow-lg transition-shadow duration-300 mr-6">
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-primary/20 mb-3" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-warning fill-warning" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-body-sm md:text-body-md text-foreground mb-4 leading-relaxed line-clamp-4">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-body-sm">
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-body-sm font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-body-xs text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ 
  testimonials, 
  direction 
}: { 
  testimonials: Testimonial[]; 
  direction: "left" | "right";
}) {
  const shouldReduceMotion = useReducedMotion();
  
  // For reduced motion: show static scrollable row
  if (shouldReduceMotion) {
    return (
      <div className="overflow-x-auto py-4 scrollbar-hide">
        <div className="flex px-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="marquee-row relative overflow-hidden py-2">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling content wrapper */}
      <div 
        className={`flex ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {/* Render testimonials 4 times for seamless infinite loop */}
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`set-${setIndex}-${testimonial.name}-${index}`} 
                testimonial={testimonial} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface-overlay/50 overflow-hidden">
      <div className="container-marketing">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
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
      </div>

      {/* Full-width marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Row 1: Scrolling left */}
        <MarqueeRow testimonials={row1Testimonials} direction="left" />
        
        {/* Row 2: Scrolling right */}
        <MarqueeRow testimonials={row2Testimonials} direction="right" />
      </motion.div>
    </section>
  );
}
