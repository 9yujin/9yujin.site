import { css } from "@emotion/react";

export const fullscreen = css`
  .fullscreen {
    min-height: calc(100vh - 4rem);

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
    }
  }

  .intro-wrapper {
    max-width: 49rem;
    padding-left: max(env(safe-area-inset-left), 1.5rem);
    padding-right: max(env(safe-area-inset-right), 1.5rem);
    margin: 0 auto;

    h1 {
      font-size: 2.25rem;
      padding-top: 2rem;
      line-height: 130%;
      text-align: center;
      margin-top: 48px;
    }
    .title-description {
      font-size: 1.25rem;
      text-align: center;
      color: var(--gray-400);
      margin-top: 16px;
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 3rem;
        padding-top: 2rem;
      }
    }

    .badge {
      color: var(--main-blue);
      background-color: var(--blue-100);
      border: 1px solid var(--blue-100) !important;

      border: none;
      padding: 3px 8px !important;
      margin-right: 2px;
      cursor: pointer;

      &:hover {
        box-shadow: 0 5px 30px -10px #c6e3ff33;
        border: 1px solid var(--blue-200) !important;
      }
    }

    html[class~="dark"] .badge {
      color: var(--main-blue-dark);
      background-color: var(--blue-100-dark);
      border: 1px solid var(--blue-100-dark) !important;
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 600 !important;
      padding-top: 1.5rem;
    }
    p {
      line-height: 1.75rem;
      margin-top: 0.75rem;
    }
  }
`;
