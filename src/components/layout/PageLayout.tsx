import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeProvider";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const { resolvedTheme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={resolvedTheme}
        initial={{ opacity: 0.9, scale: 0.995 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.9, scale: 0.995 }}
        transition={{
          duration: 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        className="min-h-screen bg-gradient-hero"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
