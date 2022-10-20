import FooterBar from "../../Components/Footer";
import Header from "../../Components/Header";
import { HistoricoMain, SubStringH } from "./style";


export default function Historico(){

    return(

        <HistoricoMain>
            <Header/>
            <SubStringH>
                <h1>Histórico</h1>
                <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
            </SubStringH>
            <FooterBar/>
        </HistoricoMain>
    );
}
