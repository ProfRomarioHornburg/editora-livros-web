import React, {useState, createContext, useEffect} from 'react';
import * as Stomp from 'stompjs';
import SockJS from "sockjs-client";
import {apiLivros} from "./LivrosService";

export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({children}) => {

    const [stompClient, setStompClient] = useState(null);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const connect = () => {
            const socket = new SockJS('http://localhost:8080/chat');
            const stomp = Stomp.over(socket);
            stomp.connect({}, async () => {
                setStompClient(stomp);
                // await subscribeLivros();
            }, (error) => {
                console.log('Erro ao conectar com WebSocket:', error);
                setTimeout(() => {
                    console.log('Tentando reconectar...');
                    connect();
                }, 5000);
            });
        };
        connect();
    }, []);

    const subscribeLivros = async (destino,handleMessage) => {
        // await apiLivros.getLivros((response) => {
        //     console.log('Livros recebidos:', response);
        //     Object.values(response).map(livro => {
        //         const livroId = livro.isbn;
        //         const destino = `/livro/${livroId}/chat`; // PODERIA SER PARA NOTIFICAÇÕES
        //         stompClient.subscribe(destino, (mensagem) => {
        //             console.log('Mensagem recebida de', destino, mensagem);
        //         });
        //         console.log('Inscrito em', destino);
        //     });
        // });
        stompClient.subscribe(destino,handleMessage);
    }

    const disconnectWebSocket = () => {
        if (stompClient) {
            stompClient.disconnect();
            console.log('Conexão com o WebSocket fechada');
        }
    }

    const sendMessage = (destino, mensagem) => {
        if (stompClient) {
            console.log('Enviando mensagem para', destino, ':', mensagem)
            stompClient.send(destino, {}, JSON.stringify(mensagem));
            console.log(`Mensagem enviada para ${destino}:`, mensagem);
        } else {
            console.log('Erro ao enviar mensagem: conexão não estabelecida.');
        }
    };

    return (
        <WebSocketContext.Provider value={{stompClient, disconnectWebSocket, sendMessage, subscribeLivros}}>
            {children}
        </WebSocketContext.Provider>
    )
};
