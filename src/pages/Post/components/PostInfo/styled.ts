import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -7.625rem;
  gap: 1rem;
  width: 100%;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 35px #0a2a4a;
  border-radius: 10px;
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 2px 45px #0b3763;
    transition: 0.4s;
  }

  @media (min-width: 1025px) {
    gap: 2rem;
    width: 864px;
    /* flex-direction: row; */
  }
`;

export const HeaderPostInfo = styled.header`
    display: flex;
    justify-content: space-between;

`

export const HeaderItem = styled.div`
    color: ${props=> props.theme.blue};
    text-transform: uppercase;
    font-size: 0.85rem;

    display: flex;
    align-items:center;
    gap: 0.5rem;

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }

`

export const CardInfo = styled.div`
    margin-top: 1.20rem;
    /* display: flex; */

    h1{
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }


`

export const IconsInfo =styled.div`
    display: flex;
    gap:2rem;
    margin-top: 0.5rem;
`

export const IconsCard= styled.div`
    display: flex;
    gap:0.5rem;

`
