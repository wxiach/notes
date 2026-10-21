# Notes

个人笔记站，基于 [VitePress](https://vitepress.dev)。

## 本地开发

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # 输出到 docs/.vitepress/dist
pnpm preview    # 预览构建结果
```

## 部署（Cloudflare Pages）

线上地址：<https://notes.wxiach.cn>（Cloudflare Pages 项目 `notes`）

Cloudflare Pages 已连接本仓库 `main` 分支，push 后自动构建部署。构建配置：

| 配置项 | 值 |
| --- | --- |
| Framework preset | VitePress |
| Build command | `pnpm build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | `/` |
| Node.js 版本 | 22（读取 `.nvmrc`） |
| pnpm 版本 | 10.23.0（`packageManager` 字段） |

自定义域名 `notes.wxiach.cn` 通过 DNSPod 的 CNAME 记录指向 `notes.pages.dev`。
