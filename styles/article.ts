import { css } from "@emotion/react";
import { stepsContainer } from "./steps-container";

export const articleStyle = css`
  article {
    //전체 게시글 너비
    main {
      max-width: 50rem !important;
    }
    // 회색 글자
    em {
      color: gray;
      font-style: normal;
    }

    img {
      border-radius: 5px;
    }

    h1,
    h2,
    h3,
    h4 {
      font-weight: 700 !important;
    }
    h4 {
      opacity: 0.8;
    }

    //제목 간격
    h2 {
      margin-top: 3.5rem !important;
    }
    h4 {
      margin-top: 2.5rem !important;
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

    // 게시글 날짜
    h1 + p:has(em) {
      margin-top: 0px !important;
      margin-bottom: 50px !important;
      & > em {
        font-style: normal;
        color: gray !important;
      }
    }

    // 인라인 코드블럭
    p code,
    li code {
      border: none;
      padding: 3px 6px !important;
      margin-right: 2px;
      @media (prefer-color-scheme: dark) {
        background-color: var(--gray-200) !important;
      }

      font-family: "Pretendard", Pretendard, -apple-system, BlinkMacSystemFont,
        system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
        "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol", sans-serif;
    }

    li {
      line-height: 1.75rem;
    }

    // resume 목록 그리드
    .gridbox {
      display: grid;
      h4 {
        margin-top: 0rem !important;
      }
      grid-template-columns: 240px auto;
      & > div:first-of-type {
        & > p {
          padding-top: 4px;
        }
        & > div {
          align-items: center;
        }
      }
      & > div:last-child {
        padding: 28px 0;
      }

      @media (max-width: 700px) {
        & > div:last-child {
          padding-top: 20px;
        }
        grid-template-columns: 1fr;
      }
    }

    .resume-works {
      grid-template-columns: 200px auto;
    }
    @media (max-width: 700px) {
      .resume-works {
        grid-template-columns: 64px auto;
      }
      img {
        margin-top: 20px;
      }
    }

    p > img {
      margin-top: 3rem;
    }

    // 코드블럭 제목
    [data-rehype-pretty-code-fragment] {
      & > div:first-of-type {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--gray-500);
      }
    }
  }
`;
