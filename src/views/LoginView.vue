<template>
  <div>
    <nav-bar></nav-bar>
    <div id="login">
      <main class="py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header">Login</div>
              
                <div class="card-body">
                  <form @submit.prevent="authenticate" method="post">
                    <div class="row mb-3">
                      <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>
                    
                      <div class="col-md-6">
                        <input id="email" type="email" class="form-control " v-model="email" required="" autocomplete="email" autofocus="">
                      </div>
                    </div>
                  
                    <div class="row mb-3">
                      <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>
                    
                      <div class="col-md-6">
                        <input id="password" type="password" class="form-control" v-model="password" required="" autocomplete="current-password">
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
  </div>
</template>

<script>

import {AuthService} from "@/services/AuthService";
import {mapMutations} from "vuex";
import {mapActions} from "vuex/dist/vuex.esm.browser";
import NavBar from "@/components/NavBar";


export default {
  name: 'LoginView',
  components: {
    NavBar
  },
  data() {
    return {
      email: 'chuck@elite.test',
      password: 'Admin123!$'
    }
  },
  methods: {
    ...mapMutations(['setIsLogin', 'setUser']),
    async authenticate() {
      const response = await AuthService.login({
        email: this.email,
        password: this.password
      });
  
      if (response) {
        this.setUser(response.user);
        this.setIsLogin(response.token);
      }
    },
  },
  computed: {}
}
</script>