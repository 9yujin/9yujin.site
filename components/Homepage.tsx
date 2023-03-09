import Home from "public/icons/homepage.svg";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Homepage = ({
  src,
  size = "big",
}: {
  src: string;
  size?: "big" | "small";
}) => {
  return (
    <StyledButton
      size={size}
      onClick={() => (window.open("about:blank").location.href = `${src}`)}
    >
      <Home width={24} />
    </StyledButton>
  );
};

const StyledButton = styled.button<{ size: "big" | "small" }>`
  &:hover {
    & > svg {
      fill: #006be6;

      ${({ size }) =>
        size === "big"
          ? css`
              height: 24;
              width: 24;
            `
          : css`
              height: 18;
              width: 18;
            `}
    }
  }
`;
