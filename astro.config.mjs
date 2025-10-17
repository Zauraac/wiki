// Import external components
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';
import { Badge } from '@astrojs/starlight/components'

// https://astro.build/config for more information
export default defineConfig({
    // basic site config
    site: "https://wiki.zauraac.xyz",
    trailingSlash: "ignore",
    
    integrations: [
	starlight({
	    title: 'Zauraac - Wiki',
	    tableOfContents: false,
	    plugins: [
		starlightThemeGalaxy()
	    ],
	    social: [
		{ icon: 'github', label: 'Source', href: 'https://github.com/Zauraac/wiki' },
	    ],
	    sidebar: [
		{
		    label: 'Services'
		    autogenerate: { directory :'services' },
		}
		{
		    label: 'Minecraft',
		    autogenerate: { directory: 'games/minecraft' },
		},
		{
		    label: 'Stardew Valley <Badge text="New!" variant="success"/>'
		    autogenerate: { directory: 'games/stardew' },
		{
		    label: 'Roadmap',
		    items: [
			// Each item here is one entry in the navigation menu.
			{ label: 'Planned features', slug: 'roadmap/roadmap' },
		    ],
		},
		{
		    label: 'Roadmap',
		    items: [
			// Each item here is one entry in the navigation menu.
			{ label: 'Planned features', slug: 'roadmap/roadmap' },
		    ],
		},
	    ],
	}),
    ],
});
