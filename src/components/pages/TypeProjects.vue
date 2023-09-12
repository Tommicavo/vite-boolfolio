<script>

import axios from 'axios';

import AppMain from '../main/AppMain.vue';
import AppLoader from '../generics/AppLoader.vue';

const baseUri = 'http://localhost:8000/api/types/';

export default {
  name: 'TypeProjects',
  data() {
    return {
        isLoading: false,
        type: null,
        projects: []
    }
  },
  components: {
    AppMain,
    AppLoader
  },
  props: {},
  computed: {},
  methods: {
    fetchProjects(){
        this.isLoading = true;
        const endpoint = `${baseUri}${this.$route.params.id}/projects`;
        axios.get(endpoint)
        .then(res => {
            this.type = res.data.type;
            this.projects = res.data.projects;
        }).catch(err => {
            console.error(err);
            this.$router.push({name: 'homePage'});
        }).then(() => {
            this.isLoading = false;
        });
    }
  },
  created(){
    this.fetchProjects();
  }
}
</script>

<template>
  <AppLoader v-if="isLoading"/>
  <div v-if="!isLoading">
    <h1 class="py-3">All {{ type.label }} projects here</h1>
    <AppMain v-if="!isLoading && projects.length" :projects="projects"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
