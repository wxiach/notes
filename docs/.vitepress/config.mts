import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Notes',
  description: '我的个人笔记',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true },
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '全部笔记', link: '/notes/' },
    ],
    sidebar: {
      '/notes/': [
        {
          text: '初级会计实务',
          collapsed: false,
          items: [
            { text: '总览', link: '/notes/accounting/' },
            { text: '基础概念', link: '/notes/accounting/01-basics' },
            { text: '资产', link: '/notes/accounting/02-assets' },
            { text: '负债与所有者权益', link: '/notes/accounting/03-liabilities-equity' },
            { text: '收入、费用和利润', link: '/notes/accounting/04-revenue-expense-profit' },
            { text: '财务报告', link: '/notes/accounting/05-financial-report' },
            { text: '成本核算与政府会计', link: '/notes/accounting/06-cost-government' },
          ],
        },
        {
          text: '工具',
          collapsed: false,
          items: [{ text: 'Markdown 语法速查', link: '/notes/tools/markdown' }],
        },
      ],
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
  },
})
