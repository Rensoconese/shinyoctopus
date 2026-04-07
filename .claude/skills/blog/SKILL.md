---
name: blog
description: |
  Write, review, and optimize blog posts for the Shiny Octopus Astro blog.
  Dual-optimized for Google rankings AND AI citation (ChatGPT, Perplexity, Google AI Overviews).
  Use when: writing a new post, reviewing an existing post, checking SEO, or optimizing for AEO/GEO.
user-invokable: true
argument-hint: "<command> [topic or file path]"
---

# Shiny Octopus Blog Skill

## Platform

This is an **Astro 5.x** blog using Content Collections with markdown files.

- Posts live in: `src/content/blog/*.md`
- Schema defined in: `src/content.config.ts`
- Blog index: `src/pages/blog/index.astro`
- Post template: `src/pages/blog/[slug].astro`
- Layout: `src/layouts/Layout.astro` (accepts `schema` prop for JSON-LD)

### Frontmatter Schema

```yaml
---
title: "Post title"
description: "Meta description — 120-155 chars, includes primary keyword"
pubDate: 2026-04-04
updatedDate: 2026-04-04  # optional, shown as "Updated" in UI
heroImage: "/images/blog/slug.jpg"  # optional
tags: ["seo", "accessibility"]  # optional
draft: false  # true = hidden in production
---
```

## Commands

| Command | What it does |
|---------|-------------|
| `/blog write <topic>` | Write a new post from scratch |
| `/blog review <file>` | Review an existing post for AEO/GEO + SEO quality |
| `/blog seo-check <file>` | Technical SEO validation (meta, schema, headings, links) |
| `/blog geo-check <file>` | AI citation readiness audit (answer capsules, stats, structure) |
| `/blog update <file>` | Refresh an existing post (stats, dates, freshness signals) |
| `/blog ideas` | Generate post ideas aligned with our services |

## Command Routing

- `write` → Load `references/writing-rules.md` + auto-select template from `templates/` → Write post
- `review` → Load `references/writing-rules.md` + `references/geo-optimization.md` → Score and report
- `seo-check` → Load `references/seo-checklist.md` → Validate and report
- `geo-check` → Load `references/geo-optimization.md` → Audit and report
- `update` → Read existing post → Update stats, dates, freshness → Rewrite sections as needed
- `ideas` → Load `references/content-strategy.md` → Generate ideas

## Writing Methodology — The 6 Pillars

Every post MUST follow these pillars:

### 1. Answer-First (AEO)
The first paragraph after every H2 is a self-contained **Answer Capsule** of 40-60 words. This is what LLMs extract. It must be factual, direct, and citable verbatim without context.

### 2. Statistical Density
One **bolded statistic with source** every 150-200 words. Stats increase LLM visibility by +33.9%. Never use stats without attribution.

### 3. Question Headers
ALL H2s are conversational questions matching how people query LLMs. "How does X work?" not "How X works". "What is the cost of Y?" not "Y pricing".

### 4. Structured Data
Every post gets HTML tables where comparative data exists (+42% Perplexity citations). Markdown tables are fine — Astro renders them as HTML.

### 5. FAQ Schema
Every post ends with a FAQ section (4-6 questions). The blog template auto-generates Article schema; FAQs add long-tail coverage.

### 6. Freshness
Include "Updated [Month Year]" context in the opening. Use `updatedDate` in frontmatter. Content older than 90 days without update loses Perplexity citations.

## Quality Gates (Hard Rules)

A post FAILS if any of these are true:

- [ ] Missing answer capsule after any H2
- [ ] Any H2 is NOT a question
- [ ] Fewer than 3 bolded statistics with sources in the body
- [ ] No HTML/markdown table anywhere in the post
- [ ] No FAQ section at the end
- [ ] No CTA linking to a service page (/seo, /accesibilidad, /servidores) or /contact
- [ ] Word count under 1,500 or over 3,500
- [ ] Meta description over 155 characters or missing primary keyword
- [ ] Missing tags in frontmatter

## Scoring (100 points)

| Category | Points | Criteria |
|----------|--------|----------|
| AEO Structure | 25 | Answer capsules, question headers, self-contained paragraphs |
| Statistical Rigor | 20 | Stats density, source attribution, bold formatting |
| SEO Fundamentals | 20 | Title, meta, headings, internal links, schema |
| GEO Readiness | 20 | Tables, FAQ, entity clarity, passage citability |
| Readability | 15 | Tone, paragraph length, no jargon without explanation |

Score 80+ = publish. Score 60-79 = revise. Score <60 = rewrite.

## Shiny Octopus Context

- **Services**: SEO Audits ($490-$2,590), Accessibility Audits ($590-$2,990), Platform Strategy (free consultation)
- **Tone**: Direct, factual, no fluff. Business-focused, not developer-focused. Confident but not arrogant.
- **Audience**: Business owners and marketing teams. They care about results, not technical implementation.
- **Differentiator**: We design, code, AND understand business. Holistic approach. Custom Astro+Cloudflare builds. Data-driven audits with Crawl4AI.
- **CTA pattern**: Link to relevant service page + /contact. Include response time expectation ("You'll hear from us within 24 hours").

## Template Selection

Auto-select based on topic intent:

| Intent | Template |
|--------|----------|
| "How to..." / step-by-step | `templates/how-to.md` |
| "X vs Y" / comparison | `templates/comparison.md` |
| "What is..." / explainer | `templates/explainer.md` |
| "N things/signs/reasons" | `templates/listicle.md` |
| Cost/pricing/ROI | `templates/cost-guide.md` |

## References (load on demand)

- `references/writing-rules.md` — Detailed writing rules and paragraph structure
- `references/geo-optimization.md` — AEO/GEO optimization checklist and platform-specific tips
- `references/seo-checklist.md` — Technical SEO validation criteria
- `references/content-strategy.md` — Topic ideation and content calendar guidance
