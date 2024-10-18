import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap' // 用于生成网站的站点地图（利于SEO）

export default defineConfig({
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }],
	},
	integrations: [sitemap()],
})
