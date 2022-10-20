import styled from "styled-components";



export default function BoardToday(){


    return(

        <Board>
            <Card>
                <div>
                    <h1>Ler 1 capítulo de livro</h1>
                    <h2>Sequência atual: 3 dias</h2>
                    <h2>Seu recorde: 5 dias</h2>
                </div>
                <ion-icon name="checkbox"></ion-icon>
            </Card>
            <Card>
                <div>
                    <h1>Ler 1 capítulo de livro</h1>
                    <h2>Sequência atual: 3 dias</h2>
                    <h2>Seu recorde: 5 dias</h2>
                </div>
                <ion-icon name="checkbox"></ion-icon>
            </Card>
            <Card>
                <div>
                    <h1>Ler 1 capítulo de livro</h1>
                    <h2>Sequência atual: 3 dias</h2>
                    <h2>Seu recorde: 5 dias</h2>
                </div>
                <ion-icon name="checkbox"></ion-icon>
            </Card>
            
        </Board>
    );
}

const Board = styled.div`
    
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 110px;

`;

const Card = styled.div`

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
        color: #E7E7E7;
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