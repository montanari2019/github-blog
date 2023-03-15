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
  line-height: 1.6rem;
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: 1.5rem;

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.blue};
  }
`;

export const CodePost = styled.div`

  overflow-x: auto;
  background: ${props=>props.theme["base-post"]};
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem; 


`


export const CodeSpan = styled.span`
  display: block;
  white-space: pre;
  margin: 1em 0;
  font-family: "Fira Code";
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
