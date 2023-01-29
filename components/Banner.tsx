/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Banner = ({ url }: { url: string }) => {
  return (
    <Container>
      <div>
        <BannerImage />
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(
      0deg,
      rgba(38, 118, 192, 0.1),
      rgba(38, 118, 192, 0.1)
    ),
    linear-gradient(267.03deg, #cde7ff 4.45%, #c6e3ff 94.62%);

  & > div {
    max-width: 90rem;
    padding-left: max(env(safe-area-inset-left), 1.5rem);
    padding-right: max(env(safe-area-inset-right), 1.5rem);
    margin: 0 auto;

    height: 200px;
    @media (min-width: 768px) {
      height: 280px;
    }
    width: 100%;
  }
`;

const BannerImage = styled.div`
  margin-left: auto;
  width: 100%;
  height: 100%;
  max-width: 1080px;
  background-image: url("/assets/devlg.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    margin-right: -120px;
  }
`;
