import SockJS from "sockjs-client";

export const Socket = new SockJS('http://localhost:8080/chat', { withCredentials: true });