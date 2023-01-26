import styled from "@emotion/styled";
import React, { useState } from "react";
import { useMount } from "react-use";

export const Comment: React.FC = () => {
  const [section, setSection] = useState<any>();

  useMount(() =>
    setSection(
      <StyledSection
        id="comment"
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
    )
  );
  return section;
};

const StyledSection = styled.section`
  border-top: 1px solid #e5e7eb;
  padding-top: 32px;
  & > div {
    margin-left: auto !important;
    margin-right: 0;
    max-width: 736px;
  }
`;
