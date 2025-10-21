// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';


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
	    favicon: './public/favicon.jpg',
	    plugins: [
		ion({
		    footer.text: 'Built with spite, weaponized autism and plenty of swearing.',
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
			// { slug: 'services/vpn/zerotier' },
			// { slug: 'services/vpn/wireguard' },
		    ]
                },
            ],
        }),
    ],
});
