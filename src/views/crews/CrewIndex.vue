<template>
  <div>
    <div class="card mb-2">
      <div class="card-body">
        <router-link :to="{name: 'CrewCreate'}" class="float-right">
          <button type="button" class="btn btn-primary">Create Crew</button>
        </router-link>
      </div>
    </div>
    <div id="crews" v-if="crews" class="card">
      <div class="card-body">
        <table class="table table-hover">
          <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="crew in crews" :key="crew.id">
            <th scope="row">{{ crew.id }}</th>
            <td>{{ crew.first_name }}</td>
            <td>{{ crew.middle_name }}</td>
            <td>{{ crew.last_name }}</td>
            <td>
              <router-link :to="{name: 'CrewView', params: {id:crew.id}}">View</router-link> |
              <a href="#" @click.prevent="crewDelete(crew.id)">Delete</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
import {CrewService} from "@/services/CrewService";

export default {
  name: 'CrewIndex',
  
  methods: {
    ...mapMutations(['setCrews']),
    async crewDelete(id) {
      if (confirm("Are you sure you want to delete this item?")) {
        const response = await CrewService.crewDelete(id);
        if (response) {
          alert(response)
          const crewIndex = this.crews.findIndex((crew) => crew.id === id)
  
          if (crewIndex > -1) {
            this.crews.splice(crewIndex, 1);
          }
        }
      }
    }
  },
  
  computed: {
    ...mapGetters(['crews']),
  },
  
  async created() {
    return this.setCrews(await CrewService.index())
  }
  
  
}
</script>

<style scoped>

</style>