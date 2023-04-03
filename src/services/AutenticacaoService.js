import React from "react";
// import axios from "../axios";
import axios from "axios";

import {request} from "axios";

const url = "http://editorasenaiapi:8080/login/auth";
// const url = "http://localhost:8080/login/auth";
// const url = "https://localhost:8443/login";


class AuthenticationService {

    async login(user) {
        console.log(user)
        const config = {
            withCredentials: true,
        };
        return await axios.post(url,user,config)
            .then(response => {
                return response;
            })
            .catch(error => {
                console.error(error);
            });
    }

    // getUser() {
    // Obtém o usuário logado a partir do body da resposta da API
    //     return axios.get('/api/user')
    //         .then(response => response.data);
    // }
}


export default new AuthenticationService();