import axios from "axios";
import {useNavigate} from "react-router-dom";
const url = "https://localhost:8443/editora-livros-api/livro";

export class LivrosService {

    // navigate

    // constructor(navigate) {
    //     this.navigate = navigate;
    // }

    postLivro(livro) {
        return axios.post(url, livro);
    }

    getLivros() {
        const config = {
            withCredentials: true,
        };
        return axios.get(url,config)
            .then(response => {
                return(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    getStatus() {
        return axios.get(url + "/status");
    }

    getLivrosPesquisa(pesquisa) {
        return axios.get(url + "/" + pesquisa);
    }

    getLivro(isbn) {
        return axios.get(url + "/isbn/" + isbn);
    }

    deleteLivro(isbn) {
        return axios.delete(url + "/" + isbn);
    }

    putLivro(isbn , livro) {
        return axios.put(url + "/" + isbn, livro);
    }

}