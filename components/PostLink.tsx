import styled from "@emotion/styled";
import Link from "next/link";

interface PostLinkProps {
  href: string;
  title: string;
  description: string;
  date: string;
}

const PostLink = ({ href, title, description, date }: PostLinkProps) => {
  return (
    <Link href={href}>
      <hr />
      <Wrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </Wrapper>
    </Link>
  );
};

export { PostLink };

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: all 0.2s ease;
  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`;
const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 1; // 원하는 라인수
  -webkit-box-orient: vertical;
`;
const Date = styled.div`
  font-size: 0.8rem;
  color: var(--gray-400);
`;
const Description = styled.div`
  font-size: 01rem;
  margin-top: 12px;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;
