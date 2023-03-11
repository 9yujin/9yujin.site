import styled from "@emotion/styled";

const Stack = () => {
  return (
    <Wrapper>
      <h3>Code with</h3>

      <Column>
        <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
        <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white" />
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
      </Column>
      <Column>
        <img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white" />
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
      </Column>
      <br />
      <br />

      <h3>Design with</h3>

      <Column>
        <img src="https://img.shields.io/badge/Ps-31A8FF?style=flat-square&logo=adobe-photoshop&logoColor=white" />
        <img src="https://img.shields.io/badge/Ai-FF9A00?style=flat-square&logo=adobe-illustrator&logoColor=white" />
        <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />
      </Column>
    </Wrapper>
  );
};

export { Stack };

const Wrapper = styled.div`
  text-align: center;
  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 12px;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > img:not(:last-of-type) {
    margin-right: 4px;
  }
  margin-top: 6px;
`;
