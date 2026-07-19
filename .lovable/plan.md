## Goal

Add the two uploaded legal documents to the site as dedicated pages, rendering their text verbatim (no edits, rewrites, or summaries).

## New Pages

1. **`src/pages/PrivacyPolicy.tsx`** → route `/privacy-policy`
   - Renders the full Aqademiq Privacy Policy (Effective/Last Updated 19/07/2026) exactly as in `20260717_Privacy_Policy_Aqademiq_Draft_2.pdf`, including all 13 sections (Introduction, Definitions, Categories of Personal Data, Purposes of Processing, Disclosures, Retention, Security, Consent Management, Rights of Data Principals, Children, Grievance Officer contact block, Cookies, Policy Updates).

2. **`src/pages/TermsOfUse.tsx`** → route `/terms-of-use`
   - Renders the full Terms of Use exactly as in `Aqademiq_Terms_of_Use_Draft_2_July_16_2026.pdf`, including all 16 sections (Definitions & Interpretation through General Provisions).

Both pages:
- Wrap content in the existing `PageLayout` for consistent Header/Footer/motion.
- Use the site's typography tokens (Plus Jakarta Sans, semantic colors) — no hardcoded colors.
- Prose container (max-w-3xl, semantic headings h1/h2/h3, lists, bold/italic preserved from source).
- Add `useSEO` hook with proper titles/descriptions and `robots: index,follow`.
- No content is paraphrased, shortened, reordered, or "improved". Bold, italic, underlined headings, and the highlighted "Coimbatore" arbitration seat are preserved.

## Routing

- **`src/App.tsx`**: register `/privacy-policy` → `PrivacyPolicy`, `/terms-of-use` → `TermsOfUse`.

## Footer

- **`src/components/layout/Footer.tsx`**: add `{ name: "Privacy Policy", href: "/privacy-policy" }` and `{ name: "Terms of Use", href: "/terms-of-use" }` to the `legal` array (keep existing Support Policy / Organization Details entries).

## Out of scope

- No changes to any other page, copy, or design tokens.
- No changes to the document text itself.
