import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../Assets/images/ImgUrl";
import FooterBar from "../../Components/Footer";
import Header from "../../Components/Header";
import { useAuth } from "../../provider/auth";
import BoardToday from "./BoardToday";
import calcPorc from "./calcPorc";
import { MainToday, SubString } from "./style";


export default function TodayPage() {

    const { user, porc, setPorc } = useAuth()

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
                let check =0
                let total=0
                e.data.forEach((a)=>{
                    total++
                    if(a.done){
                        check++
                    }
                    setPorc({total, check})
                })
            })
            .catch((e) => alert(e.response.data.message))
        // eslint-disable-next-line
    }, [onCheck])


    return (

        <MainToday>
            <Header />

            <SubString>
                <h1>{semana[d.getDay()] + ', ' + myDate.slice(0, 5)}</h1>
                <h2 
                style={(porc.check)?{color:'#8FC549'}:{color:'#BABABA'}}
                >{(porc.check)?`${Math.round(calcPorc(porc.total, porc.check))}% dos hábitos concluídos`:'Nenhum hábito concluído ainda'}</h2>
            </SubString>

            <BoardToday setOnCheck={setOnCheck} onCheck={onCheck} todayHabits={todayHabits} />

            <FooterBar />
        </MainToday>
    );
}