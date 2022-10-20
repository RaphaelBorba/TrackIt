import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";



export default function FooterBar() {

    const navigate = useNavigate()

    return (
        <FooterDiv>
            <h1 onClick={()=>navigate('/habitos')}>Hábitos</h1>
            <div onClick={()=>navigate('/hoje')}><CircularProgressbar
                value={50}
                text='Hoje'
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
            /></div>
            <h1 onClick={()=>navigate('/historico')}>Histórico</h1>
        </FooterDiv>
    );
}


const FooterDiv = styled.div`

    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    padding-inline: 30px;
    
    div{
        width: 91px;
        height: 91px;
        border-radius: 50%;
        background-color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 20px;
        cursor: pointer;
        
    }
    h1{
        color: #52B6FF;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        cursor: pointer;
    }
    h2{
        color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        cursor: pointer;
    }
`;