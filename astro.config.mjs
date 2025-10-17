// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config for more information
export default defineConfig({
    // basic site config
    site: "https://wiki.zauraac.xyz",
    trailingSlash: "ignore",
    integrations: [
        starlight({
            title: 'Zauraac - Wiki',
            tableOfContents: false,
            social: [
                { icon: 'github', label: 'Source', href: 'https://github.com/Zauraac/wiki' },
            ],
            sidebar: [
                {
                    label: 'Services',
                    autogenerate: { directory: 'services' },
                },
                {
                    label: 'Minecraft',
                    autogenerate: { directory: 'games/minecraft' },
                },
                {
                    label: 'Stardew Valley',
                    autogenerate: { directory: 'games/stardew' },
                },
                {
                    label: 'Roadmap',
                    items: [
                        { label: 'Planned features', slug: 'roadmap/roadmap' },
                    ],
                },
            ],
        }),
    ],
});
