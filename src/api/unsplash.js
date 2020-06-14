import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xoqZZGoYsh_Am8syteH_Uj1LCCeVbKnpHt-ous1a6vY'
    }
});