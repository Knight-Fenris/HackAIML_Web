import styled from "styled-components";

export const MainLayout = styled.div`
    padding:2rem;
    height:100%;
    display: flex;
    gap:2rem;
    @media(max-width:512px){
        font-size:30%;
        padding:2rem;
        /* height:100%;
         */
        width: 100%;
        display: flex;
        gap:2rem;
        flex-direction: column;

    }
    @media(min-width:512px) and (max-width:1024px){
        font-size:50%;
        padding:2rem;
        /* height:100%;
         */
        width: 100%;
        display: flex;
        gap:2rem;
        flex-direction: column;

    }

`

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;

    @media(min-width:512px) and (max-width:1024px){
        margin-top:5%;
        border: 2px solid green;
    }

    @media(max-width:512px){
        margin-top:5%;
        border: 2px solid green;
    }
`