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
	    social: [{ icon: 'github', label: 'Source', href: 'https://github.com/Zauraac/wiki' }],
	    sidebar: [
		{
		    label: 'Guide',
		    items: [
			// Each item here is one entry in the navigation menu.
			{ label: 'Navigating the Guide', slug: 'guide/example' },
		    ],
		},
		{
		    label: 'Game servers'
		    autogenerate: { directory: 'games' },
		{
		    label: 'Roadmap',
		    autogenerate: { directory: 'roadmap' },
		},
	    ],
	}),
    ],
});
