import axios, { CanceledError } from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b4e76b0f7c754489b6309e5e17649063'
    }
 
})


