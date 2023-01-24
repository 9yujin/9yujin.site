import React from "react";

export const Comment: React.FC = () => (
  <>
    <hr />
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.setAttribute("repo", "9yujin/nextra-docs-for-blog");
        scriptElem.setAttribute("issue-term", "pathname");
        scriptElem.setAttribute("theme", "github-light");
        scriptElem.setAttribute("label", "comment : ");
        scriptElem.crossOrigin = "anonymous";
        elem.appendChild(scriptElem);
      }}
    />
  </>
);
