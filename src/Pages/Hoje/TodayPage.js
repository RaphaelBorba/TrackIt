import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../Assets/images/ImgUrl";
import FooterBar from "../../Components/Footer";
import Header from "../../Components/Header";
import { useAuth } from "../../provider/auth";
import BoardToday from "./BoardToday";
import { MainToday, SubString } from "./style";



export default function TodayPage() {

    const { user, porc } = useAuth()

    const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const d = new Date();
    const myDate = new Date(Date.now()).toLocaleString().split(',')[0];
    
    const [todayHabits, setTodayHabits] = useState([])
    const [onCheck, setOnCheck] = useState(true)

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    useEffect(() => {

        axios.get(`${url}habits/today`, config)
            .then((e) => {
                setTodayHabits(e.data)
            })
            .catch((e) => e.response.data)
    }, [onCheck])


    return (

        <MainToday>
            <Header />

            <SubString>
                <h1>{semana[d.getDay()] + ', ' + myDate.slice(0, 5)}</h1>
                <h2>{(porc)?'67% dos hábitos concluídos':'Nenhum hábito concluído ainda'}</h2>
            </SubString>

            <BoardToday setOnCheck={setOnCheck} onCheck={onCheck} todayHabits={todayHabits} />

            <FooterBar />
        </MainToday>
    );
}