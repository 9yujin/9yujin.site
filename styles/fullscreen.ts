import { css } from "@emotion/react";

export const fullscreen = css`
  .fullscreen {
    min-height: calc(100vh - 4rem);
  }

  .intro-wrapper {
    max-width: 90rem;
    padding-left: max(env(safe-area-inset-left), 1.5rem);
    padding-right: max(env(safe-area-inset-right), 1.5rem);
    margin: 0 auto;

    h1 {
      font-size: 2.75rem;
      padding-top: 2rem;
      line-height: 130%;
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 3rem;
        padding-top: 2rem;
        margin-top: -180px;
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
        box-shadow: 0 5px 30px -10px #c6e3ff;
        border: 1px solid #c6e3ff !important;
      }
    }

    h4 {
      font-size: 1.5rem;
      font-weight: 600 !important;
      padding-top: 2rem;
    }
    p {
      line-height: 1.75rem;
      margin-top: 1.25rem;
    }
  }
`;
