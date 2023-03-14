import styled from "styled-components"

export const Container = styled.main`
    
    width: 100%;
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media (min-width: 1025px) {
        
        margin-top: 4.5rem;
        width: 864px;
  
    }
`

export const HeaderSeach = styled.div`
    margin-bottom: 0.85rem;
    display: flex;
    justify-content: space-between;

    strong{
        font-size: 1.15rem;
        color: ${props => props.theme["base-title"]};

    }

    p{
        font-size: 0.87rem;
        color: ${props =>props.theme["base-span"]};
    }
`

export const InputSearch = styled.input`
    background: ${props => props.theme["base-input"]};
    border: solid 1px ${props=>props.theme["base-border"]};
    height: 3.12rem;
    border-radius: 6px;
    color: ${props => props.theme["base-text"]};
    padding: 12px 16px;
    margin-bottom: 3rem;

    &:focus{
        outline: solid 1px ${props => props.theme.blue};

    }

`

export const CardPost = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* gap: 0 2rem ; */
    /* margin-bottom: 2rem; */
    flex-wrap: wrap;


`