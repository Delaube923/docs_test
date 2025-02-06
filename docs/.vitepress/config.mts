import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "gatechain docs",
  description: "gatechain docs",

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Quick Start', link: '/quick-start' },
            ]
          }
        ],
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: 'AI 助手', link: 'https://doubao.com/bot/x4wWvhTN' },
        ],
        sidebar: [
          {
            text: '快速开始',
            items: [
              { text: '快速开始', link: '/zh/quick-start' },
            ]
          }
        ],
      }
    }
  }
})