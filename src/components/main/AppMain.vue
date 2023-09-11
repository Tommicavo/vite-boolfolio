<script>

import ProjectCard from './ProjectCard.vue';

export default {
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
            <div class="row">
                <div class="col" v-for="project in projects">
                    <ProjectCard :project="project"/>
                </div>
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
