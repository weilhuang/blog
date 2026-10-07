---
title: Frontmatter 与 Markdown 约定
date: 2026-10-06
description: 写新文章时用到的 YAML 字段、代码块和 VitePress Markdown 扩展。
tags:
  - Markdown
  - VitePress
---

# Frontmatter 与 Markdown 约定

每篇文章顶部使用 YAML frontmatter。列表页只会收录带有 `date` 的文件，因此 `docs/posts/index.md` 本身不会出现在时间线里。

## 推荐字段

```yaml
---
title: 文章标题
date: 2026-10-06
description: 一两句摘要，用于列表和搜索结果。
tags:
  - TypeScript
  - 工具链
---
```

- `title`：页面标题，也会用作浏览器标签。
- `date`：列表排序依据，建议用 `YYYY-MM-DD`。
- `description`：可选，但列表卡片会显示它。
- `tags`：可选字符串数组。

## Markdown 示例

行内代码：`npm run build`。

代码块支持行号（在 `config.ts` 里开启了 `markdown.lineNumbers`）：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/',
  lang: 'zh-CN'
})
```

提示容器：

::: tip
VitePress 默认主题自带 `tip` / `warning` / `danger` / `info` / `details`。
:::

::: warning
GitHub Pages 项目站需要设置 `base: '/blog/'`，否则资源路径会 404。
:::

更多语法见 [VitePress Markdown 指南](https://vitepress.dev/guide/markdown)。
