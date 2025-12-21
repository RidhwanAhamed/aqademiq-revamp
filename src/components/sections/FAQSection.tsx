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
    question: "Is Aqademiq really free to start?",
    answer: "Yes! You can use Aqademiq's core features completely free. Our free plan includes smart scheduling, basic task management, and access to Ada's essential guidance. Premium features like advanced analytics and unlimited AI coaching are available with our paid plans.",
  },
  {
    question: "How does Ada, the AI study coach, work?",
    answer: "Ada learns from your study patterns, energy levels, and progress over time. It provides personalized suggestions like optimal study times, task breakdowns, and gentle reminders. The more you use Aqademiq, the smarter Ada becomes at helping you stay on track.",
  },
  {
    question: "Can I sync my existing calendar and syllabus?",
    answer: "Absolutely! Aqademiq integrates with Google Calendar, Apple Calendar, and most university LMS systems. You can import your syllabus directly, and we'll automatically create tasks and deadlines for you.",
  },
  {
    question: "Does it work on mobile?",
    answer: "Aqademiq is built as a progressive web app (PWA), meaning it works beautifully on any device—desktop, tablet, or phone. You can even add it to your home screen for a native app-like experience.",
  },
  {
    question: "How is Aqademiq different from other planning apps?",
    answer: "Unlike generic to-do apps, Aqademiq is built specifically for students. Our AI understands academic workflows, deadline pressure, and procrastination patterns. We don't just list tasks—we help you actually complete them.",
  },
  {
    question: "What if I need help or have feedback?",
    answer: "We're here for you! Our support team responds within 24 hours, and we actively incorporate student feedback into our product roadmap. You can reach us through the in-app chat or email us directly.",
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
