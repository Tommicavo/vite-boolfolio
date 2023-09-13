<script>

export default {
  name: 'ContactPage',
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
  <h1 class="py-3">Contact Us</h1>

  <form>
    <!-- Email -->
    <div class="mb-3">
      <label for="email" class="form-label">
        <span>Your Email address</span>
        <span><sup class="text-danger">*</sup></span>
      </label>
      <input type="email" class="form-control" id="email" placeholder="your-email@mail.com">
    </div>

    <!-- Object -->
    <div class="mb-3">
      <label for="object" class="form-label">
        <span>Email object</span>
        <span><sup class="text-danger">*</sup></span>
      </label>
      <input type="text" class="form-control" id="object" placeholder="Subject">
    </div>

    <!-- Message -->
    <div class="mb-3">
      <label for="message" class="form-label">
        <span>Write your message</span>
        <span><sup class="text-danger">*</sup></span>
      </label>
      <textarea class="form-control" id="message" rows="3"></textarea>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form>*{
  text-align: left;
}
</style>
