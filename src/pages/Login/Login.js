import React, {useState} from 'react'
import {Button, Card, Checkbox, Label, TextInput} from 'flowbite-react'
import AutenticacaoService from "../../services/AutenticacaoService";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Login = () => {

    const [user, setUser] = useState({
        email: '',
        senha: ''
    });

    const atualizarUsuario = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
        console.log(user);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            const response = AutenticacaoService.login(user);
            console.log(response);
            // if(token) {
            //     return <Navigate to={"/livros"}/>
            // }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Card className="max-w-lg min-w-md mx-auto">
                <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                    <div>
                        <Label
                            htmlFor="email"
                            value="E-mail"
                        />
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="usuario@dominio.com"
                            name='email'
                            value={user.email}
                            required={true}
                            onChange={atualizarUsuario}
                        />
                    </div>
                    <div>
                        <Label
                            htmlFor="senha"
                            value="Senha"
                        />
                        <TextInput
                            id="senha"
                            type="password"
                            name='senha'
                            value={user.senha}
                            required={true}
                            onChange={atualizarUsuario}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember"/>
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button
                        type="submit">
                        Login
                    </Button>
                    <div className="grid gap-2 grid-cols-3">
                        <Button
                            pill={true}
                            outline={true}
                            color="failure"
                            href={"https://localhost:8443/oauth2/authorization/google"}>
                            <GoogleIcon fontSize={"large"}/>
                        </Button>
                        <Button
                            pill={true}
                            outline={true}
                            href={"https://localhost:8443/oauth2/authorization/google"}>
                            <FacebookIcon fontSize={"large"}/>
                        </Button>
                        <Button
                            pill={true}
                            outline={true}
                            color="dark"
                            href={"https://localhost:8443/oauth2/authorization/google"}>
                            <GitHubIcon fontSize={"large"}/>
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    )
}