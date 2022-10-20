import styled from "styled-components";
import { useAuth } from "../provider/auth";


export default function Header({image}){

    const {user} = useAuth()

    return(
        <HeaderDiv>
            <h1>TrackIt</h1>
            <img src={user.image} alt={user.image} />
        </HeaderDiv>
    );
}


const HeaderDiv = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 20px;
    z-index: 1;

    h1{
        font-family: 'Playball', cursive;
        color: white;
        font-size: 40px;
        font-weight: 400;
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;