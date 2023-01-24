import { css } from "@emotion/react";

export const globalStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css");
  p {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  a {
    text-decoration: none !important;
  }

  article p > a,
  article li > a,
  .badge {
    color: var(--main-blue);
    font-weight: 500;
    background-color: #f0f7ff;
    border: none;
    padding: 3px 8px !important;
    margin-right: 2px;
  }

  code {
    border: none;
    padding: 3px 8px !important;
    font-weight: 500 !important;
  }

  h4 {
    color: #353535;
  }

  hr {
    margin-bottom: 0px !important;
  }

  :root {
    --main-blue: #006be6;
  }
`;
