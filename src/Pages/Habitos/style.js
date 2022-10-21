import styled from "styled-components";


export const HabitosMain = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    min-height: 100vh;
`;

export const ButDays = styled.div`

    width: 30px;
    height: 30px;
    background: ${props => (!props.arrayDaysN.includes(props.day))?'#ffffff':'#CFCFCF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => (!props.arrayDaysN.includes(props.day))?'#DBDBDB':'white'};
    margin-inline: 2px;
    cursor: pointer;
`;

export const Form = styled.form`

    display: ${props => (props.showForm)?'initial':'none'};
    margin: 20px auto 0 auto;
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    position: relative;

    nav{
        display: flex;
        margin-left: 20px;
    }
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;        
        font-weight: 400;
        font-size: 20px;
        margin: 15px 15px ;
    }
    button{
        width: 84px;
        height: 35px;
        border: none;
        color: white;
        font-size: 16px;
        background: #52B6FF;
        border-radius: 4.63636px;
        position: absolute;
        right: 15px;
        bottom: 15px;
        cursor: pointer;
    }
    span{
        position: absolute;
        right: 120px;
        bottom: 25px;
        color: #52B6FF;
        font-size: 16px;
        cursor: pointer;


    }


`;

export const ButtonAdd = styled.button`

    position: absolute;
    width: 45px;
    left: 280px;
    top: -10px;
    border: none;
    background: #52B6FF;
    border-radius: 5px;
    font-size: 30px;
    color: white;
    font-weight: 350;
    cursor: pointer;
`;