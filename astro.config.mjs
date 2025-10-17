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
	    title: 'My Docs',
	    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
	    sidebar: [
		{
		    label: 'Guides',
		    items: [
			// Each item here is one entry in the navigation menu.
			{ label: 'Example Guide', slug: 'guides/example' },
		    ],
		},
		{
		    label: 'Reference',
		    autogenerate: { directory: 'reference' },
		},
	    ],
	}),
    ],
});
