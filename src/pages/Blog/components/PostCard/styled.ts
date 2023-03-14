import styled from "styled-components";

export const ContainerCard = styled.div`
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  width: 100%;
  height: 260px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 2px 15px #97c8fd;
    transition: 0.4s;
    cursor: pointer;
  }

  @media (min-width: 1025px) {
    width: 420px;
  }
`;

export const ParagraphContent = styled.p`
  font-weight: 400;
  text-align: justify;

  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  height: 112px;
  color: ${(props) => props.theme["base-text"]};
`;

export const TitileDisplay = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;

  h2 {
    font-size: 1.15rem;
    text-align: left;
  }

  p {
    font-size: 0.85rem;
    margin-top: 4px;
    width: 20%;
    color: ${(props) => props.theme["base-span"]};
  }
`;
