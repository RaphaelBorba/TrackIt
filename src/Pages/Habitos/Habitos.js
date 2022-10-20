import FooterBar from "../../Components/Footer";
import Header from "../../Components/Header";
import { SubStringH } from "../Historico/style";
import { ButtonAdd, HabitosMain } from "./style";



export default function Habitos(){

    return(

        <HabitosMain>
            <Header/>
            
            <SubStringH>
                <h1>Meus hábitos</h1>
                <ButtonAdd>+</ButtonAdd>
                <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
            </SubStringH>
            <FooterBar/>
        </HabitosMain>

    );
}