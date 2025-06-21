

import axios from "axios";

 export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '3e1e5badcce74a673173fbcd3e28462f',
        language: 'pt-BR',
        page: 1
    }
})

export default api