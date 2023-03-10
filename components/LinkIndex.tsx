import styled from "@emotion/styled";
import Link from "next/link";
import Devlog from "../public/icons/code-square.svg";
import Essay from "../public/icons/pencil-square.svg";
import Resume from "../public/icons/person-square.svg";

const LinkIndex = () => {
  return (
    <Wrapper>
      <Link href="/devlog">
        <LinkTitle>
          <IconCircle>
            <Devlog />
          </IconCircle>
          <div>
            <Title>개발 노트 / 개발 일기</Title>
            <Description>
              단순히 사용했던 기술과 코드를 나열하는데 그치지 않고, <br />
              고민하고 느꼈던 과정을 남기고 공유하려고 합니다.
            </Description>
          </div>
        </LinkTitle>
      </Link>
      <Grid>
        <Link href="/essay/nexters_230307">
          <LinkTitle>
            <IconCircle>
              <Essay />
            </IconCircle>
            <div>
              <Title>회고</Title>
              <Description>이런저런 글을 씁니다.</Description>
            </div>
          </LinkTitle>
        </Link>
        <Link href="/resume">
          <LinkTitle>
            <IconCircle>
              <Resume />
            </IconCircle>
            <div>
              <Title>레쥬메</Title>
              <Description>이런 것들을 해왔습니다.</Description>
            </div>
          </LinkTitle>
        </Link>
      </Grid>
    </Wrapper>
  );
};
export { LinkIndex };

const Wrapper = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin-top: 16px;
`;
const LinkTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-radius: 12px;
  background-color: var(--gray-100);
  height: 172px;
  width: 100%;
  padding: 30px;

  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  }
`;

const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--blue-200);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
`;
const Description = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  margin-top: 8px;
  color: var(--gray-400);
`;
