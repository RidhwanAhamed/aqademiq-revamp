import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["hsl(var(--background) / 0)", "hsl(var(--background) / 0.85)"]
  );
  const headerBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["hsl(var(--border) / 0)", "hsl(var(--border) / 1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
        borderBottomColor: headerBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-shadow"
    >
      <nav className="container-marketing flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ rotate: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-sm"
          >
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </motion.div>
          <span className="text-xl font-bold text-gradient">Aqademiq</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-body-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Try Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
        className="overflow-hidden md:hidden glass-heavy"
      >
        <div className="container-marketing py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-body-md font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-center">
              Sign In
            </Button>
            <Button variant="hero" className="w-full justify-center">
              Try Free
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
