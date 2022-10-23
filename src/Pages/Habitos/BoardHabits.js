import axios from "axios";
import styled from "styled-components";
import { url } from "../../Assets/images/ImgUrl";
import { useAuth } from "../../provider/auth";
import { ButDays } from "./style";




export default function BoardHabits({ del, setDel, arrayHabits, setArrayHabits }) {

    const { user } = useAuth()
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }


    function deleteHabit(id) {
        let tOrF = window.confirm('Deseja deletar este hábito?')
        if (tOrF) {
            axios.delete(`${url}habits/${id}`, config)
            let arr = arrayHabits.filter((a)=>a.id!==id)
            setArrayHabits(arr)
        }else{
            return
        }

    }

    return (
        <Board>

            {arrayHabits.map((a) => {
                return (<HabitCard key={a.id}>
                    <h1>{a.name}</h1>
                    <ion-icon onClick={() => deleteHabit(a.id)} name="trash-outline"></ion-icon>
                    <div>
                        <ButDays arrayDaysN={a.days} day={0}>D</ButDays>
                        <ButDays arrayDaysN={a.days} day={1}>S</ButDays>
                        <ButDays arrayDaysN={a.days} day={2}>T</ButDays>
                        <ButDays arrayDaysN={a.days} day={3}>Q</ButDays>
                        <ButDays arrayDaysN={a.days} day={4}>Q</ButDays>
                        <ButDays arrayDaysN={a.days} day={5}>S</ButDays>
                        <ButDays arrayDaysN={a.days} day={6}>S</ButDays>
                    </div>
                </HabitCard>);
            })}

        </Board>

    );
}


const Board = styled.div`

    margin-top: -80px;
    margin-bottom: 100px;
`;

const HabitCard = styled.div`

    width: 340px;
    min-height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-block: 10px;
    padding: 15px;
    position: relative;
    

    h1{
        font-weight: 400;
        font-size: 19.976px;
        color: #666666;
        margin-bottom: 10px;
        
        
    }
    ion-icon{
        position: absolute;
        top: 15px;
        right: 15px;
        color: #666666;
        cursor: pointer;
    }
    div{
        display: flex;
    }
`;