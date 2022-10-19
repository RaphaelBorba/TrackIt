import Header from "../../Components/Header";
import { useAuth } from "../../provider/auth";
import { MainToday } from "./style";



export default function TodayPage(){

    const {user} = useAuth()

    console.log(user)
    return(

        <MainToday>
            <Header/>
        </MainToday>
    );
}