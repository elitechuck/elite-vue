<template>
    <div id="login">
        <main class="py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">Login</div>

                            <div class="card-body">
                                <form @submit.prevent="AuthLogin" method="post">
                                    <div class="row mb-3">
                                        <label for="email" class="col-md-4 col-form-label text-md-end">Email
                                            Address</label>

                                        <div class="col-md-6">
                                            <input id="email" type="email" class="form-control " v-model="email"
                                                   required="" autocomplete="email" autofocus="">

                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="password"
                                               class="col-md-4 col-form-label text-md-end">Password</label>

                                        <div class="col-md-6">
                                            <input id="password" type="password" class="form-control "
                                                   v-model="password" required="" autocomplete="current-password">

                                        </div>
                                    </div>

                                    <div class="row mb-0">
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-primary">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>

import {TOKEN_NAME, USER} from "@/services/ServerConstants";
import axios from "axios";

export default {
    name: 'LoginView',
    data() {
        return {
            email: 'chuck@elite.test',
            password: 'Admin123!$'
        }
    },
    methods: {
        async AuthLogin() {
            const auth = await axios.post('/login', {
                email: this.email,
                password: this.password
            }).then(response => {
                localStorage.setItem(TOKEN_NAME, response?.data?.token)
                localStorage.setItem(USER, JSON.stringify(response?.data?.user))
                return response.data ?? false
            }).catch(error => {
                return false
            });

            if (auth) {
                this.$router.push({name: 'home'});
            }

        },
    },
    computed: {}
}
</script>