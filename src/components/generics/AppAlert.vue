<script>

export default {
  name: 'AppAlert',
  data() {
    return {}
  },
  components: {},
  props: {
    isOpen: Boolean,
    type: String,
    message: String
  },
  computed: {},
  methods: {},
  emits: ['close']
}
</script>

<template>
    <div v-if="isOpen" :class="`alert-${type || info}`" class="alert alert-dismissible fade show my-3" role="alert">
        <div class="text-center py-2"><strong>Warning!</strong></div>
        <span> {{ message }} </span> 
        <button type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template>

<style lang="scss" scoped>

</style>
