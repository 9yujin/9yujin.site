import styled from "@emotion/styled";
import React, { createRef, useEffect } from "react";

const Comment: React.FC = () => {
  const elem = createRef<HTMLDivElement>();

  useEffect(() => {
    if (elem.current === null) return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://utteranc.es/client.js";
    scriptElem.async = true;
    scriptElem.setAttribute("repo", "9yujin/9yujin.site");
    scriptElem.setAttribute("issue-term", "pathname");
    scriptElem.setAttribute("theme", "github-light");
    scriptElem.setAttribute("label", "comment : ");
    scriptElem.crossOrigin = "anonymous";
    elem.current.appendChild(scriptElem);
  }, []);

  return <Utterances ref={elem} />;
};

export default Comment;

const Utterances = styled.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 32px;
  & > div {
    margin-left: auto !important;
    margin-right: 0;
    max-width: 736px;
  }
`;
