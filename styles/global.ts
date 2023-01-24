import { css } from "@emotion/react";

export const globalStyle = css`
  :root {
    --main-blue: #006be6;
    --blue-100: #f0f7ff;
    --gray-100: #f8f8f8;
  }

  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css");

  * {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  a {
    text-decoration: none !important;
  }

  code {
    border: none;
    padding: 3px 8px !important;
    font-weight: 500 !important;
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

  //article 내에서
  article {
    //전체 게시글 너비
    main {
      /* max-width: 50rem !important; */
    }

    em {
      color: gray;
      font-style: normal;
    }

    img {
      border-radius: 5px;
    }

    // 게시글 내 링크 뱃지
    p > a,
    li > a,
    .badge {
      color: var(--main-blue);
      font-weight: 500;
      background-color: var(--blue-100);
      border: none;
      padding: 3px 8px !important;
      margin-right: 2px;
    }

    // 티스토리 구분선
    hr {
      border: none;
      font-size: 0;
      line-height: 0;
      height: 20px;
      margin: 20px auto;
      background: url(https://t1.daumcdn.net/keditor/dist/0.4.0/image/divider-line.svg);
      background-size: 200px 200px;
      cursor: pointer !important;

      background-position: 0 0;
      width: 64px;
      background-repeat: no-repeat;
    }

    // 캡션
    img + em,
    img + p > em {
      display: block;
      text-align: center;
      font-size: 0.8rem;
      font-style: normal;
      color: gray !important;
    }
    img + p:has(em) {
      margin-top: 0px !important;
    }

    // 게시글 제목 색깔
    h1 {
      /* color: var(--main-blue); */
    }

    // 게시글 날짜
    h1 + p:has(em) {
      margin-top: 0px !important;
      margin-bottom: 50px !important;
      & > em {
        font-style: normal;
        color: gray !important;
      }
    }
  }
`;
