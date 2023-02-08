"use strict";

import {SERVER_API_URL, TOKEN_NAME, USER} from "@/services/ServerConstants";
import axios from 'axios';
import router from "@/router";
import {AuthService} from "@/services/AuthService";

export const GlobalService = {

    initializeAxios() {
        axios.defaults.baseURL = SERVER_API_URL;

        /**
         * Add authorization in every request
         */
        axios.interceptors.request.use(config => {
                let token = localStorage.getItem(TOKEN_NAME);

                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }

                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        /**
         * Redirect to Login Page if request is not authorize
         */
        axios.interceptors.response.use(undefined, error => {
            if (error.response.status === 401) {
                router.push({name: 'login'});
            }

            return Promise.reject(error);
        });
    },

};