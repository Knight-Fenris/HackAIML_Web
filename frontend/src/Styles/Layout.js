import styled from "styled-components";

export const MainLayout = styled.div`
    padding:2rem;
    height:100%;
    display: flex;
    gap:2rem;
    @media(max-width:512px){
        font-size:30%;
        display: block;

    }
    @media(min-width:512px) and (max-width:1024px){
        font-size:50%;
        display: block;
    }

`

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
`