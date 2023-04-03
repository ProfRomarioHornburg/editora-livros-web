import { useState } from "react";
import { pessoaObject } from "./pessoa.json";

export const usePessoa = () => {
    const [pessoa, setPessoa] = useState(pessoaObject);

    const atualizarPessoa = (event) => {
        const { name, value } = event.currentTarget;
        setPessoa({ ...pessoa, [name]: value });
    };

    return [pessoa, atualizarPessoa];
};