<script>
import axios from 'axios';

const endpoint = 'http://localhost:8000/api/contact-message';
const emptyForm = {email: '', subject: '', message: ''};

export default {
  name: 'ContactPage',
  data() {
    return {
      form: emptyForm,
      errors: {},
      successMessage: null,
      isLoading: false
    }
  },
  components: {},
  props: {},
  computed: {
    hasErrors(){
      return Object.keys(this.errors).length;
    },
    showAlert(){
      return Boolean(this.hasErrors || this.successMessage);
    },
    alertType(){
      return this.hasErrors ? 'danger' : 'success';
    }
  },
  methods: {
    sendForm(){
      this.isLoading = true;
      this.errors = {};
      this.successMessage = null;


      axios.post(endpoint, this.form)
      .then(res => {
        this.form = emptyForm;
        this.successMessage = 'Email successfully sent!'
      })
      .catch(err => {
        console.error(err);
        this.errors = {
          network: 'A network error occurred...'
        };
      })
      .then(() => {
        this.isLoading = false;
      })
    }
  }
}
</script>

<template>
  <AppLoader v-if="isLoading"/>
  <div v-else>
    <h1 class="py-3">Contact Us</h1>

    <AppAlert :type="alertType" :isOpen="showAlert">
      <div v-if="successMessage"> {{ successMessage }} </div>
      <div v-if="hasErrors">
        <ul>
          <li v-for="(error, field) in errors" :key="field"> {{ error }} </li>
        </ul>
    </div>
    </AppAlert>

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
  </div>
</template>

<style lang="scss" scoped>
form{
  max-width: 1280px;
  min-width: 720px;
  text-align: left;
}
</style>
