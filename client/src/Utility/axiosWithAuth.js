import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://tgif-portfolio.herokuapp.com/api/contact',
        headers: {
            authorization: token
        }
    })
}

