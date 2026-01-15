import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { 
  Heart, Target, Users, Award, Rocket, BookOpen,
  Sparkles, ArrowRight, Globe, Zap, Star
} from "lucide-react";
import { Header, Footer, PageLayout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";
import { Button } from "@/components/ui/button";

const easeOutExpo = [0.19, 1, 0.22, 1] as const;

const milestones = [
  { year: "2025", event: "August", description: "The journey began with the vision to create a single platform that unifies all student productivity needs—replacing the chaos of multiple apps with one intelligent solution." },
  { year: "2025", event: "September", description: "Started building the web application, focusing on core features that would help students manage their academic workload more effectively." },
  { year: "2025", event: "October", description: "Integrated Ada, our AI study coach, bringing intelligent assistance powered by behavioral psychology research to help students overcome procrastination." },
  { year: "2025", event: "November", description: "Launched outreach initiatives to connect with students who face procrastination challenges, understanding their pain points and refining our approach." },
  { year: "2026", event: "January", description: "Launched private beta program, successfully onboarding 500+ students from over 10 universities, validating our approach and gathering valuable feedback." },
];

const values = [
  {
    icon: Heart,
    title: "Student-First Design",
    description: "Every feature is designed with real student needs in mind—especially those who procrastinate or feel overwhelmed. We listen, learn, and iterate.",
  },
  {
    icon: Target,
    title: "Sustainable Success",
    description: "We believe in helping students achieve their goals without burning out. Balance and mental health come first, always.",
  },
  {
    icon: Users,
    title: "Designed for Diverse Minds",
    description: "Built for how your brain actually works—ADHD spirals, anxiety loops, sensory sensitivities. Accessibility isn't an afterthought; it's the foundation.",
  },
  {
    icon: Zap,
    title: "Research-Backed, Not Marketing-Backed",
    description: "Every feature is grounded in procrastination research and behavioral psychology. No gimmicks, no productivity theater—just tools that work.",
  },
];

// Team images - assuming they'll be in src/team_images/ folder
// Import placeholder - user will need to add actual images
const team = [
  {
    name: "Ridhwan Ahamed",
    role: "CEO & Founder",
    bio: "Leading the vision to transform student productivity through innovative technology and strategic direction.",
    image: "/team_images/RidhwanAhamed.png", // Placeholder - user should add image
    avatar: "RA",
  },
  {
    name: "Mohammed Aswath",
    role: "CTO",
    bio: "Architecting the technical infrastructure and leading development of our cutting-edge platform.",
    image: "/team_images/MohammedAswath.png", // Placeholder - user should add image
    avatar: "MA",
  },
  {
    name: "Zayaan Ali",
    role: "Growth & Partnerships",
    bio: "Building strategic partnerships and driving growth initiatives to expand our reach to students worldwide.",
    image: "/team_images/ZayaanAli.png", // Placeholder - user should add image
    avatar: "ZA",
  },
  {
    name: "Mariah Shania",
    role: "Marketing Lead",
    bio: "Crafting compelling narratives and marketing strategies that connect with students and showcase our mission.",
    image: "/team_images/MariahShania.png", // Placeholder - user should add image
    avatar: "MS",
  },
  {
    name: "Abdul Kader",
    role: "Financial Manager",
    bio: "Managing finances and ensuring sustainable growth while maintaining fiscal responsibility and strategic planning.",
    image: "/team_images/AbdulKader.png", // Placeholder - user should add image
    avatar: "AK",
  },
  {
    name: "Nawfil Faraaz",
    role: "Data Analytics Lead",
    bio: "Analyzing user data and insights to drive product improvements and enhance the student experience.",
    image: "/team_images/NawfilFaraaz.png", // Placeholder - user should add image
    avatar: "NF",
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <PageLayout>
      <SEO {...getSEOConfig('/about')} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container-marketing">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
              >
                <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
                  Helping students study{" "}
                  <span className="text-gradient">sustainably with AI</span>
                </h1>
                <p className="text-body-lg text-muted-foreground mb-6">
                  We're on a mission to help students achieve their academic goals without sacrificing their mental health. 
                  Aqademiq combines AI-powered planning rooted in behavioral psychology—not just grinding harder, but studying smarter.
                </p>
                <p className="text-body-lg text-muted-foreground">
                  Founded by students who procrastinate, for students who procrastinate. We understand that the problem isn't laziness—it's planning, decision fatigue, and sensory overload. We solve all three.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                      <BookOpen className="w-8 h-8 text-primary mb-3" />
                      <div className="text-display-md font-bold text-foreground">500+</div>
                      <div className="text-body-sm text-muted-foreground">Active Students</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
                      <Globe className="w-8 h-8 text-accent mb-3" />
                      <div className="text-display-md font-bold text-foreground">10+</div>
                      <div className="text-body-sm text-muted-foreground">Universities</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="p-6 rounded-2xl bg-success/10 border border-success/20">
                      <Star className="w-8 h-8 text-success mb-3" />
                      <div className="text-display-md font-bold text-foreground">4.2</div>
                      <div className="text-body-sm text-muted-foreground">User Rating</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-warning/10 border border-warning/20">
                      <Award className="w-8 h-8 text-warning mb-3" />
                      <div className="text-display-md font-bold text-foreground">First</div>
                      <div className="text-body-sm text-muted-foreground">Unified productivity platform</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-surface-overlay/50">
          <div className="container-marketing">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-display-md md:text-display-lg text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-body-xl text-muted-foreground leading-relaxed mb-8">
                "To empower every student with AI-driven tools rooted in behavioral psychology—making academic planning effortless 
                so you can focus on learning, not managing apps. Built for how your brain actually works."
              </p>
              <div className="flex justify-center gap-8 text-center">
                <div>
                  <Rocket className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-body-sm font-medium text-foreground">Innovation</div>
                </div>
                <div>
                  <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-body-sm font-medium text-foreground">Empathy</div>
                </div>
                <div>
                  <Target className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-body-sm font-medium text-foreground">Impact</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-marketing">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
                What we <span className="text-gradient">believe in</span>
              </h2>
              <p className="text-body-lg text-muted-foreground">
                Our values guide every decision we make, from product features to how we support our users.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="p-6 md:p-8 rounded-2xl bg-surface border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-display-sm text-foreground mb-2">{value.title}</h3>
                  <p className="text-body-md text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-surface-overlay/50">
          <div className="container-marketing">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
                Our <span className="text-gradient">journey</span>
              </h2>
              <p className="text-body-lg text-muted-foreground">
                From an idea to helping hundreds of students—and we're just getting started.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
                
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={milestone.event}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="relative pl-20 pb-12 last:pb-0"
                  >
                    {/* Dot */}
                    <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />
                    
                    <div className="p-6 rounded-2xl bg-surface border border-border hover:shadow-md transition-shadow duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-body-xs font-medium mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-display-sm text-foreground mb-1">{milestone.event}</h3>
                      <p className="text-body-md text-muted-foreground">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="container-marketing">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-display-md md:text-display-lg text-foreground mb-4">
                Meet the <span className="text-gradient">team</span>
              </h2>
              <p className="text-body-lg text-muted-foreground">
              We are the team who faced the problem and we built the solution so others don't face the same problem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {team.map((member, i) => {
                const TeamMemberCard = () => {
                  const [imageError, setImageError] = useState(false);
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
                      className="p-6 rounded-2xl bg-surface border border-border text-center hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-border flex items-center justify-center bg-muted">
                        {member.image && !imageError ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={() => setImageError(true)}
                          />
                        ) : (
                          <span className="text-2xl font-bold text-muted-foreground">{member.avatar}</span>
                        )}
                      </div>
                      <h3 className="text-body-lg font-semibold text-foreground">{member.name}</h3>
                      <p className="text-body-sm text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-body-sm text-muted-foreground">{member.bio}</p>
                    </motion.div>
                  );
                };
                return <TeamMemberCard key={member.name} />;
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container-marketing">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-12 lg:p-16 text-center"
            >
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-display-md md:text-display-lg text-white mb-4">
                  Join our mission
                </h2>
                <p className="text-body-lg text-white/85 mb-8">
                  Whether you're a student looking for a better way to plan, or someone who wants to help us build the future of education—we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://aqademiq.app" target="_blank" rel="noopener noreferrer">
                    <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl group">
                      Try Aqademiq free
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tryaqademiq@gmail.com">
                    <Button
                      variant="outline"
                      size="xl"
                      className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                    >
                      Contact us
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageLayout>
  );
}
