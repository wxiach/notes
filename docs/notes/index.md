# 笔记总览

这里按主题整理所有笔记，顶部导航和全站搜索都可以用来快速定位。

## 初级会计实务

- [基础概念](/notes/accounting/01-basics)
- [资产](/notes/accounting/02-assets)
- [负债与所有者权益](/notes/accounting/03-liabilities-equity)
- [收入、费用和利润](/notes/accounting/04-revenue-expense-profit)
- [财务报告](/notes/accounting/05-financial-report)
- [成本核算与政府会计](/notes/accounting/06-cost-government)

## 工具

- [Markdown 语法速查](/notes/tools/markdown)

## 怎么写新笔记

1. 在 `docs/notes/<分类>/` 下新建 `.md` 文件，文件名即链接地址
2. 在 `docs/.vitepress/config.mts` 的 `sidebar` 里加上对应条目
3. 运行 `pnpm dev` 实时预览，`pnpm build` 生成静态站点
