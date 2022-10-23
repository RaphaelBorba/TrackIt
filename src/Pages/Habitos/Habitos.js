import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../Assets/images/ImgUrl";
import FooterBar from "../../Components/Footer";
import Header from "../../Components/Header";
import { useAuth } from "../../provider/auth";
import { SubStringH } from "../Historico/style";
import BoardHabits from "./BoardHabits";
import { ButDays, ButtonAdd, Form, HabitosMain } from "./style";



export default function Habitos() {

    const { user } = useAuth()
    const [nameHabit, setNameHabit] = useState('')
    const [arrayDaysN, setArrayDaysN] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [arrayHabits, setArrayHabits] = useState([])
    const [isDisable, setIsDisable] = useState(false)
    const [del, setDel] = useState(0)

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    useEffect(() => {

        axios.get(`${url}habits`, config)
            .then((e) => {
                setArrayHabits(e.data)
            })
            .catch((e) => {
                alert(e.response.data.message)
            })

        // eslint-disable-next-line
    }, [isDisable, del])


    function addDayHabit(dayN) {
        if (arrayDaysN.includes(dayN)) {
            let arr = arrayDaysN.filter((a) => a !== dayN)
            setArrayDaysN(arr)
        } else {
            let arr = [...arrayDaysN, dayN]
            setArrayDaysN(arr)
        }
    }

    function postHabit(e) {

        e.preventDefault()
        setIsDisable(true)
        if (arrayDaysN.length === 0) {
            alert('Selecione um dia')
            setIsDisable(false)
        } else {

            let body = { days: arrayDaysN, name: nameHabit }

            axios.post(`${url}habits`, body, config)
                .then((e) => {
                    cancelForm()
                })
                .catch((e) => alert(e.response.data.message));

        }
    }

    function cancelForm() {
        setShowForm(false)
        setArrayDaysN([])
        setNameHabit('')
        setIsDisable(false)

    }
    return (

        <HabitosMain>

            <Header />

            <SubStringH>

                <h1>Meus hábitos</h1>
                <ButtonAdd onClick={() => setShowForm(true)}>+</ButtonAdd>
                <Form showForm={showForm} onSubmit={postHabit} >
                    <fieldset disabled={isDisable}>
                        <input
                            type='text'
                            id="name"
                            onChange={(e) => setNameHabit(e.target.value)}
                            value={nameHabit}
                            name="name"
                            placeholder="nome do hábito"
                            required
                        />
                        <nav>
                            <ButDays day={0} arrayDaysN={arrayDaysN} onClick={() => addDayHabit(0)}>D</ButDays>
                            <ButDays day={1} arrayDaysN={arrayDaysN} onClick={() => addDayHabit(1)}>S</ButDays>
                            <ButDays day={2} arrayDaysN={arrayDaysN} onClick={() => addDayHabit(2)}>T</ButDays>
                            <ButDays day={3} arrayDaysN={arrayDaysN} onClick={() => addDayHabit(3)}>Q</ButDays>
                            <ButDays day={4} arrayDaysN={arrayDaysN} onClick={() => addDayHabit(4)}>Q</ButDays>
                            <ButDays day={5} arrayDaysN={arrayDaysN} onClick={() => addDayHabit(5)}>S</ButDays>
                            <ButDays day={6} arrayDaysN={arrayDaysN} onClick={() => addDayHabit(6)}>S</ButDays>
                        </nav>
                        <span onClick={() => cancelForm()}>Cancelar</span>
                        <button type="submit">Salvar</button>
                    </fieldset>
                </Form>
                {(arrayHabits.length === 0) ? <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3> : ''}

            </SubStringH>

            <BoardHabits del={del} setDel={setDel} arrayHabits={arrayHabits} setArrayHabits={setArrayHabits} />

            <FooterBar />

        </HabitosMain>

    );
}