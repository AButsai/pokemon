import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			assets: '/src/assets',
			components: '/src/components',
			hooks: '/src/hooks',
			icons: '/src/icons',
			modules: '/src/modules',
			pages: '/src/pages',
			routes: '/src/routes',
			service: '/src/service',
			types: '/src/types',
			utils: '/src/utils',
			helpers: '/src/helpers',
		},
	},
})
