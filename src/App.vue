<script>

import axios from 'axios';
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';

export default {
  data() {
    return {
      projects: []
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    fetchProjects(endpoint='http://127.0.0.1:8000/api/projects/') {
      axios.get(endpoint).then(res => {
        this.projects = res.data;
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader/>
  <AppMain :projects="projects"/>
</template>

<style>

</style>
