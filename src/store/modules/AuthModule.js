import {AuthService} from "@/services/AuthService";

const state = {
    isLogin: null,
    user: null,
}

const actions = {
    authLogout({commit}) {
        AuthService.logout();

        commit('setIsLogin', false);
        commit('setUser', null);
    },
}

const mutations = {
    setIsLogin: (state, confirmed) => {
        state.isLogin = Boolean(confirmed)
    },
    setUser: (state, user) => {
        state.user = user
    },
}

const getters = {
    isLogin: (state) => {
        return state.isLogin ?? AuthService.isLogin()
    },
    user: (state) => {
        return state.user ?? AuthService.getUser()
    },
}

export default {state, actions, mutations, getters}