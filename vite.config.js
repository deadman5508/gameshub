import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap'
import allGames from './src/data/games.json'

const dynamicGameUrls = allGames.map(g => `/game/${g.id}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    sitemap({
      hostname: 'https://www.jogostorrentgratis.shop', // 👈 seu domínio
      urls: [
        '/',       
        '/games',
        ...dynamicGameUrls
      ],
    })
  ],
})
