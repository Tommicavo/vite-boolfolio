<script>

export default {
  name: 'NotFound',
  data() {
    return {}
  },
  components: {},
  props: {},
  computed: {},
  methods: {}
}
</script>

<template>
    <div class="notFound d-flex justify-content-center align-items-center">
        <h2>404 | Not Found</h2>
        <button type="button" @click="$router.back()">Back</button>
    </div>
</template>

<style lang="scss" scoped>

</style>
