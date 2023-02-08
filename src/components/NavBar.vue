<template>
  <nav id="nav-bar" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <template v-if="isLogin">
      <router-link class="navbar-brand" :to="{name:'home'}">Site Name</router-link>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:'home'}">Home</router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:'crews'}">Crews</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-md-auto">
          <li class="nav-item dropdown">
            <button class="btn nav-link dropdown-toggle mr-md-2" data-toggle="dropdown" aria-expanded="false">
              <strong>{{ user.name }}</strong>
            </button>
            <div class="dropdown-menu dropdown-menu-md-right">
<!--              <a class="dropdown-item" href="https://getbootstrap.com/docs/5.1/">5.1.x</a>-->
<!--              <div class="dropdown-divider"></div>-->
              <a v-if="isLogin" class="dropdown-item" href="#" @click.prevent="authLogout">Logout</a>
            </div>
          </li>
        </ul>
        <router-link v-if="!isLogin" class="btn btn-outline-success my-2 my-sm-0" :to="{name: 'login'}">Login
        </router-link>
      </div>
    </template>
  </nav>

</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';

export default {
  name: "NavBar",
  methods: {
    ...mapActions(['authLogout']),
    ...mapMutations(['setIsLogin']),
  },
  
  computed: {
    ...mapGetters(['user', 'isLogin']),
  },
}
</script>

<style scoped>
#nav-bar {
  margin-bottom: 10px;
  padding: 0rem 1rem;
}
li.nav-item a.active {
  background-color: #007bff;
}
</style>