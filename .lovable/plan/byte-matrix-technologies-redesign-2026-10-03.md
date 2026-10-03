# Byte Matrix Technologies redesign

## Outcome
Rebuild the existing five-page site into a premium enterprise ICT experience using the selected deep navy and electric blue palette, Sora headings, Manrope body text, and an asymmetric editorial layout. Existing business content, verified client logos, services, values, industries, testimonials, case studies, contact details, legal pages, and careers content remain available.

## What will change
1. **Shared foundation**
   - Replace the current styling with semantic navy, electric blue, off-white, and white tokens.
   - Redesign the sticky header, mobile navigation, buttons, typography, spacing, focus states, and footer.
   - Keep five primary pages: About, Services, Portfolio, Careers, and Contact. Header labels will surface Industries and Case Studies as homepage/portfolio destinations without creating duplicate pages.

2. **Homepage**
   - Build the exact split hero copy and calls to action from the brief, using the existing high-quality data-centre image rather than the heavy background video.
   - Place the requested credibility indicators directly beneath the calls to action.
   - Add the three verified client logos immediately after the hero.
   - Recompose differentiators and industries as asymmetric bento layouts.
   - Redesign service tiers, highlight Enterprise, and add a full comparison table.
   - Redesign existing testimonials with accessible avatars and organisation marks.
   - Add certifications/vendor partnerships using the existing Microsoft, Cisco, Dell, HPE, Hikvision, and Ubiquiti assets without inventing certification claims.
   - Feature three existing project summaries as case-study cards linking to Portfolio.

3. **Other pages**
   - Apply the same visual language to Services, Portfolio, Careers, Contact, and legal pages while preserving their current copy and interactions.
   - Present Portfolio as the Case Studies destination while preserving its existing URL for SEO.
   - Keep Careers accessible from the footer and direct navigation.

4. **Contact and conversion**
   - Expand the consultation form to Name, Company, Email, Telephone, Service Interest, and Message.
   - Keep scheduling within the existing consultation flow until a booking URL is supplied.
   - Retain the Nairobi map and existing phone, email, hours, WhatsApp, and social details.
   - Add a footer newsletter field that opens a pre-addressed subscription request email.

5. **Performance and accessibility**
   - Lazy-load below-fold images, reserve image dimensions, remove the 14 MB hero video from initial rendering, and use existing optimized WebP/JPG assets appropriately.
   - Enforce 48px targets, visible keyboard focus, semantic labels, accessible ratings, and reduced-motion behavior.
   - Verify responsive presentation at 375, 768, 1024, and 1440 pixels and test the consultation flow.

## Technical details
- Retain React Router, Framer Motion, Tailwind, existing UI controls, SEO metadata, and current contact delivery function.
- Consolidate repeated site/contact/navigation data into a shared configuration module.
- Use design tokens rather than hardcoded colors in page code.
- Preserve `/portfolio` and `/careers` to avoid broken links or indexed URL changes.
