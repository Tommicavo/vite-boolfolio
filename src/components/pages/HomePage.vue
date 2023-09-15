<script>

import axios from 'axios';
import AppMain from '../main/AppMain.vue';
import AppLoader from '../generics/AppLoader.vue';
import AppAlert from '../generics/AppAlert.vue';
import AppPagination from '../generics/AppPagination.vue';

export default {
  name: 'HomePage',
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
    AppMain,
    AppLoader,
    AppAlert,
    AppPagination
  },
  props: {},
  computed: {},
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
  <div class="homePage">
    <AppLoader v-if="isLoading"/>
    <div v-else>
      <AppAlert :isOpen="isAlertOpen"
      type="danger"
      message="Some errors occured during API request"
      @close="closeAlert"/>
      <header class="d-flex justify-content-between align-items-center py-4">
        <h1>All Projects</h1>
        <router-link class="btn btn-success" :to="{name: 'createPage'}">Add Project</router-link>
      </header>
      <AppPagination :links="projects.links" @changePage="fetchProjects"/>
      <AppMain :projects="projects.data"/>
      <AppPagination :links="projects.links" @changePage="fetchProjects"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
