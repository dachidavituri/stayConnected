import axios, { CreateAxiosDefaults } from "axios";

const axiosConfig: CreateAxiosDefaults = {
    baseURL: ''
}
export const httpClient = axios.create(axiosConfig)