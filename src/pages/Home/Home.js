import React from 'react'
import {Card} from 'flowbite-react'
import {Paragrafo, Titulo5} from "../../components";
import locale from "./locale.json";

export const Home = () => {
    return (
        <>
            <Card>
                <Titulo5
                    texto={locale.titulo}/>
                {/*<Paragrafo texto="Texte teste"/>*/}
                {/*<Paragrafo texto={locale.frase1}/>*/}
                {/*{*/}
                {/*    [1,2,3].map((i) => <Paragrafo texto={locale[`frase${i}`]}/>)*/}
                {/*}*/}
                {
                    Object.values(locale.paragrafos).map((frase) => <Paragrafo texto={frase}/>)
                }
            </Card>
        </>
    )
}