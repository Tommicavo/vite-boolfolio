<script>
import axios from 'axios';

const endpoint = 'http://localhost:8000/api/contact-message';
const emptyForm = {email: '', subject: '', message: ''};

export default {
  name: 'ContactPage',
  data() {
    return {
      form: emptyForm
    }
  },
  components: {},
  props: {},
  computed: {},
  methods: {
    sendForm(){
      axios.post(endpoint, this.form)
      .then(res => {
        this.form = emptyForm;
      })
      .catch(err => {
        console.error(err);
      })
      .then(() => {

      })
    }
  }
}
</script>

<template>
  <h1 class="py-3">Contact Us</h1>

  <form @submit.prevent="sendForm">
    <!-- Email -->
    <div class="mb-3">
      <label for="email" class="form-label">
        <span>Your Email address</span>
        <span><sup class="text-danger">*</sup></span>
      </label>
      <input type="email" class="form-control" id="email" placeholder="your-email@mail.com" v-model.trim="form.email">
      <small class="form-text text-muted">Your email. We will contact you at this email.</small>
    </div>

    <!-- Subject -->
    <div class="mb-3">
      <label for="subject" class="form-label">
        <span>Email subject</span>
        <span><sup class="text-danger">*</sup></span>
      </label>
      <input type="text" class="form-control" id="subject" placeholder="Subject" v-model.trim="form.subject">
    </div>

    <!-- Message -->
    <div class="mb-3">
      <label for="message" class="form-label">
        <span>Write your message</span>
        <span><sup class="text-danger">*</sup></span>
      </label>
      <textarea class="form-control" id="message" rows="3" v-model.trim="form.message"></textarea>
    </div>

    <div class="mb-3">
      <button type="submit" class="btn btn-primary">Send</button>
    </div>

  </form>
</template>

<style lang="scss" scoped>
form{
  max-width: 1280px;
  min-width: 720px;
  text-align: left;
}
</style>
