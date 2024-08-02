import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from  './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Home",
  description: "We always forget, so we write it down!",
  srcDir: 'documents',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    nav: nav,
    sidebar: sidebar,

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 943003797'
    }
  }
})
