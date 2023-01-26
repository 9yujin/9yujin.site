import { css } from "@emotion/react";
import { articleStyle } from "./article";

export const globalStyle = css`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-style: normal;
  }

  :root {
    --main-blue: #006be6;
    --blue-100: #f0f7ff;
    --gray-100: #f8f8f8;
    --gray-200: #e9e9e9;
    --gray-500: #353535;
  }

  body,
  h1 {
    font-family: "Pretendard", Pretendard, -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif !important;
  }

  a {
    text-decoration: none !important;
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
