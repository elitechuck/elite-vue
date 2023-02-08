import axios from "axios";
import {TOKEN_NAME, USER} from "@/services/ServerConstants";
import router from "@/router";


export const AuthService = {

    deleteHeader(common = 'Authorization') {
        delete axios.defaults.headers.common[common];
    },

    clearStorage() {
        localStorage.clear(TOKEN_NAME);
        localStorage.clear(USER);
    },

    async login(credentials) {
        const auth = await axios.post('/login', credentials).then(response => {

            if (typeof response.data.token !== undefined) {
                localStorage.setItem(TOKEN_NAME, response.data.token);
                localStorage.setItem(USER, JSON.stringify(response.data.user));
            }

            router.push({name: 'base'});

            return response.data ?? false;
        }).catch(error => {

            return false;
        });

        return auth;
    },

    async logout() {
        if (!localStorage.getItem(TOKEN_NAME)) {
            return false;
        }

        await axios.get('/logout')
            .then(response => {
                this.deleteHeader();
                this.clearStorage();
                router.push({name: 'login'});
                return response.data ?? false;
            });
    },

    isLogin() {
        return (localStorage.getItem(TOKEN_NAME) !== null && localStorage.getItem(USER) !== null);
    },

    getUser() {
        return JSON.parse(localStorage.getItem(USER));
    },
};