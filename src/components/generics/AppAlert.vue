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
    dismissable: Boolean
  },
  computed: {},
  methods: {},
  emits: ['close']
}
</script>

<template>
    <div v-if="isOpen" :class="[`alert-${type || 'info'}`, {'alert-dismissible' : dismissable}]" class="alert fade show my-3" role="alert">
        <div class="text-center py-2"><strong>Warning!</strong></div>
        <slot></slot>
        <button v-if="dismissable" type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template>

<style lang="scss" scoped>

</style>
