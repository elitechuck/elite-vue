"use strict";

import {SERVER_API_URL, TOKEN_NAME} from "@/services/ServerConstants";
import axios from 'axios';

export const GlobalService = {

    initializeAxios() {
        axios.defaults.baseURL = SERVER_API_URL;
        axios.interceptors.request.use(
            (config) => {
                let token = localStorage.getItem(TOKEN_NAME);
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

};