import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Gyujin from "public/icons/gyujin.svg";
import { Comment } from "./components";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – 9yujin",
      };
    }
  },
  logo: (
    <>
      <Gyujin />
      <span style={{ marginLeft: "8px", paddingTop: "2px" }}>Archive</span>
    </>
  ),
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
  darkMode: false,
  main: ({ children }) => {
    const displayHidden = ["/", "/devlog", "/resume", "/writings"];
    const { pathname } = useRouter();

    if (displayHidden.includes(pathname)) {
      return <>{children}</>;
    } else {
      return (
        <>
          {children}
          <Comment />
        </>
      );
    }
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default seperator">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 0,
  },
};

export default config;
