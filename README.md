# Weil Huang 的技术博客

基于 [VitePress](https://vitepress.dev/) 的个人技术博客，发布地址：

**https://weilhuang.github.io/blog/**

## 本地开发

需要 [Node.js](https://nodejs.org/) 20 或更高版本。

```sh
npm install
npm run dev
```

浏览器打开终端里提示的本地地址（默认 `http://localhost:5173/blog/`）。

| 脚本 | 说明 |
| --- | --- |
| `npm run dev` | 开发服务器，支持热更新 |
| `npm run build` | 产出静态站点到 `docs/.vitepress/dist` |
| `npm run preview` | 预览生产构建 |

## 内容结构

```
docs/
  index.md              首页
  about.md              关于
  posts/                博文（带 date 的 md 会出现在列表）
  public/               静态资源
  .vitepress/config.ts  站点配置（base 为 /blog/）
```

写新文章：在 `docs/posts/` 新增 Markdown，填上 `title`、`date`，可选 `description` 与 `tags`。列表页通过 `createContentLoader` 自动汇总。若希望文章出现在侧栏，再把链接加到 `docs/.vitepress/config.ts` 的 `sidebar`。

## GitHub Pages

仓库已按 VitePress [官方 GitHub Pages 指南](https://vitepress.dev/guide/deploy#github-pages) 配置：

1. `.github/workflows/deploy.yml` 在推送到 `main`（或手动 `workflow_dispatch`）时构建并部署。
2. 构建命令是 `npm run build`，产物目录是 `docs/.vitepress/dist`。
3. 站点 `base` 为 `/blog/`，对应 `https://weilhuang.github.io/blog/`。

请在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**（不要用 branch / `gh-pages` 目录部署）。合并到 `main` 后，Actions 里的 *Deploy VitePress site to Pages* 成功即表示上线。

Pull Request 会跑 `.github/workflows/ci.yml`，只构建、不发布。
