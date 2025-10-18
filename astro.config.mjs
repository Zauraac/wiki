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
	    logo: {
		light: './src/assets/logo-light.svg',
		dark: './src/assets/logo-dark.svg',
	    },
	    plugins: [
		starlightThemeBlack({
		    footerText: 'Built with spite, weaponized autism and plenty of swearing.',
		    navLinks: [
			{ label: 'Navigation', link: 'navigation' },
			{ label: 'Roadmap', link: 'roadmap/roadmap' },
		    ],
		})
	    ],
            title: 'Zauraac - Wiki',
            tableOfContents: true,
            social: [
                { icon: 'github', label: 'Source', href: 'https://github.com/Zauraac/wiki' },
		{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/invite/Nabv2D8' },
            ],
            sidebar: [
                { 
		    label: 'General',
		    items: [
			{ slug: 'navigation' },
			{ label: 'Roadmap', slug: 'roadmap/roadmap' },
		    ],
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
                    label: 'Services',
		    items: [
			{ slug: 'services/wiki' },
			{ slug: 'services/3dprinting' },
			{ label: 'VPN overview', slug: 'services/vpn/getting-started' },
			{ slug: 'services/vpn/zerotier' },
			{ slug: 'services/vpn/wireguard' },
		    ]
                },
            ],
        }),
    ],
});
