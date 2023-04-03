import axios from "axios";

const url = "http://editorasenaiapi:8080/editora-livros-api/pessoa";
// const url = "http://localhost:8080/editora-livros-api/pessoa";

class PessoasService {

    postAutor(pessoa) {
        return axios.post(url, pessoa);
    }

    postRevisor(pessoa) {
        return axios.post(url + "/revisor", pessoa);
    }

    getGeneros() {
        return axios.get(url + "/generos");
    }

    getPessoa(cpf) {
        return axios.get(url + "/" + cpf);
    }

    deletePessoa(cpf) {
        return axios.delete(url + "/" + cpf);
    }

    putPessoa(cpf , pessoa) {
        return axios.put(url + "/" + cpf, pessoa);
    }

}

export default PessoasService;