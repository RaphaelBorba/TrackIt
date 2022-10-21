import FooterBar from "../../Components/Footer";
import Header from "../../Components/Header";
import BoardToday from "./BoardToday";
import { MainToday, SubString } from "./style";



export default function TodayPage(){

    const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const d = new Date();
    const myDate = new Date(Date.now()).toLocaleString().split(',')[0];

    return(

        <MainToday>
            <Header />

                <SubString>
                    <h1>{semana[d.getDay()] +', '+myDate.slice(0,5)}</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </SubString>

                <BoardToday/>

            <FooterBar/>
        </MainToday>
    );
}