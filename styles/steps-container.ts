import { css } from "@emotion/react";

export const stepsContainer = css`
  .steps-container {
    margin-left: 1rem;
    padding-left: 1.5rem;
    counter-reset: step;
    border-left: 1px solid;
    border-color: rgb(229 231 235/1);
    margin-bottom: 3rem;
  }
  .steps-container h3 {
    counter-increment: step;
  }
  .steps-container h3:before {
    content: counter(step);
    display: inline-block;
    position: absolute;
    margin-top: 3px;
    margin-left: -41px;
    width: 33px;
    height: 33px;
    text-align: center;
    text-indent: -1px;
    color: #999;
    border-radius: 100%;
    border: 4px solid #fff;
    background: #f3f3f3;
    line-height: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;
