import styled, { ServerStyleSheet } from "styled-components";


export const MainToday = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    min-height: 100vh;
`;

export const SubString = styled.div`
    margin: 100px 60px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;

    h1{
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
    h2{
        font-weight: 400;
        font-size: 17.976px;
        color: #BABABA;
        margin-top: 5px;

    }
    
`;