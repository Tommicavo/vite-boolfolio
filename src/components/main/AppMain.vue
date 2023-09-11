<script>

import ProjectCard from './ProjectCard.vue';

export default {
  name: 'AppMain',
  data() {
    return {}
  },
  components: {
    ProjectCard
  },
  props: {
    projects: Array
  },
  computed: {},
  methods: {}
}
</script>

<template>
  <main>
    <div class="container my-3">
        <h1>All Projects</h1>
        <div class="row" v-if="projects.length">
            <div class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project"/>
            </div>
        </div>
        <div class="emptyProjects" v-else>
          <h3>No projects here...</h3>
        </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.col{
    margin: 1rem 0;
    flex: 0 0 100%;
}
</style>
