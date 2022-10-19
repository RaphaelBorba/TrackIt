import { Form, HomeMain } from "./style";
import { image } from "../../Assets/images/expImg";


export default function Home(){
    
    return(

        <HomeMain>
            <img src={image.logo} alt="LogoImage"></img>
            <Form>
                <input
                    required
                    id="name"
                    name="name"
                    type='text'
                    placeholder="email"
                />
                <input
                    required
                    id="cpf"
                    name="cpf"
                    type='password'
                    placeholder="senha"
                />
                <button type="submit">Entrar</button>
            </Form>

            <a href="/cadastro">Não tem uma conta? Cadastre-se!</a>
        </HomeMain>
    );
}