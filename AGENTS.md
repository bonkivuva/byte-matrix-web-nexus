# Project architecture rules

- Keep all canonical, Open Graph, sitemap, and structured-data URLs on the non-www production host because search engines must see one authoritative domain.
- Keep route metadata in the shared SEO head component while this remains a client-rendered Vite application; full crawler-visible route HTML requires an SSR/SSG migration.
- Store contact requests before attempting email notification so leads remain available when notification delivery is unavailable.