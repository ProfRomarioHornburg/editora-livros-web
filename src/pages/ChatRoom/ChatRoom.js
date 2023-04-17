import React, {useEffect, useState} from 'react'
import {Button, Card, TextInput} from "flowbite-react";
import {Paragrafo, Titulo} from "../../components";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
// import {over} from 'stompjs';
// import SockJS from 'sockjs-client';
import {apiLivros, apiMensagens} from '../../services';
import {useParams} from "react-router-dom";
import mensagemJson from "./mensagem.json"
import Cookies from 'js-cookie';

// var stompClient = null;
export const ChatRoom = () => {
    const isbn = useParams().isbn
    const [livro, setLivro] = useState({});
    const [mensagens, setMensagens] = useState([]);
    const [mensagem, setMensagem] = useState({});

    // useEffect(() => {
    //
    //     async function carregar() {
    //         const response = await apiLivros.getLivro(isbn)
    //             .then(async (response) => {
    //                 setLivro(response);
    //                 return response;
    //             }).catch((error) => {
    //                 console.log(error);
    //             })
    //         const userCookie = Cookies.get('user');
    //         console.log(userCookie)
    //         const userDecode = decodeURIComponent(userCookie);
    //         console.log(userDecode)
    //         const user = JSON.parse(userDecode);
    //         console.log(user);
    //         const {pessoa} = user;
    //         console.log(pessoa);
    //         setMensagem({
    //             livro: response.isbn,
    //             remetente: pessoa.cpf,
    //             mensagem: null
    //         })
    //     }
    //
    //     carregar().then(r => console.log(r));
    // }, [])

    useEffect(() => {
        async function carregar() {
            await apiMensagens.getMensagensLivro(isbn).then((response) => {
                console.log(response);
                setMensagens(response);
            }).catch((error) => {
                console.log(error);
            })
            const userCookie = Cookies.get('user');
            const userDecode = decodeURIComponent(userCookie);
            const user = JSON.parse(userDecode);
            const {pessoa} = user;
            const {cpf} = pessoa;
            setMensagem({
                livro: isbn,
                remetente: cpf,
                mensagem: null
            })
        }

        carregar().then(r => console.log(r));
    }, []);

    //
    // const connect = () => {
    //     let Sock = new SockJS('http://localhost:8080/chat');
    //     stompClient = over(Sock);
    //     stompClient.connect({}, onConnected, onError);
    // }
    //
    // const onConnected = () => {
    // const user = JSON.parse(Cookies.get('user'));
    // setMensagem({...mensagem,"connected": true});
    // stompClient.subscribe('/livro/' + livro.isbn, mensagemLivro);
    // stompClient.subscribe('/pessoa/'+user.cpf, mensagemUsuario);
    // userJoin(user);
    // }
    //
    // const userJoin=(user)=>{
    //     var chatMessage = {
    //         senderName: user,
    //         status:"JOIN"
    //     };
    //     stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    // }
    //
    // const mensagemLivro = () => {
    // var payloadData = JSON.parse(payload.body);
    // switch(payloadData.status){
    //     case "JOIN":
    //         if(!privateChats.get(payloadData.senderName)){
    //             privateChats.set(payloadData.senderName,[]);
    //             setPrivateChats(new Map(privateChats));
    //         }
    //         break;
    //     case "MESSAGE":
    //         publicChats.push(payloadData);
    //         setPublicChats([...publicChats]);
    //         break;
    // }
    // console.log("mensagemLivro")
    // }
    //
    // const mensagemUsuario = (payload)=>{
    //     console.log(payload);
    //     var payloadData = JSON.parse(payload.body);
    //     if(privateChats.get(payloadData.senderName)){
    //         privateChats.get(payloadData.senderName).push(payloadData);
    //         setPrivateChats(new Map(privateChats));
    //     }else{
    //         let list =[];
    //         list.push(payloadData);
    //         privateChats.set(payloadData.senderName,list);
    //         setPrivateChats(new Map(privateChats));
    //     }
    // }
    //
    // const onError = (error) => {
    //     console.log(error);
    // }
    //
    const atualizaMensagem = (event) => {
        event.preventDefault();
        const {value} = event.target;
        setMensagem({...mensagem, "mensagem": value});
    }
    // const sendValue=()=>{
    //     if (stompClient) {
    //         var chatMessage = {
    //             senderName: mensagem.username,
    //             message: mensagem.message,
    //             status:"MESSAGE"
    //         };
    //         console.log(chatMessage);
    //         stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    //         setMensagem({...mensagem,"message": ""});
    //     }
    // }
    //
    // const sendPrivateValue=()=>{
    //     if (stompClient) {
    //         var chatMessage = {
    //             senderName: mensagem.username,
    //             receiverName:tab,
    //             message: mensagem.message,
    //             status:"MESSAGE"
    //         };
    //
    //         if(mensagem.username !== tab){
    //             privateChats.get(tab).push(chatMessage);
    //             setPrivateChats(new Map(privateChats));
    //         }
    //         stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
    //         setMensagem({...mensagem,"message": ""});
    //     }
    // }
    //
    // const handleUsername=(event)=>{
    //     const {value}=event.target;
    //     setMensagem({...mensagem,"username": value});
    // }
    //
    // const registerUser=()=>{
    //     connect();
    // }
    const submit = async (event) => {
        event.preventDefault();
        console.log(mensagem);
        const response = await apiMensagens.postMensagem(mensagem)
            .then((response) => {
                return response;
            }).catch((error) => {
                console.log(error);
            })
        const mensagensNova = [...mensagens, response];
        setMensagens(mensagensNova)
    }

    return (
        <>
            <Card>
                {
                    Object.values(mensagens).map((mensagem) => (
                        console.log(mensagem),
                        <Card>
                            <Titulo texto={mensagem.remetente.nome}/>
                            <Paragrafo texto={mensagem.mensagem}/>
                        </Card>
                    ))
                }
                <form onSubmit={submit}>
                    <TextInput
                        id="mensagem"
                        type="text"
                        placeholder="Digite a sua mensagem aqui..."
                        required={true}
                        onChange={atualizaMensagem}
                    />
                    <Button type="submit">
                        <ForwardToInboxIcon className='h-4 w-auto pr-2'/>
                        Enviar mensagem
                    </Button>
                </form>
            </Card>
        </>
    )
}