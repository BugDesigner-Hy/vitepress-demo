import { defineConfig } from "vitepress";

export default defineConfig({
  title: "威力软件知识库",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated:true,
  themeConfig: {
    logo: "/weili-logo.png",
    siteTitle: false,
    nav: [
      { text: "指南", link: "/guide/" },
      {
        text: "系统",
        items: [
          { text: "机加MES", link: "/system/mes-1/" },
          { text: "装配MES", link: "/system/mes-2/" },
          { text: "中台SPM", link: "/system/spm/" },
          { text: "质检QMS", link: "/system/qms/" },
        ],
      },
      {
        text: "关于",
        items: [
          { text: "软件开发部", link: "/about/department" },
          { text: "威力传动", link: "/about/company" },
          { text: "机加车间", link: "/about/jijia" },
          { text: "装配后处理车间", link: "/about/zhuangpei" },
        ],
      },
    ],
    sidebar: {

    },
  },
});
