---
title: AI Summary Generator
description: Adds a Generate Summary button in the SNO/WordPress Story editor that uses OpenAI to create a concise HTML bullet summary. Requires API key, endpoint, model, and prompt.
---

The AI Summary Generator is a small WordPress plugin that adds a Generate Summary button in the Story editor (SNO calls posts “Stories”). When clicked, it sends the story’s body text to OpenAI and returns a short, factual bullet summary as clean HTML that can be pasted or displayed where needed.

## Where it appears

- Inside the WordPress/SNO Story editor as a Generate Summary button.
- Intended for newsroom editors to quickly produce a neutral, factual summary of the current article.

## Requirements

- OpenAI API endpoint: https://api.openai.com/v1/chat/completions
- An OpenAI API key with billing enabled
- Model name (for example: gpt-4.1, gpt-4o-mini, or the model you choose for summarization)
- The summarization prompt (see below)

Note on usage/cost: Summaries are short and typically inexpensive. We recommend setting a small monthly budget/cap in your OpenAI account while testing.

## Configuration

Configure the plugin on its settings page with:

1. API Key – paste your OpenAI API key.
2. API URL – usually https://api.openai.com/v1/chat/completions.
3. Model – e.g., gpt-4.1 or gpt-4o-mini.
4. Prompt – use the prompt below or your own (keep the output rules strict for reliable formatting).

If your installation does not show a settings page, this may be configured via environment variables or constants defined by the plugin. Ask an admin or check the plugin’s readme if unsure.

## Prompt used for summaries

Copy and paste this prompt into the plugin’s Prompt field.

```
You are a neutral news copy editor for a community journalism site. Summarize ONLY the article text provided (no outside knowledge).

Output requirements (must follow exactly):
- Return valid HTML with a single <ul> that contains 4–5 <li> items ONLY. No other text, headings, or wrappers.
- Each <li> is one concise sentence (15–30 words) capturing a distinct, important fact from the article.
- Use ONLY facts explicitly stated in the article. If a detail is not in the text, do not include it.
- Prefer concrete facts (who/what/when/where/how much). Include dates, names, numbers when present.
- No speculation, no opinions, no adjectives/adverbs unless they appear as quotes in the article.
- Do not add links, images, or formatting beyond <ul> and <li>.

Reliability rules:
- If a point cannot be verified from the article text alone, omit it.
- If fewer than 4 verified points exist, return only verified points and keep the total items ≤ 5 (never fabricate).

Return ONLY the HTML list. Example structure:
- First key fact …
- Second key fact …
- Third key fact …
- Fourth key fact …
- Fifth key fact (optional) …
```

## Example HTML output

```html
<ul>
  <li>
    The City Council approved a $2.5 million roadway repair contract on Oct. 14
    after a 5–2 vote.
  </li>
  <li>
    The project covers eight miles across the east and south districts, with
    work scheduled to begin in November.
  </li>
  <li>
    Public Works Director Erin Soto said funding comes from a state grant
    awarded in July.
  </li>
  <li>
    Contractor bids were opened Sept. 30; Rivera Construction submitted the
    lowest qualifying bid at $2.5 million.
  </li>
  <li>
    Residents can view a map of affected streets on the city’s website, updated
    weekly during construction.
  </li>
</ul>
```

## Styling and customization

- The plugin returns a plain <ul>/<li> list. You can style it with your site’s Custom CSS.
- A small stylesheet may also be bundled with the plugin; you can override it safely from Custom CSS.
- Keep styles minimal to preserve readability and avoid breaking editor or theme layout.

## Troubleshooting

- Empty or partial results: Check the API key, model, and that the article has enough factual content.
- Errors from OpenAI: Verify billing status, model name, and that the API URL is correct.
- Output not a list: Ensure the prompt has the strict HTML instructions above.
- Rate limiting: Add short delays between rapid requests or lower usage during peak times.

## Notes

- Keep your OpenAI API key private. Do not place keys in content or client-side code.
- The prompt is optimized for factual, neutral summaries. Adjust only if you’re comfortable maintaining strict output format.
