---
title: 用 VitePress 搭技术博客
date: 2026-10-07
description: 这个仓库如何用 VitePress 写文章、本地预览，以及 GitHub Pages 的部署约定。
tags:
  - VitePress
  - GitHub Pages
---

# 用 VitePress 搭技术博客

这是一篇示例文章，用来说明本仓库的目录约定。站点源文件在 `docs/`，VitePress 配置在 `docs/.vitepress/config.ts`。

## 本地开发

```sh
npm install
npm run dev
```

默认会启动开发服务器。改 Markdown 或主题文件后，页面会热更新。

## 内容放哪里

| 路径 | 用途 |
| --- | --- |
| `docs/index.md` | 首页（Hero 布局） |
| `docs/about.md` | 关于页 |
| `docs/posts/*.md` | 博文；需要 `date` 才会出现在列表里 |
| `docs/public/` | 静态资源，构建后位于站点根路径 |

新增文章时复制本文件，改 frontmatter 里的 `title`、`date`、`description` 和 `tags` 即可。

## 部署

推送到 `main` 后，GitHub Actions 会执行 `npm run build`，并把 `docs/.vitepress/dist` 发布到 GitHub Pages。站点 `base` 是 `/blog/`，对应地址：

<https://weilhuang.github.io/blog/>
