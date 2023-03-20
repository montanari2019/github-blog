import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin-top: 2rem;
  padding: 0 2.5rem;

  @media (min-width: 1025px) {
    width: 864px;
  }
`;

export const ParagraphContent = styled.div`
  line-height: 2rem;
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: 1.5rem;
  white-space: pre-wrap;
  width: 350px;

  @media (min-width: 1025px) {
    overflow: hidden;
    width: 100%;
  }

  pre {
    overflow-x: auto;
    background: ${(props) => props.theme["base-post"]};
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 2rem;
    code {
    }
  }
`;

export const CodePost = styled.div`
  font-family: "Fira Code";
  overflow-x: auto;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const CodeSpan = styled.span`
  display: block;
  white-space: pre;
  margin: 1em 0;
`;
export const VariavelType = styled.span`
  font-family: "Fira Code";
  font-style: normal;
  color: #80abd6;
`;

export const ResultIten = styled.span`
  color: #6ad445;
`;

export const ComentCode = styled.span`
  color: #4f6173;
`;
