import { css } from "@emotion/react";
import { articleStyle } from "./article";

export const globalStyle = css`
  :root {
    --main-blue: #006be6;
    --blue-100: #f0f7ff;
    --gray-100: #f8f8f8;
    --gray-200: #e9e9e9;
  }

  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css");

  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  a {
    text-decoration: none !important;
  }

  h4 {
    color: #353535;
  }

  blockquote {
    padding: 20px !important;
    border: none !important;
    font-style: normal !important;
    background-color: var(--gray-100);
    border-radius: 8px;
  }

  .nx-mb-2:has(.seperator) {
    margin-bottom: 0px;
  }

  //article 내에서
  ${articleStyle}
`;
