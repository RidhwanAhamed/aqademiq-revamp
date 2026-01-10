import { Link } from "react-router-dom";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Changelog", href: "#changelog" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "API", href: "#api" },
  ],
  legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Cookies", href: "#cookies" },
  ],
};

// WhatsApp phone number - update with actual number (format: country code + number, no + or spaces)
// Example: 1234567890 for +1 234 567 890
const WHATSAPP_NUMBER = "+971501292021"; // TODO: Replace with actual WhatsApp number

const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/aqademiq", 
    icon: Linkedin 
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/tryaqademiq/", 
    icon: Instagram 
  },
  { 
    name: "WhatsApp", 
    href: `https://wa.me/${WHATSAPP_NUMBER}`, 
    icon: MessageCircle 
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-marketing section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="/aqademiq-logo.svg"
                alt="Aqademiq"
                className="h-9 w-9"
              />
              <span className="text-xl font-bold text-gradient">Aqademiq</span>
            </Link>
            <p className="text-body-sm text-muted-foreground max-w-xs mb-6">
              AI-powered academic planning built on behavioral psychology. Designed for students who procrastinate, with accessibility features neurodivergent students love.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="text-overline text-foreground uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-overline text-foreground uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-overline text-foreground uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-xs text-muted-foreground">
            © {new Date().getFullYear()} Aqademiq. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-body-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
