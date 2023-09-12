<script>
import axios from 'axios';

import ProjectCard from '../main/ProjectCard.vue';
import AppLoader from '../generics/AppLoader.vue';

const baseUri = 'http://localhost:8000/api/projects/'

export default {
  name: 'DetailPage',
  data() {
    return {
      project: null,
      isLoading: false
    }
  },
  components: {
    ProjectCard,
    AppLoader
  },
  props: {},
  computed: {},
  methods: {
    fetchProject(){
      this.isLoading = true;
      const endpoint = `${baseUri}${this.$route.params.id}`;
      console.log(endpoint);
      axios.get(endpoint)
      .then(res => {
        console.log(res.data);
        this.project = res.data;
      }).catch(err => {
        console.error(err);
        this.$router.push({name: 'notFoundPage'});
      }).then(() => {
        this.isLoading = false;
      })
    }
  },
  created(){
    this.fetchProject();
  }
}
</script>

<template>
  <AppLoader v-if="isLoading"/>
  <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true"/>
</template>

<style lang="scss" scoped>

</style>
