import { defineConfig } from 'astro/config'

export default defineConfig({
	scss: {
		files: [import.meta.url + '/../src/styles/globals.scss'],
	},
})
