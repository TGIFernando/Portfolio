import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:8000/api/contact',
        headers: {
            authorization: token
        }
    })
}

