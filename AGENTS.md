# Project architecture rules

- Keep all canonical, Open Graph, sitemap, and structured-data URLs on the non-www production host because search engines must see one authoritative domain.
- Keep route metadata in the shared SEO head component while this remains a client-rendered Vite application; full crawler-visible route HTML requires an SSR/SSG migration.
- Store contact requests before attempting email notification so leads remain available when notification delivery is unavailable.
- Manage the site theme centrally with next-themes; use theme-invariant logo surfaces to preserve original brand artwork.
- Render homepage commitments from the tested homeStats module without zero-value animation states, so offscreen content remains accurate.
- Import the About introduction photograph through its project asset pointer so it renders on local and hosted installations without video playback dependencies; downloaded media must use the managed asset flow.