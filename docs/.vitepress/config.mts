import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from  './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Home",
  description: "We always forget, so we write it down!",
  srcDir: 'documents',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    nav: nav,
    sidebar: sidebar,
    outline: {
      level: [1,3], // 显示h2-h4标题
      label: '目录' // 自定义标题
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 943003797'
    }
  }
})
