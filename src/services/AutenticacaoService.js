import React from "react";
// import axios from "../axios";
import axios from "axios";


import Cookies from 'js-cookie';
import {request} from "axios";

const url = "https://localhost:8443/login/auth";
// const url = "https://localhost:8443/login";


class AuthenticationService {

    login(user) {
        console.log(user)
        const config = {
            withCredentials: true,
        };
        return axios.post(url,user,config)
            .then(response => {
                return response;
            })
            .catch(error => {
                console.error(error);
            });
    }

    // logout() {
    //     // Remove o token de autenticação do cookie
    //     Cookies.remove('jwt');
    // }

    // getUser() {
    // Obtém o usuário logado a partir do body da resposta da API
    //     return axios.get('/api/user')
    //         .then(response => response.data);
    // }
}


export default new AuthenticationService();