import {CrewService} from "@/services/CrewService";

const state = {
    crews: null,
    crew: null,
    crewViewUrl: null,
}

const actions = {
    getCrew: async ({commit,state}, id) => {
        commit('setCrew', await CrewService.getCrew(id))
    },
}

const mutations = {
    setCrews: (state, crews) => {
        state.crews = crews
    },
    setCrew: (state, crew) => {
        state.crew = crew
        state.crewViewUrl = {name: 'CrewView', params: {id: crew.id}}
    },
}

const getters = {
    crews: (state) => {
        return state.crews
    },
    crew: (state) => {
        return state.crew
    },
    crewViewUrl: (state) => {
        return state.crewViewUrl
    },
    // crewFullName: (state) => {
    //     return [state.crew.first_name, state.crew.middle_name, state.crew.last_name].join(' ')
    // },
}

export default {state, actions, mutations, getters}