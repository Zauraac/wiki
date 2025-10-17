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
	    title: 'Wiki and references',
	    tableOfContents: false,
	    social: [{ icon: 'github', label: 'Source', href: 'https://github.com/Zauraac/wiki' }],
	    sidebar: [
		{
		    label: 'Roadmap',
		    items: [
			// Each item here is one entry in the navigation menu.
			{ label: 'Planned features', slug: 'roadmap/roadmap' },
		    ],
		},
		{
		    label: 'Minecraft',
		    autogenerate: { directory: 'games/minecraft' },
		},
	    ],
	}),
    ],
});
