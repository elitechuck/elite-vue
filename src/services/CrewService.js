import axios from "axios";

export const CrewService = {

    async index() {
        const crews = await axios.get('/crews').then(response => {
            return response.data ?? false;
        }).catch(error => {
            return false;
        });

        if (crews?.success === true) {
            return crews.data;
        }

        return  false;
    },

    async getCrew(id) {
        const crew = await axios.get(`/crews/view/${id}`).then(response => {
            return response.data ?? false;
        }).catch(error => {
            return false;
        });

        if (crew?.success === true) {
            return crew.data;
        }

        return  false;
    },

    async crewUpdate(crew) {
        const crewUpdate = await axios.post(`/crews/edit/${crew.id}`, crew).then(response => {
            return response.data ?? false;
        }).catch(error => {
            return false;
        });

        if (crewUpdate?.success === true) {
            return crewUpdate.data;
        }

        return  false;
    },

    async crewCreate(crew) {
        const crewCreate = await axios.post(`/crews/create/`, crew).then(response => {
            return response.data ?? false;
        }).catch(error => {
            return false;
        });

        if (crewCreate?.success === true) {
            return crewCreate.data;
        }

        return  false;
    },

    async crewDelete(id) {
        const crewDelete = await axios.get(`/crews/delete/${id}`).then(response => {
            return response.data ?? false;
        }).catch(error => {
            return false;
        });

        if (crewDelete?.success === true) {
            return crewDelete.data;
        }

        return  false;
    },

    getFullName(crew) {
        console.log(typeof crew)
        if (typeof crew === Object) {
            return String ([crew.first_name, crew.middle_name, crew.last_name].join(' '));
        }
    }
};