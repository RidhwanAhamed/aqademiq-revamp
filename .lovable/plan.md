

## Ultimate SEO and LLM Optimization Plan

### Current State Assessment

The site already has solid foundations: JSON-LD structured data, Open Graph/Twitter meta tags, dynamic SEO per route, a sitemap, and an LLM-friendly robots.txt. However, there are significant gaps preventing top rankings.

### Key Issues Found

1. **Stale sitemap** -- `lastmod` dates say 2025-01-15, over a year old
2. **SoftwareApplication URL mismatch** -- schema says `aqademiq.app` but canonical is `aqademiq.com`
3. **No `llms.txt`** -- Modern LLM crawlers look for `/.well-known/llms.txt` for structured context
4. **Weak per-page SEO titles** -- Titles don't target long-tail conversational queries
5. **No page-level FAQ structured data** on Features, Why, About pages
6. **Missing semantic HTML** -- No `<article>`, no `aria-label` on nav, heading hierarchy gaps
7. **No `<noscript>` fallback** -- SPA with zero content for JS-disabled crawlers
8. **Thin keyword coverage** -- Missing high-value long-tail keywords like "ADHD study app", "neurodivergent planner", "AI study planner for college"
9. **No `speakable` schema** -- Helps voice assistants and LLMs extract key content
10. **Missing internal linking signals** in structured data

---

### Implementation Plan

#### 1. Update `public/sitemap.xml`
- Update all `lastmod` dates to `2026-03-02`
- Add `xmlns:xhtml` namespace for future multi-language support

#### 2. Create `public/.well-known/llms.txt`
A new file that LLM crawlers (GPTBot, Claude, Perplexity) use to understand your site. Contains:
- Company name, description, URL
- Key pages with descriptions
- Feature summaries
- FAQ content in plain text
- Contact info

#### 3. Create `public/.well-known/llms-full.txt`
Extended version with complete product documentation, feature details, comparison data, and all FAQ content for deep LLM indexing.

#### 4. Overhaul `src/lib/seo-config.ts`
For every page, upgrade:
- **Titles**: Target long-tail queries (e.g., "Best ADHD Study App for College Students | Aqademiq")
- **Descriptions**: 150-160 chars, conversational, keyword-rich
- **Keywords**: Expand to 15-20 per page covering ADHD, neurodivergent, procrastination, study planning
- **Structured data per page**:
  - `/features`: Add `ItemList` schema listing all features + `BreadcrumbList`
  - `/why-aqademiq`: Add `WebPage` with `speakable` + comparison `ItemList`
  - `/about`: Add `AboutPage` schema with `Organization` + `Person` schemas for team
  - `/`: Enhance existing with `speakable` property, add `Review` snippets

#### 5. Fix `index.html` structured data
- Fix `SoftwareApplication.url` from `aqademiq.app` to `aqademiq.com`
- Add `sameAs` array with all social profiles
- Add `speakable` schema for voice/LLM extraction
- Add `<noscript>` tag with critical text content for JS-disabled crawlers/bots
- Add `article:author` and `article:publisher` meta tags

#### 6. Enhance `src/hooks/useSEO.ts`
- Add `article:published_time` and `article:modified_time` meta tags
- Add `dc.title`, `dc.description` Dublin Core meta tags (used by academic crawlers)
- Add `citation_title`, `citation_author` meta tags (academic indexing)

#### 7. Add semantic HTML improvements across components
- **Header.tsx**: Add `aria-label="Main navigation"` to `<nav>`
- **FAQSection.tsx**: Wrap in `<section aria-labelledby="faq-heading">` with proper ID
- **HeroSection.tsx**: Add `role="banner"` context
- **Footer.tsx**: Add `aria-label="Footer navigation"` 
- All sections: Ensure proper heading hierarchy (no skipped levels)

#### 8. Enhance `public/robots.txt`
- Add `Sitemap` reference for llms.txt
- Add `ClaudeBot` user-agent (newer crawler name)
- Add `Amazonbot` and `cohere-ai` crawlers

#### 9. Update SEO config with conversational query targeting
Each page's structured data and meta will target specific LLM queries:
- "How do I stop procrastinating as a student?"
- "What apps are best for ADHD study?"
- "Best productivity app for neurodivergent college students"
- "AI study planner that works with ADHD"
- "How to manage time with executive function challenges"

---

### Technical Details

#### Files to Create (2 new)
1. `public/.well-known/llms.txt` -- LLM discovery file
2. `public/.well-known/llms-full.txt` -- Extended LLM context

#### Files to Modify (7 existing)
1. `public/sitemap.xml` -- Updated dates
2. `public/robots.txt` -- Additional crawlers + llms.txt reference
3. `index.html` -- Fixed schemas, noscript, speakable, Dublin Core
4. `src/lib/seo-config.ts` -- Complete overhaul of all 4 page configs with richer titles, descriptions, keywords, and structured data
5. `src/hooks/useSEO.ts` -- Dublin Core + academic meta tags
6. `src/components/sections/FAQSection.tsx` -- Semantic heading IDs
7. `src/components/layout/Header.tsx` -- Nav aria-label

