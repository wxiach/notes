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
      { text: '初级会计实务', link: '/notes/初级会计实务/01-概述' },
    ],
    sidebar: {
      '/notes/': [
        {
          text: '初级会计实务',
          collapsed: false,
          items: [
            { text: '第一章 概述', link: '/notes/初级会计实务/01-概述' },
            { text: '第二章 会计基础', link: '/notes/初级会计实务/02-会计基础' },
            { text: '第三章 流动资产', link: '/notes/初级会计实务/03-流动资产' },
            { text: '第四章 非流动资产', link: '/notes/初级会计实务/04-非流动资产' },
            { text: '第五章 负债', link: '/notes/初级会计实务/05-负债' },
            { text: '第六章 所有者权益', link: '/notes/初级会计实务/06-所有者权益' },
            { text: '第七章 收入、费用和利润', link: '/notes/初级会计实务/07-收入、费用和利润' },
            { text: '第八章 财务报告', link: '/notes/初级会计实务/08-财务报告' },
            { text: '第九章 产品成本核算', link: '/notes/初级会计实务/09-产品成本核算' },
            { text: '第十章 政府会计基础', link: '/notes/初级会计实务/10-政府会计基础' },
          ],
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
