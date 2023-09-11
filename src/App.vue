<script>

import axios from 'axios';
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import AppLoader from './components/generics/AppLoader.vue';
import AppAlert from './components/generics/AppAlert.vue';


export default {
  data() {
    return {
      projects: [],
      isLoading: false,
      isAlertOpen: false
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppLoader,
    AppAlert
  },
  methods: {
    fetchProjects(endpoint='http://127.0.0.1:8000/api/projects/') {
      this.isLoading = true;
      this.isAlertOpen = false;
      axios.get(endpoint).then(res => {
        this.projects = res.data;
      }).catch(err => {
        console.log(err);
        this.isAlertOpen = true;
      }).then(res => {
        this.isLoading = false;
      })
    },
    closeAlert() {
      this.isAlertOpen = false;
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader/>
  <AppLoader v-if="isLoading"/>
  <div class="else" v-else>
    <AppAlert :isOpen="isAlertOpen"
    type="danger"
    message="Some errors occured during API request"
    @close="closeAlert"/>
    <AppMain :projects="projects"/>
  </div>
</template>

<style>

</style>
