// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';

// https://astro.build/config for more information
export default defineConfig({
    // basic site config
    site: "https://wiki.zauraac.xyz",
    trailingSlash: "ignore",
    integrations: [
        starlight({
	    plugins: [
		starlightThemeBlack({
		    footerText: 'Built with spite, weaponized autism and plenty of swearing.',
		    navLinks: [
			{ label: 'Navigation', link 'navigation' },
			{ label: 'Roadmap', link 'roadmap/roadmap' },
		    ],
		})
	    ],
            title: 'Zauraac - Wiki',
            tableOfContents: false,
            social: [
                { icon: 'github', label: 'Source', href: 'https://github.com/Zauraac/wiki' },
		{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/invite/Nabv2D8' },
            ],
            sidebar: [
                { 
		    label: 'General',
		    items: [
			{ slug: 'navigation' },
			{ slug: 'roadmap/roadmap' },
		    ],
                },
                {
                    label: 'Services',
                    autogenerate: { directory: 'services' },
                },
		{
		    label: 'Games',
		    items: [
			{
			    label: 'Minecraft',
			    autogenerate: { directory: 'games/minecraft' },
			},
			{
			    label: 'Stardew Valley',
			    autogenerate: { directory: 'games/stardew' },
			},
		    ],
		},
            ],
        }),
    ],
});
