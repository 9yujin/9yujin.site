import styled from "@emotion/styled";
import React from "react";
import { Spacing } from "./Spacing";

export const Comment: React.FC = () => (
  <>
    <Spacing size={32} />
    <hr />
    <StyledSection
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.setAttribute("repo", "9yujin/9yujin.site");
        scriptElem.setAttribute("issue-term", "pathname");
        scriptElem.setAttribute("theme", "github-light");
        scriptElem.setAttribute("label", "comment : ");
        scriptElem.crossOrigin = "anonymous";
        elem.appendChild(scriptElem);
      }}
    />
  </>
);

const StyledSection = styled.section`
  & > div {
    margin-left: auto !important;
    margin-right: 0;
    max-width: 736px;
  }
`;
