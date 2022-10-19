import { MainSingUp, Form } from "./style";
import { image } from "../../Assets/images/expImg";



export default function SingUp() {

    return (
        <MainSingUp>
            <img src={image.logo} alt={image.logo} />
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
                    id="name"
                    name="name"
                    type='text'
                    placeholder="senha"
                />
                <input
                    required
                    id="name"
                    name="name"
                    type='text'
                    placeholder="nome"
                />
                <input
                    required
                    id="name"
                    name="name"
                    type='url'
                    placeholder="foto"
                />
                <button type="submit">Cadastrar</button>
            </Form>
            <a href="/">Já tem uma conta? Faça login!</a>
        </MainSingUp>
    );
}