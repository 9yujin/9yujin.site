import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Gyujin from "public/icons/gyujin.svg";
import dynamic from "next/dynamic";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – 9YUJIN Archive",
      };
    } else {
      return {
        titleTemplate: "9YUJIN Archive",
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`https://9yujin.site${asPath}`} />
        <meta
          property="og:title"
          content={frontMatter.title || "GYUJIN Archive"}
        />
        <meta
          property="og:description"
          content={frontMatter.description || "@9yu.oo 기술 블로그"}
        />
        <meta
          property="description"
          content={frontMatter.description || "@9yu.oo 기술 블로그"}
        />

        <link rel="icon" href="/favi.ico" />
      </>
    );
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
  main: ({ children }) => {
    const displayHidden = ["/", "/devlog", "/resume", "/writings"];
    const { pathname } = useRouter();
    const Comment = dynamic(() => import("./components/Comment"), {
      ssr: false,
    });

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
  darkMode: false,
};

export default config;
