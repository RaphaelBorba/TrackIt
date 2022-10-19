import styled from "styled-components";


export default function Header(){

    return(
        <HeaderDiv>
            <h1>TrackIt</h1>
        </HeaderDiv>
    );
}


const HeaderDiv = styled.div`

    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-self: center;

    h1{
        font-family: 'Playball', cursive;
        color: white;
    }
`;