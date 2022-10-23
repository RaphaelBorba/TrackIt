import { Card } from "./style";


export default function Cards({ done, currentSequence, highestSequence, name, checkUncheckHabit, id }) {

    return (

        <Card done={done}>
            <div>
                <h1>{name}</h1>
                <h2 style={(done)?{color:'#8FC549'}:{color:'#BABABA'}}>Sequência atual: {currentSequence} dias</h2>
                <h2 style={(currentSequence>highestSequence)?{color:'#8FC549'}:{color:'#BABABA'}}>Seu recorde: {highestSequence} dias</h2>
            </div>
            <ion-icon onClick={() => checkUncheckHabit(id, done)} name="checkbox"></ion-icon>
        </Card>
    );
}