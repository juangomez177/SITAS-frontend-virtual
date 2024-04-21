import axios from 'axios';

export const fetchAllFlights = (size : number, page: number) => {
    return axios.get(`http://localhost:8080/api/v1/vuelos?size=${size}&page=${page}`)
}