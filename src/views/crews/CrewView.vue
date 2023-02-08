<template>
  <div class="row">
    <div class="col-md-12">
      <div v-if="crew" class="card">
        <div class="mb-4 card-body">
          <div class="float-right">
  
            <router-link :to="{name:'CrewUpdate'}" class="mr-1">
              <button type="button" class="btn btn-primary">Update</button>
            </router-link>
            <router-link :to="{name:'crews'}">
              <button type="button" class="btn btn-light">Back</button>
            </router-link>
          </div>
          
          <h2>
            {{ [crew.first_name, crew.middle_name, crew.last_name].join(' ') }}
          </h2>
          <h6>
            {{ crew.email }}
          </h6>
  
  
          <article>
            <strong>Address: </strong>
            <p>{{ crew.address }}</p>
            <strong>Education: </strong>
            <p>{{ crew.education }}</p>
            <strong>Contact Details: </strong>
            <p>{{ crew.contact }}</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
import {CrewService} from "@/services/CrewService";

export default {
  name: "CrewView",

  async created() {
    await this.getCrew(this.$route.params.id);
  },
  
  methods: {
    ...mapActions(['getCrew'])
  },
  
  computed: {
    ...mapGetters(['crew'])
  }
//  segment/:id = this.$route.params.id
}
</script>

<style scoped>

</style>