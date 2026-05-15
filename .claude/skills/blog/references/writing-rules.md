# Writing Rules — Shiny Octopus Blog

## Paragraph Structure

- **Answer Capsule**: 40-60 words, first paragraph after every H2. Self-contained — an LLM must be able to extract it verbatim as a complete answer.
- **Body paragraphs**: 80-150 words each. Each paragraph should make sense if extracted alone (134-167 words is the sweet spot for AI Overview selection — correlation r=0.87).
- **One idea per paragraph**. LLMs extract paragraphs, not pages.

## Headings

- **H1**: Only in frontmatter `title`. Never in the markdown body.
- **H2**: Always a conversational question. "How does X affect Y?" not "X and Y". Match how people query ChatGPT/Perplexity.
- **H3**: Can be statements or questions. Use for sub-sections within an H2.
- **Never skip levels** (H2 → H4 without H3).

## Statistics & Data

- One stat every 150-200 words minimum.
- Always **bold** the number and include the source: "**94.8%** of homepages have WCAG failures (WebAIM 2025)"
- Use the most recent data available. Include the year.
- Original data (your own findings) gets **4.1x more citations** than pages without original data.
- Never use a stat without attribution — LLMs check sources.

## Tables

- Include at least 1 comparison table per post. Perplexity gives **+42% more citations** to content with tables.
- Use markdown tables (Astro renders them as HTML).
- Tables should compare features, costs, timelines, or before/after scenarios.

## Bold & Emphasis

- Bold key statistics and numbers.
- Bold key conclusions at the end of important paragraphs.
- Do NOT bold entire sentences — bold the specific data point or conclusion.

## Links

- **Internal links**: Link to at least 2 other pages on shinyoctopus.studio (service pages, other blog posts).
- **External links**: Link to authoritative sources for statistics. Use descriptive anchor text, not "click here".
- **CTA**: Every post ends with a CTA linking to a service page (/seo, /accessibility, /servers) and /contact.

## Tone & Voice

- Write for a business person, not a developer.
- Assume the reader knows nothing about technical terms — explain on first use.
- Direct and factual. No fluff, no filler.
- Confident but not arrogant. "Here is what works" not "We are the best".
- Use "you/your" for the reader. Use "we" for Shiny Octopus actions.
- No emojis. No exclamation marks except in rare emphasis.

## FAQ Section

- 4-6 questions at the end of every post.
- Each answer: 50-80 words, self-contained.
- Questions should be long-tail queries people would ask an LLM.
- Include at least one question about cost/pricing if relevant.

## Meta Description

- 120-155 characters.
- Include the primary keyword.
- Make it a value proposition, not a summary. "Learn how X improves Y by Z%" not "This article covers X".

## Word Count

- Target: 1,800-2,500 words.
- Minimum: 1,500 words.
- Maximum: 3,500 words.
- Longer is not better — density and structure matter more than length.

## Freshness Signals

- Set `pubDate` to the publication date.
- Set `updatedDate` when refreshing content.
- Mention the current year in the title or opening paragraph when relevant.
- Use current statistics — data older than 2 years should be replaced or noted as historical.
