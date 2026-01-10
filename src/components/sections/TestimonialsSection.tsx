import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import JonathanSamuelImg from "@/testimonial_images/JonathanSamuel.png";
import ThisalPereraImg from "@/testimonial_images/ThisalPerera.png";
import KaviyanElanImg from "@/testimonial_images/KaviyanElan.png";
import SanaSultanaImg from "@/testimonial_images/SanaSultana.png";
import AbdullahAlAmeriImg from "@/testimonial_images/AbdullahAlAmeri.png";
import HaseebZulfiqarImg from "@/testimonial_images/HaseebZulfiqar.png";
import EthanDsouzaImg from "@/testimonial_images/EthanDsouza.png";
import AdeelZulfiqarImg from "@/testimonial_images/AdeelZulfiqar.png";
import DevaduttBImg from "@/testimonial_images/DevaduttB.png";
import GaurishCPImg from "@/testimonial_images/GaurishCP.png";

const testimonials = [
  {
    quote: "Balancing multiple engineering projects was overwhelming. Aqademiq helps me track deadlines across all my courses and breaks down complex assignments into manageable steps. My grades improved significantly.",
    name: "Jonathan Samuel",
    major: "Mechatronics Engineering",
    university: "University of Wollongong",
    image: JonathanSamuelImg,
    rating: 5,
  },
  {
    quote: "As a commerce student, I juggle multiple subjects with different assignment styles. Aqademiq's smart scheduling adapts to my workload and helps me prioritize what needs attention first.",
    name: "Thisal Perera",
    major: "BCom Student",
    university: "Deakin University",
    image: ThisalPereraImg,
    rating: 5,
  },
  {
    quote: "Managing my Master's thesis while keeping up with coursework was challenging. Aqademiq organizes my research tasks and coursework deadlines in one place. It's been a game-changer for my productivity.",
    name: "Kaviyan Elan",
    major: "MEng Electrical and Electronics",
    university: "Loughborough University",
    image: KaviyanElanImg,
    rating: 5,
  },
  {
    quote: "Clinical rotations plus study time requires careful planning. Aqademiq helps me balance my dental school schedule, ensuring I don't miss important deadlines or exam prep sessions.",
    name: "Sana Sultana",
    major: "Bachelors in Dentistry",
    university: "Ajman University",
    image: SanaSultanaImg,
    rating: 5,
  },
  {
    quote: "Economics courses have overlapping deadlines that used to stress me out. With Aqademiq, I can see everything at a glance and plan my study sessions more effectively. Much less anxiety now.",
    name: "Abdullah Al Ameri",
    major: "Bachelor's of Economics",
    university: "United Arab Emirates University",
    image: AbdullahAlAmeriImg,
    rating: 5,
  },
  {
    quote: "AI engineering projects can be complex with many moving parts. Aqademiq breaks everything down and helps me track progress across multiple coding assignments. I stay on top of everything now.",
    name: "Haseeb Zulfiqar",
    major: "AI Engineering",
    university: "Abu Dhabi University",
    image: HaseebZulfiqarImg,
    rating: 5,
  },
  {
    quote: "Finance courses have frequent exams and assignments. Aqademiq's grade tracking and deadline reminders keep me organized. I can focus on studying instead of worrying about missing deadlines.",
    name: "Ethan D'souza",
    major: "BBA (Finance)",
    university: "University of Wollongong",
    image: EthanDsouzaImg,
    rating: 5,
  },
  {
    quote: "Medical school is intense with clinical rotations and studies. Aqademiq helps me manage my cardiology rotation schedule alongside my coursework. It's become essential for staying organized.",
    name: "Adeel Zulfiqar",
    major: "MD. Cardiology",
    university: "Tbilisi State Medical University",
    image: AdeelZulfiqarImg,
    rating: 5,
  },
  {
    quote: "I have ADHD and I was constantly juggling five apps. Now everything's in one place and Ada's suggestions actually make sense. I stopped procrastinating because I don't have decision paralysis anymore.",
    name: "Devadutt B",
    major: "BEng Computer Science",
    university: "BITS Pilani",
    image: DevaduttBImg,
    rating: 5,
  },
  {
    quote: "Biotechnology labs require precise timing and organization. Aqademiq helps me plan my lab work around my coursework deadlines. The weekly reviews help me understand my productivity patterns.",
    name: "Gaurish CP",
    major: "BEng Biotechnology",
    university: "BITS Pilani",
    image: GaurishCPImg,
    rating: 5,
  },
];

// Split testimonials into two rows (5 per row)
const row1Testimonials = testimonials.slice(0, 5);
const row2Testimonials = testimonials.slice(5, 10);

interface Testimonial {
  quote: string;
  name: string;
  major: string;
  university: string;
  image: string;
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
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-border"
        />
        <div className="min-w-0 flex-1">
          <div className="text-body-sm font-semibold text-foreground truncate">{testimonial.name}</div>
          <div className="text-body-xs text-muted-foreground truncate">{testimonial.major}</div>
          <div className="text-body-xs text-muted-foreground/70 truncate">{testimonial.university}</div>
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
