<script>

import AppHeader from './components/header/AppHeader.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    AppHeader
  },
  methods: {
  }
}
</script>

<template>
  <AppHeader/>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>

</style>
