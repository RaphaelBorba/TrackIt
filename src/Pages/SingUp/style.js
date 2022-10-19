import styled from "styled-components";


export const MainSingUp = styled.main`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    a{
        margin-top: 10px;
    }
`;


export const Form = styled.form`

    display: flex;
    flex-direction: column;
    margin-top: 35px;
    
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;        
        font-weight: 400;
        font-size: 20px;
        margin-block: 5px;
        
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-weight: 400;
        font-size: 20px;
        color: white;
        margin-block: 5px;

    }
`;