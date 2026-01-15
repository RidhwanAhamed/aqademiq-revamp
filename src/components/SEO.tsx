import { useSEO, SEOConfig } from '@/hooks/useSEO';

interface SEOProps extends SEOConfig {
  children?: React.ReactNode;
}

export function SEO({ children, ...config }: SEOProps) {
  useSEO(config);
  return children || null;
}
