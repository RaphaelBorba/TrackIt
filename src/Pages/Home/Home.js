import { Form, HomeMain } from "./style";
import { image, url } from "../../Assets/images/ImgUrl";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../provider/auth";
import { useNavigate } from "react-router-dom";
import LoadGif from "../../Components/LoadGif";


export default function Home() {

    const navigate = useNavigate()
    const [isDisable, setIsDisable] = useState(false)
    const [form, setForm] = useState({
        email:'',
        password:''
    })
    const {setUser} = useAuth()
    const [buttom, setButtom]= useState('Entrar')

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }


    function login(e){
        e.preventDefault()
        setIsDisable(true)
        setButtom(<LoadGif/>)

        axios.post(`${url}auth/login`, form)
        .then((e)=>{
            setUser(e.data)
            navigate('/hoje')
        })
        .catch((e)=>{
            alert(e.response.data.message)
            setIsDisable(false)
            setButtom('Entrar')
        })
    }

    return (

        <HomeMain>
            <img src={image.logo} alt="LogoImage"></img>
            <Form onSubmit={login}>
                <fieldset disabled={isDisable}>
                    <input
                        required
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleForm}
                        type='text'
                        placeholder="email"
                    />
                    <input
                        required
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleForm}
                        type='password'
                        placeholder="senha"
                    />
                    <button type="submit">{buttom}</button>
                </fieldset>
            </Form>

            <a href="/cadastro">Não tem uma conta? Cadastre-se!</a>
        </HomeMain>
    );
}