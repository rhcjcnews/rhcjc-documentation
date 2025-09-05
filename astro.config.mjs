import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'RHCJC',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Overview', slug: 'guides/overview' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Plugins',
					autogenerate: { directory: 'plugins' },
				},
				{
					label: 'Designs',
					autogenerate: { directory: 'designs' },
				},
			],
		}),
	],
});
