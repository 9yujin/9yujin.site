import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – 9yujin",
      };
    }
  },
  logo: <span>9yujin</span>,
  project: {
    link: "https://github.com/9yujin",
  },
  search: {
    placeholder: "' / ' 눌러서 검색",
  },
  docsRepositoryBase:
    "https://github.com/9yujin/nextra-docs-for-blog/blob/main",
  editLink: {
    text: "Github에서 편집하기",
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          한규진
        </a>
        .
      </span>
    ),
  },
  gitTimestamp: null,
};

export default config;
