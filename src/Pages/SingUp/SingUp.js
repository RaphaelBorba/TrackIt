import { MainSingUp, Form } from "./style";
import { image, url } from "../../Assets/images/ImgUrl";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadGif from "../../Components/LoadGif";



export default function SingUp() {

    const navigate = useNavigate()
    const [buttom, setButtom]= useState('Cadastrar')
    const [form, setForm] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    })
    const [isDisable, setIsDisable] = useState(false)

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function registerUser(e) {
        e.preventDefault()
        setIsDisable(true)
        setButtom(<LoadGif/>)
        

        axios.post(`${url}auth/sign-up`, form)
            .then((e) => {
                console.log(e.data)
                navigate('/')
            })
            .catch((e) => {
                alert(e.response.data.message)
                setIsDisable(false)
                setButtom('Cadastrar')
            })
    }

    return (
        <MainSingUp>
            <img src={image.logo} alt={image.logo} />
            <Form onSubmit={registerUser}>
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
                    <input
                        required
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleForm}
                        type='text'
                        placeholder="nome"
                    />
                    <input
                        required
                        id="image"
                        name="image"
                        value={form.image}
                        onChange={handleForm}
                        type='url'
                        placeholder="foto"
                    />
                    <button type="submit">{buttom}</button>
                </fieldset>
            </Form>
            <a href="/">Já tem uma conta? Faça login!</a>
        </MainSingUp >
    );
}