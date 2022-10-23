import axios from "axios";
import { url } from "../../Assets/images/ImgUrl";
import { useAuth } from "../../provider/auth";
import Cards from "./Card";
import { Board, Card } from "./style";



export default function BoardToday({ onCheck, setOnCheck, todayHabits }) {

    const { user } = useAuth()

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    function checkUncheckHabit(id, done) {

        if (done) {
            axios.post(`${url}habits/${id}/uncheck`, {}, config)
                .then(() => {
                    setOnCheck(!onCheck)
                })
        } else {
            axios.post(`${url}habits/${id}/check`, {}, config)
                .then(() => {
                    setOnCheck(!onCheck)
                })
        }

    }

    console.log(todayHabits)

    return (

        <Board>

            {todayHabits.map((a) => <Cards
                                        key={a.id}
                                        id={a.id}
                                        done={a.done}
                                        currentSequence={a.currentSequence}
                                        highestSequence={a.highestSequence}
                                        name={a.name}
                                        checkUncheckHabit={checkUncheckHabit} />)}

        </Board>
    );
}

