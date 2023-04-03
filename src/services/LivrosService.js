import axios from "axios";
import {useNavigate} from "react-router-dom";
const url = "http://editorasenaiapi:8080/editora-livros-api/livro";
// const url = "http://localhost:8080/editora-livros-api/livro";


export class LivrosService {

    // navigate

    // constructor(navigate) {
    //     this.navigate = navigate;
    // }

    async postLivro(livro) {
        return await axios.post(url, livro);
    }

    async getLivros() {
        const config = {
            withCredentials: true,
        };
        return await axios.get(url,config)
            .then(response => {
                return(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    async getStatus() {
        return await axios.get(url + "/status");
    }

    async getLivrosPesquisa(pesquisa) {
        return await axios.get(url + "/" + pesquisa);
    }

    async getLivro(isbn) {
        return await axios.get(url + "/isbn/" + isbn);
    }

    async deleteLivro(isbn) {
        return await axios.delete(url + "/" + isbn);
    }

    async putLivro(isbn , livro) {
        return await axios.put(url + "/" + isbn, livro);
    }

}