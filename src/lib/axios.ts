import axios from "axios";

// aqui nos seta qual endereco da api baseURL
export const api = axios.create({
    baseURL: 'http://localhost:3333/transactions', // todas requisicoes disparadas no axios rodam nesse enders
});