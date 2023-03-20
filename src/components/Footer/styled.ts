import styled from "styled-components";


export const Container = styled.footer`
    border-top: solid 0.5px ${props=>props.theme["base-border"]};
    margin: 3rem 0;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    
    align-items: center;

`

export const LogosFooter = styled.div`
   display: flex;
   flex-direction: row;
   gap: 3rem;
   margin: 1rem;






`;

export const LinkSocial  = styled.a`
    color: ${props=>props.theme["base-text"]};
    padding:0.5rem;
    background: transparent;
    display: flex;
    align-items: center;
    transition: 0.4s;
    border: transparent;
    outline: transparent;

    &:hover{
        background-color: ${props=>props.theme["base-post"]};
        color: ${props=>props.theme.blue};
        outline: solid 1px ${props => props.theme.blue};
        border-radius: 5px;
        transition: 0.4s;

        
    }

`;

export const Desenvolvedor = styled.div`
    text-align: center;

`;
