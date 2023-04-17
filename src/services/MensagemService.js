import {Axios} from "./Axios";
// import {useNavigate} from "react-router-dom";

// const url = "http://editorasenaiapi:8080/editora-livros-api/livro";
const url = "/mensagem";


// export const postMensagem = async (mensagem) => {
//     return await Axios.post(url, mensagem)
//         .then(response => {
//             return (response);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }
//
// export const getMensagensLivro = async (isbn) => {
//     return await Axios.get(url + "/" + isbn)
//         .then(response => {
//             return (response);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

export const apiMensagens = {
    getMensagensLivro: async (isbn) => {
        try {
            const response = await Axios.get(url + "/" + isbn);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    postMensagem: async (mensagem) => {
        try {
            const response = await Axios.post(url, mensagem);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};