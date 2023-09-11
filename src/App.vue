<script>

import axios from 'axios';
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import AppLoader from './components/generics/AppLoader.vue';
import AppAlert from './components/generics/AppAlert.vue';
import AppPagination from './components/generics/AppPagination.vue';


export default {
  data() {
    return {
      projects: {
        data: [],
        links: []
      },
      isLoading: false,
      isAlertOpen: false
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppLoader,
    AppAlert,
    AppPagination
  },
  methods: {
    fetchProjects(endpoint='http://127.0.0.1:8000/api/projects/') {
      this.isLoading = true;
      this.isAlertOpen = false;
      axios.get(endpoint).then(res => {
        this.projects.data = res.data.data;
        this.projects.links = res.data.links;
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
    <AppPagination :links="projects.links" @changePage="fetchProjects"/>
    <AppMain :projects="projects.data"/>
    <AppPagination :links="projects.links" @changePage="fetchProjects"/>
  </div>
</template>

<style>

</style>
