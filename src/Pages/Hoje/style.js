import styled from "styled-components";


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

export const Board = styled.div`
    
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 110px;

`;

export const Card = styled.div`

    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 15px;
    
    ion-icon{
        font-size: 70px;
        color: ${props => (props.done)?'#8FC549' :'#E7E7E7'};
        cursor: pointer;
    }

    div{

    }
    h1{
        font-weight: 400;
        font-size: 19.976px;
        color: #666666;
        margin-bottom: 9px;

    }
    h2{
        font-weight: 400;
        font-size: 12.976px;
        color: #666666;
        
    }
`;