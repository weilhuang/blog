import { defineConfig } from 'vitepress'

const base = '/blog/'

/**
 * 站点配置。中文为默认语言；若以后要加英文，可按 VitePress i18n
 * 文档拆成 `locales.zh` / `locales.en`。
 *
 * @see https://vitepress.dev/guide/i18n
 */
export default defineConfig({
  lang: 'zh-CN',
  title: 'Weil Huang',
  titleTemplate: ':title · 技术博客',
  description: 'Weil Huang 的技术博客：工程实践、语言与工具笔记。',
  base,
  srcDir: '.',
  lastUpdated: true,
  ignoreDeadLinks: false,
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  sitemap: {
    hostname: 'https://weilhuang.github.io/blog'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Weil Huang',
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '文章',
          items: [
            { text: '全部文章', link: '/posts/' },
            { text: '用 VitePress 搭技术博客', link: '/posts/hello-vitepress' },
            { text: 'Frontmatter 与 Markdown 约定', link: '/posts/markdown-and-frontmatter' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/weilhuang/blog' }
    ],
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    editLink: {
      pattern: 'https://github.com/weilhuang/blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    footer: {
      message: '基于 VitePress 构建 · GitHub Pages 部署',
      copyright: 'Copyright © 2026 Weil Huang'
    }
  }
})
