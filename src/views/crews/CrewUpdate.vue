<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div v-if="crew" class="card">
        <div class="card-header">
          <div class="float-right">
            <router-link :to="this.crewViewUrl">
              <button type="button" class="btn btn-light">Back</button>
            </router-link>
          </div>

          <div class="mt-2">
            Editing Crew
          </div>
        </div>
        
        <div class="card-body">
          <form method="post" @submit.prevent="crewUpdate" @keydown="errors.clear($event.target.name)">
            <div class="mb-3">
              <label for="input_first_name" class="form-label">First Name</label>
              <input type="text" name="first_name" v-model="crew.first_name" class="form-control" id="input_first_name">
    
              <span class="text-danger" v-if="errors.has('first_name')" v-text="errors.get('first_name')"></span>
            </div>
            <div class="mb-3">
              <label for="input_last_name" class="form-label">Last Name</label>
              <input type="text" name="last_name" v-model="crew.last_name" class="form-control" id="input_last_name">
    
              <span class="text-danger" v-text="errors.get('last_name')"></span>
            </div>
            <div class="mb-3">
              <label for="input_middle_name" class="form-label">Middle Name</label>
              <input type="text" name="middle_name" v-model="crew.middle_name" class="form-control" id="input_middle_name">
    
              <span class="text-danger" v-text="errors.get('middle_name')"></span>
            </div>
            <div class="mb-3">
              <label for="input_email" class="form-label">Email Address</label>
              <input type="email" name="email" v-model="crew.email" class="form-control" id="input_email">
    
              <span class="text-danger" v-text="errors.get('email')"></span>
            </div>
            <div class="mb-3">
              <label for="input_address" class="form-label">Address</label>
              <textarea name="address" class="form-control" id="input_address" v-model="crew.address" rows="3"></textarea>
    
              <span class="text-danger" v-text="errors.get('address')"></span>
            </div>
            <div class="mb-3">
              <label for="input_education" class="form-label">Education</label>
              <textarea name="education" class="form-control" id="input_education" v-model="crew.education" rows="3"></textarea>
    
              <span class="text-danger" v-text="errors.get('education')"></span>
            </div>
            <div class="mb-3">
              <label for="input_contact" class="form-label">Contact</label>
              <input type="text" name="contact" v-model="crew.contact" class="form-control" id="input_contact">
    
              <span class="text-danger" v-text="errors.get('contact')"></span>
            </div>
            <button type="submit" class="btn btn-primary mr-1">Update</button>
            
            <router-link :to="crewViewUrl">
              <button type="button" class="btn btn-light">Back</button>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
import {CrewService} from "@/services/CrewService";
import {AuthService} from "@/services/AuthService";
import Errors from "@/core/Errors";
import axios from "axios";

export default {
  name: "CrewUpdate",
  
  data() {
    return {
      errors: new Errors()
    }
  },
  
  async created() {
    await this.getCrew(this.$route.params.id);
  },
  
  methods: {
    ...mapActions(['getCrew']),
    
    async crewUpdate() {
      await axios.post(`/crews/edit/${this.crew.id}`, this.crew)
        .then(response => {
          // alert(response);
          console.log(response.data)
  
          this.$router.push(this.crewViewUrl)
        })
        .catch(error => this.errors.record(error.response.data.errors))
      
      // const response = await CrewService.crewUpdate(this.crew);
      //
      // if (response) {
      //   alert(response)
      //   this.$router.push(this.crewViewUrl)
      // }
    },
  },
  
  computed: {
    ...mapGetters(['crew', 'crewViewUrl'])
  }
}
</script>

<style scoped>

</style>