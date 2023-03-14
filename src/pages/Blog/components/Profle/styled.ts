import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: -5.625rem;
  gap: 1rem;
  width: 100%;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 35px #0a2a4a;
  border-radius: 10px;
  transition: 0.4s;    
  
  &:hover{
    box-shadow: 0px 2px 45px #0B3763;
    transition: 0.4s    
  }

  @media (min-width: 1025px) {
    gap: 2rem;
    width: 864px;
    flex-direction: row;
  }
`;

export const ImgProfile = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const GitButton = styled.a`
  color: ${(props) => props.theme.blue};
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  img {
    color: ${(props) => props.theme.blue};
    margin-left: 0.5rem;
    width: 12px;
    height: 12px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const BioParagraph = styled.p`
  margin-top: 0.5rem;
`;

export const CardTextProfile = styled.div`
  width: 100%;
  text-align: justify;

  @media (min-width: 1025px) {
    width: 618px;
  }
`;

export const CardInfo = styled.div`
  margin-top: 1.5rem;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  gap: 0.5rem;
`;
