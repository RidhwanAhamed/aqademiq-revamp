import { motion, useReducedMotion } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Aqademiq designed for ADHD or neurodivergent students?",
    answer: "Aqademiq is designed for all students, with specific accessibility features neurodivergent students find invaluable: sensory-friendly modes, low-distraction layouts, adaptive notifications, and clear step-by-step planning. ADHD students especially benefit from Ada's micro-task breakdown and reduced decision paralysis. But anyone struggling with procrastination finds it useful.",
  },
  {
    question: "How does Aqademiq actually reduce procrastination?",
    answer: "Procrastination research shows it's often driven by decision fatigue, task overwhelm, or poor planning—not laziness. Aqademiq addresses all three: Ada breaks big projects into concrete steps (reducing overwhelm), prioritizes your week automatically (cutting decision fatigue), and adapts your plan in real-time (boosting motivation). Studies show AI-assisted planning reduces procrastination by 30–40%.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Most students finish setup in 3–5 minutes: connect your school, answer 3 quick questions about your study style, and Ada builds your week. You'll have a full semester plan before your next class.",
  },
  {
    question: "Is the interface sensory-friendly for ADHD or autism?",
    answer: "Yes. You can turn off animations, reduce colors, mute notifications, and switch to a simplified layout. We designed Aqademiq with the input of neurodivergent students, so sensory customization is built-in, not an afterthought.",
  },
  {
    question: "How is this different from other study apps?",
    answer: "Most study apps are task managers with a study coat of paint. Aqademiq is built on behavioral psychology and adaptive AI. It doesn't just list what to do; it explains *why* and *when*, prevents decision paralysis, and feels designed for how students actually think—especially those prone to procrastination or sensory overload.",
  },
  {
    question: "Can I sync my existing calendar and LMS?",
    answer: "Absolutely. Aqademiq integrates with Google Calendar, Apple Calendar, and most university LMS systems. Import your syllabus directly, and Ada automatically creates tasks and deadlines for you.",
  },
];

export function FAQSection() {
  const shouldReduceMotion = useReducedMotion();

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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-muted border border-border text-muted-foreground text-body-sm font-medium">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
            Frequently asked{" "}
            <span className="text-gradient">questions</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Everything you need to know about Aqademiq. Can't find what you're looking for? Reach out to us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 bg-surface overflow-hidden data-[state=open]:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-body-md md:text-body-lg font-semibold text-foreground text-left py-5 hover:no-underline group [&[data-state=open]>svg]:rotate-45">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body-md text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
